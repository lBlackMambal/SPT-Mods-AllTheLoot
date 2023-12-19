import { DependencyContainer } from "tsyringe";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";

import { IStaticLootDetails } from "@spt-aki/models/eft/common/tables/ILootBase";

import * as fs from "fs";
import * as path from "path";


enum LootType
{
    BARTER_OTHERS = "BARTER_OTHERS",
    BARTER_BUILDINGMATERIALS = "BARTER_BUILDINGMATERIALS",
    BARTER_ELECTRONICS = "BARTER_ELECTRONICS",
    BARTER_ENERGYELEMENTS = "BARTER_ENERGYELEMENTS",
    BARTER_FLAMMABLEMATERIALS = "BARTER_FLAMMABLEMATERIALS",
    BARTER_HOUSEHOLDMATERIALS = "BARTER_HOUSEHOLDMATERIALS",
    BARTER_MEDICALSUPPLIES = "BARTER_MEDICALSUPPLIES",
    BARTER_TOOLS = "BARTER_TOOLS",
    BARTER_VALUABLES = "BARTER_VALUABLES",
    GEAR_BACKPACKS = "GEAR_BACKPACKS",
    GEAR_BODYARMOR = "GEAR_BODYARMOR",
    GEAR_EYEWEAR = "GEAR_EYEWEAR",
    GEAR_FACECOVERS = "GEAR_FACECOVERS",
    GEAR_GEARCOMPONENTS = "GEAR_GEARCOMPONENTS",
    GEAR_HEADGEAR = "GEAR_HEADGEAR",
    GEAR_HEADSETS = "GEAR_HEADSETS",
    GEAR_SECURECONTAINERS = "GEAR_SECURECONTAINERS",
    GEAR_STORAGECONTAINERS = "GEAR_STORAGECONTAINERS",
    GEAR_TACTICALRIGS = "GEAR_TACTICALRIGS",
    WPM_FM_AUXILIARYPARTS = "WPM_FM_AUXILIARYPARTS",
    WPM_FM_BIPODS = "WPM_FM_BIPODS",
    WPM_FM_FOREGRIPS = "WPM_FM_FOREGRIPS",
    WPM_FM_LLD_FLASHLIGHTS = "WPM_FM_LLD_FLASHLIGHTS",
    WPM_FM_LLD_LASERTARGETPOINTERS = "WPM_FM_LLD_LASERTARGETPOINTERS",
    WPM_FM_LLD_TACTICALCOMBODEVICES = "WPM_FM_LLD_TACTICALCOMBODEVICES",
    WPM_FM_MD_FLASHHIDERSBRAKES = "WPM_FM_MD_FLASHHIDERSBRAKES",
    WPM_FM_MD_MUZZLEADAPTERS = "WPM_FM_MD_MUZZLEADAPTERS",
    WPM_FM_MD_SUPPRESSORS = "WPM_FM_MD_SUPPRESSORS",
    WPM_FM_S_ASSAULTSCOPES = "WPM_FM_S_ASSAULTSCOPES",
    WPM_FM_S_COLLIMATORS = "WPM_FM_S_COLLIMATORS",
    WPM_FM_S_COMPACTCOLLIMATORS = "WPM_FM_S_COMPACTCOLLIMATORS",
    WPM_FM_S_IRONSIGHTS = "WPM_FM_S_IRONSIGHTS",
    WPM_FM_S_OPTICS = "WPM_FM_S_OPTICS",
    WPM_FM_S_SPECIALPURPOSESIGHTS = "WPM_FM_S_SPECIALPURPOSESIGHTS",
    WPM_GM_CHARGINGHANDLES = "WPM_GM_CHARGINGHANDLES",
    WPM_GM_LAUNCHERS = "WPM_GM_LAUNCHERS",
    WPM_GM_MAGAZINES = "WPM_GM_MAGAZINES",
    WPM_GM_MOUNTS = "WPM_GM_MOUNTS",
    WPM_GM_STOCKSCHASSIS = "WPM_GM_STOCKSCHASSIS",
    WPM_VP_BARRELS = "WPM_VP_BARRELS",
    WPM_VP_GASBLOCKS = "WPM_VP_GASBLOCKS",
    WPM_VP_HANDGUARDS = "WPM_VP_HANDGUARDS",
    WPM_VP_PISTOLGRIPS = "WPM_VP_PISTOLGRIPS",
    WPM_VP_RECEIVERSSLIDES = "WPM_VP_RECEIVERSSLIDES",
    WEAPONS_ASSAULTCARBINES = "WEAPONS_ASSAULTCARBINES",
    WEAPONS_ASSAULTRIFLES = "WEAPONS_ASSAULTRIFLES",
    WEAPONS_BOLTACTIONRIFLES = "WEAPONS_BOLTACTIONRIFLES",
    WEAPONS_GRENADELAUNCHERS = "WEAPONS_GRENADELAUNCHERS",
    WEAPONS_MACHINEGUNS = "WEAPONS_MACHINEGUNS",
    WEAPONS_MARKSMANRIFLES = "WEAPONS_MARKSMANRIFLES",
    WEAPONS_MELEEWEAPONS = "WEAPONS_MELEEWEAPONS",
    WEAPONS_PISTOLS = "WEAPONS_PISTOLS",
    WEAPONS_SMGS = "WEAPONS_SMGS",
    WEAPONS_SHOTGUNS = "WEAPONS_SHOTGUNS",
    WEAPONS_SPECIALWEAPONS = "WEAPONS_SPECIALWEAPONS",
    WEAPONS_THROWABLES = "WEAPONS_THROWABLES",
    AMMO_AMMOPACKS = "AMMO_AMMOPACKS",
    AMMO_ROUNDS = "AMMO_ROUNDS",
    PROVISIONS_DRINKS = "PROVISIONS_DRINKS",
    PROVISIONS_FOOD = "PROVISIONS_FOOD",
    MEDICATION_INJECTORS = "MEDICATION_INJECTORS",
    MEDICATION_INJURYTREATMENT = "MEDICATION_INJURYTREATMENT",
    MEDICATION_MEDKITS = "MEDICATION_MEDKITS",
    MEDICATION_PILLS = "MEDICATION_PILLS",
    KEYS_ELECTRONICKEYS = "KEYS_ELECTRONICKEYS",
    KEYS_MECHANICALKEYS = "KEYS_MECHANICALKEYS",
    INFOITEMS = "INFOITEMS",
    SPECIALEQUIPMENT = "SPECIALEQUIPMENT",
    MAPS = "MAPS",
    MONEY = "MONEY"
}

enum LootGlobalType{
    DRAWER = "DRAWER",
    JACKET = "JACKET",
    WEAPONBOXGLOBAL = "WEAPONBOXGLOBAL",
    WEAPONBOX6X3 = "WEAPONBOX6x3",
    WEAPONBOX5X5 = "WEAPONBOX5x5",
    CACHE = "CACHE",
    DUFFLEBAG = "DUFFLEBAG",
    MEDICAL = "MEDICAL",
    TECHNICAL = "TECHNICAL",
    RATIONS = "RATIONS",
    PCBLOCK = "PCBLOCK",
    SAFE = "SAFE",
    AMMO = "AMMO",
    GRENADES = "GRENADES",
    REGISTERROUBLES = "REGISTERROUBLES",
    SHTURMANSSTASH = "SHTURMANSSTASH"
}

enum SPTLootContainer{
    DRAWER = "578f87b7245977356274f2cd",
    CASHREGISTER = "578f879c24597735401e6bc6",
    PCBLOCK = "59139c2186f77411564f8e42",
    JACKET = "578f8778245977358849a9b5",
    TOOLBOX = "5909d50c86f774659e6aaebe",
    MEDCASE = "5909d4c186f7746ad34e805a",
    SAFE = "578f8782245977354405a1e3",
    WEAPONBOX5X5 = "5909d89086f77472591234a0",
    WEAPONBOX5X2 = "5909d5ef86f77467974efbd8",
    DUFFLEBAG01 = "578f87a3245977356274f2cb",
    WEAPONBOX6X3 = "5909d76c86f77471e53d2adf",
    WEAPONBOX4X4 = "5909d7cf86f77470ee57d75a",
    GRENADEBOX = "5909d36d86f774660f0bb900",
    PLASTICSUITCASE = "5c052cea86f7746b2101e8d8",
    MEDBAGSMU0601 = "5909d24f86f77466f56e6855",
    WOODENCRATE = "578f87ad245977356274f2cc",
    MEDICALSUPPLYCRATE = "5d6fe50986f77449d97f7463",
    TECHNICALSUPPLYCRATE = "5d6fd45b86f774317075ed43",
    DEADSCAV = "5909e4b686f7747f5b744fa4",
    GROUNDCACHE = "5d6d2b5486f774785c2ba8ea",
    BURRIEDBARRELCACHE = "5d6d2bb386f774785b07a77a",
    WOODENAMMOBOX = "5909d45286f77465a8136dc6",
    JACKETDORMS114 = "59387ac686f77401442ddd61",
    JACKETMACHINERYKEY = "5937ef2b86f77408a47244b3",
    RATIONSUPPLYCRATE = "5d6fd13186f77424ad2a8c69",
    JACKETDORMS204 = "5914944186f774189e5e76c2",
    COMMONFUNDSTASH = "5d07b91b86f7745a077a9432",
    DUFFLEBAG02 = "61aa1e9a32a4743c3453d2cf",
    MEDBAGSMU0602 = "61aa1ead84ea0800645777fd",
    CASHREGISTERTAR = "5ad74cf586f774391278f6f0",
    BANKCASHREGISTER = "64d116f41a9c6143a956127d",
    BANKSAFE = "64d11702dd0cd96ab82c3280"
}


function deepCopy<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
  
    if (Array.isArray(obj)) {
        const copyArray: any[] = [];
        for (const item of obj) {
            copyArray.push(deepCopy(item));
        }
        return copyArray as any;
    }
  
    const copyObj: { [key: string]: any } = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObj[key] = deepCopy(obj[key]);
        }
    }
  
    return copyObj as T;
}



class AllTheLoot implements IPostDBLoadMod
{
    private logger: ILogger;
    private database: DatabaseServer;


    // Config files
    private config = require("../config/config.json" );
 
    private scriptDirectory = __dirname;
    private configFilePath = path.join(this.scriptDirectory, '../Config/clearNames.json');
    private jsonStringClearNames = fs.readFileSync(this.configFilePath, "utf-8");
    private jsonDataClearNames = JSON.parse(this.jsonStringClearNames);
 
 
    public postDBLoad(container: DependencyContainer): void 
    {
        this.logger = container.resolve<ILogger>("WinstonLogger");

        this.logger.warning("AllTheLoot initialized");


        // get database from server
        this.database = container.resolve<DatabaseServer>("DatabaseServer");
        const tables = this.database.getTables();


        // get handbook from server
        const handbook_Items = Object.values(tables.templates.handbook)[1];
    
        
        // deep clone original SPT handbook items to dedicated arrays 
        const handbook_Items_toModify = deepCopy(handbook_Items);
        const handbook_Items_ref = deepCopy(handbook_Items);
  

        const lootRecordsCalculated = this.createLootRecords(handbook_Items_toModify, handbook_Items_ref, tables);
        this.database.getTables().loot.staticLoot = lootRecordsCalculated;

        this.logger.warning("AllTheLoot successfully applied");
        this.logger.warning("Now you are able to loot most of the 2893 items from containers");
	
    }



    private adjustSpawnRate(data: any, data_ref: any, lootType: LootType): void
    {
 
        let spawnTweaker = 1.0;
        if (lootType === "BARTER_OTHERS")
            spawnTweaker = this.config.rate_BARTER_OTHERS;
        else if (lootType === "BARTER_BUILDINGMATERIALS")
            spawnTweaker = this.config.rate_BARTER_BUILDINGMATERIALS;
        else if (lootType === "BARTER_ELECTRONICS")
            spawnTweaker = this.config.rate_BARTER_ELECTRONICS;
        else if (lootType === "BARTER_ENERGYELEMENTS")
            spawnTweaker = this.config.rate_BARTER_ENERGYELEMENTS;
        else if (lootType === "BARTER_FLAMMABLEMATERIALS")
            spawnTweaker = this.config.rate_BARTER_FLAMMABLEMATERIALS;
        else if (lootType === "BARTER_HOUSEHOLDMATERIALS")
            spawnTweaker = this.config.rate_BARTER_HOUSEHOLDMATERIALS;
        else if (lootType === "BARTER_MEDICALSUPPLIES")
            spawnTweaker = this.config.rate_BARTER_MEDICALSUPPLIES;
        else if (lootType === "BARTER_TOOLS")
            spawnTweaker = this.config.rate_BARTER_TOOLS;
        else if (lootType === "BARTER_VALUABLES")
            spawnTweaker = this.config.rate_BARTER_VALUABLES;
        else if (lootType === "GEAR_BACKPACKS")
            spawnTweaker = this.config.rate_GEAR_BACKPACKS;
        else if (lootType === "GEAR_BODYARMOR")
            spawnTweaker = this.config.rate_GEAR_BODYARMOR;
        else if (lootType === "GEAR_EYEWEAR")
            spawnTweaker = this.config.rate_GEAR_EYEWEAR;
        else if (lootType === "GEAR_FACECOVERS")
            spawnTweaker = this.config.rate_GEAR_FACECOVERS;
        else if (lootType === "GEAR_GEARCOMPONENTS")
            spawnTweaker = this.config.rate_GEAR_GEARCOMPONENTS;
        else if (lootType === "GEAR_HEADGEAR")
            spawnTweaker = this.config.rate_GEAR_HEADGEAR;
        else if (lootType === "GEAR_HEADSETS")
            spawnTweaker = this.config.rate_GEAR_HEADSETS;
        else if (lootType === "GEAR_SECURECONTAINERS")
            spawnTweaker = this.config.rate_GEAR_SECURECONTAINERS;
        else if (lootType === "GEAR_STORAGECONTAINERS")
            spawnTweaker = this.config.rate_GEAR_STORAGECONTAINERS;
        else if (lootType === "GEAR_TACTICALRIGS")
            spawnTweaker = this.config.rate_GEAR_TACTICALRIGS;
        else if (lootType === "WPM_FM_AUXILIARYPARTS")
            spawnTweaker = this.config.rate_WPM_FM_AUXILIARYPARTS;
        else if (lootType === "WPM_FM_BIPODS")
            spawnTweaker = this.config.rate_WPM_FM_BIPODS;
        else if (lootType === "WPM_FM_FOREGRIPS")
            spawnTweaker = this.config.rate_WPM_FM_FOREGRIPS;
        else if (lootType === "WPM_FM_LLD_FLASHLIGHTS")
            spawnTweaker = this.config.rate_WPM_FM_LLD_FLASHLIGHTS;
        else if (lootType === "WPM_FM_LLD_LASERTARGETPOINTERS")
            spawnTweaker = this.config.rate_WPM_FM_LLD_LASERTARGETPOINTERS;
        else if (lootType === "WPM_FM_LLD_TACTICALCOMBODEVICES")
            spawnTweaker = this.config.rate_WPM_FM_LLD_TACTICALCOMBODEVICES;
        else if (lootType === "WPM_FM_MD_FLASHHIDERSBRAKES")
            spawnTweaker = this.config.rate_WPM_FM_MD_FLASHHIDERSBRAKES;
        else if (lootType === "WPM_FM_MD_MUZZLEADAPTERS")
            spawnTweaker = this.config.rate_WPM_FM_MD_MUZZLEADAPTERS;
        else if (lootType === "WPM_FM_MD_SUPPRESSORS")
            spawnTweaker = this.config.rate_WPM_FM_MD_SUPPRESSORS;
        else if (lootType === "WPM_FM_S_ASSAULTSCOPES")
            spawnTweaker = this.config.rate_WPM_FM_S_ASSAULTSCOPES;
        else if (lootType === "WPM_FM_S_COLLIMATORS")
            spawnTweaker = this.config.rate_WPM_FM_S_COLLIMATORS;
        else if (lootType === "WPM_FM_S_COMPACTCOLLIMATORS")
            spawnTweaker = this.config.rate_WPM_FM_S_COMPACTCOLLIMATORS;
        else if (lootType === "WPM_FM_S_IRONSIGHTS")
            spawnTweaker = this.config.rate_WPM_FM_S_IRONSIGHTS;
        else if (lootType === "WPM_FM_S_OPTICS")
            spawnTweaker = this.config.rate_WPM_FM_S_OPTICS;
        else if (lootType === "WPM_FM_S_SPECIALPURPOSESIGHTS")
            spawnTweaker = this.config.rate_WPM_FM_S_SPECIALPURPOSESIGHTS;
        else if (lootType === "WPM_GM_CHARGINGHANDLES")
            spawnTweaker = this.config.rate_WPM_GM_CHARGINGHANDLES;
        else if (lootType === "WPM_GM_LAUNCHERS")
            spawnTweaker = this.config.rate_WPM_GM_LAUNCHERS;
        else if (lootType === "WPM_GM_MAGAZINES")
            spawnTweaker = this.config.rate_WPM_GM_MAGAZINES;
        else if (lootType === "WPM_GM_MOUNTS")
            spawnTweaker = this.config.rate_WPM_GM_MOUNTS;
        else if (lootType === "WPM_GM_STOCKSCHASSIS")
            spawnTweaker = this.config.rate_WPM_GM_STOCKSCHASSIS;
        else if (lootType === "WPM_VP_BARRELS")
            spawnTweaker = this.config.rate_WPM_VP_BARRELS;
        else if (lootType === "WPM_VP_GASBLOCKS")
            spawnTweaker = this.config.rate_WPM_VP_GASBLOCKS;
        else if (lootType === "WPM_VP_HANDGUARDS")
            spawnTweaker = this.config.rate_WPM_VP_HANDGUARDS;
        else if (lootType === "WPM_VP_PISTOLGRIPS")
            spawnTweaker = this.config.rate_WPM_VP_PISTOLGRIPS;
        else if (lootType === "WPM_VP_RECEIVERSSLIDES")
            spawnTweaker = this.config.rate_WPM_VP_RECEIVERSSLIDES;
        else if (lootType === "WEAPONS_ASSAULTCARBINES")
            spawnTweaker = this.config.rate_WEAPONS_ASSAULTCARBINES;
        else if (lootType === "WEAPONS_ASSAULTRIFLES")
            spawnTweaker = this.config.rate_WEAPONS_ASSAULTRIFLES;
        else if (lootType === "WEAPONS_BOLTACTIONRIFLES")
            spawnTweaker = this.config.rate_WEAPONS_BOLTACTIONRIFLES;
        else if (lootType === "WEAPONS_GRENADELAUNCHERS")
            spawnTweaker = this.config.rate_WEAPONS_GRENADELAUNCHERS;
        else if (lootType === "WEAPONS_MACHINEGUNS")
            spawnTweaker = this.config.rate_WEAPONS_MACHINEGUNS;
        else if (lootType === "WEAPONS_MARKSMANRIFLES")
            spawnTweaker = this.config.rate_WEAPONS_MARKSMANRIFLES;
        else if (lootType === "WEAPONS_MELEEWEAPONS")
            spawnTweaker = this.config.rate_WEAPONS_MELEEWEAPONS;
        else if (lootType === "WEAPONS_PISTOLS")
            spawnTweaker = this.config.rate_WEAPONS_PISTOLS;
        else if (lootType === "WEAPONS_SMGS")
            spawnTweaker = this.config.rate_WEAPONS_SMGS;
        else if (lootType === "WEAPONS_SHOTGUNS")
            spawnTweaker = this.config.rate_WEAPONS_SHOTGUNS;
        else if (lootType === "WEAPONS_SPECIALWEAPONS")
            spawnTweaker = this.config.rate_WEAPONS_SPECIALWEAPONS;
        else if (lootType === "WEAPONS_THROWABLES")
            spawnTweaker = this.config.rate_WEAPONS_THROWABLES;
        else if (lootType === "AMMO_AMMOPACKS")
            spawnTweaker = this.config.rate_AMMO_AMMOPACKS;
        else if (lootType === "AMMO_ROUNDS")
            spawnTweaker = this.config.rate_AMMO_ROUNDS;
        else if (lootType === "PROVISIONS_DRINKS")
            spawnTweaker = this.config.rate_PROVISIONS_DRINKS;
        else if (lootType === "PROVISIONS_FOOD")
            spawnTweaker = this.config.rate_PROVISIONS_FOOD;
        else if (lootType === "MEDICATION_INJECTORS")
            spawnTweaker = this.config.rate_MEDICATION_INJECTORS;
        else if (lootType === "MEDICATION_INJURYTREATMENT")
            spawnTweaker = this.config.rate_MEDICATION_INJURYTREATMENT;
        else if (lootType === "MEDICATION_MEDKITS")
            spawnTweaker = this.config.rate_MEDICATION_MEDKITS;
        else if (lootType === "MEDICATION_PILLS")
            spawnTweaker = this.config.rate_MEDICATION_PILLS;
        else if (lootType === "KEYS_ELECTRONICKEYS")
            spawnTweaker = this.config.rate_KEYS_ELECTRONICKEYS;
        else if (lootType === "KEYS_MECHANICALKEYS")
            spawnTweaker = this.config.rate_KEYS_MECHANICALKEYS;
        else if (lootType === "INFOITEMS")
            spawnTweaker = this.config.rate_INFOITEMS;
        else if (lootType === "SPECIALEQUIPMENT")
            spawnTweaker = this.config.rate_SPECIALEQUIPMENT;
        else if (lootType === "MAPS")
            spawnTweaker = this.config.rate_MAPS;
        else if (lootType === "MONEY")
            spawnTweaker = this.config.rate_MONEY;


       
        // simple but somehow working spawn logic :)

        if (data_ref.Price >= 0 && data_ref.Price < 2000 && data.Price === data_ref.Price)
            data.Price = Math.floor(25000 * spawnTweaker);
        else if (data_ref.Price >= 2000 && data_ref.Price < 20000 && data.Price === data_ref.Price)
            data.Price = Math.floor(50000 * spawnTweaker);
        else if (data_ref.Price >= 20000 && data_ref.Price < 30000 && data.Price === data_ref.Price)
            data.Price = Math.floor(40000 * spawnTweaker);
        else if (data_ref.Price >= 30000 && data_ref.Price < 50000 && data.Price === data_ref.Price)
            data.Price = Math.floor(30000 * spawnTweaker);
        else if (data_ref.Price >= 50000 && data_ref.Price < 100000 && data.Price === data_ref.Price)
            data.Price = Math.floor(20000 * spawnTweaker);
        else if (data_ref.Price >= 100000 && data_ref.Price < 300000 && data.Price === data_ref.Price)
            data.Price = Math.floor(15000 * spawnTweaker);
        else if (data_ref.Price >= 300000 && data_ref.Price < 600000 && data.Price === data_ref.Price)
            data.Price = Math.floor(7500 * spawnTweaker);
        else if (data_ref.Price >= 600000 && data.Price === data_ref.Price)
            data.Price = Math.floor(3750 * spawnTweaker);
        else
            data.Price = data_ref.Price;

  
        
        // Increase spawn rate for selected items
        if (this.config.selectedItems_IncreaseSpawnChance.includes(data.Id))
        {
            const index = this.config.selectedItems_IncreaseSpawnChance.indexOf(data.Id);
            data.Price *= this.config.selectedItems_spawnChance[index];
        }

    }
    

    private removeBlacklistedItems(data: any, lootType: string): any
    {
        const cleanedLoot = [];
        data.forEach(item => {
            if (!this.isBlacklistedItem(item.Id, lootType))
            {
                cleanedLoot.push(item);
            }
        })
        return cleanedLoot;
    }
    

    private isBlacklistedItem(data: any, LootGlobalType: string): boolean
    {

        let isBlacklisted = false;
        if (LootGlobalType === "DRAWER")
            isBlacklisted = this.config.blacklistedItems_Drawer.includes(data);
        else if (LootGlobalType === "JACKET")
            isBlacklisted = this.config.blacklistedItems_Jacket.includes(data);
        else if (LootGlobalType === "WEAPONBOXGLOBAL")
            isBlacklisted = this.config.blacklistedItems_WeaponBoxGlobal.includes(data);
        else if (LootGlobalType === "CACHE")
            isBlacklisted = this.config.blacklistedItems_Cache.includes(data);
        else if (LootGlobalType === "DUFFLEBAG")
            isBlacklisted = this.config.blacklistedItems_DuffleBag.includes(data);
        else if (LootGlobalType === "MEDICAL")
            isBlacklisted = this.config.blacklistedItems_Medical.includes(data);
        else if (LootGlobalType === "TECHNICAL")
            isBlacklisted = this.config.blacklistedItems_Technical.includes(data);
        else if (LootGlobalType === "RATIONS")
            isBlacklisted = this.config.blacklistedItems_Rations.includes(data);
        else if (LootGlobalType === "PCBLOCK")
            isBlacklisted = this.config.blacklistedItems_PCBlock.includes(data);
        else if (LootGlobalType === "SAFE")
            isBlacklisted = this.config.blacklistedItems_Safe.includes(data);
        else if (LootGlobalType === "AMMO")
            isBlacklisted = this.config.blacklistedItems_Ammo.includes(data);
        else if (LootGlobalType === "REGISTERROUBLES")
            isBlacklisted = this.config.blacklistedItems_Money_RoublesOnly.includes(data);
        else if (LootGlobalType === "SHTURMANSSTASH")
            isBlacklisted = this.config.blacklistedItems_ShturmansStash.includes(data);
        else if (LootGlobalType === "WEAPONBOX6x3")
            isBlacklisted = this.config.blacklistedItems_WeaponBox6x3.includes(data);
        else if (LootGlobalType === "WEAPONBOX5x5")
            isBlacklisted = this.config.blacklistedItems_WeaponBox5x5.includes(data);
        else
            return isBlacklisted;

        if (isBlacklisted)
        {
            return true;
        }
        return isBlacklisted;               // thanks once more for your help, Drakia
    } 


    private createLootRecords(data: any, data_ref: any, tables: any): Record<string, IStaticLootDetails>
    {
        // ===== BARTER ITEMS =====
        const category_Barter_Others = [];
        const category_Barter_BuildingMaterials = [];
        const category_Barter_Electronics = [];
        const category_Barter_EnergyElements = [];
        const category_Barter_FlammableMaterials = [];
        const category_Barter_HouseholdMaterials = [];
        const category_Barter_MedicalSupplies = [];
        const category_Barter_Tools = [];
        const category_Barter_Valuables = [];
        // ===== GEAR =====
        const category_Gear_Backpacks = [];
        const category_Gear_BodyArmor = [];
        const category_Gear_Eyewear = [];
        const category_Gear_Facecovers = [];
        const category_Gear_GearComponents = [];
        const category_Gear_Headgear = [];
        const category_Gear_Headsets = [];
        const category_Gear_SecureContainers = [];
        const category_Gear_StorageContainers = [];
        const category_Gear_TacticalRigs = [];
        // ===== WEAPON PARTS & MODS =====
        const category_WeaponPartsMods_FM_AuxiliaryParts = [];
        const category_WeaponPartsMods_FM_Bipods = [];
        const category_WeaponPartsMods_FM_Foregrips = [];
        const category_WeaponPartsMods_FM_LLD_Flashlights = [];
        const category_WeaponPartsMods_FM_LLD_LaserTargetPointers = [];
        const category_WeaponPartsMods_FM_LLD_TacticalComboDevices = [];
        const category_WeaponPartsMods_FM_MD_FlashhidersBrakes = [];
        const category_WeaponPartsMods_FM_MD_MuzzleAdapters = [];
        const category_WeaponPartsMods_FM_MD_Suppressors = [];
        const category_WeaponPartsMods_FM_S_AssaultScopes = [];
        const category_WeaponPartsMods_FM_S_Collimators = [];
        const category_WeaponPartsMods_FM_S_CompactCollimators = [];
        const category_WeaponPartsMods_FM_S_IronSights = [];
        const category_WeaponPartsMods_FM_S_Optics = [];
        const category_WeaponPartsMods_FM_S_SpecialPurposeSights = [];
        const category_WeaponPartsMods_GM_ChargingHandles = [];
        const category_WeaponPartsMods_GM_Launchers = [];
        const category_WeaponPartsMods_GM_Magazines = [];
        const category_WeaponPartsMods_GM_Mounts = [];
        const category_WeaponPartsMods_GM_StocksChassis = [];
        const category_WeaponPartsMods_VP_Barrels = [];
        const category_WeaponPartsMods_VP_GasBlocks = [];
        const category_WeaponPartsMods_VP_Handguards = [];
        const category_WeaponPartsMods_VP_PistolGrips = [];
        const category_WeaponPartsMods_VP_ReceiversSlides = [];
        // ===== WEAPONS =====
        const category_Weapons_AssaultCarbines = [];
        const category_Weapons_AssaultRifles = [];
        const category_Weapons_BoltActionRifles = [];
        const category_Weapons_GrenadeLaunchers = [];
        const category_Weapons_MachineGuns = [];
        const category_Weapons_MarksmanRifles = [];
        const category_Weapons_MeleeWeapons = [];
        const category_Weapons_Pistols = [];
        const category_Weapons_SMGs = [];
        const category_Weapons_Shotguns = [];
        const category_Weapons_SpecialWeapons = [];
        const category_Weapons_Throwables = [];
        // ===== AMMO =====
        const category_Ammo_AmmoPacks = [];
        const category_Ammo_Rounds = [];
        // ===== PROVISIONS =====
        const category_Provisions_Drinks = [];
        const category_Provisions_Food = [];
        // ===== MEDICATION =====
        const category_Medication_Injectors = [];
        const category_Medication_InjuryTreatment = [];
        const category_Medication_Medkits = [];
        const category_Medication_Pills = [];
        // ===== KEYS =====
        const category_Keys_ElectronicKeys = [];
        const category_Keys_MechanicalKeys = [];
        // ===== INFO ITEMS =====
        const category_InfoItems = [];
        // ===== SPECIAL EQUIPMENT =====
        const category_SpecialEquipment = [];
        // ===== MAPS =====
        const category_Maps = [];
        // ===== MONEY =====
        const category_Money = [];
        // ===== SPECIAL ITEMS =====
        const category_MachineryKey = [];
        const category_Ammo_Grenades = [];
        const category_MedicalAddOn = [];
        const category_RationsAddOn = [];

        const category_DEBUG = []
  

        // ===== REF ARRAY (used to keep original data) =====
        // ===== BARTER ITEMS =====
        const category_Barter_Others_ref = [];
        const category_Barter_BuildingMaterials_ref = [];
        const category_Barter_Electronics_ref = [];
        const category_Barter_EnergyElements_ref = [];
        const category_Barter_FlammableMaterials_ref = [];
        const category_Barter_HouseholdMaterials_ref = [];
        const category_Barter_MedicalSupplies_ref = [];
        const category_Barter_Tools_ref = [];
        const category_Barter_Valuables_ref = [];
        // ===== GEAR =====
        const category_Gear_Backpacks_ref = [];
        const category_Gear_BodyArmor_ref = [];
        const category_Gear_Eyewear_ref = [];
        const category_Gear_Facecovers_ref = [];
        const category_Gear_GearComponents_ref = [];
        const category_Gear_Headgear_ref = [];
        const category_Gear_Headsets_ref = [];
        const category_Gear_SecureContainers_ref = [];
        const category_Gear_StorageContainers_ref = [];
        const category_Gear_TacticalRigs_ref = [];
        // ===== WEAPON PARTS & MODS =====
        const category_WeaponPartsMods_FM_AuxiliaryParts_ref = [];
        const category_WeaponPartsMods_FM_Bipods_ref = [];
        const category_WeaponPartsMods_FM_Foregrips_ref = [];
        const category_WeaponPartsMods_FM_LLD_Flashlights_ref = [];
        const category_WeaponPartsMods_FM_LLD_LaserTargetPointers_ref = [];
        const category_WeaponPartsMods_FM_LLD_TacticalComboDevices_ref = [];
        const category_WeaponPartsMods_FM_MD_FlashhidersBrakes_ref = [];
        const category_WeaponPartsMods_FM_MD_MuzzleAdapters_ref = [];
        const category_WeaponPartsMods_FM_MD_Suppressors_ref = [];
        const category_WeaponPartsMods_FM_S_AssaultScopes_ref = [];
        const category_WeaponPartsMods_FM_S_Collimators_ref = [];
        const category_WeaponPartsMods_FM_S_CompactCollimators_ref = [];
        const category_WeaponPartsMods_FM_S_IronSights_ref = [];
        const category_WeaponPartsMods_FM_S_Optics_ref = [];
        const category_WeaponPartsMods_FM_S_SpecialPurposeSights_ref = [];
        const category_WeaponPartsMods_GM_ChargingHandles_ref = [];
        const category_WeaponPartsMods_GM_Launchers_ref = [];
        const category_WeaponPartsMods_GM_Magazines_ref = [];
        const category_WeaponPartsMods_GM_Mounts_ref = [];
        const category_WeaponPartsMods_GM_StocksChassis_ref = [];
        const category_WeaponPartsMods_VP_Barrels_ref = [];
        const category_WeaponPartsMods_VP_GasBlocks_ref = [];
        const category_WeaponPartsMods_VP_Handguards_ref = [];
        const category_WeaponPartsMods_VP_PistolGrips_ref = [];
        const category_WeaponPartsMods_VP_ReceiversSlides_ref = [];
        // ===== WEAPONS =====
        const category_Weapons_AssaultCarbines_ref = [];
        const category_Weapons_AssaultRifles_ref = [];
        const category_Weapons_BoltActionRifles_ref = [];
        const category_Weapons_GrenadeLaunchers_ref = [];
        const category_Weapons_MachineGuns_ref = [];
        const category_Weapons_MarksmanRifles_ref = [];
        const category_Weapons_MeleeWeapons_ref = [];
        const category_Weapons_Pistols_ref = [];
        const category_Weapons_SMGs_ref = [];
        const category_Weapons_Shotguns_ref = [];
        const category_Weapons_SpecialWeapons_ref = [];
        const category_Weapons_Throwables_ref = [];
        // ===== AMMO =====
        const category_Ammo_AmmoPacks_ref = [];
        const category_Ammo_Rounds_ref = [];
        // ===== PROVISIONS =====
        const category_Provisions_Drinks_ref = [];
        const category_Provisions_Food_ref = [];
        // ===== MEDICATION =====
        const category_Medication_Injectors_ref = [];
        const category_Medication_InjuryTreatment_ref = [];
        const category_Medication_Medkits_ref = [];
        const category_Medication_Pills_ref = [];
        // ===== KEYS =====
        const category_Keys_ElectronicKeys_ref = [];
        const category_Keys_MechanicalKeys_ref = [];
        // ===== INFO ITEMS =====
        const category_InfoItems_ref = [];
        // ===== SPECIAL EQUIPMENT =====
        const category_SpecialEquipment_ref = [];
        // ===== MAPS =====
        const category_Maps_ref = [];
        // ===== MONEY =====
        const category_Money_ref = [];
        // ===== SPECIAL ITEMS =====
        const category_MachineryKey_ref = [];
        const category_Ammo_Grenades_ref = [];
        const category_MedicalAddOn_ref = [];
        const category_RationsAddOn_ref = [];

        const category_DEBUG_ref = [];
    

        for (let i=0; i<data.length; i++)
        {
            // ===== BARTER ITEMS =====
            if (data[i].ParentId === "5b47574386f77428ca22b2f4") {                       // Barter Items||Others
                category_Barter_Others.push(data[i]);
                category_Barter_Others_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2ee") {                       // Barter Items||Building materials
                category_Barter_BuildingMaterials.push(data[i]);
                category_Barter_BuildingMaterials_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2ef") {                       // Barter Items||Electronics
                category_Barter_Electronics.push(data[i]);
                category_Barter_Electronics_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2ed") {                       // Barter Items||Energy elements
                category_Barter_EnergyElements.push(data[i]);
                category_Barter_EnergyElements_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2f2") {                       // Barter Items||Flammable materials
                category_Barter_FlammableMaterials.push(data[i]);
                category_Barter_FlammableMaterials_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2f0") {                       // Barter Items||Household materials
                category_Barter_HouseholdMaterials.push(data[i]);
                category_Barter_HouseholdMaterials_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2f3") {                       // Barter Items||Medical supplies
                category_Barter_MedicalSupplies.push(data[i]);
                category_Barter_MedicalSupplies_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2f6") {                       // Barter Items||Tools
                category_Barter_Tools.push(data[i]);
                category_Barter_Tools_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b2f1") {                       // Barter Items||Valuables
                category_Barter_Valuables.push(data[i]);
                category_Barter_Valuables_ref.push(data_ref[i]);}
            // ===== GEAR =====
            if (data[i].ParentId === "5b5f6f6c86f774093f2ecf0b") {                       // Gear||Backpacks
                category_Gear_Backpacks.push(data[i]);
                category_Gear_Backpacks_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f701386f774093f2ecf0f") {                       // Gear||Body armor
                category_Gear_BodyArmor.push(data[i]);
                category_Gear_BodyArmor_ref.push(data_ref[i]);}       
            if (data[i].ParentId === "5b47574386f77428ca22b331") {                       // Gear||Eyewear
                category_Gear_Eyewear.push(data[i]);
                category_Gear_Eyewear_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b32f") {                       // Gear||Facecovers
                category_Gear_Facecovers.push(data[i]);
                category_Gear_Facecovers_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f704686f77447ec5d76d7") {                       // Gear||Gear components
                category_Gear_GearComponents.push(data[i]);
                category_Gear_GearComponents_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b330") {                       // Gear||Headgear
                category_Gear_Headgear.push(data[i]);
                category_Gear_Headgear_ref.push(data_ref[i]);}    
            if (data[i].ParentId === "5b5f6f3c86f774094242ef87") {                       // Gear||Headsets
                category_Gear_Headsets.push(data[i]);
                category_Gear_Headsets_ref.push(data_ref[i]);}    
            if (data[i].ParentId === "5b5f6fd286f774093f2ecf0d") {                       // Gear||Secure containers
                category_Gear_SecureContainers.push(data[i]);
                category_Gear_SecureContainers_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f6fa186f77409407a7eb7") {                       // Gear||Storage containers
                category_Gear_StorageContainers.push(data[i]);
                category_Gear_StorageContainers_ref.push(data_ref[i]);}    
            if (data[i].ParentId === "5b5f6f8786f77447ed563642") {                       // Gear||Tactical rigs
                category_Gear_TacticalRigs.push(data[i]);
                category_Gear_TacticalRigs_ref.push(data_ref[i]);}
            // ===== WEAPON PART & MODS =====
            if (data[i].ParentId === "5b5f74cc86f77447ec5d770a") {                       // Weapon parts & mods||Functional mods||Auxiliary parts
                category_WeaponPartsMods_FM_AuxiliaryParts.push(data[i]);
                category_WeaponPartsMods_FM_AuxiliaryParts_ref.push(data_ref[i]);} 
            if (data[i].ParentId === "5b5f71c186f77409407a7ec0") {                       // Weapon parts & mods||Functional mods||Bipods
                category_WeaponPartsMods_FM_Bipods.push(data[i]);
                category_WeaponPartsMods_FM_Bipods_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f71de86f774093f2ecf13") {                       // Weapon parts & mods||Functional mods||Foregrips
                category_WeaponPartsMods_FM_Foregrips.push(data[i]);
                category_WeaponPartsMods_FM_Foregrips_ref.push(data_ref[i]);} 
            if (data[i].ParentId === "5b5f73ab86f774094242f195") {                       // Weapon parts & mods||Functional mods||Light & laser devices||Flashlights
                category_WeaponPartsMods_FM_LLD_Flashlights.push(data[i]);
                category_WeaponPartsMods_FM_LLD_Flashlights_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f73c486f77447ec5d7704") {                       // Weapon parts & mods||Functional mods||Light & laser devices||Laser target pointers
                category_WeaponPartsMods_FM_LLD_LaserTargetPointers.push(data[i]);
                category_WeaponPartsMods_FM_LLD_LaserTargetPointers_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f737886f774093e6cb4fb") {                       // Weapon parts & mods||Functional mods||Light & laser devices||Tactical combo devices
                category_WeaponPartsMods_FM_LLD_TacticalComboDevices.push(data[i]);
                category_WeaponPartsMods_FM_LLD_TacticalComboDevices_ref.push(data_ref[i]);}                
            if (data[i].ParentId === "5b5f724c86f774093f2ecf15") {                       // Weapon parts & mods||Functional mods||Muzzle devices||Flashhiders & brakes
                category_WeaponPartsMods_FM_MD_FlashhidersBrakes.push(data[i]);
                category_WeaponPartsMods_FM_MD_FlashhidersBrakes_ref.push(data_ref[i]);}            
            if (data[i].ParentId === "5b5f72f786f77447ec5d7702") {                       // Weapon parts & mods||Functional mods||Muzzle devices||Muzzle adapters
                category_WeaponPartsMods_FM_MD_MuzzleAdapters.push(data[i]);
                category_WeaponPartsMods_FM_MD_MuzzleAdapters_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f731a86f774093e6cb4f9") {                       // Weapon parts & mods||Functional mods||Muzzle devices||Suppressors
                category_WeaponPartsMods_FM_MD_Suppressors.push(data[i]);
                category_WeaponPartsMods_FM_MD_Suppressors_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f740a86f77447ec5d7706") {                       // Weapon parts & mods||Functional mods||Sights||Assault scopes
                category_WeaponPartsMods_FM_S_AssaultScopes.push(data[i]);
                category_WeaponPartsMods_FM_S_AssaultScopes_ref.push(data_ref[i]);}   
            if (data[i].ParentId === "5b5f742686f774093e6cb4ff") {                       // Weapon parts & mods||Functional mods||Sights||Collimators
                category_WeaponPartsMods_FM_S_Collimators.push(data[i]);
                category_WeaponPartsMods_FM_S_Collimators_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f744786f774094242f197") {                       // Weapon parts & mods||Functional mods||Sights||Compact collimators
                category_WeaponPartsMods_FM_S_CompactCollimators.push(data[i]);
                category_WeaponPartsMods_FM_S_CompactCollimators_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f746686f77447ec5d7708") {                       // Weapon parts & mods||Functional mods||Sights||Iron sights
                category_WeaponPartsMods_FM_S_IronSights.push(data[i]);
                category_WeaponPartsMods_FM_S_IronSights_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f748386f774093e6cb501") {                       // Weapon parts & mods||Functional mods||Sights||Optics
                category_WeaponPartsMods_FM_S_Optics.push(data[i]);
                category_WeaponPartsMods_FM_S_Optics_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f749986f774094242f199") {                       // Weapon parts & mods||Functional mods||Sights||Special purpose sights
                category_WeaponPartsMods_FM_S_SpecialPurposeSights.push(data[i]);
                category_WeaponPartsMods_FM_S_SpecialPurposeSights_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f751486f77447ec5d770c") {                       // Weapon parts & mods||Gear mods||Charging handles
                category_WeaponPartsMods_GM_ChargingHandles.push(data[i]);
                category_WeaponPartsMods_GM_ChargingHandles_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f752e86f774093e6cb505") {                       // Weapon parts & mods||Gear mods||Launchers
                category_WeaponPartsMods_GM_Launchers.push(data[i]);
                category_WeaponPartsMods_GM_Launchers_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f754a86f774094242f19b") {                       // Weapon parts & mods||Gear mods||Magazines
                category_WeaponPartsMods_GM_Magazines.push(data[i]);
                category_WeaponPartsMods_GM_Magazines_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f755f86f77447ec5d770e") {                       // Weapon parts & mods||Gear mods||Mounts
                category_WeaponPartsMods_GM_Mounts.push(data[i]);
                category_WeaponPartsMods_GM_Mounts_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f757486f774093e6cb507") {                       // Weapon parts & mods||Gear mods||Stocks & chassis
                category_WeaponPartsMods_GM_StocksChassis.push(data[i]);
                category_WeaponPartsMods_GM_StocksChassis_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f75c686f774094242f19f") {                       // Weapon parts & mods||Vital parts||Barrels
                category_WeaponPartsMods_VP_Barrels.push(data[i]);
                category_WeaponPartsMods_VP_Barrels_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f760586f774093e6cb509") {                       // Weapon parts & mods||Vital parts||Gas blocks
                category_WeaponPartsMods_VP_GasBlocks.push(data[i]);
                category_WeaponPartsMods_VP_GasBlocks_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f75e486f77447ec5d7712") {                       // Weapon parts & mods||Vital parts||Handguards
                category_WeaponPartsMods_VP_Handguards.push(data[i]);
                category_WeaponPartsMods_VP_Handguards_ref.push(data_ref[i]);} 
            if (data[i].ParentId === "5b5f761f86f774094242f1a1") {                       // Weapon parts & mods||Vital parts||Pistol grips
                category_WeaponPartsMods_VP_PistolGrips.push(data[i]);
                category_WeaponPartsMods_VP_PistolGrips_ref.push(data_ref[i]);} 
            if (data[i].ParentId === "5b5f764186f77447ec5d7714") {                       // Weapon parts & mods||Vital parts||Receivers & slides
                category_WeaponPartsMods_VP_ReceiversSlides.push(data[i]);
                category_WeaponPartsMods_VP_ReceiversSlides_ref.push(data_ref[i]);}
            // ===== WEAPONS =====
            if (data[i].ParentId === "5b5f78e986f77447ed5636b1") {                       // Weapons||Assault carbines
                category_Weapons_AssaultCarbines.push(data[i]);
                category_Weapons_AssaultCarbines_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f78fc86f77409407a7f90") {                       // Weapons||Assault rifles
                category_Weapons_AssaultRifles.push(data[i]);
                category_Weapons_AssaultRifles_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f798886f77447ed5636b5") {                       // Weapons||Bolt-action rifles
                category_Weapons_BoltActionRifles.push(data[i]);
                category_Weapons_BoltActionRifles_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f79d186f774093f2ed3c2") {                       // Weapons||Grenade launchers
                category_Weapons_GrenadeLaunchers.push(data[i]);
                category_Weapons_GrenadeLaunchers_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f79a486f77409407a7f94") {                       // Weapons||Machine guns
                category_Weapons_MachineGuns.push(data[i]);
                category_Weapons_MachineGuns_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f791486f774093f2ed3be") {                       // Weapons||Marksman rifles
                category_Weapons_MarksmanRifles.push(data[i]);
                category_Weapons_MarksmanRifles_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f7a0886f77409407a7f96") {                       // Weapons||Melee weapons
                category_Weapons_MeleeWeapons.push(data[i]);
                category_Weapons_MeleeWeapons_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f792486f77447ed5636b3") {                       // Weapons||Pistols
                category_Weapons_Pistols.push(data[i]);
                category_Weapons_Pistols_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f796a86f774093f2ed3c0") {                       // Weapons||SMGs
                category_Weapons_SMGs.push(data[i]);
                category_Weapons_SMGs_ref.push(data_ref[i]);}    
            if (data[i].ParentId === "5b5f794b86f77409407a7f92") {                       // Weapons||Shotguns
                category_Weapons_Shotguns.push(data[i]);
                category_Weapons_Shotguns_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f79eb86f77447ed5636b7") {                       // Weapons||Special weapons
                category_Weapons_SpecialWeapons.push(data[i]);
                category_Weapons_SpecialWeapons_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b5f7a2386f774093f2ed3c4") {                       // Weapons||Throwables
                category_Weapons_Throwables.push(data[i]);
                category_Weapons_Throwables_ref.push(data_ref[i]);}
            // ===== AMMO =====
            if (data[i].ParentId === "5b47574386f77428ca22b33c") {                       // Ammo||Ammo packs
                category_Ammo_AmmoPacks.push(data[i]);
                category_Ammo_AmmoPacks_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b33b") {                       // Ammo||Rounds
                category_Ammo_Rounds.push(data[i]);
                category_Ammo_Rounds_ref.push(data_ref[i]);}
            // ===== PROVISIONS =====
            if (data[i].ParentId === "5b47574386f77428ca22b335") {                       // Provisions||Drinks
                category_Provisions_Drinks.push(data[i]);
                category_Provisions_Drinks_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b336") {                       // Provisions||Food
                category_Provisions_Food.push(data[i]);
                category_Provisions_Food_ref.push(data_ref[i]);}
            // ===== MEDICATION =====
            if (data[i].ParentId === "5b47574386f77428ca22b33a") {                       // Medication||Injectors
                category_Medication_Injectors.push(data[i]);
                category_Medication_Injectors_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b339") {                       // Medication||Injury treatment
                category_Medication_InjuryTreatment.push(data[i]);
                category_Medication_InjuryTreatment_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b338") {                       // Medication||Medkits
                category_Medication_Medkits.push(data[i]);
                category_Medication_Medkits_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5b47574386f77428ca22b337") {                       // Medication||Pills
                category_Medication_Pills.push(data[i]);
                category_Medication_Pills_ref.push(data_ref[i]);}
            // ===== KEYS =====
            if (data[i].ParentId === "5c518ed586f774119a772aee") {                       // Keys||Electronic keys
                category_Keys_ElectronicKeys.push(data[i]);
                category_Keys_ElectronicKeys_ref.push(data_ref[i]);}
            if (data[i].ParentId === "5c518ec986f7743b68682ce2") {                       // Keys||Mechanical keys
                category_Keys_MechanicalKeys.push(data[i]);
                category_Keys_MechanicalKeys_ref.push(data_ref[i]);}
            // ===== INFO ITEMS =====
            if (data[i].ParentId === "5b47574386f77428ca22b341") {                       // Info items
                category_InfoItems.push(data[i]);
                category_InfoItems_ref.push(data_ref[i]);}
            // ===== SPECIAL EQUIPMENT =====
            if (data[i].ParentId === "5b47574386f77428ca22b345") {                       // Special equipment
                category_SpecialEquipment.push(data[i]);
                category_SpecialEquipment_ref.push(data_ref[i]);}
            // ===== MAPS =====
            if (data[i].ParentId === "5b47574386f77428ca22b343") {                       // Maps
                category_Maps.push(data[i]);
                category_Maps_ref.push(data_ref[i]);}
            // ===== MONEY =====
            if (data[i].ParentId === "5b5f78b786f77447ed5636af") {                       // Money||Roubles,Dollars,Euros
                category_Money.push(data[i]);
                category_Money_ref.push(data_ref[i]);} 
            // ===== MACHINERY KEY ======
            if (data[i].Id === "5937ee6486f77408994ba448") {                             // Machinery Key (direct assignment by ID)
                category_MachineryKey.push(data[i]);
                category_MachineryKey_ref.push(data_ref[i]);}

 
            // ===== AMMO GRENADES =====                                                // used instead of blacklisting category AMMO
            if (data[i].Id === "5656eb674bdc2d35148b457c"|| data[i].Id === "5ede474b0c226a66f5402622"||data[i].Id === "5ede475b549eed7c6d5c18fb"||
            data[i].Id === "5ede4739e0350d05467f73e8"|| data[i].Id === "5f0c892565703e5c461894e9"||data[i].Id === "5ede47405b097655935d7d16"||
            data[i].Id === "5ede475339ee016e8c534742" || data[i].Id === "5e2af51086f7746d3f3c3402") {
                category_Ammo_Grenades.push(data[i]);
                category_Ammo_Grenades_ref.push(data_ref[i]);}

            // ===== MEDICAL ADDON =====                                                // used instead of blacklisting categories from type barter
            if (data[i].Id === "5d4041f086f7743cac3f22a7"|| data[i].Id === "5c13cef886f774072e618e82"||data[i].Id === "57347c93245977448d35f6e3"||
            data[i].Id === "5c13cd2486f774072c757944") {
                category_MedicalAddOn.push(data[i]);
                category_MedicalAddOn_ref.push(data_ref[i]);}

            // ===== RATIONS ADDON =====                                                // used instead of blacklisting category from type barter
            if (data[i].Id === "62a09ee4cf4a99369e262453" || data[i].Id === "5bc9be8fd4351e00334cae6e" ||data[i].Id === "573475fb24597737fb1379e1" ||
			data[i].Id === "5e54f6af86f7742199090bf3" || data[i].Id === "5af0484c86f7740f02001f7f" || data[i].Id === "573476d324597737da2adc13" ||
			data[i].Id === "6389c6463485cf0eeb260715" || data[i].Id === "5734770f24597738025ee254" || data[i].Id === "573476f124597737e04bf328") {
                category_RationsAddOn.push(data[i]);
                category_RationsAddOn_ref.push(data_ref[i]);}

            // DEBUG
            /* if(data[i].Id === "5c0a840b86f7742ffa4f2482") {
                category_DEBUG.push(data[i]);
                category_DEBUG_ref.push(data_ref[i]);} */
            

        }



        if(this.config.removeBackpackRestrictions === true)
        {
            const backpacks = tables.templates.items;
            category_Gear_Backpacks.forEach(item => {
                backpacks[item.Id]._props.Grids[0]._props.filters = [];
            });
        }

        // items for Shturman's Stash (that normally should contain high tier items)
        // create another array that only contains items above a certain value
        let allHandbookItemsForShturmansStash = [];
        allHandbookItemsForShturmansStash = allHandbookItemsForShturmansStash.concat(
            category_Barter_Valuables,
            category_Gear_GearComponents,category_Gear_Headgear,
            category_Gear_Headsets,
            category_WeaponPartsMods_FM_Bipods,category_WeaponPartsMods_FM_Foregrips,category_WeaponPartsMods_FM_LLD_Flashlights,
            category_WeaponPartsMods_FM_LLD_LaserTargetPointers,category_WeaponPartsMods_FM_LLD_TacticalComboDevices,category_WeaponPartsMods_FM_MD_FlashhidersBrakes,
            category_WeaponPartsMods_FM_MD_Suppressors,category_WeaponPartsMods_FM_S_AssaultScopes,
            category_WeaponPartsMods_FM_S_Collimators,category_WeaponPartsMods_FM_S_CompactCollimators,
            category_WeaponPartsMods_FM_S_Optics,category_WeaponPartsMods_FM_S_SpecialPurposeSights,
            category_WeaponPartsMods_GM_Launchers,category_WeaponPartsMods_GM_Magazines,category_WeaponPartsMods_GM_Mounts,category_WeaponPartsMods_GM_StocksChassis,
            category_WeaponPartsMods_VP_Barrels,category_WeaponPartsMods_VP_GasBlocks,category_WeaponPartsMods_VP_Handguards,category_WeaponPartsMods_VP_PistolGrips,
            category_WeaponPartsMods_VP_ReceiversSlides,
            category_Weapons_AssaultCarbines,category_Weapons_AssaultRifles,category_Weapons_BoltActionRifles,category_Weapons_GrenadeLaunchers,
            category_Weapons_MachineGuns,category_Weapons_MarksmanRifles,category_Weapons_MeleeWeapons,category_Weapons_Pistols,
            category_Weapons_SMGs,category_Weapons_Shotguns,category_Weapons_SpecialWeapons,category_Weapons_Throwables,
            category_Ammo_AmmoPacks,category_Ammo_Rounds,
            category_InfoItems);

        const category_ShturmansStash = [];
        const minValueShturman = this.config.container_ShturmansStash_MinValuePerItem;
        const maxValueShturman = this.config.container_ShturmansStash_MaxValuePerItem;
        allHandbookItemsForShturmansStash.forEach(item => {
            if (item.Price > minValueShturman && item.Price < maxValueShturman)
                category_ShturmansStash.push(item);
        });

        // items for Weapon Box 5x5 (less categories allow more weapon/gear spawns)
        // create another array that only contains items above a certain value -> allows spawn of Red Rebel
        let allHandbookItemsForWeaponBox5x5 = [];
        allHandbookItemsForWeaponBox5x5 = allHandbookItemsForWeaponBox5x5.concat(
            category_Gear_BodyArmor,category_Gear_Headgear,category_Gear_Headsets,category_Gear_TacticalRigs,
            category_WeaponPartsMods_FM_Bipods,category_WeaponPartsMods_FM_Foregrips,category_WeaponPartsMods_FM_LLD_Flashlights,
            category_WeaponPartsMods_FM_LLD_LaserTargetPointers,category_WeaponPartsMods_FM_LLD_TacticalComboDevices,category_WeaponPartsMods_FM_MD_FlashhidersBrakes,
            category_WeaponPartsMods_FM_MD_Suppressors,category_WeaponPartsMods_FM_S_AssaultScopes,
            category_WeaponPartsMods_FM_S_Collimators,category_WeaponPartsMods_FM_S_CompactCollimators,
            category_WeaponPartsMods_FM_S_Optics,category_WeaponPartsMods_FM_S_SpecialPurposeSights,
            category_WeaponPartsMods_GM_Launchers,category_WeaponPartsMods_GM_Magazines,
            category_WeaponPartsMods_VP_Barrels,category_WeaponPartsMods_VP_Handguards,category_WeaponPartsMods_VP_PistolGrips,
            category_WeaponPartsMods_VP_ReceiversSlides,
            category_Weapons_AssaultCarbines,category_Weapons_AssaultRifles,category_Weapons_BoltActionRifles,category_Weapons_GrenadeLaunchers,
            category_Weapons_MachineGuns,category_Weapons_MarksmanRifles,category_Weapons_MeleeWeapons,category_Weapons_Pistols,
            category_Weapons_SMGs,category_Weapons_Shotguns,category_Weapons_SpecialWeapons);

        const category_WeaponBox5x5 = [];
        const minValueWeaponBox5x5 = this.config.container_WeaponBox5x5_MinValuePerItem;
        const maxValueWeaponBox5x5 = this.config.container_WeaponBox5x5_MaxValuePerItem;
        allHandbookItemsForWeaponBox5x5.forEach(item => {
            if (item.Price > minValueWeaponBox5x5 && item.Price < maxValueWeaponBox5x5)
                category_WeaponBox5x5.push(item);
        });


        // items for Weapon Box 6x3 (less categories allow more weapon/gear spawns)
        // create another array that only contains items above a certain value
        let allHandbookItemsForWeaponBox6x3 = [];
        allHandbookItemsForWeaponBox6x3 = allHandbookItemsForWeaponBox6x3.concat(
            category_Gear_BodyArmor,category_Gear_Headgear,category_Gear_Headsets,category_Gear_TacticalRigs,
            category_WeaponPartsMods_FM_Bipods,category_WeaponPartsMods_FM_Foregrips,category_WeaponPartsMods_FM_LLD_Flashlights,
            category_WeaponPartsMods_FM_LLD_LaserTargetPointers,category_WeaponPartsMods_FM_LLD_TacticalComboDevices,category_WeaponPartsMods_FM_MD_FlashhidersBrakes,
            category_WeaponPartsMods_FM_MD_Suppressors,category_WeaponPartsMods_FM_S_AssaultScopes,
            category_WeaponPartsMods_FM_S_Collimators,category_WeaponPartsMods_FM_S_CompactCollimators,
            category_WeaponPartsMods_FM_S_Optics,category_WeaponPartsMods_FM_S_SpecialPurposeSights,
            category_WeaponPartsMods_GM_Launchers,category_WeaponPartsMods_GM_Magazines,
            category_WeaponPartsMods_VP_Barrels,category_WeaponPartsMods_VP_Handguards,category_WeaponPartsMods_VP_PistolGrips,
            category_WeaponPartsMods_VP_ReceiversSlides,
            category_Weapons_AssaultCarbines,category_Weapons_AssaultRifles,category_Weapons_BoltActionRifles,category_Weapons_GrenadeLaunchers,
            category_Weapons_MachineGuns,category_Weapons_MarksmanRifles,category_Weapons_MeleeWeapons,category_Weapons_Pistols,
            category_Weapons_SMGs,category_Weapons_Shotguns,category_Weapons_SpecialWeapons);

        const category_WeaponBox6x3 = [];
        const minValueWeaponBox6x3 = this.config.container_WeaponBox6x3_MinValuePerItem;
        const maxValueWeaponBox6x3 = this.config.container_WeaponBox6x3_MaxValuePerItem;
        allHandbookItemsForWeaponBox6x3.forEach(item => {
            if (item.Price > minValueWeaponBox6x3 && item.Price < maxValueWeaponBox6x3)
                category_WeaponBox6x3.push(item);
        });


        

        // DEBUG
        // Put all handbook items in one array for DEBUG purposes
        
        if (this.config.showItemListing)
        { 
            let allHandbookItems = [];
            allHandbookItems = allHandbookItems.concat(
                category_Barter_Others,category_Barter_BuildingMaterials,category_Barter_Electronics,category_Barter_EnergyElements,category_Barter_FlammableMaterials,
                category_Barter_HouseholdMaterials,category_Barter_MedicalSupplies,category_Barter_Tools,category_Barter_Valuables,
                category_Gear_Backpacks,category_Gear_BodyArmor,category_Gear_Eyewear,category_Gear_Facecovers,category_Gear_GearComponents,category_Gear_Headgear,
                category_Gear_Headsets,category_Gear_SecureContainers,category_Gear_StorageContainers,category_Gear_TacticalRigs,
                category_WeaponPartsMods_FM_AuxiliaryParts,category_WeaponPartsMods_FM_Bipods,category_WeaponPartsMods_FM_Foregrips,category_WeaponPartsMods_FM_LLD_Flashlights,
                category_WeaponPartsMods_FM_LLD_LaserTargetPointers,category_WeaponPartsMods_FM_LLD_TacticalComboDevices,category_WeaponPartsMods_FM_MD_FlashhidersBrakes,
                category_WeaponPartsMods_FM_MD_MuzzleAdapters,category_WeaponPartsMods_FM_MD_Suppressors,category_WeaponPartsMods_FM_S_AssaultScopes,
                category_WeaponPartsMods_FM_S_Collimators,category_WeaponPartsMods_FM_S_CompactCollimators,category_WeaponPartsMods_FM_S_IronSights,
                category_WeaponPartsMods_FM_S_Optics,category_WeaponPartsMods_FM_S_SpecialPurposeSights,category_WeaponPartsMods_GM_ChargingHandles,
                category_WeaponPartsMods_GM_Launchers,category_WeaponPartsMods_GM_Magazines,category_WeaponPartsMods_GM_Mounts,category_WeaponPartsMods_GM_StocksChassis,
                category_WeaponPartsMods_VP_Barrels,category_WeaponPartsMods_VP_GasBlocks,category_WeaponPartsMods_VP_Handguards,category_WeaponPartsMods_VP_PistolGrips,
                category_WeaponPartsMods_VP_ReceiversSlides,
                category_Weapons_AssaultCarbines,category_Weapons_AssaultRifles,category_Weapons_BoltActionRifles,category_Weapons_GrenadeLaunchers,
                category_Weapons_MachineGuns,category_Weapons_MarksmanRifles,category_Weapons_MeleeWeapons,category_Weapons_Pistols,
                category_Weapons_SMGs,category_Weapons_Shotguns,category_Weapons_SpecialWeapons,category_Weapons_Throwables,
                category_Ammo_AmmoPacks,category_Ammo_Rounds,
                category_Provisions_Drinks,category_Provisions_Food,
                category_Medication_Injectors,category_Medication_InjuryTreatment,category_Medication_Medkits,category_Medication_Pills,
                category_Keys_ElectronicKeys,category_Keys_MechanicalKeys,
                category_InfoItems,
                category_SpecialEquipment,
                category_Maps,
                category_Money);


           
            // DEBUG (All items before adjustment)
            this.logger.error("All " + allHandbookItems.length + " items with corresponding prices from Handbook");

            // Item IDs, names, prices
            allHandbookItems.forEach(item => {
                const propertyName = `${item.Id} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning("ID: " + item.Id + " || Name: " + value + " || Price: "+ item.Price);
            });

            // Item IDs only
            /* allHandbookItems.forEach(item => {
                this.logger.warning(item.Id);
            });

            // Item names only
            allHandbookItems.forEach(item => {
                const propertyName = `${item.Id} Name`;
                const value = jsonData[propertyName];
                this.logger.warning(value);
            });

            // Item prices only
            allHandbookItems.forEach(item => {
                this.logger.warning(item.Price);
            }); */
        }
        


        // adjust the spawn rate here (so it's easier to assign rates to certain categories)
        // ===== BARTER ITEMS =====
        for (let i=0; i<category_Barter_Others.length;i++)
            this.adjustSpawnRate(category_Barter_Others[i],category_Barter_Others_ref[i],LootType.BARTER_OTHERS);
        for (let i=0; i<category_Barter_BuildingMaterials.length;i++)
            this.adjustSpawnRate(category_Barter_BuildingMaterials[i],category_Barter_BuildingMaterials_ref[i],LootType.BARTER_BUILDINGMATERIALS);
        for (let i=0; i<category_Barter_Electronics.length;i++)
            this.adjustSpawnRate(category_Barter_Electronics[i],category_Barter_Electronics_ref[i],LootType.BARTER_ELECTRONICS);
        for (let i=0; i<category_Barter_EnergyElements.length;i++)
            this.adjustSpawnRate(category_Barter_EnergyElements[i],category_Barter_EnergyElements_ref[i],LootType.BARTER_ENERGYELEMENTS);
        for (let i=0; i<category_Barter_FlammableMaterials.length;i++)
            this.adjustSpawnRate(category_Barter_FlammableMaterials[i],category_Barter_FlammableMaterials_ref[i],LootType.BARTER_FLAMMABLEMATERIALS);
        for (let i=0; i<category_Barter_HouseholdMaterials.length;i++)
            this.adjustSpawnRate(category_Barter_HouseholdMaterials[i],category_Barter_HouseholdMaterials_ref[i],LootType.BARTER_HOUSEHOLDMATERIALS);
        for (let i=0; i<category_Barter_MedicalSupplies.length;i++)
            this.adjustSpawnRate(category_Barter_MedicalSupplies[i],category_Barter_MedicalSupplies_ref[i],LootType.BARTER_MEDICALSUPPLIES);
        for (let i=0; i<category_Barter_Tools.length;i++)
            this.adjustSpawnRate(category_Barter_Tools[i],category_Barter_Tools_ref[i],LootType.BARTER_TOOLS);
        for (let i=0; i<category_Barter_Valuables.length;i++)
            this.adjustSpawnRate(category_Barter_Valuables[i],category_Barter_Valuables_ref[i],LootType.BARTER_VALUABLES);
        // ===== GEAR =====
        for (let i=0; i<category_Gear_Backpacks.length;i++)
            this.adjustSpawnRate(category_Gear_Backpacks[i],category_Gear_Backpacks_ref[i],LootType.GEAR_BACKPACKS);
        for (let i=0; i<category_Gear_BodyArmor.length;i++)
            this.adjustSpawnRate(category_Gear_BodyArmor[i],category_Gear_BodyArmor_ref[i],LootType.GEAR_BODYARMOR);
        for (let i=0; i<category_Gear_Eyewear.length;i++)
            this.adjustSpawnRate(category_Gear_Eyewear[i],category_Gear_Eyewear_ref[i],LootType.GEAR_EYEWEAR);
        for (let i=0; i<category_Gear_Facecovers.length;i++)
            this.adjustSpawnRate(category_Gear_Facecovers[i],category_Gear_Facecovers_ref[i],LootType.GEAR_FACECOVERS);
        for (let i=0; i<category_Gear_GearComponents.length;i++)
            this.adjustSpawnRate(category_Gear_GearComponents[i],category_Gear_GearComponents_ref[i],LootType.GEAR_GEARCOMPONENTS);
        for (let i=0; i<category_Gear_Headgear.length;i++)
            this.adjustSpawnRate(category_Gear_Headgear[i],category_Gear_Headgear_ref[i],LootType.GEAR_HEADGEAR);
        for (let i=0; i<category_Gear_Headsets.length;i++)
            this.adjustSpawnRate(category_Gear_Headsets[i],category_Gear_Headsets_ref[i],LootType.GEAR_HEADSETS);
        for (let i=0; i<category_Gear_SecureContainers.length;i++)
            this.adjustSpawnRate(category_Gear_SecureContainers[i],category_Gear_SecureContainers_ref[i],LootType.GEAR_SECURECONTAINERS);
        for (let i=0; i<category_Gear_StorageContainers.length;i++)
            this.adjustSpawnRate(category_Gear_StorageContainers[i],category_Gear_StorageContainers_ref[i],LootType.GEAR_STORAGECONTAINERS);
        for (let i=0; i<category_Gear_TacticalRigs.length;i++)
            this.adjustSpawnRate(category_Gear_TacticalRigs[i],category_Gear_TacticalRigs_ref[i],LootType.GEAR_TACTICALRIGS);
        // ===== WEAPON PART & MODS =====
        for (let i=0; i<category_WeaponPartsMods_FM_AuxiliaryParts.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_AuxiliaryParts[i],category_WeaponPartsMods_FM_AuxiliaryParts_ref[i],LootType.WPM_FM_AUXILIARYPARTS);
        for (let i=0; i<category_WeaponPartsMods_FM_Bipods.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_Bipods[i],category_WeaponPartsMods_FM_Bipods_ref[i],LootType.WPM_FM_BIPODS);
        for (let i=0; i<category_WeaponPartsMods_FM_Foregrips.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_Foregrips[i],category_WeaponPartsMods_FM_Foregrips_ref[i],LootType.WPM_FM_FOREGRIPS);
        for (let i=0; i<category_WeaponPartsMods_FM_LLD_Flashlights.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_LLD_Flashlights[i],category_WeaponPartsMods_FM_LLD_Flashlights_ref[i],LootType.WPM_FM_LLD_FLASHLIGHTS);
        for (let i=0; i<category_WeaponPartsMods_FM_LLD_LaserTargetPointers.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_LLD_LaserTargetPointers[i],category_WeaponPartsMods_FM_LLD_LaserTargetPointers_ref[i],LootType.WPM_FM_LLD_LASERTARGETPOINTERS);
        for (let i=0; i<category_WeaponPartsMods_FM_LLD_TacticalComboDevices.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_LLD_TacticalComboDevices[i],category_WeaponPartsMods_FM_LLD_TacticalComboDevices_ref[i],LootType.WPM_FM_LLD_TACTICALCOMBODEVICES);
        for (let i=0; i<category_WeaponPartsMods_FM_MD_FlashhidersBrakes.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_MD_FlashhidersBrakes[i],category_WeaponPartsMods_FM_MD_FlashhidersBrakes_ref[i],LootType.WPM_FM_MD_FLASHHIDERSBRAKES);
        for (let i=0; i<category_WeaponPartsMods_FM_MD_MuzzleAdapters.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_MD_MuzzleAdapters[i],category_WeaponPartsMods_FM_MD_MuzzleAdapters_ref[i],LootType.WPM_FM_MD_MUZZLEADAPTERS);
        for (let i=0; i<category_WeaponPartsMods_FM_MD_Suppressors.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_MD_Suppressors[i],category_WeaponPartsMods_FM_MD_Suppressors_ref[i],LootType.WPM_FM_MD_SUPPRESSORS);
        for (let i=0; i<category_WeaponPartsMods_FM_S_AssaultScopes.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_AssaultScopes[i],category_WeaponPartsMods_FM_S_AssaultScopes_ref[i],LootType.WPM_FM_S_ASSAULTSCOPES);
        for (let i=0; i<category_WeaponPartsMods_FM_S_Collimators.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_Collimators[i],category_WeaponPartsMods_FM_S_Collimators_ref[i],LootType.WPM_FM_S_COLLIMATORS);
        for (let i=0; i<category_WeaponPartsMods_FM_S_CompactCollimators.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_CompactCollimators[i],category_WeaponPartsMods_FM_S_CompactCollimators_ref[i],LootType.WPM_FM_S_COMPACTCOLLIMATORS);
        for (let i=0; i<category_WeaponPartsMods_FM_S_IronSights.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_IronSights[i],category_WeaponPartsMods_FM_S_IronSights_ref[i],LootType.WPM_FM_S_IRONSIGHTS);
        for (let i=0; i<category_WeaponPartsMods_FM_S_Optics.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_Optics[i],category_WeaponPartsMods_FM_S_Optics_ref[i],LootType.WPM_FM_S_OPTICS);
        for (let i=0; i<category_WeaponPartsMods_FM_S_SpecialPurposeSights.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_SpecialPurposeSights[i],category_WeaponPartsMods_FM_S_SpecialPurposeSights_ref[i],LootType.WPM_FM_S_SPECIALPURPOSESIGHTS);
        for (let i=0; i<category_WeaponPartsMods_GM_ChargingHandles.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_ChargingHandles[i],category_WeaponPartsMods_GM_ChargingHandles_ref[i],LootType.WPM_GM_CHARGINGHANDLES);
        for (let i=0; i<category_WeaponPartsMods_GM_Launchers.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_Launchers[i],category_WeaponPartsMods_GM_Launchers_ref[i],LootType.WPM_GM_LAUNCHERS);
        for (let i=0; i<category_WeaponPartsMods_GM_Magazines.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_Magazines[i],category_WeaponPartsMods_GM_Magazines_ref[i],LootType.WPM_GM_MAGAZINES);
        for (let i=0; i<category_WeaponPartsMods_GM_Mounts.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_Mounts[i],category_WeaponPartsMods_GM_Mounts_ref[i],LootType.WPM_GM_MOUNTS);
        for (let i=0; i<category_WeaponPartsMods_GM_StocksChassis.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_StocksChassis[i],category_WeaponPartsMods_GM_StocksChassis_ref[i],LootType.WPM_GM_STOCKSCHASSIS);
        for (let i=0; i<category_WeaponPartsMods_VP_Barrels.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_Barrels[i],category_WeaponPartsMods_VP_Barrels_ref[i],LootType.WPM_VP_BARRELS);
        for (let i=0; i<category_WeaponPartsMods_VP_GasBlocks.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_GasBlocks[i],category_WeaponPartsMods_VP_GasBlocks_ref[i],LootType.WPM_VP_GASBLOCKS);
        for (let i=0; i<category_WeaponPartsMods_VP_Handguards.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_Handguards[i],category_WeaponPartsMods_VP_Handguards_ref[i],LootType.WPM_VP_HANDGUARDS);
        for (let i=0; i<category_WeaponPartsMods_VP_PistolGrips.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_PistolGrips[i],category_WeaponPartsMods_VP_PistolGrips_ref[i],LootType.WPM_VP_PISTOLGRIPS);
        for (let i=0; i<category_WeaponPartsMods_VP_ReceiversSlides.length;i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_ReceiversSlides[i],category_WeaponPartsMods_VP_ReceiversSlides_ref[i],LootType.WPM_VP_RECEIVERSSLIDES);
        // ===== WEAPONS =====
        for (let i=0; i<category_Weapons_AssaultCarbines.length;i++)
            this.adjustSpawnRate(category_Weapons_AssaultCarbines[i],category_Weapons_AssaultCarbines_ref[i],LootType.WEAPONS_ASSAULTCARBINES);
        for (let i=0; i<category_Weapons_AssaultRifles.length;i++)
            this.adjustSpawnRate(category_Weapons_AssaultRifles[i],category_Weapons_AssaultRifles_ref[i],LootType.WEAPONS_ASSAULTRIFLES);
        for (let i=0; i<category_Weapons_BoltActionRifles.length;i++)
            this.adjustSpawnRate(category_Weapons_BoltActionRifles[i],category_Weapons_BoltActionRifles_ref[i],LootType.WEAPONS_BOLTACTIONRIFLES);
        for (let i=0; i<category_Weapons_GrenadeLaunchers.length;i++)
            this.adjustSpawnRate(category_Weapons_GrenadeLaunchers[i],category_Weapons_GrenadeLaunchers_ref[i],LootType.WEAPONS_GRENADELAUNCHERS);
        for (let i=0; i<category_Weapons_MachineGuns.length;i++)
            this.adjustSpawnRate(category_Weapons_MachineGuns[i],category_Weapons_MachineGuns_ref[i],LootType.WEAPONS_MACHINEGUNS);
        for (let i=0; i<category_Weapons_MarksmanRifles.length;i++)
            this.adjustSpawnRate(category_Weapons_MarksmanRifles[i],category_Weapons_MarksmanRifles_ref[i],LootType.WEAPONS_MARKSMANRIFLES);
        for (let i=0; i<category_Weapons_MeleeWeapons.length;i++)
            this.adjustSpawnRate(category_Weapons_MeleeWeapons[i],category_Weapons_MeleeWeapons_ref[i],LootType.WEAPONS_MELEEWEAPONS);
        for (let i=0; i<category_Weapons_Pistols.length;i++)
            this.adjustSpawnRate(category_Weapons_Pistols[i],category_Weapons_Pistols_ref[i],LootType.WEAPONS_PISTOLS);
        for (let i=0; i<category_Weapons_SMGs.length;i++)
            this.adjustSpawnRate(category_Weapons_SMGs[i],category_Weapons_SMGs_ref[i],LootType.WEAPONS_SMGS);
        for (let i=0; i<category_Weapons_Shotguns.length;i++)
            this.adjustSpawnRate(category_Weapons_Shotguns[i],category_Weapons_Shotguns_ref[i],LootType.WEAPONS_SHOTGUNS);
        for (let i=0; i<category_Weapons_SpecialWeapons.length;i++)
            this.adjustSpawnRate(category_Weapons_SpecialWeapons[i],category_Weapons_SpecialWeapons_ref[i],LootType.WEAPONS_SPECIALWEAPONS);
        for (let i=0; i<category_Weapons_Throwables.length;i++)
            this.adjustSpawnRate(category_Weapons_Throwables[i],category_Weapons_Throwables_ref[i],LootType.WEAPONS_THROWABLES);
        // ===== AMMO =====
        for (let i=0; i<category_Ammo_AmmoPacks.length;i++)
            this.adjustSpawnRate(category_Ammo_AmmoPacks[i],category_Ammo_AmmoPacks_ref[i],LootType.AMMO_AMMOPACKS);
        for (let i=0; i<category_Ammo_Rounds.length;i++)
            this.adjustSpawnRate(category_Ammo_Rounds[i],category_Ammo_Rounds_ref[i],LootType.AMMO_ROUNDS);
        // ===== PROVISIONS =====
        for (let i=0; i<category_Provisions_Drinks.length;i++)
            this.adjustSpawnRate(category_Provisions_Drinks[i],category_Provisions_Drinks_ref[i],LootType.PROVISIONS_DRINKS);
        for (let i=0; i<category_Provisions_Food.length;i++)
            this.adjustSpawnRate(category_Provisions_Food[i],category_Provisions_Food_ref[i],LootType.PROVISIONS_FOOD);
        // ===== MEDICATION =====
        for (let i=0; i<category_Medication_Injectors.length;i++)
            this.adjustSpawnRate(category_Medication_Injectors[i],category_Medication_Injectors_ref[i],LootType.MEDICATION_INJECTORS);
        for (let i=0; i<category_Medication_InjuryTreatment.length;i++)
            this.adjustSpawnRate(category_Medication_InjuryTreatment[i],category_Medication_InjuryTreatment_ref[i],LootType.MEDICATION_INJURYTREATMENT);
        for (let i=0; i<category_Medication_Medkits.length;i++)
            this.adjustSpawnRate(category_Medication_Medkits[i],category_Medication_Medkits_ref[i],LootType.MEDICATION_MEDKITS);
        for (let i=0; i<category_Medication_Pills.length;i++)
            this.adjustSpawnRate(category_Medication_Pills[i],category_Medication_Pills_ref[i],LootType.MEDICATION_PILLS);
        // ===== KEYS =====
        for (let i=0; i<category_Keys_ElectronicKeys.length;i++)
            this.adjustSpawnRate(category_Keys_ElectronicKeys[i],category_Keys_ElectronicKeys_ref[i],LootType.KEYS_ELECTRONICKEYS);
        for (let i=0; i<category_Keys_MechanicalKeys.length;i++)
            this.adjustSpawnRate(category_Keys_MechanicalKeys[i],category_Keys_MechanicalKeys_ref[i],LootType.KEYS_MECHANICALKEYS);
        // ===== INFO ITEMS =====
        for (let i=0; i<category_InfoItems.length;i++)
            this.adjustSpawnRate(category_InfoItems[i],category_InfoItems_ref[i],LootType.INFOITEMS);
        // ===== SPECIAL EQUIPMENT =====
        for (let i=0; i<category_SpecialEquipment.length;i++)
            this.adjustSpawnRate(category_SpecialEquipment[i],category_SpecialEquipment_ref[i],LootType.SPECIALEQUIPMENT);
        // ===== MAPS =====
        for (let i=0; i<category_Maps.length;i++)
            this.adjustSpawnRate(category_Maps[i],category_Maps_ref[i],LootType.MAPS);
        // ===== MONEY =====
        for (let i=0; i<category_Money.length;i++)
            this.adjustSpawnRate(category_Money[i],category_Money_ref[i],LootType.MONEY);
      



        // Create container type pre-assignment
        // ===== Loot - Drawers =====
        let loot_Drawers = [];
        loot_Drawers = loot_Drawers.concat(
            category_Barter_Others,
            category_Barter_BuildingMaterials,
            category_Barter_Electronics,
            category_Barter_EnergyElements,
            category_Keys_ElectronicKeys,
            category_Keys_MechanicalKeys,
            category_InfoItems,
            category_SpecialEquipment,
            category_Maps);
        loot_Drawers = this.removeBlacklistedItems(loot_Drawers, LootGlobalType.DRAWER);
        // ===== Loot - Jackets =====
        let loot_Jackets = [];
        loot_Jackets = loot_Jackets.concat(
            category_Barter_Others,
            category_Barter_BuildingMaterials,
            category_Barter_Electronics,
            category_Barter_EnergyElements,
            category_Barter_FlammableMaterials,
            category_Barter_Tools,
            category_Keys_MechanicalKeys,
            category_SpecialEquipment);
        loot_Jackets = this.removeBlacklistedItems(loot_Jackets, LootGlobalType.JACKET);
        // ===== Loot - Weapon cases =====
        let loot_WeaponBoxGlobal = [];
        loot_WeaponBoxGlobal = loot_WeaponBoxGlobal.concat(
            category_Gear_BodyArmor,
            category_Gear_Eyewear,
            category_Gear_Facecovers,
            category_Gear_GearComponents,
            category_Gear_Headgear,
            category_Gear_Headsets,
            category_Gear_TacticalRigs,
            category_WeaponPartsMods_FM_AuxiliaryParts,
            category_WeaponPartsMods_FM_Bipods,
            category_WeaponPartsMods_FM_Foregrips,
            category_WeaponPartsMods_FM_LLD_Flashlights,
            category_WeaponPartsMods_FM_LLD_LaserTargetPointers,
            category_WeaponPartsMods_FM_LLD_TacticalComboDevices,
            category_WeaponPartsMods_FM_MD_FlashhidersBrakes,
            category_WeaponPartsMods_FM_MD_MuzzleAdapters,
            category_WeaponPartsMods_FM_MD_Suppressors,
            category_WeaponPartsMods_FM_S_AssaultScopes,
            category_WeaponPartsMods_FM_S_Collimators,
            category_WeaponPartsMods_FM_S_CompactCollimators,
            category_WeaponPartsMods_FM_S_IronSights,
            category_WeaponPartsMods_FM_S_Optics,
            category_WeaponPartsMods_FM_S_SpecialPurposeSights,
            category_WeaponPartsMods_GM_ChargingHandles,
            category_WeaponPartsMods_GM_Launchers,
            category_WeaponPartsMods_GM_Magazines,
            category_WeaponPartsMods_GM_Mounts,
            category_WeaponPartsMods_GM_StocksChassis,
            category_WeaponPartsMods_VP_Barrels,
            category_WeaponPartsMods_VP_GasBlocks,
            category_WeaponPartsMods_VP_Handguards,
            category_WeaponPartsMods_VP_PistolGrips,
            category_WeaponPartsMods_VP_ReceiversSlides,
            category_Weapons_AssaultCarbines,
            category_Weapons_AssaultRifles,
            category_Weapons_BoltActionRifles,
            category_Weapons_GrenadeLaunchers,
            category_Weapons_MachineGuns,
            category_Weapons_MarksmanRifles,
            category_Weapons_MeleeWeapons,
            category_Weapons_Pistols,
            category_Weapons_SMGs,
            category_Weapons_Shotguns,
            category_Weapons_SpecialWeapons,
            category_Ammo_AmmoPacks,
            category_Ammo_Rounds,
            category_Ammo_Grenades);
        loot_WeaponBoxGlobal = this.removeBlacklistedItems(loot_WeaponBoxGlobal, LootGlobalType.WEAPONBOXGLOBAL);
        // ===== Loot - Cashes =====
        let loot_Caches = [];
        loot_Caches = loot_Caches.concat(
            category_Barter_Others,
            category_Barter_BuildingMaterials,
            category_Barter_Electronics,
            category_Barter_EnergyElements,
            category_Barter_FlammableMaterials,
            category_Barter_HouseholdMaterials,
            category_Barter_MedicalSupplies,
            category_Barter_Tools,
            category_Barter_Valuables,
            category_Gear_BodyArmor,
            category_Gear_Eyewear,
            category_Gear_Facecovers,
            category_Gear_GearComponents,
            category_Gear_Headgear,
            category_Gear_Headsets,
            category_Gear_StorageContainers,
            category_Gear_TacticalRigs,
            category_Provisions_Drinks,
            category_Provisions_Food,
            category_Medication_Injectors,
            category_Medication_InjuryTreatment,
            category_Medication_Medkits,
            category_Medication_Pills,
            category_InfoItems,
            category_SpecialEquipment,
            category_Maps);
        loot_Caches = this.removeBlacklistedItems(loot_Caches, LootGlobalType.CACHE);
        // ===== Loot - Duffle bag =====
        let loot_DuffleBag = [];
        loot_DuffleBag = loot_DuffleBag.concat(
            category_Barter_Others,
            category_Barter_BuildingMaterials,
            category_Barter_Electronics,
            category_Barter_EnergyElements,
            category_Barter_FlammableMaterials,
            category_Barter_HouseholdMaterials,
            category_Barter_MedicalSupplies,
            category_Barter_Tools,
            category_Barter_Valuables,
            category_Provisions_Drinks,
            category_Provisions_Food,
            category_Medication_Injectors,
            category_Medication_InjuryTreatment,
            category_Medication_Medkits,
            category_Medication_Pills,
            category_InfoItems,
            category_SpecialEquipment,
            category_Maps);
        loot_DuffleBag = this.removeBlacklistedItems(loot_DuffleBag, LootGlobalType.DUFFLEBAG);
        // ===== Loot - Medical =====
        let loot_Medical = [];
        loot_Medical = loot_Medical.concat(
            category_Barter_MedicalSupplies,
            category_Medication_Injectors,
            category_Medication_InjuryTreatment,
            category_Medication_Medkits,
            category_Medication_Pills,
            category_MedicalAddOn);
        // ===== Loot - Technical =====
        let loot_Technical = [];
        loot_Technical = loot_Technical.concat(
            category_Barter_Others,
            category_Barter_BuildingMaterials,
            category_Barter_Electronics,
            category_Barter_EnergyElements,
            category_Barter_FlammableMaterials,
            category_Barter_Tools,
            category_Gear_StorageContainers,
            category_SpecialEquipment);
        loot_Technical = this.removeBlacklistedItems(loot_Technical, LootGlobalType.TECHNICAL);
        // ===== Loot - Rations =====
        let loot_Rations = [];
        loot_Rations = loot_Rations.concat(
            category_Provisions_Drinks,
            category_Provisions_Food,
            category_RationsAddOn);
        loot_Rations = this.removeBlacklistedItems(loot_Rations, LootGlobalType.RATIONS);
        // ===== Loot - PC Block =====
        let loot_PCBlock = [];
        loot_PCBlock = category_Barter_Electronics;
        loot_PCBlock = this.removeBlacklistedItems(loot_PCBlock, LootGlobalType.PCBLOCK);
        // ===== Loot - Safes =====
        let loot_Safes = [];
        loot_Safes = loot_Safes.concat(
            category_Barter_Valuables,
            category_InfoItems,
            category_Money);
        loot_Safes = this.removeBlacklistedItems(loot_Safes, LootGlobalType.SAFE);
        // ===== Loot - Ammo =====
        let loot_Ammo = [];
        loot_Ammo = loot_Ammo.concat(
            category_Ammo_AmmoPacks,
            category_Ammo_Rounds);
        loot_Ammo = this.removeBlacklistedItems(loot_Ammo, LootGlobalType.AMMO);
        // ===== Loot - Grenades =====
        let loot_Grenades = [];
        loot_Grenades = loot_Grenades.concat(
            category_Weapons_Throwables,
            category_Ammo_Grenades);
        // ===== Loot - Money =====
        let loot_Money = [];
        loot_Money = loot_Money.concat(
            category_Money);
        // ===== Loot - Money Roubles only =====
        let loot_Money_RoublesOnly = [];
        loot_Money_RoublesOnly = loot_Money_RoublesOnly.concat(
            category_Money);
        loot_Money_RoublesOnly = this.removeBlacklistedItems(loot_Money_RoublesOnly, LootGlobalType.REGISTERROUBLES);
        // ===== Loot - Machinery Key Jacket =====
        let loot_JacketMachineryKey = [];
        loot_JacketMachineryKey = loot_JacketMachineryKey.concat(
            category_MachineryKey);
        // ===== Loot - Shturman's Stash =====
        let loot_ShturmansStash = [];
        loot_ShturmansStash = loot_ShturmansStash.concat(
            category_ShturmansStash);
        loot_ShturmansStash = this.removeBlacklistedItems(loot_ShturmansStash, LootGlobalType.SHTURMANSSTASH);
        // ===== Loot - Weapon Box 6x3 =====
        let loot_WeaponBox5x5 = [];
        loot_WeaponBox5x5 = loot_WeaponBox5x5.concat(
            category_WeaponBox5x5);
        loot_WeaponBox5x5 = this.removeBlacklistedItems(loot_WeaponBox5x5, LootGlobalType.WEAPONBOX5X5);
        // ===== Loot - Weapon Box 6x3 =====
        let loot_WeaponBox6x3 = [];
        loot_WeaponBox6x3 = loot_WeaponBox6x3.concat(
            category_WeaponBox6x3);
        loot_WeaponBox6x3 = this.removeBlacklistedItems(loot_WeaponBox6x3, LootGlobalType.WEAPONBOX6X3);
        
            
        
        // Preparation to finally create the Record file
        // ===== Drawer =====
        const drawerItems = [];
        const drawerItemsProbabilities = [];
        loot_Drawers.forEach(item => {
            drawerItems.push(item.Id);
            drawerItemsProbabilities.push(item.Price);});
        const container_Drawer_ItemsDistribution = [];
        const container_Drawer_ItemsDistributionProbabilities = [];
        this.config.container_Drawer_ItemsDistribution.forEach(item => {
            container_Drawer_ItemsDistribution.push(parseInt(item));});
        this.config.container_Drawer_ItemsDistributionProbabilities.forEach(item => {
            container_Drawer_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Cash Register =====    
        const cashRegisterItems = [];
        const cashRegisterItemsProbabilities = [];
        loot_Money_RoublesOnly.forEach(item => {
            cashRegisterItems.push(item.Id);
            cashRegisterItemsProbabilities.push(item.Price);});
        const container_CashRegister_ItemsDistribution = [];
        const container_CashRegister_ItemsDistributionProbabilities = [];
        this.config.container_CashRegister_ItemsDistribution.forEach(item => {
            container_CashRegister_ItemsDistribution.push(parseInt(item));});
        this.config.container_CashRegister_ItemsDistributionProbabilities.forEach(item => {
            container_CashRegister_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== PC Block =====
        const pcBlockItems = [];
        const pcBlockItemsProbabilities = [];
        loot_PCBlock.forEach(item => {
            pcBlockItems.push(item.Id);
            pcBlockItemsProbabilities.push(item.Price);});
        const container_PCBlock_ItemsDistribution = [];
        const container_PCBlock_ItemsDistributionProbabilities = [];
        this.config.container_PCBlock_ItemsDistribution.forEach(item => {
            container_PCBlock_ItemsDistribution.push(parseInt(item));});
        this.config.container_PCBlock_ItemsDistributionProbabilities.forEach(item => {
            container_PCBlock_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Jacket =====
        const jacketItems = [];
        const jacketItemsProbabilities = [];
        loot_Jackets.forEach(item => {
            jacketItems.push(item.Id);
            jacketItemsProbabilities.push(item.Price);});
        const container_Jacket_ItemsDistribution = [];
        const container_Jacket_ItemsDistributionProbabilities = [];
        this.config.container_Jacket_ItemsDistribution.forEach(item => {
            container_Jacket_ItemsDistribution.push(parseInt(item));});
        this.config.container_Jacket_ItemsDistributionProbabilities.forEach(item => {
            container_Jacket_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Toolbox =====
        const toolboxItems = [];
        const toolboxItemsProbabilities = [];
        loot_Technical.forEach(item => {
            toolboxItems.push(item.Id);
            toolboxItemsProbabilities.push(item.Price);});
        const container_Toolbox_ItemsDistribution = [];
        const container_Toolbox_ItemsDistributionProbabilities = [];
        this.config.container_Toolbox_ItemsDistribution.forEach(item => {
            container_Toolbox_ItemsDistribution.push(parseInt(item));});
        this.config.container_Toolbox_ItemsDistributionProbabilities.forEach(item => {
            container_Toolbox_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Medcase =====
        const medcaseItems = [];
        const medcaseItemsProbabilities = [];
        loot_Medical.forEach(item => {
            medcaseItems.push(item.Id);
            medcaseItemsProbabilities.push(item.Price);});
        const container_Medcase_ItemsDistribution = [];
        const container_Medcase_ItemsDistributionProbabilities = [];
        this.config.container_Medcase_ItemsDistribution.forEach(item => {
            container_Medcase_ItemsDistribution.push(parseInt(item));});
        this.config.container_Medcase_ItemsDistributionProbabilities.forEach(item => {
            container_Medcase_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Safe =====
        const safeItems = [];
        const safeItemsProbabilities = [];
        loot_Safes.forEach(item => {
            safeItems.push(item.Id);
            safeItemsProbabilities.push(item.Price);});
        const container_Safe_ItemsDistribution = [];
        const container_Safe_ItemsDistributionProbabilities = [];
        this.config.container_Safe_ItemsDistribution.forEach(item => {
            container_Safe_ItemsDistribution.push(parseInt(item));});
        this.config.container_Safe_ItemsDistributionProbabilities.forEach(item => {
            container_Safe_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Weapon box (Green) =====
        const weaponBox5x5Items = [];
        const weaponBox5x5ItemsProbabilities = [];
        loot_WeaponBox5x5.forEach(item => {
            weaponBox5x5Items.push(item.Id);
            weaponBox5x5ItemsProbabilities.push(item.Price);});
        const container_WeaponBox5x5_ItemsDistribution = [];
        const container_WeaponBox5x5_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox5x5_ItemsDistribution.forEach(item => {
            container_WeaponBox5x5_ItemsDistribution.push(parseInt(item));});
        this.config.container_WeaponBox5x5_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox5x5_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Weapon box (5x2) =====
        const weaponBox5x2Items = [];
        const weaponBox5x2ItemsProbabilities = [];
        loot_WeaponBoxGlobal.forEach(item => {
            weaponBox5x2Items.push(item.Id);
            weaponBox5x2ItemsProbabilities.push(item.Price);});
        const container_WeaponBox5x2_ItemsDistribution = [];
        const container_WeaponBox5x2_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox5x2_ItemsDistribution.forEach(item => {
            container_WeaponBox5x2_ItemsDistribution.push(parseInt(item));});
        this.config.container_WeaponBox5x2_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox5x2_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Duffle bag 01 =====
        const duffleBag01Items = [];
        const duffleBag01ItemsProbabilities = [];
        loot_DuffleBag.forEach(item => {
            duffleBag01Items.push(item.Id);
            duffleBag01ItemsProbabilities.push(item.Price);});
        const container_DuffleBag01_ItemsDistribution = [];
        const container_DuffleBag01_ItemsDistributionProbabilities = [];
        this.config.container_DuffleBag01_ItemsDistribution.forEach(item => {
            container_DuffleBag01_ItemsDistribution.push(parseInt(item));});
        this.config.container_DuffleBag01_ItemsDistributionProbabilities.forEach(item => {
            container_DuffleBag01_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Weapon box (6x3) =====
        const weaponBox6x3Items = [];
        const weaponBox6x3ItemsProbabilities = [];
        loot_WeaponBox6x3.forEach(item => {
            weaponBox6x3Items.push(item.Id);
            weaponBox6x3ItemsProbabilities.push(item.Price);});
        const container_WeaponBox6x3_ItemsDistribution = [];
        const container_WeaponBox6x3_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox6x3_ItemsDistribution.forEach(item => {
            container_WeaponBox6x3_ItemsDistribution.push(parseInt(item));});
        this.config.container_WeaponBox6x3_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox6x3_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Weapon box (4x4) =====
        const weaponBox4x4Items = [];
        const weaponBox4x4ItemsProbabilities = [];
        loot_WeaponBoxGlobal.forEach(item => {
            weaponBox4x4Items.push(item.Id);
            weaponBox4x4ItemsProbabilities.push(item.Price);});
        const container_WeaponBox4x4_ItemsDistribution = [];
        const container_WeaponBox4x4_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox4x4_ItemsDistribution.forEach(item => {
            container_WeaponBox4x4_ItemsDistribution.push(parseInt(item));});
        this.config.container_WeaponBox4x4_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox4x4_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Grenade box =====
        const grenadeBoxItems = [];
        const grenadeBoxItemsProbabilities = [];
        loot_Grenades.forEach(item => {
            grenadeBoxItems.push(item.Id);
            grenadeBoxItemsProbabilities.push(item.Price);});
        const container_GrenadeBox_ItemsDistribution = [];
        const container_GrenadeBox_ItemsDistributionProbabilities = [];
        this.config.container_GrenadeBox_ItemsDistribution.forEach(item => {
            container_GrenadeBox_ItemsDistribution.push(parseInt(item));});
        this.config.container_GrenadeBox_ItemsDistributionProbabilities.forEach(item => {
            container_GrenadeBox_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Plastic suitcase =====
        const plasticSuitcaseItems = [];
        const plasticSuitcaseItemsProbabilities = [];
        loot_DuffleBag.forEach(item => {
            plasticSuitcaseItems.push(item.Id);
            plasticSuitcaseItemsProbabilities.push(item.Price);});
        const container_PlasticSuitcase_ItemsDistribution = [];
        const container_PlasticSuitcase_ItemsDistributionProbabilities = [];
        this.config.container_PlasticSuitcase_ItemsDistribution.forEach(item => {
            container_PlasticSuitcase_ItemsDistribution.push(parseInt(item));});
        this.config.container_PlasticSuitcase_ItemsDistributionProbabilities.forEach(item => {
            container_PlasticSuitcase_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Medbag SMU06 01 =====
        const medbagSmu0601Items = [];
        const medbagSmu0601ItemsProbabilities = [];
        loot_Medical.forEach(item => {
            medbagSmu0601Items.push(item.Id);
            medbagSmu0601ItemsProbabilities.push(item.Price);});
        const container_MedbagSmu0601_ItemsDistribution = [];
        const container_MedbagSmu0601_ItemsDistributionProbabilities = [];
        this.config.container_MedbagSmu0601_ItemsDistribution.forEach(item => {
            container_MedbagSmu0601_ItemsDistribution.push(parseInt(item));});
        this.config.container_MedbagSmu0601_ItemsDistributionProbabilities.forEach(item => {
            container_MedbagSmu0601_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Wooden crate =====
        const woodenCrateItems = [];
        const woodenCrateItemsProbabilities = [];
        loot_WeaponBoxGlobal.forEach(item => {
            woodenCrateItems.push(item.Id);
            woodenCrateItemsProbabilities.push(item.Price);});
        const container_WoodenCrate_ItemsDistribution = [];
        const container_WoodenCrate_ItemsDistributionProbabilities = [];
        this.config.container_WoodenCrate_ItemsDistribution.forEach(item => {
            container_WoodenCrate_ItemsDistribution.push(parseInt(item));});
        this.config.container_WoodenCrate_ItemsDistributionProbabilities.forEach(item => {
            container_WoodenCrate_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Medical supply crate =====
        const medicalSupplyCrateItems = [];
        const medicalSupplyCrateItemsProbabilities = [];
        loot_Medical.forEach(item => {
            medicalSupplyCrateItems.push(item.Id);
            medicalSupplyCrateItemsProbabilities.push(item.Price);});
        const container_MedicalSupplyCrate_ItemsDistribution = [];
        const container_MedicalSupplyCrate_ItemsDistributionProbabilities = [];
        this.config.container_MedicalSupplyCrate_ItemsDistribution.forEach(item => {
            container_MedicalSupplyCrate_ItemsDistribution.push(parseInt(item));});
        this.config.container_MedicalSupplyCrate_ItemsDistributionProbabilities.forEach(item => {
            container_MedicalSupplyCrate_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Technical supply crate =====
        const technicalSupplyCrateItems = [];
        const technicalSupplyCrateItemsProbabilities = [];
        loot_Technical.forEach(item => {
            technicalSupplyCrateItems.push(item.Id);
            technicalSupplyCrateItemsProbabilities.push(item.Price);});
        const container_TechnicalSupplyCrate_ItemsDistribution = [];
        const container_TechnicalSupplyCrate_ItemsDistributionProbabilities = [];
        this.config.container_TechnicalSupplyCrate_ItemsDistribution.forEach(item => {
            container_TechnicalSupplyCrate_ItemsDistribution.push(parseInt(item));});
        this.config.container_TechnicalSupplyCrate_ItemsDistributionProbabilities.forEach(item => {
            container_TechnicalSupplyCrate_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Dead Scav =====
        const deadScavItems = [];
        const deadScavItemsProbabilities = [];
        loot_DuffleBag.forEach(item => {
            deadScavItems.push(item.Id);
            deadScavItemsProbabilities.push(item.Price);});
        const container_DeadScav_ItemsDistribution = [];
        const container_DeadScav_ItemsDistributionProbabilities = [];
        this.config.container_DeadScav_ItemsDistribution.forEach(item => {
            container_DeadScav_ItemsDistribution.push(parseInt(item));});
        this.config.container_DeadScav_ItemsDistributionProbabilities.forEach(item => {
            container_DeadScav_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Ground cache =====
        const groundCacheItems = [];
        const groundCacheItemsProbabilities = [];
        loot_Caches.forEach(item => {
            groundCacheItems.push(item.Id);
            groundCacheItemsProbabilities.push(item.Price);});
        const container_GroundCache_ItemsDistribution = [];
        const container_GroundCache_ItemsDistributionProbabilities = [];
        this.config.container_GroundCache_ItemsDistribution.forEach(item => {
            container_GroundCache_ItemsDistribution.push(parseInt(item));});
        this.config.container_GroundCache_ItemsDistributionProbabilities.forEach(item => {
            container_GroundCache_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Burried barrel cache =====
        const burriedBarrelCacheItems = [];
        const burriedBarrelCacheItemsProbabilities = [];
        loot_Caches.forEach(item => {
            burriedBarrelCacheItems.push(item.Id);
            burriedBarrelCacheItemsProbabilities.push(item.Price);});
        const container_BurriedBarrelCache_ItemsDistribution = [];
        const container_BurriedBarrelCache_ItemsDistributionProbabilities = [];
        this.config.container_BurriedBarrelCache_ItemsDistribution.forEach(item => {
            container_BurriedBarrelCache_ItemsDistribution.push(parseInt(item));});
        this.config.container_BurriedBarrelCache_ItemsDistributionProbabilities.forEach(item => {
            container_BurriedBarrelCache_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Wooden ammo box =====
        const woodenAmmoBoxItems = [];
        const woodenAmmoBoxItemsProbabilities = [];
        loot_Ammo.forEach(item => {
            woodenAmmoBoxItems.push(item.Id);
            woodenAmmoBoxItemsProbabilities.push(item.Price);});
        const container_WoodenAmmoBox_ItemsDistribution = [];
        const container_WoodenAmmoBox_ItemsDistributionProbabilities = [];
        this.config.container_WoodenAmmoBox_ItemsDistribution.forEach(item => {
            container_WoodenAmmoBox_ItemsDistribution.push(parseInt(item));});
        this.config.container_WoodenAmmoBox_ItemsDistributionProbabilities.forEach(item => {
            container_WoodenAmmoBox_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Jacket (Dorms 114) =====
        const jacketDorms114Items = [];
        const jacketDorms114ItemsProbabilities = [];
        loot_Jackets.forEach(item => {
            jacketDorms114Items.push(item.Id);
            jacketDorms114ItemsProbabilities.push(item.Price);});
        const container_JacketDorms114_ItemsDistribution = [];
        const container_JacketDorms114_ItemsDistributionProbabilities = [];
        this.config.container_JacketDorms114_ItemsDistribution.forEach(item => {
            container_JacketDorms114_ItemsDistribution.push(parseInt(item));});
        this.config.container_JacketDorms114_ItemsDistributionProbabilities.forEach(item => {
            container_JacketDorms114_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Jacket (Machinery Key) =====
        const jacketMachineryKeyItems = [];
        const jacketMachineryKeyItemsProbabilities = [];
        loot_JacketMachineryKey.forEach(item => {
            jacketMachineryKeyItems.push(item.Id);
            jacketMachineryKeyItemsProbabilities.push(item.Price);});
        const container_JacketMachineryKey_ItemsDistribution = [];
        const container_JacketMachineryKey_ItemsDistributionProbabilities = [];
        this.config.container_JacketMachineryKey_ItemsDistribution.forEach(item => {
            container_JacketMachineryKey_ItemsDistribution.push(parseInt(item));});
        this.config.container_JacketMachineryKey_ItemsDistributionProbabilities.forEach(item => {
            container_JacketMachineryKey_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Ration supply crate =====
        const rationSupplyCrateItems = [];
        const rationSupplyCrateItemsProbabilities = [];
        loot_Rations.forEach(item => {
            rationSupplyCrateItems.push(item.Id);
            rationSupplyCrateItemsProbabilities.push(item.Price);});
        const container_RationSupplyCrate_ItemsDistribution = [];
        const container_RationSupplyCrate_ItemsDistributionProbabilities = [];
        this.config.container_RationSupplyCrate_ItemsDistribution.forEach(item => {
            container_RationSupplyCrate_ItemsDistribution.push(parseInt(item));});
        this.config.container_RationSupplyCrate_ItemsDistributionProbabilities.forEach(item => {
            container_RationSupplyCrate_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Jacket (Dorms 204) =====
        const jacketDorms204Items = [];
        const jacketDorms204ItemsProbabilities = [];
        loot_Jackets.forEach(item => {
            jacketDorms204Items.push(item.Id);
            jacketDorms204ItemsProbabilities.push(item.Price);});
        const container_JacketDorms204_ItemsDistribution = [];
        const container_JacketDorms204_ItemsDistributionProbabilities = [];
        this.config.container_JacketDorms204_ItemsDistribution.forEach(item => {
            container_JacketDorms204_ItemsDistribution.push(parseInt(item));});
        this.config.container_JacketDorms204_ItemsDistributionProbabilities.forEach(item => {
            container_JacketDorms204_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Common fund stash (Shturman's Stash) =====
        const commonFundStashItems = [];
        const commonFundStashItemsProbabilities = [];
        loot_ShturmansStash.forEach(item => {
            commonFundStashItems.push(item.Id);
            commonFundStashItemsProbabilities.push(item.Price);});
        const container_ShturmansStash_ItemsDistribution = [];
        const container_ShturmansStash_ItemsDistributionProbabilities = [];
        this.config.container_ShturmansStash_ItemsDistribution.forEach(item => {
            container_ShturmansStash_ItemsDistribution.push(parseInt(item));});
        this.config.container_ShturmansStash_ItemsDistributionProbabilities.forEach(item => {
            container_ShturmansStash_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Duffle bag 02 =====
        const duffleBag02Items = [];
        const duffleBag02ItemsProbabilities = [];
        loot_DuffleBag.forEach(item => {
            duffleBag02Items.push(item.Id);
            duffleBag02ItemsProbabilities.push(item.Price);});
        const container_DuffleBag02_ItemsDistribution = [];
        const container_DuffleBag02_ItemsDistributionProbabilities = [];
        this.config.container_DuffleBag02_ItemsDistribution.forEach(item => {
            container_DuffleBag02_ItemsDistribution.push(parseInt(item));});
        this.config.container_DuffleBag02_ItemsDistributionProbabilities.forEach(item => {
            container_DuffleBag02_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Medbag SMU06 02 =====
        const medbagSmu0602Items = [];
        const medbagSmu0602ItemsProbabilities = [];
        loot_Medical.forEach(item => {
            medbagSmu0602Items.push(item.Id);
            medbagSmu0602ItemsProbabilities.push(item.Price);});
        const container_MedbagSmu0602_ItemsDistribution = [];
        const container_MedbagSmu0602_ItemsDistributionProbabilities = [];
        this.config.container_MedbagSmu0602_ItemsDistribution.forEach(item => {
            container_MedbagSmu0602_ItemsDistribution.push(parseInt(item));});
        this.config.container_MedbagSmu0602_ItemsDistributionProbabilities.forEach(item => {
            container_MedbagSmu0602_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Cash register TAR2-2 =====
        const cashRegisterTARItems = [];
        const cashRegisterTARItemsProbabilities = [];
        loot_Money_RoublesOnly.forEach(item => {
            cashRegisterTARItems.push(item.Id);
            cashRegisterTARItemsProbabilities.push(item.Price);});
        const container_CashRegisterTAR_ItemsDistribution = [];
        const container_CashRegisterTAR_ItemsDistributionProbabilities = [];
        this.config.container_CashRegisterTAR_ItemsDistribution.forEach(item => {
            container_CashRegisterTAR_ItemsDistribution.push(parseInt(item));});
        this.config.container_CashRegisterTAR_ItemsDistributionProbabilities.forEach(item => {
            container_CashRegisterTAR_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Bank cash register =====
        const bankCashRegisterItems = [];
        const bankCashRegisterItemsProbabilities = [];
        loot_Money.forEach(item => {
            bankCashRegisterItems.push(item.Id);
            bankCashRegisterItemsProbabilities.push(item.Price);});
        const container_BankCashRegister_ItemsDistribution = [];
        const container_BankCashRegister_ItemsDistributionProbabilities = [];
        this.config.container_BankCashRegister_ItemsDistribution.forEach(item => {
            container_BankCashRegister_ItemsDistribution.push(parseInt(item));});
        this.config.container_BankCashRegister_ItemsDistributionProbabilities.forEach(item => {
            container_BankCashRegister_ItemsDistributionProbabilities.push(parseInt(item));});
        // ===== Bank safe =====
        const bankSafeItems = [];
        const bankSafeItemsProbabilities = [];
        loot_Money.forEach(item => {
            bankSafeItems.push(item.Id);
            bankSafeItemsProbabilities.push(item.Price);});
        const container_BankSafe_ItemsDistribution = [];
        const container_BankSafe_ItemsDistributionProbabilities = [];
        this.config.container_BankSafe_ItemsDistribution.forEach(item => {
            container_BankSafe_ItemsDistribution.push(parseInt(item));});
        this.config.container_BankSafe_ItemsDistributionProbabilities.forEach(item => {
            container_BankSafe_ItemsDistributionProbabilities.push(parseInt(item));});




        const lootRecordsAll: Record<string, IStaticLootDetails> = {
            [SPTLootContainer.DRAWER]: {
                itemcountDistribution: container_Drawer_ItemsDistribution.map((count, index) => ({      // retrieve data from config file
                    count,
                    relativeProbability: container_Drawer_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: drawerItems.map((tpl, index) => ({                                    // retrieve data from category arrays (Technical, Weapons, Medical, etc.)
                    tpl,
                    relativeProbability: drawerItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.CASHREGISTER]: {
                itemcountDistribution: container_CashRegister_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_CashRegister_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: cashRegisterItems.map((tpl, index) => ({                                    
                    tpl,
                    relativeProbability: cashRegisterItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.PCBLOCK]: {
                itemcountDistribution: container_PCBlock_ItemsDistribution.map((count, index) => ({      
                    count,
                    relativeProbability: container_PCBlock_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: pcBlockItems.map((tpl, index) => ({                                      
                    tpl,
                    relativeProbability: pcBlockItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.JACKET]: {
                itemcountDistribution: container_Jacket_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_Jacket_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: jacketItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: jacketItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.TOOLBOX]: {
                itemcountDistribution: container_Toolbox_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_Toolbox_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: toolboxItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: toolboxItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.MEDCASE]: {
                itemcountDistribution: container_Medcase_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_Medcase_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: medcaseItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: medcaseItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.SAFE]: {
                itemcountDistribution: container_Safe_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_Safe_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: safeItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: safeItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.WEAPONBOX5X5]: {
                itemcountDistribution: container_WeaponBox5x5_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_WeaponBox5x5_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: weaponBox5x5Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: weaponBox5x5ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.WEAPONBOX5X2]: {
                itemcountDistribution: container_WeaponBox5x2_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_WeaponBox5x2_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: weaponBox5x2Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: weaponBox5x2ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.DUFFLEBAG01]: {
                itemcountDistribution: container_DuffleBag01_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_DuffleBag01_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: duffleBag01Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: duffleBag01ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.WEAPONBOX6X3]: {
                itemcountDistribution: container_WeaponBox6x3_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_WeaponBox6x3_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: weaponBox6x3Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: weaponBox6x3ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.WEAPONBOX4X4]: {
                itemcountDistribution: container_WeaponBox4x4_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_WeaponBox4x4_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: weaponBox4x4Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: weaponBox4x4ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.GRENADEBOX]: {
                itemcountDistribution: container_GrenadeBox_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_GrenadeBox_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: grenadeBoxItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: grenadeBoxItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.PLASTICSUITCASE]: {
                itemcountDistribution: container_PlasticSuitcase_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_PlasticSuitcase_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: plasticSuitcaseItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: plasticSuitcaseItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.MEDBAGSMU0601]: {
                itemcountDistribution: container_MedbagSmu0601_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_MedbagSmu0601_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: medbagSmu0601Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: medbagSmu0601ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.WOODENCRATE]: {
                itemcountDistribution: container_WoodenCrate_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_WoodenCrate_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: woodenCrateItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: woodenCrateItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.MEDICALSUPPLYCRATE]: {
                itemcountDistribution: container_MedicalSupplyCrate_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_MedicalSupplyCrate_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: medicalSupplyCrateItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: medicalSupplyCrateItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.TECHNICALSUPPLYCRATE]: {
                itemcountDistribution: container_TechnicalSupplyCrate_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_TechnicalSupplyCrate_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: technicalSupplyCrateItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: technicalSupplyCrateItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.DEADSCAV]: {
                itemcountDistribution: container_DeadScav_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_DeadScav_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: deadScavItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: deadScavItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.GROUNDCACHE]: {
                itemcountDistribution: container_GroundCache_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_GroundCache_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: groundCacheItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: groundCacheItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.BURRIEDBARRELCACHE]: {
                itemcountDistribution: container_BurriedBarrelCache_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_BurriedBarrelCache_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: burriedBarrelCacheItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: burriedBarrelCacheItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.WOODENAMMOBOX]: {
                itemcountDistribution: container_WoodenAmmoBox_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_WoodenAmmoBox_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: woodenAmmoBoxItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: woodenAmmoBoxItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.JACKETDORMS114]: {
                itemcountDistribution: container_JacketDorms114_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_JacketDorms114_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: jacketDorms114Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: jacketDorms114ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.JACKETMACHINERYKEY]: {
                itemcountDistribution: container_JacketMachineryKey_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_JacketMachineryKey_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: jacketMachineryKeyItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: jacketMachineryKeyItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.RATIONSUPPLYCRATE]: {
                itemcountDistribution: container_RationSupplyCrate_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_RationSupplyCrate_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: rationSupplyCrateItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: rationSupplyCrateItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.JACKETDORMS204]: {
                itemcountDistribution: container_JacketDorms204_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_JacketDorms204_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: jacketDorms204Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: jacketDorms204ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.COMMONFUNDSTASH]: {
                itemcountDistribution: container_ShturmansStash_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_ShturmansStash_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: commonFundStashItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: commonFundStashItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.DUFFLEBAG02]: {
                itemcountDistribution: container_DuffleBag02_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_DuffleBag02_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: duffleBag02Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: duffleBag02ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.MEDBAGSMU0602]: {
                itemcountDistribution: container_MedbagSmu0602_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_MedbagSmu0602_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: medbagSmu0602Items.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: medbagSmu0602ItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.CASHREGISTERTAR]: {
                itemcountDistribution: container_CashRegisterTAR_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_CashRegisterTAR_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: cashRegisterTARItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: cashRegisterTARItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.BANKCASHREGISTER]: {
                itemcountDistribution: container_BankCashRegister_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_BankCashRegister_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: bankCashRegisterItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: bankCashRegisterItemsProbabilities[index] || 1, 
                })),
            },
            [SPTLootContainer.BANKSAFE]: {
                itemcountDistribution: container_BankSafe_ItemsDistribution.map((count, index) => ({
                    count,
                    relativeProbability: container_BankSafe_ItemsDistributionProbabilities[index] || 1,
                })),
                itemDistribution: bankSafeItems.map((tpl, index) => ({                                       
                    tpl,
                    relativeProbability: bankSafeItemsProbabilities[index] || 1, 
                })),
            },
        };

        
        if (this.config.debugMode)
        {
            let allHandbookItemsSpawnAdjusted = [];
            allHandbookItemsSpawnAdjusted = allHandbookItemsSpawnAdjusted.concat(
            category_Barter_Others,category_Barter_BuildingMaterials,category_Barter_Electronics,category_Barter_EnergyElements,category_Barter_FlammableMaterials,
            category_Barter_HouseholdMaterials,category_Barter_MedicalSupplies,category_Barter_Tools,category_Barter_Valuables,
            category_Gear_Backpacks,category_Gear_BodyArmor,category_Gear_Eyewear,category_Gear_Facecovers,category_Gear_GearComponents,category_Gear_Headgear,
            category_Gear_Headsets,category_Gear_SecureContainers,category_Gear_StorageContainers,category_Gear_TacticalRigs,
            category_WeaponPartsMods_FM_AuxiliaryParts,category_WeaponPartsMods_FM_Bipods,category_WeaponPartsMods_FM_Foregrips,category_WeaponPartsMods_FM_LLD_Flashlights,
            category_WeaponPartsMods_FM_LLD_LaserTargetPointers,category_WeaponPartsMods_FM_LLD_TacticalComboDevices,category_WeaponPartsMods_FM_MD_FlashhidersBrakes,
            category_WeaponPartsMods_FM_MD_MuzzleAdapters,category_WeaponPartsMods_FM_MD_Suppressors,category_WeaponPartsMods_FM_S_AssaultScopes,
            category_WeaponPartsMods_FM_S_Collimators,category_WeaponPartsMods_FM_S_CompactCollimators,category_WeaponPartsMods_FM_S_IronSights,
            category_WeaponPartsMods_FM_S_Optics,category_WeaponPartsMods_FM_S_SpecialPurposeSights,category_WeaponPartsMods_GM_ChargingHandles,
            category_WeaponPartsMods_GM_Launchers,category_WeaponPartsMods_GM_Magazines,category_WeaponPartsMods_GM_Mounts,category_WeaponPartsMods_GM_StocksChassis,
            category_WeaponPartsMods_VP_Barrels,category_WeaponPartsMods_VP_GasBlocks,category_WeaponPartsMods_VP_Handguards,category_WeaponPartsMods_VP_PistolGrips,
            category_WeaponPartsMods_VP_ReceiversSlides,
            category_Weapons_AssaultCarbines,category_Weapons_AssaultRifles,category_Weapons_BoltActionRifles,category_Weapons_GrenadeLaunchers,
            category_Weapons_MachineGuns,category_Weapons_MarksmanRifles,category_Weapons_MeleeWeapons,category_Weapons_Pistols,
            category_Weapons_SMGs,category_Weapons_Shotguns,category_Weapons_SpecialWeapons,category_Weapons_Throwables,
            category_Ammo_AmmoPacks,category_Ammo_Rounds,
            category_Provisions_Drinks,category_Provisions_Food,
            category_Medication_Injectors,category_Medication_InjuryTreatment,category_Medication_Medkits,category_Medication_Pills,
            category_Keys_ElectronicKeys,category_Keys_MechanicalKeys,
            category_InfoItems,
            category_SpecialEquipment,
            category_Maps,
            category_Money);

            this.logger.error("All Items with adjusted spawns");
            allHandbookItemsSpawnAdjusted.forEach(item => {
                const propertyName = `${item.Id} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: "+ item.Price);
            });
        }


        return lootRecordsAll;
    
    }

}

module.exports = { mod: new AllTheLoot() }