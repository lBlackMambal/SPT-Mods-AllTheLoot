"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
var LootType;
(function (LootType) {
    LootType["BARTER_OTHERS"] = "BARTER_OTHERS";
    LootType["BARTER_BUILDINGMATERIALS"] = "BARTER_BUILDINGMATERIALS";
    LootType["BARTER_ELECTRONICS"] = "BARTER_ELECTRONICS";
    LootType["BARTER_ENERGYELEMENTS"] = "BARTER_ENERGYELEMENTS";
    LootType["BARTER_FLAMMABLEMATERIALS"] = "BARTER_FLAMMABLEMATERIALS";
    LootType["BARTER_HOUSEHOLDMATERIALS"] = "BARTER_HOUSEHOLDMATERIALS";
    LootType["BARTER_MEDICALSUPPLIES"] = "BARTER_MEDICALSUPPLIES";
    LootType["BARTER_TOOLS"] = "BARTER_TOOLS";
    LootType["BARTER_VALUABLES"] = "BARTER_VALUABLES";
    LootType["GEAR_BACKPACKS"] = "GEAR_BACKPACKS";
    LootType["GEAR_BODYARMOR"] = "GEAR_BODYARMOR";
    LootType["GEAR_EYEWEAR"] = "GEAR_EYEWEAR";
    LootType["GEAR_FACECOVERS"] = "GEAR_FACECOVERS";
    LootType["GEAR_GEARCOMPONENTS"] = "GEAR_GEARCOMPONENTS";
    LootType["GEAR_HEADGEAR"] = "GEAR_HEADGEAR";
    LootType["GEAR_HEADSETS"] = "GEAR_HEADSETS";
    LootType["GEAR_SECURECONTAINERS"] = "GEAR_SECURECONTAINERS";
    LootType["GEAR_STORAGECONTAINERS"] = "GEAR_STORAGECONTAINERS";
    LootType["GEAR_TACTICALRIGS"] = "GEAR_TACTICALRIGS";
    LootType["WPM_FM_AUXILIARYPARTS"] = "WPM_FM_AUXILIARYPARTS";
    LootType["WPM_FM_BIPODS"] = "WPM_FM_BIPODS";
    LootType["WPM_FM_FOREGRIPS"] = "WPM_FM_FOREGRIPS";
    LootType["WPM_FM_LLD_FLASHLIGHTS"] = "WPM_FM_LLD_FLASHLIGHTS";
    LootType["WPM_FM_LLD_LASERTARGETPOINTERS"] = "WPM_FM_LLD_LASERTARGETPOINTERS";
    LootType["WPM_FM_LLD_TACTICALCOMBODEVICES"] = "WPM_FM_LLD_TACTICALCOMBODEVICES";
    LootType["WPM_FM_MD_FLASHHIDERSBRAKES"] = "WPM_FM_MD_FLASHHIDERSBRAKES";
    LootType["WPM_FM_MD_MUZZLEADAPTERS"] = "WPM_FM_MD_MUZZLEADAPTERS";
    LootType["WPM_FM_MD_SUPPRESSORS"] = "WPM_FM_MD_SUPPRESSORS";
    LootType["WPM_FM_S_ASSAULTSCOPES"] = "WPM_FM_S_ASSAULTSCOPES";
    LootType["WPM_FM_S_COLLIMATORS"] = "WPM_FM_S_COLLIMATORS";
    LootType["WPM_FM_S_COMPACTCOLLIMATORS"] = "WPM_FM_S_COMPACTCOLLIMATORS";
    LootType["WPM_FM_S_IRONSIGHTS"] = "WPM_FM_S_IRONSIGHTS";
    LootType["WPM_FM_S_OPTICS"] = "WPM_FM_S_OPTICS";
    LootType["WPM_FM_S_SPECIALPURPOSESIGHTS"] = "WPM_FM_S_SPECIALPURPOSESIGHTS";
    LootType["WPM_GM_CHARGINGHANDLES"] = "WPM_GM_CHARGINGHANDLES";
    LootType["WPM_GM_LAUNCHERS"] = "WPM_GM_LAUNCHERS";
    LootType["WPM_GM_MAGAZINES"] = "WPM_GM_MAGAZINES";
    LootType["WPM_GM_MOUNTS"] = "WPM_GM_MOUNTS";
    LootType["WPM_GM_STOCKSCHASSIS"] = "WPM_GM_STOCKSCHASSIS";
    LootType["WPM_VP_BARRELS"] = "WPM_VP_BARRELS";
    LootType["WPM_VP_GASBLOCKS"] = "WPM_VP_GASBLOCKS";
    LootType["WPM_VP_HANDGUARDS"] = "WPM_VP_HANDGUARDS";
    LootType["WPM_VP_PISTOLGRIPS"] = "WPM_VP_PISTOLGRIPS";
    LootType["WPM_VP_RECEIVERSSLIDES"] = "WPM_VP_RECEIVERSSLIDES";
    LootType["WEAPONS_ASSAULTCARBINES"] = "WEAPONS_ASSAULTCARBINES";
    LootType["WEAPONS_ASSAULTRIFLES"] = "WEAPONS_ASSAULTRIFLES";
    LootType["WEAPONS_BOLTACTIONRIFLES"] = "WEAPONS_BOLTACTIONRIFLES";
    LootType["WEAPONS_GRENADELAUNCHERS"] = "WEAPONS_GRENADELAUNCHERS";
    LootType["WEAPONS_MACHINEGUNS"] = "WEAPONS_MACHINEGUNS";
    LootType["WEAPONS_MARKSMANRIFLES"] = "WEAPONS_MARKSMANRIFLES";
    LootType["WEAPONS_MELEEWEAPONS"] = "WEAPONS_MELEEWEAPONS";
    LootType["WEAPONS_PISTOLS"] = "WEAPONS_PISTOLS";
    LootType["WEAPONS_SMGS"] = "WEAPONS_SMGS";
    LootType["WEAPONS_SHOTGUNS"] = "WEAPONS_SHOTGUNS";
    LootType["WEAPONS_SPECIALWEAPONS"] = "WEAPONS_SPECIALWEAPONS";
    LootType["WEAPONS_THROWABLES"] = "WEAPONS_THROWABLES";
    LootType["AMMO_AMMOPACKS"] = "AMMO_AMMOPACKS";
    LootType["AMMO_ROUNDS"] = "AMMO_ROUNDS";
    LootType["PROVISIONS_DRINKS"] = "PROVISIONS_DRINKS";
    LootType["PROVISIONS_FOOD"] = "PROVISIONS_FOOD";
    LootType["MEDICATION_INJECTORS"] = "MEDICATION_INJECTORS";
    LootType["MEDICATION_INJURYTREATMENT"] = "MEDICATION_INJURYTREATMENT";
    LootType["MEDICATION_MEDKITS"] = "MEDICATION_MEDKITS";
    LootType["MEDICATION_PILLS"] = "MEDICATION_PILLS";
    LootType["KEYS_ELECTRONICKEYS"] = "KEYS_ELECTRONICKEYS";
    LootType["KEYS_MECHANICALKEYS"] = "KEYS_MECHANICALKEYS";
    LootType["INFOITEMS"] = "INFOITEMS";
    LootType["SPECIALEQUIPMENT"] = "SPECIALEQUIPMENT";
    LootType["MAPS"] = "MAPS";
    LootType["MONEY"] = "MONEY";
})(LootType || (LootType = {}));
var LootGlobalType;
(function (LootGlobalType) {
    LootGlobalType["DRAWER"] = "DRAWER";
    LootGlobalType["JACKET"] = "JACKET";
    LootGlobalType["WEAPONBOXGLOBAL"] = "WEAPONBOXGLOBAL";
    LootGlobalType["WEAPONBOX6X3"] = "WEAPONBOX6x3";
    LootGlobalType["WEAPONBOX5X5"] = "WEAPONBOX5x5";
    LootGlobalType["WEAPONBOX4X4"] = "WEAPONBOX4x4";
    LootGlobalType["CACHE"] = "CACHE";
    LootGlobalType["DUFFLEBAG"] = "DUFFLEBAG";
    LootGlobalType["MEDICAL"] = "MEDICAL";
    LootGlobalType["TECHNICAL"] = "TECHNICAL";
    LootGlobalType["RATIONS"] = "RATIONS";
    LootGlobalType["PCBLOCK"] = "PCBLOCK";
    LootGlobalType["SAFE"] = "SAFE";
    LootGlobalType["AMMO"] = "AMMO";
    LootGlobalType["GRENADES"] = "GRENADES";
    LootGlobalType["MONEY"] = "MONEY";
    LootGlobalType["MACHINERYKEY"] = "MACHINERYKEY";
    LootGlobalType["REGISTERROUBLES"] = "REGISTERROUBLES";
    LootGlobalType["SHTURMANSSTASH"] = "SHTURMANSSTASH";
})(LootGlobalType || (LootGlobalType = {}));
var SPTLootContainer;
(function (SPTLootContainer) {
    SPTLootContainer["DRAWER"] = "578f87b7245977356274f2cd";
    SPTLootContainer["CASHREGISTER"] = "578f879c24597735401e6bc6";
    SPTLootContainer["PCBLOCK"] = "59139c2186f77411564f8e42";
    SPTLootContainer["JACKET"] = "578f8778245977358849a9b5";
    SPTLootContainer["TOOLBOX"] = "5909d50c86f774659e6aaebe";
    SPTLootContainer["MEDCASE"] = "5909d4c186f7746ad34e805a";
    SPTLootContainer["SAFE"] = "578f8782245977354405a1e3";
    SPTLootContainer["WEAPONBOX5X5"] = "5909d89086f77472591234a0";
    SPTLootContainer["WEAPONBOX5X2"] = "5909d5ef86f77467974efbd8";
    SPTLootContainer["DUFFLEBAG01"] = "578f87a3245977356274f2cb";
    SPTLootContainer["WEAPONBOX6X3"] = "5909d76c86f77471e53d2adf";
    SPTLootContainer["WEAPONBOX4X4"] = "5909d7cf86f77470ee57d75a";
    SPTLootContainer["GRENADEBOX"] = "5909d36d86f774660f0bb900";
    SPTLootContainer["PLASTICSUITCASE"] = "5c052cea86f7746b2101e8d8";
    SPTLootContainer["MEDBAGSMU0601"] = "5909d24f86f77466f56e6855";
    SPTLootContainer["WOODENCRATE"] = "578f87ad245977356274f2cc";
    SPTLootContainer["MEDICALSUPPLYCRATE"] = "5d6fe50986f77449d97f7463";
    SPTLootContainer["TECHNICALSUPPLYCRATE"] = "5d6fd45b86f774317075ed43";
    SPTLootContainer["DEADSCAV"] = "5909e4b686f7747f5b744fa4";
    SPTLootContainer["GROUNDCACHE"] = "5d6d2b5486f774785c2ba8ea";
    SPTLootContainer["BURRIEDBARRELCACHE"] = "5d6d2bb386f774785b07a77a";
    SPTLootContainer["WOODENAMMOBOX"] = "5909d45286f77465a8136dc6";
    SPTLootContainer["JACKETDORMS114"] = "59387ac686f77401442ddd61";
    SPTLootContainer["JACKETMACHINERYKEY"] = "5937ef2b86f77408a47244b3";
    SPTLootContainer["RATIONSUPPLYCRATE"] = "5d6fd13186f77424ad2a8c69";
    SPTLootContainer["JACKETDORMS204"] = "5914944186f774189e5e76c2";
    SPTLootContainer["COMMONFUNDSTASH"] = "5d07b91b86f7745a077a9432";
    SPTLootContainer["DUFFLEBAG02"] = "61aa1e9a32a4743c3453d2cf";
    SPTLootContainer["MEDBAGSMU0602"] = "61aa1ead84ea0800645777fd";
    SPTLootContainer["CASHREGISTERTAR"] = "5ad74cf586f774391278f6f0";
    SPTLootContainer["BANKCASHREGISTER"] = "64d116f41a9c6143a956127d";
    SPTLootContainer["BANKSAFE"] = "64d11702dd0cd96ab82c3280";
})(SPTLootContainer || (SPTLootContainer = {}));
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        const copyArray = [];
        for (const item of obj) {
            copyArray.push(deepCopy(item));
        }
        return copyArray;
    }
    const copyObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObj[key] = deepCopy(obj[key]);
        }
    }
    return copyObj;
}
class AllTheLoot {
    logger;
    database;
    // Config files
    config = require("../config/config.json");
    scriptDirectory = __dirname;
    configFilePath = path.join(this.scriptDirectory, '../Config/clearNames.json');
    jsonStringClearNames = fs.readFileSync(this.configFilePath, "utf-8");
    jsonDataClearNames = JSON.parse(this.jsonStringClearNames);
    postDBLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.logger.warning("AllTheLoot v1.0.4 initialized");
        // get database from server
        this.database = container.resolve("DatabaseServer");
        const tables = this.database.getTables();
        // get handbook from server
        const handbook_Items = Object.values(tables.templates.handbook)[1];
        // deep clone original SPT handbook items to dedicated arrays 
        const handbook_Items_toModify = deepCopy(handbook_Items);
        const handbook_Items_ref = deepCopy(handbook_Items);
        const lootRecordsCalculated = this.createLootRecords(handbook_Items_toModify, handbook_Items_ref, tables);
        this.database.getTables().loot.staticLoot = lootRecordsCalculated;
        const itemsAmount = handbook_Items.length;
        this.logger.warning("AllTheLoot v1.0.4 successfully applied");
        this.logger.warning("Now you are able to loot most of the " + itemsAmount + " handbook items from containers");
    }
    adjustSpawnRate(data, data_ref, lootType) {
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
        spawnTweaker *= 10;
        if (data_ref.Price < 6000 && data.Price === data_ref.Price && lootType === "AMMO_ROUNDS") // - 6000 (Ammo rounds)
            data.Price = (50000 * spawnTweaker);
        else if (data_ref.Price < 6000 && data.Price === data_ref.Price && lootType !== "AMMO_ROUNDS") // - 6000 (Everything aside from Ammo Rounds)
            data.Price = (45000 * spawnTweaker);
        else if (data_ref.Price >= 6000 && data_ref.Price < 50000 && data.Price === data_ref.Price) // 6000 - 50000
            data.Price = (50000 * spawnTweaker);
        else if (data_ref.Price >= 50000 && data_ref.Price < 100000 && data.Price === data_ref.Price) // 50000 - 100000
            data.Price = (40000 * spawnTweaker);
        else if (data_ref.Price >= 100000 && data_ref.Price < 1000000 && data.Price === data_ref.Price) // 100000 - 1000000
            data.Price = (20000 * spawnTweaker);
        else if (data_ref.Price >= 1000000 && data_ref.Price < 2000000 && data.Price === data_ref.Price) // 1000000 - 2000000
            data.Price = (10000 * spawnTweaker);
        else if (data_ref.Price >= 2000000 && data.Price === data_ref.Price) // 2000000+
            data.Price = (5000 * spawnTweaker);
        else {
            return;
        }
        if (data_ref.Price < 100000) {
            const randomFraction = (Math.random() - 0.5) * 0.1;
            data.Price += (data.Price * randomFraction);
        }
        // Increase spawn rate for selected items
        if (this.config.selectedItems_AdjustSpawnChance.includes(data.Id)) {
            const index = this.config.selectedItems_AdjustSpawnChance.indexOf(data.Id);
            data.Price *= this.config.selectedItems_spawnChance[index];
        }
        data.Price = Math.floor(data.Price);
    }
    adjustItemSpawnRateForEachContainerType(lootData) {
        const allCategoriesInContainer = [];
        for (let i = 0; i < lootData.length; i++) {
            allCategoriesInContainer.push(lootData[i]);
        }
        let totalItemAmountInContainer = 0;
        for (let i = 0; i < lootData.length; i++) {
            totalItemAmountInContainer += allCategoriesInContainer[i].length;
        }
        const allRatiosPerCategory = [];
        let sumAllSingleDistributions = 0;
        for (let i = 0; i < lootData.length; i++) {
            const ratioPerCategory = totalItemAmountInContainer / allCategoriesInContainer[i].length;
            allRatiosPerCategory.push(ratioPerCategory);
            sumAllSingleDistributions += ratioPerCategory;
        }
        // normalized scale factors
        const finalScaleFactorsPerCategory = [];
        for (let i = 0; i < allCategoriesInContainer.length; i++) {
            const normalizedScaleFactorPerCategory = allRatiosPerCategory[i] / sumAllSingleDistributions;
            finalScaleFactorsPerCategory.push(normalizedScaleFactorPerCategory);
        }
        for (let i = 0; i < lootData.length; i++) {
            for (let j = 0; j < lootData[i].length; j++) {
                lootData[i][j].Price *= finalScaleFactorsPerCategory[i];
                lootData[i][j].Price = Math.floor(lootData[i][j].Price);
            }
        }
    }
    createUniqueSpawnrate(data) {
        const uniqueValueSet = new Set();
        const adjustedArray = [];
        for (let value of data) {
            if (value !== 0) {
                if (!uniqueValueSet.has(value)) {
                    uniqueValueSet.add(value);
                    adjustedArray.push(Math.floor(value));
                }
                else {
                    let adjustmentPercentage = (Math.random() - 0.5) * 0.05;
                    let adjustedValue = value * (1 + adjustmentPercentage);
                    while (uniqueValueSet.has(adjustedValue)) {
                        adjustmentPercentage = (Math.random() - 0.5) * 0.05;
                        adjustedValue = value * (1 + adjustmentPercentage);
                    }
                    uniqueValueSet.add(adjustedValue);
                    adjustedArray.push(Math.floor(adjustedValue));
                }
            }
            else {
                adjustedArray.push(0);
            }
        }
        for (let i = 0; i < adjustedArray.length; i++) {
            data[i] = adjustedArray[i];
        }
    }
    removeBlacklistedItems(data, lootType) {
        const cleanedLoot = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                if (!this.isBlacklistedItem(data[i][j].Id, lootType)) {
                    cleanedLoot.push(data[i][j]);
                }
            }
        }
        return cleanedLoot;
    }
    isBlacklistedItem(data, LootGlobalType) {
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
        if (isBlacklisted) {
            return true;
        }
        return isBlacklisted; // thanks once more for your help, Drakia
    }
    createLootRecords(data, data_ref, tables) {
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
        const category_DrawerAddOn = [];
        const category_MedicalAddOn = [];
        const category_RationsAddOn = [];
        const category_WeaponBoxAddOn = [];
        const category_DEBUG = [];
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
        const category_DrawerAddOn_ref = [];
        const category_MedicalAddOn_ref = [];
        const category_RationsAddOn_ref = [];
        const category_WeaponBoxAddOn_ref = [];
        const category_DEBUG_ref = [];
        const sptItems = tables.templates.items;
        for (let i = 0; i < data.length; i++) {
            // ===== BARTER ITEMS =====
            if (data[i].ParentId === "5b47574386f77428ca22b2f4") { // Barter Items||Others
                category_Barter_Others.push(data[i]);
                category_Barter_Others_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2ee") { // Barter Items||Building materials
                category_Barter_BuildingMaterials.push(data[i]);
                category_Barter_BuildingMaterials_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2ef") { // Barter Items||Electronics
                category_Barter_Electronics.push(data[i]);
                category_Barter_Electronics_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2ed") { // Barter Items||Energy elements
                category_Barter_EnergyElements.push(data[i]);
                category_Barter_EnergyElements_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2f2") { // Barter Items||Flammable materials
                category_Barter_FlammableMaterials.push(data[i]);
                category_Barter_FlammableMaterials_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2f0") { // Barter Items||Household materials
                category_Barter_HouseholdMaterials.push(data[i]);
                category_Barter_HouseholdMaterials_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2f3") { // Barter Items||Medical supplies
                category_Barter_MedicalSupplies.push(data[i]);
                category_Barter_MedicalSupplies_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2f6") { // Barter Items||Tools
                category_Barter_Tools.push(data[i]);
                category_Barter_Tools_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b2f1") { // Barter Items||Valuables
                category_Barter_Valuables.push(data[i]);
                category_Barter_Valuables_ref.push(data_ref[i]);
            }
            // ===== GEAR =====
            if (data[i].ParentId === "5b5f6f6c86f774093f2ecf0b") { // Gear||Backpacks
                category_Gear_Backpacks.push(data[i]);
                category_Gear_Backpacks_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f701386f774093f2ecf0f") { // Gear||Body armor
                category_Gear_BodyArmor.push(data[i]);
                category_Gear_BodyArmor_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b331") { // Gear||Eyewear
                category_Gear_Eyewear.push(data[i]);
                category_Gear_Eyewear_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b32f") { // Gear||Facecovers
                category_Gear_Facecovers.push(data[i]);
                category_Gear_Facecovers_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f704686f77447ec5d76d7") { // Gear||Gear components
                category_Gear_GearComponents.push(data[i]);
                category_Gear_GearComponents_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b330") { // Gear||Headgear
                category_Gear_Headgear.push(data[i]);
                category_Gear_Headgear_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f6f3c86f774094242ef87") { // Gear||Headsets
                category_Gear_Headsets.push(data[i]);
                category_Gear_Headsets_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f6fd286f774093f2ecf0d") { // Gear||Secure containers
                category_Gear_SecureContainers.push(data[i]);
                category_Gear_SecureContainers_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f6fa186f77409407a7eb7") { // Gear||Storage containers
                category_Gear_StorageContainers.push(data[i]);
                category_Gear_StorageContainers_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f6f8786f77447ed563642") { // Gear||Tactical rigs
                category_Gear_TacticalRigs.push(data[i]);
                category_Gear_TacticalRigs_ref.push(data_ref[i]);
            }
            // ===== WEAPON PART & MODS =====
            if (data[i].ParentId === "5b5f74cc86f77447ec5d770a") { // Weapon parts & mods||Functional mods||Auxiliary parts
                category_WeaponPartsMods_FM_AuxiliaryParts.push(data[i]);
                category_WeaponPartsMods_FM_AuxiliaryParts_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f71c186f77409407a7ec0") { // Weapon parts & mods||Functional mods||Bipods
                category_WeaponPartsMods_FM_Bipods.push(data[i]);
                category_WeaponPartsMods_FM_Bipods_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f71de86f774093f2ecf13") { // Weapon parts & mods||Functional mods||Foregrips
                category_WeaponPartsMods_FM_Foregrips.push(data[i]);
                category_WeaponPartsMods_FM_Foregrips_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f73ab86f774094242f195") { // Weapon parts & mods||Functional mods||Light & laser devices||Flashlights
                category_WeaponPartsMods_FM_LLD_Flashlights.push(data[i]);
                category_WeaponPartsMods_FM_LLD_Flashlights_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f73c486f77447ec5d7704") { // Weapon parts & mods||Functional mods||Light & laser devices||Laser target pointers
                category_WeaponPartsMods_FM_LLD_LaserTargetPointers.push(data[i]);
                category_WeaponPartsMods_FM_LLD_LaserTargetPointers_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f737886f774093e6cb4fb") { // Weapon parts & mods||Functional mods||Light & laser devices||Tactical combo devices
                category_WeaponPartsMods_FM_LLD_TacticalComboDevices.push(data[i]);
                category_WeaponPartsMods_FM_LLD_TacticalComboDevices_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f724c86f774093f2ecf15") { // Weapon parts & mods||Functional mods||Muzzle devices||Flashhiders & brakes
                category_WeaponPartsMods_FM_MD_FlashhidersBrakes.push(data[i]);
                category_WeaponPartsMods_FM_MD_FlashhidersBrakes_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f72f786f77447ec5d7702") { // Weapon parts & mods||Functional mods||Muzzle devices||Muzzle adapters
                category_WeaponPartsMods_FM_MD_MuzzleAdapters.push(data[i]);
                category_WeaponPartsMods_FM_MD_MuzzleAdapters_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f731a86f774093e6cb4f9") { // Weapon parts & mods||Functional mods||Muzzle devices||Suppressors
                category_WeaponPartsMods_FM_MD_Suppressors.push(data[i]);
                category_WeaponPartsMods_FM_MD_Suppressors_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f740a86f77447ec5d7706") { // Weapon parts & mods||Functional mods||Sights||Assault scopes
                category_WeaponPartsMods_FM_S_AssaultScopes.push(data[i]);
                category_WeaponPartsMods_FM_S_AssaultScopes_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f742686f774093e6cb4ff") { // Weapon parts & mods||Functional mods||Sights||Collimators
                category_WeaponPartsMods_FM_S_Collimators.push(data[i]);
                category_WeaponPartsMods_FM_S_Collimators_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f744786f774094242f197") { // Weapon parts & mods||Functional mods||Sights||Compact collimators
                category_WeaponPartsMods_FM_S_CompactCollimators.push(data[i]);
                category_WeaponPartsMods_FM_S_CompactCollimators_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f746686f77447ec5d7708") { // Weapon parts & mods||Functional mods||Sights||Iron sights
                category_WeaponPartsMods_FM_S_IronSights.push(data[i]);
                category_WeaponPartsMods_FM_S_IronSights_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f748386f774093e6cb501") { // Weapon parts & mods||Functional mods||Sights||Optics
                category_WeaponPartsMods_FM_S_Optics.push(data[i]);
                category_WeaponPartsMods_FM_S_Optics_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f749986f774094242f199") { // Weapon parts & mods||Functional mods||Sights||Special purpose sights
                category_WeaponPartsMods_FM_S_SpecialPurposeSights.push(data[i]);
                category_WeaponPartsMods_FM_S_SpecialPurposeSights_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f751486f77447ec5d770c") { // Weapon parts & mods||Gear mods||Charging handles
                category_WeaponPartsMods_GM_ChargingHandles.push(data[i]);
                category_WeaponPartsMods_GM_ChargingHandles_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f752e86f774093e6cb505") { // Weapon parts & mods||Gear mods||Launchers
                category_WeaponPartsMods_GM_Launchers.push(data[i]);
                category_WeaponPartsMods_GM_Launchers_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f754a86f774094242f19b") { // Weapon parts & mods||Gear mods||Magazines
                category_WeaponPartsMods_GM_Magazines.push(data[i]);
                category_WeaponPartsMods_GM_Magazines_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f755f86f77447ec5d770e") { // Weapon parts & mods||Gear mods||Mounts
                category_WeaponPartsMods_GM_Mounts.push(data[i]);
                category_WeaponPartsMods_GM_Mounts_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f757486f774093e6cb507") { // Weapon parts & mods||Gear mods||Stocks & chassis
                category_WeaponPartsMods_GM_StocksChassis.push(data[i]);
                category_WeaponPartsMods_GM_StocksChassis_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f75c686f774094242f19f") { // Weapon parts & mods||Vital parts||Barrels
                category_WeaponPartsMods_VP_Barrels.push(data[i]);
                category_WeaponPartsMods_VP_Barrels_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f760586f774093e6cb509") { // Weapon parts & mods||Vital parts||Gas blocks
                category_WeaponPartsMods_VP_GasBlocks.push(data[i]);
                category_WeaponPartsMods_VP_GasBlocks_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f75e486f77447ec5d7712") { // Weapon parts & mods||Vital parts||Handguards
                category_WeaponPartsMods_VP_Handguards.push(data[i]);
                category_WeaponPartsMods_VP_Handguards_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f761f86f774094242f1a1") { // Weapon parts & mods||Vital parts||Pistol grips
                category_WeaponPartsMods_VP_PistolGrips.push(data[i]);
                category_WeaponPartsMods_VP_PistolGrips_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f764186f77447ec5d7714") { // Weapon parts & mods||Vital parts||Receivers & slides
                category_WeaponPartsMods_VP_ReceiversSlides.push(data[i]);
                category_WeaponPartsMods_VP_ReceiversSlides_ref.push(data_ref[i]);
            }
            // ===== WEAPONS =====
            if (data[i].ParentId === "5b5f78e986f77447ed5636b1") { // Weapons||Assault carbines
                category_Weapons_AssaultCarbines.push(data[i]);
                category_Weapons_AssaultCarbines_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f78fc86f77409407a7f90") { // Weapons||Assault rifles
                category_Weapons_AssaultRifles.push(data[i]);
                category_Weapons_AssaultRifles_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f798886f77447ed5636b5") { // Weapons||Bolt-action rifles
                category_Weapons_BoltActionRifles.push(data[i]);
                category_Weapons_BoltActionRifles_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f79d186f774093f2ed3c2") { // Weapons||Grenade launchers
                category_Weapons_GrenadeLaunchers.push(data[i]);
                category_Weapons_GrenadeLaunchers_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f79a486f77409407a7f94") { // Weapons||Machine guns
                category_Weapons_MachineGuns.push(data[i]);
                category_Weapons_MachineGuns_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f791486f774093f2ed3be") { // Weapons||Marksman rifles
                category_Weapons_MarksmanRifles.push(data[i]);
                category_Weapons_MarksmanRifles_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f7a0886f77409407a7f96") { // Weapons||Melee weapons
                category_Weapons_MeleeWeapons.push(data[i]);
                category_Weapons_MeleeWeapons_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f792486f77447ed5636b3") { // Weapons||Pistols
                category_Weapons_Pistols.push(data[i]);
                category_Weapons_Pistols_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f796a86f774093f2ed3c0") { // Weapons||SMGs
                category_Weapons_SMGs.push(data[i]);
                category_Weapons_SMGs_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f794b86f77409407a7f92") { // Weapons||Shotguns
                category_Weapons_Shotguns.push(data[i]);
                category_Weapons_Shotguns_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f79eb86f77447ed5636b7") { // Weapons||Special weapons
                category_Weapons_SpecialWeapons.push(data[i]);
                category_Weapons_SpecialWeapons_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b5f7a2386f774093f2ed3c4") { // Weapons||Throwables
                category_Weapons_Throwables.push(data[i]);
                category_Weapons_Throwables_ref.push(data_ref[i]);
            }
            // ===== AMMO =====
            if (data[i].ParentId === "5b47574386f77428ca22b33c") { // Ammo||Ammo packs
                category_Ammo_AmmoPacks.push(data[i]);
                category_Ammo_AmmoPacks_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b33b") {
                category_Ammo_Rounds.push(data[i]); // Ammo||Rounds
                category_Ammo_Rounds_ref.push(data_ref[i]);
                /* if (tables.templates.items(data[i].Id) === "Caliber12g" || data[i]._props === "Caliber20g" || data[i]._props === "Caliber23x75" || data[i]._props === "Caliber26x75"
                || data[i]._props === "Caliber30x29" || data[i]._props === "Caliber366TKM" || data[i]._props === "Caliber40x46" || data[i]._props === "Caliber46x30"
                || data[i]._props === "Caliber40mmRU" || data[i]._props === "Caliber545x39" || data[i]._props === "Caliber556x45NATO" || data[i]._props === "Caliber57x28"
                || data[i]._props === "Caliber762x39" || data[i]._props === "Caliber762x25TT" || data[i]._props === "Caliber762x35" || data[i]._props === "Caliber762x51"
                || data[i]._props === "Caliber762x54R" || data[i]._props === "Caliber86x70" || data[i]._props === "Caliber9x18PM" || data[i]._props === "Caliber9x19PARA"
                || data[i]._props === "Caliber9x21" || data[i]._props === "Caliber9x33R" || data[i]._props === "Caliber9x39" || data[i]._props === "Caliber127x55"
                || data[i]._props === "Caliber127x108" || data[i]._props === "Caliber1143x23ACP")
                {
                    this.logger.error("Adding ammo round");
                    category_Ammo_Rounds.push(data[i]);                                 // Ammo||Rounds
                    category_Ammo_Rounds_ref.push(data_ref[i]);
                } */
            }
            // ===== PROVISIONS =====
            if (data[i].ParentId === "5b47574386f77428ca22b335") { // Provisions||Drinks
                category_Provisions_Drinks.push(data[i]);
                category_Provisions_Drinks_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b336") { // Provisions||Food
                category_Provisions_Food.push(data[i]);
                category_Provisions_Food_ref.push(data_ref[i]);
            }
            // ===== MEDICATION =====
            if (data[i].ParentId === "5b47574386f77428ca22b33a") { // Medication||Injectors
                category_Medication_Injectors.push(data[i]);
                category_Medication_Injectors_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b339") { // Medication||Injury treatment
                category_Medication_InjuryTreatment.push(data[i]);
                category_Medication_InjuryTreatment_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b338") { // Medication||Medkits
                category_Medication_Medkits.push(data[i]);
                category_Medication_Medkits_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5b47574386f77428ca22b337") { // Medication||Pills
                category_Medication_Pills.push(data[i]);
                category_Medication_Pills_ref.push(data_ref[i]);
            }
            // ===== KEYS =====
            if (data[i].ParentId === "5c518ed586f774119a772aee") { // Keys||Electronic keys
                category_Keys_ElectronicKeys.push(data[i]);
                category_Keys_ElectronicKeys_ref.push(data_ref[i]);
            }
            if (data[i].ParentId === "5c518ec986f7743b68682ce2") { // Keys||Mechanical keys
                category_Keys_MechanicalKeys.push(data[i]);
                category_Keys_MechanicalKeys_ref.push(data_ref[i]);
            }
            // ===== INFO ITEMS =====
            if (data[i].ParentId === "5b47574386f77428ca22b341") { // Info items
                category_InfoItems.push(data[i]);
                category_InfoItems_ref.push(data_ref[i]);
            }
            // ===== SPECIAL EQUIPMENT =====
            if (data[i].ParentId === "5b47574386f77428ca22b345") { // Special equipment
                category_SpecialEquipment.push(data[i]);
                category_SpecialEquipment_ref.push(data_ref[i]);
            }
            // ===== MAPS =====
            if (data[i].ParentId === "5b47574386f77428ca22b343") { // Maps
                category_Maps.push(data[i]);
                category_Maps_ref.push(data_ref[i]);
            }
            // ===== MONEY =====
            if (data[i].ParentId === "5b5f78b786f77447ed5636af") { // Money||Roubles,Dollars,Euros
                category_Money.push(data[i]);
                category_Money_ref.push(data_ref[i]);
            }
            // ===== MACHINERY KEY ======
            if (data[i].Id === "5937ee6486f77408994ba448") { // Machinery Key (direct assignment by ID)
                category_MachineryKey.push(data[i]);
                category_MachineryKey_ref.push(data_ref[i]);
            }
            // ===== AMMO GRENADES =====                                                // used instead of blacklisting category AMMO
            if (data[i].Id === "5656eb674bdc2d35148b457c" || data[i].Id === "5ede474b0c226a66f5402622" || data[i].Id === "5ede475b549eed7c6d5c18fb" ||
                data[i].Id === "5ede4739e0350d05467f73e8" || data[i].Id === "5f0c892565703e5c461894e9" || data[i].Id === "5ede47405b097655935d7d16" ||
                data[i].Id === "5ede475339ee016e8c534742" || data[i].Id === "5e2af51086f7746d3f3c3402") {
                category_Ammo_Grenades.push(data[i]);
                category_Ammo_Grenades_ref.push(data_ref[i]);
            }
            // ===== DRAWER ADDON =====                                                // used instead of blacklisting categories from type barter
            if (data[i].Id === "56742c2e4bdc2d95058b456d" || data[i].Id === "57347b8b24597737dd42e192" || data[i].Id === "56742c284bdc2d98058b456d") {
                category_DrawerAddOn.push(data[i]);
                category_DrawerAddOn_ref.push(data_ref[i]);
            }
            // ===== MEDICAL ADDON =====                                                // used instead of blacklisting categories from type barter
            if (data[i].Id === "5d4041f086f7743cac3f22a7" || data[i].Id === "5c13cef886f774072e618e82" || data[i].Id === "57347c93245977448d35f6e3" ||
                data[i].Id === "5c13cd2486f774072c757944") {
                category_MedicalAddOn.push(data[i]);
                category_MedicalAddOn_ref.push(data_ref[i]);
            }
            // ===== RATIONS ADDON =====                                                // used instead of blacklisting category from type barter
            if (data[i].Id === "62a09ee4cf4a99369e262453" || data[i].Id === "5bc9be8fd4351e00334cae6e" || data[i].Id === "573475fb24597737fb1379e1" ||
                data[i].Id === "5e54f6af86f7742199090bf3" || data[i].Id === "5af0484c86f7740f02001f7f" || data[i].Id === "573476d324597737da2adc13" ||
                data[i].Id === "6389c6463485cf0eeb260715" || data[i].Id === "5734770f24597738025ee254" || data[i].Id === "573476f124597737e04bf328") {
                category_RationsAddOn.push(data[i]);
                category_RationsAddOn_ref.push(data_ref[i]);
            }
            // ===== WEAPONBOX5x5 ADDON =====
            if (data[i].Id === "6389c85357baa773a825b356" || data[i].Id === "6389c7f115805221fb410466" || data[i].Id === "6389c7750ef44505c87f5996" ||
                data[i].Id === "5c052f6886f7746b1e3db148" || data[i].Id === "5c052fb986f7746b2101e909" || data[i].Id === "5c05308086f7746b2101e90b" ||
                data[i].Id === "5c05300686f7746dce784e5d" || data[i].Id === "5d0379a886f77420407aa271") {
                category_WeaponBoxAddOn.push(data[i]);
                category_WeaponBoxAddOn_ref.push(data_ref[i]);
            }
            // DEBUG
            /* if(data[i].Id === "5c0a840b86f7742ffa4f2482") {
                category_DEBUG.push(data[i]);
                category_DEBUG_ref.push(data_ref[i]);} */
        }
        if (this.config.removeBackpackRestrictions === true) {
            const backpacks = tables.templates.items;
            category_Gear_Backpacks.forEach(item => {
                backpacks[item.Id]._props.Grids[0]._props.filters = [];
            });
        }
        // items for Shturman's Stash (that normally should contain high tier items)
        // create another array that only contains items above a certain value
        const category_ShturmansStash_Final = [];
        const minValueWeaponShturmansStash = this.config.container_ShturmansStash_MinValuePerItem;
        const maxValueWeaponShturmansStash = this.config.container_ShturmansStash_MaxValuePerItem;
        const preSelectionForShturmansStash = [];
        preSelectionForShturmansStash.push(category_Barter_Valuables);
        preSelectionForShturmansStash.push(category_Gear_BodyArmor);
        preSelectionForShturmansStash.push(category_Gear_Headgear);
        preSelectionForShturmansStash.push(category_Gear_Headsets);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_Bipods);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_Foregrips);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_LLD_Flashlights);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_LLD_LaserTargetPointers);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_LLD_TacticalComboDevices);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_MD_FlashhidersBrakes);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_MD_Suppressors);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_S_AssaultScopes);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_S_Collimators);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_S_CompactCollimators);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_S_Optics);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_FM_S_SpecialPurposeSights);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_GM_Launchers);
        //preSelectionForShturmansStash.push(category_WeaponPartsMods_GM_Magazines);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_GM_StocksChassis);
        //preSelectionForShturmansStash.push(category_WeaponPartsMods_VP_Barrels);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_VP_Handguards);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_VP_PistolGrips);
        preSelectionForShturmansStash.push(category_WeaponPartsMods_VP_ReceiversSlides);
        preSelectionForShturmansStash.push(category_Weapons_AssaultCarbines);
        preSelectionForShturmansStash.push(category_Weapons_AssaultRifles);
        preSelectionForShturmansStash.push(category_Weapons_BoltActionRifles);
        preSelectionForShturmansStash.push(category_Weapons_GrenadeLaunchers);
        preSelectionForShturmansStash.push(category_Weapons_MachineGuns);
        preSelectionForShturmansStash.push(category_Weapons_MarksmanRifles);
        preSelectionForShturmansStash.push(category_Weapons_MeleeWeapons);
        preSelectionForShturmansStash.push(category_Weapons_Pistols);
        preSelectionForShturmansStash.push(category_Weapons_SMGs);
        preSelectionForShturmansStash.push(category_Weapons_Shotguns);
        preSelectionForShturmansStash.push(category_Weapons_SpecialWeapons);
        preSelectionForShturmansStash.push(category_InfoItems);
        preSelectionForShturmansStash.push(category_WeaponBoxAddOn);
        for (let i = 0; i < preSelectionForShturmansStash.length; i++) {
            for (let j = 0; j < preSelectionForShturmansStash[i].length; j++) {
                if (preSelectionForShturmansStash[i][j].Price > minValueWeaponShturmansStash && preSelectionForShturmansStash[i][j].Price < maxValueWeaponShturmansStash)
                    category_ShturmansStash_Final.push(preSelectionForShturmansStash[i][j]);
            }
        }
        // items for Weapon Box 5x5 (less categories allow more weapon/gear spawns)
        // create another array that only contains items above a certain value -> allows spawn of Red Rebel
        const category_WeaponBox5x5_Final = [];
        const minValueWeaponBox5x5 = this.config.container_WeaponBox5x5_MinValuePerItem;
        const maxValueWeaponBox5x5 = this.config.container_WeaponBox5x5_MaxValuePerItem;
        const preSelectionForWeaponBox5x5 = [];
        preSelectionForWeaponBox5x5.push(category_Gear_Backpacks);
        preSelectionForWeaponBox5x5.push(category_Gear_BodyArmor);
        preSelectionForWeaponBox5x5.push(category_Gear_Headgear);
        preSelectionForWeaponBox5x5.push(category_Gear_Headsets);
        preSelectionForWeaponBox5x5.push(category_Gear_TacticalRigs);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_Bipods);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_Foregrips);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_LLD_Flashlights);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_LLD_LaserTargetPointers);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_LLD_TacticalComboDevices);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_MD_FlashhidersBrakes);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_MD_Suppressors);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_S_AssaultScopes);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_S_Collimators);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_S_CompactCollimators);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_S_Optics);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_FM_S_SpecialPurposeSights);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_GM_Launchers);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_GM_Magazines);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_GM_StocksChassis);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_VP_Barrels);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_VP_Handguards);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_VP_PistolGrips);
        preSelectionForWeaponBox5x5.push(category_WeaponPartsMods_VP_ReceiversSlides);
        preSelectionForWeaponBox5x5.push(category_Weapons_AssaultCarbines);
        preSelectionForWeaponBox5x5.push(category_Weapons_AssaultRifles);
        preSelectionForWeaponBox5x5.push(category_Weapons_BoltActionRifles);
        preSelectionForWeaponBox5x5.push(category_Weapons_GrenadeLaunchers);
        preSelectionForWeaponBox5x5.push(category_Weapons_MachineGuns);
        preSelectionForWeaponBox5x5.push(category_Weapons_MarksmanRifles);
        preSelectionForWeaponBox5x5.push(category_Weapons_MeleeWeapons);
        preSelectionForWeaponBox5x5.push(category_Weapons_Pistols);
        preSelectionForWeaponBox5x5.push(category_Weapons_SMGs);
        preSelectionForWeaponBox5x5.push(category_Weapons_Shotguns);
        preSelectionForWeaponBox5x5.push(category_Weapons_SpecialWeapons);
        preSelectionForWeaponBox5x5.push(category_WeaponBoxAddOn);
        for (let i = 0; i < preSelectionForWeaponBox5x5.length; i++) {
            for (let j = 0; j < preSelectionForWeaponBox5x5[i].length; j++) {
                if (preSelectionForWeaponBox5x5[i][j].Price > minValueWeaponBox5x5 && preSelectionForWeaponBox5x5[i][j].Price < maxValueWeaponBox5x5)
                    category_WeaponBox5x5_Final.push(preSelectionForWeaponBox5x5[i][j]);
            }
        }
        // items for Weapon Box 6x3 (less categories allow more weapon/gear spawns)
        // create another array that only contains items above a certain value
        const category_WeaponBox6x3_Final = [];
        const minValueWeaponBox6x3 = this.config.container_WeaponBox6x3_MinValuePerItem;
        const maxValueWeaponBox6x3 = this.config.container_WeaponBox6x3_MaxValuePerItem;
        const preSelectionForWeaponBox6x3 = [];
        preSelectionForWeaponBox6x3.push(category_Gear_BodyArmor);
        preSelectionForWeaponBox6x3.push(category_Gear_Headgear);
        preSelectionForWeaponBox6x3.push(category_Gear_Headsets);
        preSelectionForWeaponBox6x3.push(category_Gear_TacticalRigs);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_Bipods);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_Foregrips);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_LLD_Flashlights);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_LLD_LaserTargetPointers);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_LLD_TacticalComboDevices);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_MD_FlashhidersBrakes);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_MD_Suppressors);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_S_AssaultScopes);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_S_Collimators);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_S_CompactCollimators);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_S_Optics);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_FM_S_SpecialPurposeSights);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_GM_Launchers);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_GM_Magazines);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_GM_StocksChassis);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_VP_Barrels);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_VP_Handguards);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_VP_PistolGrips);
        preSelectionForWeaponBox6x3.push(category_WeaponPartsMods_VP_ReceiversSlides);
        preSelectionForWeaponBox6x3.push(category_Weapons_AssaultCarbines);
        preSelectionForWeaponBox6x3.push(category_Weapons_AssaultRifles);
        preSelectionForWeaponBox6x3.push(category_Weapons_BoltActionRifles);
        preSelectionForWeaponBox6x3.push(category_Weapons_MachineGuns);
        preSelectionForWeaponBox6x3.push(category_Weapons_MarksmanRifles);
        preSelectionForWeaponBox6x3.push(category_Weapons_MeleeWeapons);
        preSelectionForWeaponBox6x3.push(category_Weapons_Pistols);
        preSelectionForWeaponBox6x3.push(category_Weapons_SMGs);
        preSelectionForWeaponBox6x3.push(category_Weapons_Shotguns);
        preSelectionForWeaponBox6x3.push(category_Weapons_SpecialWeapons);
        for (let i = 0; i < preSelectionForWeaponBox6x3.length; i++) {
            for (let j = 0; j < preSelectionForWeaponBox6x3[i].length; j++) {
                if (preSelectionForWeaponBox6x3[i][j].Price > minValueWeaponBox6x3 && preSelectionForWeaponBox6x3[i][j].Price < maxValueWeaponBox6x3)
                    category_WeaponBox6x3_Final.push(preSelectionForWeaponBox6x3[i][j]);
            }
        }
        // DEBUG
        // Put all handbook items in one array for DEBUG purposes
        if (this.config.showItemListing) {
            let allHandbookItems = [];
            allHandbookItems = allHandbookItems.concat(category_Barter_Others, category_Barter_BuildingMaterials, category_Barter_Electronics, category_Barter_EnergyElements, category_Barter_FlammableMaterials, category_Barter_HouseholdMaterials, category_Barter_MedicalSupplies, category_Barter_Tools, category_Barter_Valuables, category_Gear_Backpacks, category_Gear_BodyArmor, category_Gear_Eyewear, category_Gear_Facecovers, category_Gear_GearComponents, category_Gear_Headgear, category_Gear_Headsets, category_Gear_SecureContainers, category_Gear_StorageContainers, category_Gear_TacticalRigs, category_WeaponPartsMods_FM_AuxiliaryParts, category_WeaponPartsMods_FM_Bipods, category_WeaponPartsMods_FM_Foregrips, category_WeaponPartsMods_FM_LLD_Flashlights, category_WeaponPartsMods_FM_LLD_LaserTargetPointers, category_WeaponPartsMods_FM_LLD_TacticalComboDevices, category_WeaponPartsMods_FM_MD_FlashhidersBrakes, category_WeaponPartsMods_FM_MD_MuzzleAdapters, category_WeaponPartsMods_FM_MD_Suppressors, category_WeaponPartsMods_FM_S_AssaultScopes, category_WeaponPartsMods_FM_S_Collimators, category_WeaponPartsMods_FM_S_CompactCollimators, category_WeaponPartsMods_FM_S_IronSights, category_WeaponPartsMods_FM_S_Optics, category_WeaponPartsMods_FM_S_SpecialPurposeSights, category_WeaponPartsMods_GM_ChargingHandles, category_WeaponPartsMods_GM_Launchers, category_WeaponPartsMods_GM_Magazines, category_WeaponPartsMods_GM_Mounts, category_WeaponPartsMods_GM_StocksChassis, category_WeaponPartsMods_VP_Barrels, category_WeaponPartsMods_VP_GasBlocks, category_WeaponPartsMods_VP_Handguards, category_WeaponPartsMods_VP_PistolGrips, category_WeaponPartsMods_VP_ReceiversSlides, category_Weapons_AssaultCarbines, category_Weapons_AssaultRifles, category_Weapons_BoltActionRifles, category_Weapons_GrenadeLaunchers, category_Weapons_MachineGuns, category_Weapons_MarksmanRifles, category_Weapons_MeleeWeapons, category_Weapons_Pistols, category_Weapons_SMGs, category_Weapons_Shotguns, category_Weapons_SpecialWeapons, category_Weapons_Throwables, category_Ammo_AmmoPacks, category_Ammo_Rounds, category_Provisions_Drinks, category_Provisions_Food, category_Medication_Injectors, category_Medication_InjuryTreatment, category_Medication_Medkits, category_Medication_Pills, category_Keys_ElectronicKeys, category_Keys_MechanicalKeys, category_InfoItems, category_SpecialEquipment, category_Maps, category_Money);
            // DEBUG (All items before adjustment)
            this.logger.error("All " + allHandbookItems.length + " items with corresponding prices from Handbook");
            // Item IDs, names, prices
            allHandbookItems.forEach(item => {
                const propertyName = `${item.Id} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning("ID: " + item.Id + " || Name: " + value + " || Price: " + item.Price);
            });
            // Item IDs only
            /* allHandbookItems.forEach(item => {
                this.logger.warning(item.Id);
            }); */
            // Item names only
            /* allHandbookItems.forEach(item => {
                const propertyName = `${item.Id} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value);
            }); */
            // Item prices only
            /* allHandbookItems.forEach(item => {
                this.logger.warning(item.Price);
            });  */
        }
        // adjust the spawn rate here (so it's easier to assign rates to certain categories)
        // ===== BARTER ITEMS =====
        for (let i = 0; i < category_Barter_Others.length; i++)
            this.adjustSpawnRate(category_Barter_Others[i], category_Barter_Others_ref[i], LootType.BARTER_OTHERS);
        for (let i = 0; i < category_Barter_BuildingMaterials.length; i++)
            this.adjustSpawnRate(category_Barter_BuildingMaterials[i], category_Barter_BuildingMaterials_ref[i], LootType.BARTER_BUILDINGMATERIALS);
        for (let i = 0; i < category_Barter_Electronics.length; i++)
            this.adjustSpawnRate(category_Barter_Electronics[i], category_Barter_Electronics_ref[i], LootType.BARTER_ELECTRONICS);
        for (let i = 0; i < category_Barter_EnergyElements.length; i++)
            this.adjustSpawnRate(category_Barter_EnergyElements[i], category_Barter_EnergyElements_ref[i], LootType.BARTER_ENERGYELEMENTS);
        for (let i = 0; i < category_Barter_FlammableMaterials.length; i++)
            this.adjustSpawnRate(category_Barter_FlammableMaterials[i], category_Barter_FlammableMaterials_ref[i], LootType.BARTER_FLAMMABLEMATERIALS);
        for (let i = 0; i < category_Barter_HouseholdMaterials.length; i++)
            this.adjustSpawnRate(category_Barter_HouseholdMaterials[i], category_Barter_HouseholdMaterials_ref[i], LootType.BARTER_HOUSEHOLDMATERIALS);
        for (let i = 0; i < category_Barter_MedicalSupplies.length; i++)
            this.adjustSpawnRate(category_Barter_MedicalSupplies[i], category_Barter_MedicalSupplies_ref[i], LootType.BARTER_MEDICALSUPPLIES);
        for (let i = 0; i < category_Barter_Tools.length; i++)
            this.adjustSpawnRate(category_Barter_Tools[i], category_Barter_Tools_ref[i], LootType.BARTER_TOOLS);
        for (let i = 0; i < category_Barter_Valuables.length; i++)
            this.adjustSpawnRate(category_Barter_Valuables[i], category_Barter_Valuables_ref[i], LootType.BARTER_VALUABLES);
        // ===== GEAR =====
        for (let i = 0; i < category_Gear_Backpacks.length; i++)
            this.adjustSpawnRate(category_Gear_Backpacks[i], category_Gear_Backpacks_ref[i], LootType.GEAR_BACKPACKS);
        for (let i = 0; i < category_Gear_BodyArmor.length; i++)
            this.adjustSpawnRate(category_Gear_BodyArmor[i], category_Gear_BodyArmor_ref[i], LootType.GEAR_BODYARMOR);
        for (let i = 0; i < category_Gear_Eyewear.length; i++)
            this.adjustSpawnRate(category_Gear_Eyewear[i], category_Gear_Eyewear_ref[i], LootType.GEAR_EYEWEAR);
        for (let i = 0; i < category_Gear_Facecovers.length; i++)
            this.adjustSpawnRate(category_Gear_Facecovers[i], category_Gear_Facecovers_ref[i], LootType.GEAR_FACECOVERS);
        for (let i = 0; i < category_Gear_GearComponents.length; i++)
            this.adjustSpawnRate(category_Gear_GearComponents[i], category_Gear_GearComponents_ref[i], LootType.GEAR_GEARCOMPONENTS);
        for (let i = 0; i < category_Gear_Headgear.length; i++)
            this.adjustSpawnRate(category_Gear_Headgear[i], category_Gear_Headgear_ref[i], LootType.GEAR_HEADGEAR);
        for (let i = 0; i < category_Gear_Headsets.length; i++)
            this.adjustSpawnRate(category_Gear_Headsets[i], category_Gear_Headsets_ref[i], LootType.GEAR_HEADSETS);
        for (let i = 0; i < category_Gear_SecureContainers.length; i++)
            this.adjustSpawnRate(category_Gear_SecureContainers[i], category_Gear_SecureContainers_ref[i], LootType.GEAR_SECURECONTAINERS);
        for (let i = 0; i < category_Gear_StorageContainers.length; i++)
            this.adjustSpawnRate(category_Gear_StorageContainers[i], category_Gear_StorageContainers_ref[i], LootType.GEAR_STORAGECONTAINERS);
        for (let i = 0; i < category_Gear_TacticalRigs.length; i++)
            this.adjustSpawnRate(category_Gear_TacticalRigs[i], category_Gear_TacticalRigs_ref[i], LootType.GEAR_TACTICALRIGS);
        // ===== WEAPON PART & MODS =====
        for (let i = 0; i < category_WeaponPartsMods_FM_AuxiliaryParts.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_AuxiliaryParts[i], category_WeaponPartsMods_FM_AuxiliaryParts_ref[i], LootType.WPM_FM_AUXILIARYPARTS);
        for (let i = 0; i < category_WeaponPartsMods_FM_Bipods.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_Bipods[i], category_WeaponPartsMods_FM_Bipods_ref[i], LootType.WPM_FM_BIPODS);
        for (let i = 0; i < category_WeaponPartsMods_FM_Foregrips.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_Foregrips[i], category_WeaponPartsMods_FM_Foregrips_ref[i], LootType.WPM_FM_FOREGRIPS);
        for (let i = 0; i < category_WeaponPartsMods_FM_LLD_Flashlights.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_LLD_Flashlights[i], category_WeaponPartsMods_FM_LLD_Flashlights_ref[i], LootType.WPM_FM_LLD_FLASHLIGHTS);
        for (let i = 0; i < category_WeaponPartsMods_FM_LLD_LaserTargetPointers.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_LLD_LaserTargetPointers[i], category_WeaponPartsMods_FM_LLD_LaserTargetPointers_ref[i], LootType.WPM_FM_LLD_LASERTARGETPOINTERS);
        for (let i = 0; i < category_WeaponPartsMods_FM_LLD_TacticalComboDevices.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_LLD_TacticalComboDevices[i], category_WeaponPartsMods_FM_LLD_TacticalComboDevices_ref[i], LootType.WPM_FM_LLD_TACTICALCOMBODEVICES);
        for (let i = 0; i < category_WeaponPartsMods_FM_MD_FlashhidersBrakes.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_MD_FlashhidersBrakes[i], category_WeaponPartsMods_FM_MD_FlashhidersBrakes_ref[i], LootType.WPM_FM_MD_FLASHHIDERSBRAKES);
        for (let i = 0; i < category_WeaponPartsMods_FM_MD_MuzzleAdapters.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_MD_MuzzleAdapters[i], category_WeaponPartsMods_FM_MD_MuzzleAdapters_ref[i], LootType.WPM_FM_MD_MUZZLEADAPTERS);
        for (let i = 0; i < category_WeaponPartsMods_FM_MD_Suppressors.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_MD_Suppressors[i], category_WeaponPartsMods_FM_MD_Suppressors_ref[i], LootType.WPM_FM_MD_SUPPRESSORS);
        for (let i = 0; i < category_WeaponPartsMods_FM_S_AssaultScopes.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_AssaultScopes[i], category_WeaponPartsMods_FM_S_AssaultScopes_ref[i], LootType.WPM_FM_S_ASSAULTSCOPES);
        for (let i = 0; i < category_WeaponPartsMods_FM_S_Collimators.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_Collimators[i], category_WeaponPartsMods_FM_S_Collimators_ref[i], LootType.WPM_FM_S_COLLIMATORS);
        for (let i = 0; i < category_WeaponPartsMods_FM_S_CompactCollimators.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_CompactCollimators[i], category_WeaponPartsMods_FM_S_CompactCollimators_ref[i], LootType.WPM_FM_S_COMPACTCOLLIMATORS);
        for (let i = 0; i < category_WeaponPartsMods_FM_S_IronSights.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_IronSights[i], category_WeaponPartsMods_FM_S_IronSights_ref[i], LootType.WPM_FM_S_IRONSIGHTS);
        for (let i = 0; i < category_WeaponPartsMods_FM_S_Optics.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_Optics[i], category_WeaponPartsMods_FM_S_Optics_ref[i], LootType.WPM_FM_S_OPTICS);
        for (let i = 0; i < category_WeaponPartsMods_FM_S_SpecialPurposeSights.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_FM_S_SpecialPurposeSights[i], category_WeaponPartsMods_FM_S_SpecialPurposeSights_ref[i], LootType.WPM_FM_S_SPECIALPURPOSESIGHTS);
        for (let i = 0; i < category_WeaponPartsMods_GM_ChargingHandles.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_ChargingHandles[i], category_WeaponPartsMods_GM_ChargingHandles_ref[i], LootType.WPM_GM_CHARGINGHANDLES);
        for (let i = 0; i < category_WeaponPartsMods_GM_Launchers.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_Launchers[i], category_WeaponPartsMods_GM_Launchers_ref[i], LootType.WPM_GM_LAUNCHERS);
        for (let i = 0; i < category_WeaponPartsMods_GM_Magazines.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_Magazines[i], category_WeaponPartsMods_GM_Magazines_ref[i], LootType.WPM_GM_MAGAZINES);
        for (let i = 0; i < category_WeaponPartsMods_GM_Mounts.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_Mounts[i], category_WeaponPartsMods_GM_Mounts_ref[i], LootType.WPM_GM_MOUNTS);
        for (let i = 0; i < category_WeaponPartsMods_GM_StocksChassis.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_GM_StocksChassis[i], category_WeaponPartsMods_GM_StocksChassis_ref[i], LootType.WPM_GM_STOCKSCHASSIS);
        for (let i = 0; i < category_WeaponPartsMods_VP_Barrels.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_Barrels[i], category_WeaponPartsMods_VP_Barrels_ref[i], LootType.WPM_VP_BARRELS);
        for (let i = 0; i < category_WeaponPartsMods_VP_GasBlocks.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_GasBlocks[i], category_WeaponPartsMods_VP_GasBlocks_ref[i], LootType.WPM_VP_GASBLOCKS);
        for (let i = 0; i < category_WeaponPartsMods_VP_Handguards.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_Handguards[i], category_WeaponPartsMods_VP_Handguards_ref[i], LootType.WPM_VP_HANDGUARDS);
        for (let i = 0; i < category_WeaponPartsMods_VP_PistolGrips.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_PistolGrips[i], category_WeaponPartsMods_VP_PistolGrips_ref[i], LootType.WPM_VP_PISTOLGRIPS);
        for (let i = 0; i < category_WeaponPartsMods_VP_ReceiversSlides.length; i++)
            this.adjustSpawnRate(category_WeaponPartsMods_VP_ReceiversSlides[i], category_WeaponPartsMods_VP_ReceiversSlides_ref[i], LootType.WPM_VP_RECEIVERSSLIDES);
        // ===== WEAPONS =====
        for (let i = 0; i < category_Weapons_AssaultCarbines.length; i++)
            this.adjustSpawnRate(category_Weapons_AssaultCarbines[i], category_Weapons_AssaultCarbines_ref[i], LootType.WEAPONS_ASSAULTCARBINES);
        for (let i = 0; i < category_Weapons_AssaultRifles.length; i++)
            this.adjustSpawnRate(category_Weapons_AssaultRifles[i], category_Weapons_AssaultRifles_ref[i], LootType.WEAPONS_ASSAULTRIFLES);
        for (let i = 0; i < category_Weapons_BoltActionRifles.length; i++)
            this.adjustSpawnRate(category_Weapons_BoltActionRifles[i], category_Weapons_BoltActionRifles_ref[i], LootType.WEAPONS_BOLTACTIONRIFLES);
        for (let i = 0; i < category_Weapons_GrenadeLaunchers.length; i++)
            this.adjustSpawnRate(category_Weapons_GrenadeLaunchers[i], category_Weapons_GrenadeLaunchers_ref[i], LootType.WEAPONS_GRENADELAUNCHERS);
        for (let i = 0; i < category_Weapons_MachineGuns.length; i++)
            this.adjustSpawnRate(category_Weapons_MachineGuns[i], category_Weapons_MachineGuns_ref[i], LootType.WEAPONS_MACHINEGUNS);
        for (let i = 0; i < category_Weapons_MarksmanRifles.length; i++)
            this.adjustSpawnRate(category_Weapons_MarksmanRifles[i], category_Weapons_MarksmanRifles_ref[i], LootType.WEAPONS_MARKSMANRIFLES);
        for (let i = 0; i < category_Weapons_MeleeWeapons.length; i++)
            this.adjustSpawnRate(category_Weapons_MeleeWeapons[i], category_Weapons_MeleeWeapons_ref[i], LootType.WEAPONS_MELEEWEAPONS);
        for (let i = 0; i < category_Weapons_Pistols.length; i++)
            this.adjustSpawnRate(category_Weapons_Pistols[i], category_Weapons_Pistols_ref[i], LootType.WEAPONS_PISTOLS);
        for (let i = 0; i < category_Weapons_SMGs.length; i++)
            this.adjustSpawnRate(category_Weapons_SMGs[i], category_Weapons_SMGs_ref[i], LootType.WEAPONS_SMGS);
        for (let i = 0; i < category_Weapons_Shotguns.length; i++)
            this.adjustSpawnRate(category_Weapons_Shotguns[i], category_Weapons_Shotguns_ref[i], LootType.WEAPONS_SHOTGUNS);
        for (let i = 0; i < category_Weapons_SpecialWeapons.length; i++)
            this.adjustSpawnRate(category_Weapons_SpecialWeapons[i], category_Weapons_SpecialWeapons_ref[i], LootType.WEAPONS_SPECIALWEAPONS);
        for (let i = 0; i < category_Weapons_Throwables.length; i++)
            this.adjustSpawnRate(category_Weapons_Throwables[i], category_Weapons_Throwables_ref[i], LootType.WEAPONS_THROWABLES);
        // ===== AMMO =====
        for (let i = 0; i < category_Ammo_AmmoPacks.length; i++)
            this.adjustSpawnRate(category_Ammo_AmmoPacks[i], category_Ammo_AmmoPacks_ref[i], LootType.AMMO_AMMOPACKS);
        for (let i = 0; i < category_Ammo_Rounds.length; i++)
            this.adjustSpawnRate(category_Ammo_Rounds[i], category_Ammo_Rounds_ref[i], LootType.AMMO_ROUNDS);
        // ===== PROVISIONS =====
        for (let i = 0; i < category_Provisions_Drinks.length; i++)
            this.adjustSpawnRate(category_Provisions_Drinks[i], category_Provisions_Drinks_ref[i], LootType.PROVISIONS_DRINKS);
        for (let i = 0; i < category_Provisions_Food.length; i++)
            this.adjustSpawnRate(category_Provisions_Food[i], category_Provisions_Food_ref[i], LootType.PROVISIONS_FOOD);
        // ===== MEDICATION =====
        for (let i = 0; i < category_Medication_Injectors.length; i++)
            this.adjustSpawnRate(category_Medication_Injectors[i], category_Medication_Injectors_ref[i], LootType.MEDICATION_INJECTORS);
        for (let i = 0; i < category_Medication_InjuryTreatment.length; i++)
            this.adjustSpawnRate(category_Medication_InjuryTreatment[i], category_Medication_InjuryTreatment_ref[i], LootType.MEDICATION_INJURYTREATMENT);
        for (let i = 0; i < category_Medication_Medkits.length; i++)
            this.adjustSpawnRate(category_Medication_Medkits[i], category_Medication_Medkits_ref[i], LootType.MEDICATION_MEDKITS);
        for (let i = 0; i < category_Medication_Pills.length; i++)
            this.adjustSpawnRate(category_Medication_Pills[i], category_Medication_Pills_ref[i], LootType.MEDICATION_PILLS);
        // ===== KEYS =====
        for (let i = 0; i < category_Keys_ElectronicKeys.length; i++)
            this.adjustSpawnRate(category_Keys_ElectronicKeys[i], category_Keys_ElectronicKeys_ref[i], LootType.KEYS_ELECTRONICKEYS);
        for (let i = 0; i < category_Keys_MechanicalKeys.length; i++)
            this.adjustSpawnRate(category_Keys_MechanicalKeys[i], category_Keys_MechanicalKeys_ref[i], LootType.KEYS_MECHANICALKEYS);
        // ===== INFO ITEMS =====
        for (let i = 0; i < category_InfoItems.length; i++)
            this.adjustSpawnRate(category_InfoItems[i], category_InfoItems_ref[i], LootType.INFOITEMS);
        // ===== SPECIAL EQUIPMENT =====
        for (let i = 0; i < category_SpecialEquipment.length; i++)
            this.adjustSpawnRate(category_SpecialEquipment[i], category_SpecialEquipment_ref[i], LootType.SPECIALEQUIPMENT);
        // ===== MAPS =====
        for (let i = 0; i < category_Maps.length; i++)
            this.adjustSpawnRate(category_Maps[i], category_Maps_ref[i], LootType.MAPS);
        // ===== MONEY =====
        for (let i = 0; i < category_Money.length; i++)
            this.adjustSpawnRate(category_Money[i], category_Money_ref[i], LootType.MONEY);
        // Create container type pre-assignment
        // ===== Loot - Drawers =====
        const loot_DrawersArray = [];
        loot_DrawersArray.push(category_Barter_Others);
        loot_DrawersArray.push(category_Barter_BuildingMaterials);
        loot_DrawersArray.push(category_Barter_Electronics);
        loot_DrawersArray.push(category_Barter_EnergyElements);
        loot_DrawersArray.push(category_Keys_ElectronicKeys);
        loot_DrawersArray.push(category_Keys_MechanicalKeys);
        loot_DrawersArray.push(category_InfoItems);
        loot_DrawersArray.push(category_SpecialEquipment);
        loot_DrawersArray.push(category_Maps);
        loot_DrawersArray.push(category_DrawerAddOn);
        let loot_Drawers_Final = deepCopy(loot_DrawersArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Drawers_Final);
        loot_Drawers_Final = this.removeBlacklistedItems(loot_Drawers_Final, LootGlobalType.DRAWER);
        // ===== Loot - Jackets =====
        const loot_JacketsArray = [];
        loot_JacketsArray.push(category_Barter_Others);
        loot_JacketsArray.push(category_Barter_BuildingMaterials);
        loot_JacketsArray.push(category_Barter_Electronics);
        loot_JacketsArray.push(category_Barter_EnergyElements);
        loot_JacketsArray.push(category_Barter_FlammableMaterials);
        loot_JacketsArray.push(category_Barter_Tools);
        loot_JacketsArray.push(category_Keys_MechanicalKeys);
        loot_JacketsArray.push(category_SpecialEquipment);
        let loot_Jackets_Final = deepCopy(loot_JacketsArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Jackets_Final);
        loot_Jackets_Final = this.removeBlacklistedItems(loot_Jackets_Final, LootGlobalType.JACKET);
        // ===== Loot - Weapon Box 4x4 =====
        const loot_WeaponBox4x4Array = [];
        loot_WeaponBox4x4Array.push(category_Gear_BodyArmor);
        loot_WeaponBox4x4Array.push(category_Gear_Eyewear);
        loot_WeaponBox4x4Array.push(category_Gear_Facecovers);
        loot_WeaponBox4x4Array.push(category_Gear_GearComponents);
        loot_WeaponBox4x4Array.push(category_Gear_Headgear);
        loot_WeaponBox4x4Array.push(category_Gear_Headsets);
        loot_WeaponBox4x4Array.push(category_Gear_TacticalRigs);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_AuxiliaryParts);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_Bipods);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_Foregrips);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_LLD_Flashlights);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_LLD_LaserTargetPointers);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_LLD_TacticalComboDevices);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_MD_FlashhidersBrakes);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_MD_MuzzleAdapters);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_MD_Suppressors);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_S_AssaultScopes);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_S_Collimators);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_S_CompactCollimators);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_S_IronSights);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_S_Optics);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_FM_S_SpecialPurposeSights);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_GM_ChargingHandles);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_GM_Launchers);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_GM_Magazines);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_GM_Mounts);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_GM_StocksChassis);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_VP_Barrels);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_VP_GasBlocks);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_VP_Handguards);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_VP_PistolGrips);
        loot_WeaponBox4x4Array.push(category_WeaponPartsMods_VP_ReceiversSlides);
        loot_WeaponBox4x4Array.push(category_Weapons_AssaultRifles);
        loot_WeaponBox4x4Array.push(category_Weapons_MeleeWeapons);
        loot_WeaponBox4x4Array.push(category_Weapons_Pistols);
        loot_WeaponBox4x4Array.push(category_Weapons_SMGs);
        loot_WeaponBox4x4Array.push(category_Weapons_SpecialWeapons);
        loot_WeaponBox4x4Array.push(category_Weapons_Throwables);
        loot_WeaponBox4x4Array.push(category_Ammo_AmmoPacks);
        loot_WeaponBox4x4Array.push(category_Ammo_Rounds);
        let loot_WeaponBox4x4_Final = deepCopy(loot_WeaponBox4x4Array);
        this.adjustItemSpawnRateForEachContainerType(loot_WeaponBox4x4_Final);
        loot_WeaponBox4x4_Final = this.removeBlacklistedItems(loot_WeaponBox4x4_Final, LootGlobalType.WEAPONBOXGLOBAL);
        // ===== Loot - Weapon Box 5x2 =====
        const loot_WeaponBox5x2Array = [];
        loot_WeaponBox5x2Array.push(category_Gear_Eyewear);
        loot_WeaponBox5x2Array.push(category_Gear_Facecovers);
        loot_WeaponBox5x2Array.push(category_Gear_GearComponents);
        loot_WeaponBox5x2Array.push(category_Gear_Headgear);
        loot_WeaponBox5x2Array.push(category_Gear_Headsets);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_AuxiliaryParts);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_Bipods);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_Foregrips);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_LLD_Flashlights);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_LLD_LaserTargetPointers);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_LLD_TacticalComboDevices);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_MD_FlashhidersBrakes);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_MD_MuzzleAdapters);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_MD_Suppressors);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_S_AssaultScopes);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_S_Collimators);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_S_CompactCollimators);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_S_IronSights);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_S_Optics);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_FM_S_SpecialPurposeSights);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_GM_ChargingHandles);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_GM_Launchers);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_GM_Magazines);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_GM_Mounts);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_GM_StocksChassis);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_VP_Barrels);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_VP_GasBlocks);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_VP_Handguards);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_VP_PistolGrips);
        loot_WeaponBox5x2Array.push(category_WeaponPartsMods_VP_ReceiversSlides);
        loot_WeaponBox5x2Array.push(category_Weapons_AssaultCarbines);
        loot_WeaponBox5x2Array.push(category_Weapons_AssaultRifles);
        loot_WeaponBox5x2Array.push(category_Weapons_BoltActionRifles);
        loot_WeaponBox5x2Array.push(category_Weapons_MachineGuns);
        loot_WeaponBox5x2Array.push(category_Weapons_MarksmanRifles);
        loot_WeaponBox5x2Array.push(category_Weapons_MeleeWeapons);
        loot_WeaponBox5x2Array.push(category_Weapons_Pistols);
        loot_WeaponBox5x2Array.push(category_Weapons_SMGs);
        loot_WeaponBox5x2Array.push(category_Weapons_SpecialWeapons);
        loot_WeaponBox5x2Array.push(category_Weapons_Throwables);
        loot_WeaponBox5x2Array.push(category_Ammo_AmmoPacks);
        loot_WeaponBox5x2Array.push(category_Ammo_Rounds);
        let loot_WeaponBox5x2_Final = deepCopy(loot_WeaponBox5x2Array);
        this.adjustItemSpawnRateForEachContainerType(loot_WeaponBox5x2_Final);
        loot_WeaponBox5x2_Final = this.removeBlacklistedItems(loot_WeaponBox5x2_Final, LootGlobalType.WEAPONBOXGLOBAL);
        // ===== Loot - Weapon cases =====
        const loot_WoodenCrateArray = [];
        loot_WoodenCrateArray.push(category_Gear_Headgear);
        loot_WoodenCrateArray.push(category_Gear_Headsets);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_AuxiliaryParts);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_Bipods);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_Foregrips);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_LLD_Flashlights);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_LLD_LaserTargetPointers);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_LLD_TacticalComboDevices);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_MD_FlashhidersBrakes);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_MD_MuzzleAdapters);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_MD_Suppressors);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_S_AssaultScopes);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_S_Collimators);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_S_CompactCollimators);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_S_IronSights);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_S_Optics);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_FM_S_SpecialPurposeSights);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_GM_ChargingHandles);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_GM_Launchers);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_GM_Magazines);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_GM_Mounts);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_GM_StocksChassis);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_VP_GasBlocks);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_VP_Handguards);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_VP_PistolGrips);
        loot_WoodenCrateArray.push(category_WeaponPartsMods_VP_ReceiversSlides);
        loot_WoodenCrateArray.push(category_Weapons_AssaultCarbines);
        loot_WoodenCrateArray.push(category_Weapons_AssaultRifles);
        loot_WoodenCrateArray.push(category_Weapons_BoltActionRifles);
        loot_WoodenCrateArray.push(category_Weapons_MachineGuns);
        loot_WoodenCrateArray.push(category_Weapons_MarksmanRifles);
        loot_WoodenCrateArray.push(category_Weapons_Pistols);
        loot_WoodenCrateArray.push(category_Weapons_SMGs);
        loot_WoodenCrateArray.push(category_Weapons_Shotguns);
        loot_WoodenCrateArray.push(category_Weapons_SpecialWeapons);
        loot_WoodenCrateArray.push(category_Weapons_Throwables);
        loot_WoodenCrateArray.push(category_Ammo_AmmoPacks);
        loot_WoodenCrateArray.push(category_Ammo_Rounds);
        let loot_WoodenCrate_Final = deepCopy(loot_WoodenCrateArray);
        this.adjustItemSpawnRateForEachContainerType(loot_WoodenCrate_Final);
        loot_WoodenCrate_Final = this.removeBlacklistedItems(loot_WoodenCrate_Final, LootGlobalType.WEAPONBOXGLOBAL);
        // ===== Loot - Cashes =====
        const loot_CachesArray = [];
        loot_CachesArray.push(category_Barter_Others);
        loot_CachesArray.push(category_Barter_BuildingMaterials);
        loot_CachesArray.push(category_Barter_Electronics);
        loot_CachesArray.push(category_Barter_EnergyElements);
        loot_CachesArray.push(category_Barter_FlammableMaterials);
        loot_CachesArray.push(category_Barter_HouseholdMaterials);
        loot_CachesArray.push(category_Barter_MedicalSupplies);
        loot_CachesArray.push(category_Barter_Tools);
        loot_CachesArray.push(category_Barter_Valuables);
        loot_CachesArray.push(category_Gear_BodyArmor);
        loot_CachesArray.push(category_Gear_Eyewear);
        loot_CachesArray.push(category_Gear_Facecovers);
        loot_CachesArray.push(category_Gear_GearComponents);
        loot_CachesArray.push(category_Gear_Headgear);
        loot_CachesArray.push(category_Gear_Headsets);
        loot_CachesArray.push(category_Gear_StorageContainers);
        loot_CachesArray.push(category_Gear_TacticalRigs);
        loot_CachesArray.push(category_Provisions_Drinks);
        loot_CachesArray.push(category_Provisions_Food);
        loot_CachesArray.push(category_Medication_Injectors);
        loot_CachesArray.push(category_Medication_InjuryTreatment);
        loot_CachesArray.push(category_Medication_Medkits);
        loot_CachesArray.push(category_Medication_Pills);
        loot_CachesArray.push(category_InfoItems);
        loot_CachesArray.push(category_SpecialEquipment);
        loot_CachesArray.push(category_Maps);
        let loot_Caches_Final = deepCopy(loot_CachesArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Caches_Final);
        loot_Caches_Final = this.removeBlacklistedItems(loot_Caches_Final, LootGlobalType.CACHE);
        // ===== Loot - Duffle bag =====
        const loot_DuffleBagArray = [];
        loot_DuffleBagArray.push(category_Barter_Others);
        loot_DuffleBagArray.push(category_Barter_BuildingMaterials);
        loot_DuffleBagArray.push(category_Barter_Electronics);
        loot_DuffleBagArray.push(category_Barter_EnergyElements);
        loot_DuffleBagArray.push(category_Barter_FlammableMaterials);
        loot_DuffleBagArray.push(category_Barter_HouseholdMaterials);
        loot_DuffleBagArray.push(category_Barter_MedicalSupplies);
        loot_DuffleBagArray.push(category_Barter_Tools);
        loot_DuffleBagArray.push(category_Barter_Valuables);
        loot_DuffleBagArray.push(category_Gear_Facecovers);
        loot_DuffleBagArray.push(category_Provisions_Drinks);
        loot_DuffleBagArray.push(category_Provisions_Food);
        loot_DuffleBagArray.push(category_Medication_Injectors);
        loot_DuffleBagArray.push(category_Medication_InjuryTreatment);
        loot_DuffleBagArray.push(category_Medication_Medkits);
        loot_DuffleBagArray.push(category_Medication_Pills);
        loot_DuffleBagArray.push(category_InfoItems);
        loot_DuffleBagArray.push(category_SpecialEquipment);
        loot_DuffleBagArray.push(category_Maps);
        let loot_DuffleBag_Final = deepCopy(loot_DuffleBagArray);
        this.adjustItemSpawnRateForEachContainerType(loot_DuffleBag_Final);
        loot_DuffleBag_Final = this.removeBlacklistedItems(loot_DuffleBag_Final, LootGlobalType.DUFFLEBAG);
        // ===== Loot - Medical =====
        const loot_MedicalArray = [];
        loot_MedicalArray.push(category_Barter_MedicalSupplies);
        loot_MedicalArray.push(category_Medication_Injectors);
        loot_MedicalArray.push(category_Medication_InjuryTreatment);
        loot_MedicalArray.push(category_Medication_Medkits);
        loot_MedicalArray.push(category_Medication_Pills);
        loot_MedicalArray.push(category_MedicalAddOn);
        let loot_Medical_Final = deepCopy(loot_MedicalArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Medical_Final);
        loot_Medical_Final = this.removeBlacklistedItems(loot_Medical_Final, LootGlobalType.MEDICAL);
        // ===== Loot - Technical =====
        const loot_TechnicalArray = [];
        loot_TechnicalArray.push(category_Barter_Others);
        loot_TechnicalArray.push(category_Barter_BuildingMaterials);
        loot_TechnicalArray.push(category_Barter_Electronics);
        loot_TechnicalArray.push(category_Barter_EnergyElements);
        loot_TechnicalArray.push(category_Barter_FlammableMaterials);
        loot_TechnicalArray.push(category_Barter_Tools);
        loot_TechnicalArray.push(category_Gear_SecureContainers);
        loot_TechnicalArray.push(category_Gear_StorageContainers);
        loot_TechnicalArray.push(category_SpecialEquipment);
        let loot_Technical_Final = deepCopy(loot_TechnicalArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Technical_Final);
        loot_Technical_Final = this.removeBlacklistedItems(loot_Technical_Final, LootGlobalType.TECHNICAL);
        // ===== Loot - Rations =====
        const loot_RationsArray = [];
        loot_RationsArray.push(category_Provisions_Drinks);
        loot_RationsArray.push(category_Provisions_Food);
        loot_RationsArray.push(category_RationsAddOn);
        let loot_Rations_Final = deepCopy(loot_RationsArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Rations_Final);
        loot_Rations_Final = this.removeBlacklistedItems(loot_Rations_Final, LootGlobalType.RATIONS);
        // ===== Loot - PC Block =====
        const loot_PCBlockArray = [];
        loot_PCBlockArray.push(category_Barter_Electronics);
        let loot_PCBlock_Final = deepCopy(loot_PCBlockArray);
        this.adjustItemSpawnRateForEachContainerType(loot_PCBlock_Final);
        loot_PCBlock_Final = this.removeBlacklistedItems(loot_PCBlock_Final, LootGlobalType.PCBLOCK);
        // ===== Loot - Safes =====
        const loot_SafesArray = [];
        loot_SafesArray.push(category_Barter_Valuables);
        loot_SafesArray.push(category_InfoItems);
        loot_SafesArray.push(category_Money);
        let loot_Safes_Final = deepCopy(loot_SafesArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Safes_Final);
        loot_Safes_Final = this.removeBlacklistedItems(loot_Safes_Final, LootGlobalType.SAFE);
        // ===== Loot - Ammo =====
        const loot_AmmoArray = [];
        loot_AmmoArray.push(category_Ammo_AmmoPacks);
        loot_AmmoArray.push(category_Ammo_Rounds);
        let loot_Ammo_Final = deepCopy(loot_AmmoArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Ammo_Final);
        loot_Ammo_Final = this.removeBlacklistedItems(loot_Ammo_Final, LootGlobalType.AMMO);
        // ===== Loot - Grenades =====
        const loot_GrenadesArray = [];
        loot_GrenadesArray.push(category_Weapons_Throwables);
        loot_GrenadesArray.push(category_Ammo_Grenades);
        let loot_Grenades_Final = deepCopy(loot_GrenadesArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Grenades_Final);
        loot_Grenades_Final = this.removeBlacklistedItems(loot_Grenades_Final, LootGlobalType.GRENADES);
        // ===== Loot - Money =====
        const loot_MoneyArray = [];
        loot_MoneyArray.push(category_Money);
        let loot_Money_Final = deepCopy(loot_MoneyArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Money_Final);
        loot_Money_Final = this.removeBlacklistedItems(loot_Money_Final, LootGlobalType.MONEY);
        // ===== Loot - Money Roubles only =====
        const loot_Money_RoublesOnlyArray = [];
        loot_Money_RoublesOnlyArray.push(category_Money);
        let loot_Money_RoublesOnly_Final = deepCopy(loot_Money_RoublesOnlyArray);
        this.adjustItemSpawnRateForEachContainerType(loot_Money_RoublesOnly_Final);
        loot_Money_RoublesOnly_Final = this.removeBlacklistedItems(loot_Money_RoublesOnly_Final, LootGlobalType.REGISTERROUBLES);
        // ===== Loot - Machinery Key Jacket =====
        const loot_JacketMachineryKeyArray = [];
        loot_JacketMachineryKeyArray.push(category_MachineryKey);
        let loot_JacketMachineryKey_Final = deepCopy(loot_JacketMachineryKeyArray);
        this.adjustItemSpawnRateForEachContainerType(loot_JacketMachineryKey_Final);
        loot_JacketMachineryKey_Final = this.removeBlacklistedItems(loot_JacketMachineryKey_Final, LootGlobalType.MACHINERYKEY);
        // ===== Loot - Shturman's Stash =====
        const loot_ShturmansStashArray = [];
        loot_ShturmansStashArray.push(category_ShturmansStash_Final);
        let loot_ShturmansStash_Final = deepCopy(loot_ShturmansStashArray);
        this.adjustItemSpawnRateForEachContainerType(loot_ShturmansStash_Final);
        loot_ShturmansStash_Final = this.removeBlacklistedItems(loot_ShturmansStash_Final, LootGlobalType.SHTURMANSSTASH);
        // Fine tuning to add another level for the extremely high tier items (like e.g. Red Rebel, Taiga, certain Info items, etc.)
        for (const item of loot_ShturmansStash_Final) {
            let tmpValue = 0;
            for (const obj of data_ref) {
                if (obj.Id === item.Id)
                    tmpValue = obj.Price;
            }
            if (tmpValue < 100000)
                item.Price = 10000;
            else if (tmpValue >= 100000 && tmpValue < 400000)
                item.Price = 8000;
            else
                item.Price = 5000;
        }
        // ===== Loot - Weapon Box 5x5 =====
        const loot_WeaponBox5x5Array = [];
        loot_WeaponBox5x5Array.push(category_WeaponBox5x5_Final);
        let loot_WeaponBox5x5_Final = deepCopy(loot_WeaponBox5x5Array);
        this.adjustItemSpawnRateForEachContainerType(loot_WeaponBox5x5_Final);
        loot_WeaponBox5x5_Final = this.removeBlacklistedItems(loot_WeaponBox5x5_Final, LootGlobalType.WEAPONBOX5X5);
        // ===== Loot - Weapon Box 6x3 =====
        const loot_WeaponBox6x3Array = [];
        loot_WeaponBox6x3Array.push(category_WeaponBox6x3_Final);
        let loot_WeaponBox6x3_Final = deepCopy(loot_WeaponBox6x3Array);
        this.adjustItemSpawnRateForEachContainerType(loot_WeaponBox6x3_Final);
        loot_WeaponBox6x3_Final = this.removeBlacklistedItems(loot_WeaponBox6x3_Final, LootGlobalType.WEAPONBOX6X3);
        // Preparation to finally create the Record file
        // ===== Drawer =====
        const drawerItems = [];
        const drawerItemsProbabilities = [];
        loot_Drawers_Final.forEach(item => {
            drawerItems.push(item.Id);
            drawerItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(drawerItemsProbabilities);
        const container_Drawer_ItemsDistribution = [];
        const container_Drawer_ItemsDistributionProbabilities = [];
        this.config.container_Drawer_ItemsDistribution.forEach(item => {
            container_Drawer_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_Drawer_ItemsDistributionProbabilities.forEach(item => {
            container_Drawer_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Cash Register =====    
        const cashRegisterItems = [];
        const cashRegisterItemsProbabilities = [];
        loot_Money_RoublesOnly_Final.forEach(item => {
            cashRegisterItems.push(item.Id);
            cashRegisterItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(cashRegisterItemsProbabilities);
        const container_CashRegister_ItemsDistribution = [];
        const container_CashRegister_ItemsDistributionProbabilities = [];
        this.config.container_CashRegister_ItemsDistribution.forEach(item => {
            container_CashRegister_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_CashRegister_ItemsDistributionProbabilities.forEach(item => {
            container_CashRegister_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== PC Block =====
        const pcBlockItems = [];
        const pcBlockItemsProbabilities = [];
        loot_PCBlock_Final.forEach(item => {
            pcBlockItems.push(item.Id);
            pcBlockItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(pcBlockItemsProbabilities);
        const container_PCBlock_ItemsDistribution = [];
        const container_PCBlock_ItemsDistributionProbabilities = [];
        this.config.container_PCBlock_ItemsDistribution.forEach(item => {
            container_PCBlock_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_PCBlock_ItemsDistributionProbabilities.forEach(item => {
            container_PCBlock_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Jacket =====
        const jacketItems = [];
        const jacketItemsProbabilities = [];
        loot_Jackets_Final.forEach(item => {
            jacketItems.push(item.Id);
            jacketItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(jacketItemsProbabilities);
        const container_Jacket_ItemsDistribution = [];
        const container_Jacket_ItemsDistributionProbabilities = [];
        this.config.container_Jacket_ItemsDistribution.forEach(item => {
            container_Jacket_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_Jacket_ItemsDistributionProbabilities.forEach(item => {
            container_Jacket_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Toolbox =====
        const toolboxItems = [];
        const toolboxItemsProbabilities = [];
        loot_Technical_Final.forEach(item => {
            toolboxItems.push(item.Id);
            toolboxItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(toolboxItemsProbabilities);
        const container_Toolbox_ItemsDistribution = [];
        const container_Toolbox_ItemsDistributionProbabilities = [];
        this.config.container_Toolbox_ItemsDistribution.forEach(item => {
            container_Toolbox_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_Toolbox_ItemsDistributionProbabilities.forEach(item => {
            container_Toolbox_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Medcase =====
        const medcaseItems = [];
        const medcaseItemsProbabilities = [];
        loot_Medical_Final.forEach(item => {
            medcaseItems.push(item.Id);
            medcaseItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(medcaseItemsProbabilities);
        const container_Medcase_ItemsDistribution = [];
        const container_Medcase_ItemsDistributionProbabilities = [];
        this.config.container_Medcase_ItemsDistribution.forEach(item => {
            container_Medcase_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_Medcase_ItemsDistributionProbabilities.forEach(item => {
            container_Medcase_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Safe =====
        const safeItems = [];
        const safeItemsProbabilities = [];
        loot_Safes_Final.forEach(item => {
            safeItems.push(item.Id);
            safeItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(safeItemsProbabilities);
        const container_Safe_ItemsDistribution = [];
        const container_Safe_ItemsDistributionProbabilities = [];
        this.config.container_Safe_ItemsDistribution.forEach(item => {
            container_Safe_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_Safe_ItemsDistributionProbabilities.forEach(item => {
            container_Safe_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Weapon box (Green) =====
        const weaponBox5x5Items = [];
        const weaponBox5x5ItemsProbabilities = [];
        loot_WeaponBox5x5_Final.forEach(item => {
            weaponBox5x5Items.push(item.Id);
            weaponBox5x5ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(weaponBox5x5ItemsProbabilities);
        const container_WeaponBox5x5_ItemsDistribution = [];
        const container_WeaponBox5x5_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox5x5_ItemsDistribution.forEach(item => {
            container_WeaponBox5x5_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_WeaponBox5x5_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox5x5_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Weapon box (5x2) =====
        const weaponBox5x2Items = [];
        const weaponBox5x2ItemsProbabilities = [];
        loot_WeaponBox5x2_Final.forEach(item => {
            weaponBox5x2Items.push(item.Id);
            weaponBox5x2ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(weaponBox5x2ItemsProbabilities);
        const container_WeaponBox5x2_ItemsDistribution = [];
        const container_WeaponBox5x2_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox5x2_ItemsDistribution.forEach(item => {
            container_WeaponBox5x2_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_WeaponBox5x2_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox5x2_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Duffle bag 01 =====
        const duffleBag01Items = [];
        const duffleBag01ItemsProbabilities = [];
        loot_DuffleBag_Final.forEach(item => {
            duffleBag01Items.push(item.Id);
            duffleBag01ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(duffleBag01ItemsProbabilities);
        const container_DuffleBag01_ItemsDistribution = [];
        const container_DuffleBag01_ItemsDistributionProbabilities = [];
        this.config.container_DuffleBag01_ItemsDistribution.forEach(item => {
            container_DuffleBag01_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_DuffleBag01_ItemsDistributionProbabilities.forEach(item => {
            container_DuffleBag01_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Weapon box (6x3) =====
        const weaponBox6x3Items = [];
        const weaponBox6x3ItemsProbabilities = [];
        loot_WeaponBox6x3_Final.forEach(item => {
            weaponBox6x3Items.push(item.Id);
            weaponBox6x3ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(weaponBox6x3ItemsProbabilities);
        const container_WeaponBox6x3_ItemsDistribution = [];
        const container_WeaponBox6x3_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox6x3_ItemsDistribution.forEach(item => {
            container_WeaponBox6x3_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_WeaponBox6x3_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox6x3_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Weapon box (4x4) =====
        const weaponBox4x4Items = [];
        const weaponBox4x4ItemsProbabilities = [];
        loot_WeaponBox4x4_Final.forEach(item => {
            weaponBox4x4Items.push(item.Id);
            weaponBox4x4ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(weaponBox4x4ItemsProbabilities);
        const container_WeaponBox4x4_ItemsDistribution = [];
        const container_WeaponBox4x4_ItemsDistributionProbabilities = [];
        this.config.container_WeaponBox4x4_ItemsDistribution.forEach(item => {
            container_WeaponBox4x4_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_WeaponBox4x4_ItemsDistributionProbabilities.forEach(item => {
            container_WeaponBox4x4_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Grenade box =====
        const grenadeBoxItems = [];
        const grenadeBoxItemsProbabilities = [];
        loot_Grenades_Final.forEach(item => {
            grenadeBoxItems.push(item.Id);
            grenadeBoxItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(grenadeBoxItemsProbabilities);
        const container_GrenadeBox_ItemsDistribution = [];
        const container_GrenadeBox_ItemsDistributionProbabilities = [];
        this.config.container_GrenadeBox_ItemsDistribution.forEach(item => {
            container_GrenadeBox_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_GrenadeBox_ItemsDistributionProbabilities.forEach(item => {
            container_GrenadeBox_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Plastic suitcase =====
        const plasticSuitcaseItems = [];
        const plasticSuitcaseItemsProbabilities = [];
        loot_DuffleBag_Final.forEach(item => {
            plasticSuitcaseItems.push(item.Id);
            plasticSuitcaseItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(plasticSuitcaseItemsProbabilities);
        const container_PlasticSuitcase_ItemsDistribution = [];
        const container_PlasticSuitcase_ItemsDistributionProbabilities = [];
        this.config.container_PlasticSuitcase_ItemsDistribution.forEach(item => {
            container_PlasticSuitcase_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_PlasticSuitcase_ItemsDistributionProbabilities.forEach(item => {
            container_PlasticSuitcase_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Medbag SMU06 01 =====
        const medbagSmu0601Items = [];
        const medbagSmu0601ItemsProbabilities = [];
        loot_Medical_Final.forEach(item => {
            medbagSmu0601Items.push(item.Id);
            medbagSmu0601ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(medbagSmu0601ItemsProbabilities);
        const container_MedbagSmu0601_ItemsDistribution = [];
        const container_MedbagSmu0601_ItemsDistributionProbabilities = [];
        this.config.container_MedbagSmu0601_ItemsDistribution.forEach(item => {
            container_MedbagSmu0601_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_MedbagSmu0601_ItemsDistributionProbabilities.forEach(item => {
            container_MedbagSmu0601_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Wooden crate =====
        const woodenCrateItems = [];
        const woodenCrateItemsProbabilities = [];
        loot_WoodenCrate_Final.forEach(item => {
            woodenCrateItems.push(item.Id);
            woodenCrateItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(woodenCrateItemsProbabilities);
        const container_WoodenCrate_ItemsDistribution = [];
        const container_WoodenCrate_ItemsDistributionProbabilities = [];
        this.config.container_WoodenCrate_ItemsDistribution.forEach(item => {
            container_WoodenCrate_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_WoodenCrate_ItemsDistributionProbabilities.forEach(item => {
            container_WoodenCrate_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Medical supply crate =====
        const medicalSupplyCrateItems = [];
        const medicalSupplyCrateItemsProbabilities = [];
        loot_Medical_Final.forEach(item => {
            medicalSupplyCrateItems.push(item.Id);
            medicalSupplyCrateItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(medicalSupplyCrateItemsProbabilities);
        const container_MedicalSupplyCrate_ItemsDistribution = [];
        const container_MedicalSupplyCrate_ItemsDistributionProbabilities = [];
        this.config.container_MedicalSupplyCrate_ItemsDistribution.forEach(item => {
            container_MedicalSupplyCrate_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_MedicalSupplyCrate_ItemsDistributionProbabilities.forEach(item => {
            container_MedicalSupplyCrate_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Technical supply crate =====
        const technicalSupplyCrateItems = [];
        const technicalSupplyCrateItemsProbabilities = [];
        loot_Technical_Final.forEach(item => {
            technicalSupplyCrateItems.push(item.Id);
            technicalSupplyCrateItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(technicalSupplyCrateItemsProbabilities);
        const container_TechnicalSupplyCrate_ItemsDistribution = [];
        const container_TechnicalSupplyCrate_ItemsDistributionProbabilities = [];
        this.config.container_TechnicalSupplyCrate_ItemsDistribution.forEach(item => {
            container_TechnicalSupplyCrate_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_TechnicalSupplyCrate_ItemsDistributionProbabilities.forEach(item => {
            container_TechnicalSupplyCrate_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Dead Scav =====
        const deadScavItems = [];
        const deadScavItemsProbabilities = [];
        loot_DuffleBag_Final.forEach(item => {
            deadScavItems.push(item.Id);
            deadScavItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(deadScavItemsProbabilities);
        const container_DeadScav_ItemsDistribution = [];
        const container_DeadScav_ItemsDistributionProbabilities = [];
        this.config.container_DeadScav_ItemsDistribution.forEach(item => {
            container_DeadScav_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_DeadScav_ItemsDistributionProbabilities.forEach(item => {
            container_DeadScav_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Ground cache =====
        const groundCacheItems = [];
        const groundCacheItemsProbabilities = [];
        loot_Caches_Final.forEach(item => {
            groundCacheItems.push(item.Id);
            groundCacheItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(groundCacheItemsProbabilities);
        const container_GroundCache_ItemsDistribution = [];
        const container_GroundCache_ItemsDistributionProbabilities = [];
        this.config.container_GroundCache_ItemsDistribution.forEach(item => {
            container_GroundCache_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_GroundCache_ItemsDistributionProbabilities.forEach(item => {
            container_GroundCache_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Burried barrel cache =====
        const burriedBarrelCacheItems = [];
        const burriedBarrelCacheItemsProbabilities = [];
        loot_Caches_Final.forEach(item => {
            burriedBarrelCacheItems.push(item.Id);
            burriedBarrelCacheItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(burriedBarrelCacheItemsProbabilities);
        const container_BurriedBarrelCache_ItemsDistribution = [];
        const container_BurriedBarrelCache_ItemsDistributionProbabilities = [];
        this.config.container_BurriedBarrelCache_ItemsDistribution.forEach(item => {
            container_BurriedBarrelCache_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_BurriedBarrelCache_ItemsDistributionProbabilities.forEach(item => {
            container_BurriedBarrelCache_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Wooden ammo box =====
        const woodenAmmoBoxItems = [];
        const woodenAmmoBoxItemsProbabilities = [];
        loot_Ammo_Final.forEach(item => {
            woodenAmmoBoxItems.push(item.Id);
            woodenAmmoBoxItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(woodenAmmoBoxItemsProbabilities);
        const container_WoodenAmmoBox_ItemsDistribution = [];
        const container_WoodenAmmoBox_ItemsDistributionProbabilities = [];
        this.config.container_WoodenAmmoBox_ItemsDistribution.forEach(item => {
            container_WoodenAmmoBox_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_WoodenAmmoBox_ItemsDistributionProbabilities.forEach(item => {
            container_WoodenAmmoBox_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Jacket (Dorms 114) =====
        const jacketDorms114Items = [];
        const jacketDorms114ItemsProbabilities = [];
        loot_Jackets_Final.forEach(item => {
            jacketDorms114Items.push(item.Id);
            jacketDorms114ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(jacketDorms114ItemsProbabilities);
        const container_JacketDorms114_ItemsDistribution = [];
        const container_JacketDorms114_ItemsDistributionProbabilities = [];
        this.config.container_JacketDorms114_ItemsDistribution.forEach(item => {
            container_JacketDorms114_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_JacketDorms114_ItemsDistributionProbabilities.forEach(item => {
            container_JacketDorms114_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Jacket (Machinery Key) =====
        const jacketMachineryKeyItems = [];
        const jacketMachineryKeyItemsProbabilities = [];
        loot_JacketMachineryKey_Final.forEach(item => {
            jacketMachineryKeyItems.push(item.Id);
            jacketMachineryKeyItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(jacketMachineryKeyItemsProbabilities);
        const container_JacketMachineryKey_ItemsDistribution = [];
        const container_JacketMachineryKey_ItemsDistributionProbabilities = [];
        this.config.container_JacketMachineryKey_ItemsDistribution.forEach(item => {
            container_JacketMachineryKey_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_JacketMachineryKey_ItemsDistributionProbabilities.forEach(item => {
            container_JacketMachineryKey_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Ration supply crate =====
        const rationSupplyCrateItems = [];
        const rationSupplyCrateItemsProbabilities = [];
        loot_Rations_Final.forEach(item => {
            rationSupplyCrateItems.push(item.Id);
            rationSupplyCrateItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(rationSupplyCrateItemsProbabilities);
        const container_RationSupplyCrate_ItemsDistribution = [];
        const container_RationSupplyCrate_ItemsDistributionProbabilities = [];
        this.config.container_RationSupplyCrate_ItemsDistribution.forEach(item => {
            container_RationSupplyCrate_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_RationSupplyCrate_ItemsDistributionProbabilities.forEach(item => {
            container_RationSupplyCrate_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Jacket (Dorms 204) =====
        const jacketDorms204Items = [];
        const jacketDorms204ItemsProbabilities = [];
        loot_Jackets_Final.forEach(item => {
            jacketDorms204Items.push(item.Id);
            jacketDorms204ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(jacketDorms204ItemsProbabilities);
        const container_JacketDorms204_ItemsDistribution = [];
        const container_JacketDorms204_ItemsDistributionProbabilities = [];
        this.config.container_JacketDorms204_ItemsDistribution.forEach(item => {
            container_JacketDorms204_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_JacketDorms204_ItemsDistributionProbabilities.forEach(item => {
            container_JacketDorms204_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Common fund stash (Shturman's Stash) =====
        const commonFundStashItems = [];
        const commonFundStashItemsProbabilities = [];
        loot_ShturmansStash_Final.forEach(item => {
            commonFundStashItems.push(item.Id);
            commonFundStashItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(commonFundStashItemsProbabilities);
        const container_ShturmansStash_ItemsDistribution = [];
        const container_ShturmansStash_ItemsDistributionProbabilities = [];
        this.config.container_ShturmansStash_ItemsDistribution.forEach(item => {
            container_ShturmansStash_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_ShturmansStash_ItemsDistributionProbabilities.forEach(item => {
            container_ShturmansStash_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Duffle bag 02 =====
        const duffleBag02Items = [];
        const duffleBag02ItemsProbabilities = [];
        loot_DuffleBag_Final.forEach(item => {
            duffleBag02Items.push(item.Id);
            duffleBag02ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(duffleBag02ItemsProbabilities);
        const container_DuffleBag02_ItemsDistribution = [];
        const container_DuffleBag02_ItemsDistributionProbabilities = [];
        this.config.container_DuffleBag02_ItemsDistribution.forEach(item => {
            container_DuffleBag02_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_DuffleBag02_ItemsDistributionProbabilities.forEach(item => {
            container_DuffleBag02_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Medbag SMU06 02 =====
        const medbagSmu0602Items = [];
        const medbagSmu0602ItemsProbabilities = [];
        loot_Medical_Final.forEach(item => {
            medbagSmu0602Items.push(item.Id);
            medbagSmu0602ItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(medbagSmu0602ItemsProbabilities);
        const container_MedbagSmu0602_ItemsDistribution = [];
        const container_MedbagSmu0602_ItemsDistributionProbabilities = [];
        this.config.container_MedbagSmu0602_ItemsDistribution.forEach(item => {
            container_MedbagSmu0602_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_MedbagSmu0602_ItemsDistributionProbabilities.forEach(item => {
            container_MedbagSmu0602_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Cash register TAR2-2 =====
        const cashRegisterTARItems = [];
        const cashRegisterTARItemsProbabilities = [];
        loot_Money_RoublesOnly_Final.forEach(item => {
            cashRegisterTARItems.push(item.Id);
            cashRegisterTARItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(cashRegisterTARItemsProbabilities);
        const container_CashRegisterTAR_ItemsDistribution = [];
        const container_CashRegisterTAR_ItemsDistributionProbabilities = [];
        this.config.container_CashRegisterTAR_ItemsDistribution.forEach(item => {
            container_CashRegisterTAR_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_CashRegisterTAR_ItemsDistributionProbabilities.forEach(item => {
            container_CashRegisterTAR_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Bank cash register =====
        const bankCashRegisterItems = [];
        const bankCashRegisterItemsProbabilities = [];
        loot_Money_Final.forEach(item => {
            bankCashRegisterItems.push(item.Id);
            bankCashRegisterItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(bankCashRegisterItemsProbabilities);
        const container_BankCashRegister_ItemsDistribution = [];
        const container_BankCashRegister_ItemsDistributionProbabilities = [];
        this.config.container_BankCashRegister_ItemsDistribution.forEach(item => {
            container_BankCashRegister_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_BankCashRegister_ItemsDistributionProbabilities.forEach(item => {
            container_BankCashRegister_ItemsDistributionProbabilities.push(parseInt(item));
        });
        // ===== Bank safe =====
        const bankSafeItems = [];
        const bankSafeItemsProbabilities = [];
        loot_Money_Final.forEach(item => {
            bankSafeItems.push(item.Id);
            bankSafeItemsProbabilities.push(item.Price);
        });
        this.createUniqueSpawnrate(bankSafeItemsProbabilities);
        const container_BankSafe_ItemsDistribution = [];
        const container_BankSafe_ItemsDistributionProbabilities = [];
        this.config.container_BankSafe_ItemsDistribution.forEach(item => {
            container_BankSafe_ItemsDistribution.push(parseInt(item));
        });
        this.config.container_BankSafe_ItemsDistributionProbabilities.forEach(item => {
            container_BankSafe_ItemsDistributionProbabilities.push(parseInt(item));
        });
        const overwriteContainer_Drawer = this.config.overwriteContainer_Drawer;
        const overwriteContainer_CashRegister = this.config.overwriteContainer_CashRegister;
        const overwriteContainer_PCBlock = this.config.overwriteContainer_PCBlock;
        const overwriteContainer_Jacket = this.config.overwriteContainer_Jacket;
        const overwriteContainer_Toolbox = this.config.overwriteContainer_Toolbox;
        const overwriteContainer_Medcase = this.config.overwriteContainer_Medcase;
        const overwriteContainer_Safe = this.config.overwriteContainer_Safe;
        const overwriteContainer_WeaponBox5x5 = this.config.overwriteContainer_WeaponBox5x5;
        const overwriteContainer_WeaponBox5x2 = this.config.overwriteContainer_WeaponBox5x2;
        const overwriteContainer_DuffleBag01 = this.config.overwriteContainer_DuffleBag01;
        const overwriteContainer_WeaponBox6x3 = this.config.overwriteContainer_WeaponBox6x3;
        const overwriteContainer_WeaponBox4x4 = this.config.overwriteContainer_WeaponBox4x4;
        const overwriteContainer_GrenadeBox = this.config.overwriteContainer_GrenadeBox;
        const overwriteContainer_PlasticSuitcase = this.config.overwriteContainer_PlasticSuitcase;
        const overwriteContainer_MedbagSmu0601 = this.config.overwriteContainer_MedbagSmu0601;
        const overwriteContainer_WoodenCrate = this.config.overwriteContainer_WoodenCrate;
        const overwriteContainer_MedicalSupplyCrate = this.config.overwriteContainer_MedicalSupplyCrate;
        const overwriteContainer_TechnicalSupplyCrate = this.config.overwriteContainer_TechnicalSupplyCrate;
        const overwriteContainer_DeadScav = this.config.overwriteContainer_DeadScav;
        const overwriteContainer_GroundCache = this.config.overwriteContainer_GroundCache;
        const overwriteContainer_BurriedBarrelCache = this.config.overwriteContainer_BurriedBarrelCache;
        const overwriteContainer_WoodenAmmoBox = this.config.overwriteContainer_WoodenAmmoBox;
        const overwriteContainer_JacketDorms114 = this.config.overwriteContainer_JacketDorms114;
        const overwriteContainer_JacketMachineryKey = this.config.overwriteContainer_JacketMachineryKey;
        const overwriteContainer_RationSupplyCrate = this.config.overwriteContainer_RationSupplyCrate;
        const overwriteContainer_JacketDorms204 = this.config.overwriteContainer_JacketDorms204;
        const overwriteContainer_ShturmansStash = this.config.overwriteContainer_ShturmansStash;
        const overwriteContainer_DuffleBag02 = this.config.overwriteContainer_DuffleBag02;
        const overwriteContainer_MedbagSmu0602 = this.config.overwriteContainer_MedbagSmu0602;
        const overwriteContainer_CashRegisterTAR = this.config.overwriteContainer_CashRegisterTAR;
        const overwriteContainer_BankCashRegister = this.config.overwriteContainer_BankCashRegister;
        const overwriteContainer_BankSafe = this.config.overwriteContainer_BankSafe;
        const tmpVar = this.database.getTables().loot.staticLoot[0];
        const lootRecordsAll = {
            ...(overwriteContainer_Drawer ? {
                [SPTLootContainer.DRAWER]: {
                    itemcountDistribution: container_Drawer_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_Drawer_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: drawerItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: drawerItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.DRAWER]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DRAWER].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DRAWER].itemDistribution,
                }
            }),
            ...(overwriteContainer_CashRegister ? {
                [SPTLootContainer.CASHREGISTER]: {
                    itemcountDistribution: container_CashRegister_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_CashRegister_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: cashRegisterItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: cashRegisterItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.CASHREGISTER]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.CASHREGISTER].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.CASHREGISTER].itemDistribution,
                }
            }),
            ...(overwriteContainer_PCBlock ? {
                [SPTLootContainer.PCBLOCK]: {
                    itemcountDistribution: container_PCBlock_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_PCBlock_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: pcBlockItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: pcBlockItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.PCBLOCK]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.PCBLOCK].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.PCBLOCK].itemDistribution,
                }
            }),
            ...(overwriteContainer_Jacket ? {
                [SPTLootContainer.JACKET]: {
                    itemcountDistribution: container_Jacket_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_Jacket_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: jacketItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: jacketItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.JACKET]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKET].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKET].itemDistribution,
                }
            }),
            ...(overwriteContainer_Toolbox ? {
                [SPTLootContainer.TOOLBOX]: {
                    itemcountDistribution: container_Toolbox_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_Toolbox_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: toolboxItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: toolboxItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.TOOLBOX]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.TOOLBOX].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.TOOLBOX].itemDistribution,
                }
            }),
            ...(overwriteContainer_Medcase ? {
                [SPTLootContainer.MEDCASE]: {
                    itemcountDistribution: container_Medcase_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_Medcase_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: medcaseItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: medcaseItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.MEDCASE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDCASE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDCASE].itemDistribution,
                }
            }),
            ...(overwriteContainer_Safe ? {
                [SPTLootContainer.SAFE]: {
                    itemcountDistribution: container_Safe_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_Safe_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: safeItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: safeItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.SAFE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.SAFE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.SAFE].itemDistribution,
                }
            }),
            ...(overwriteContainer_WeaponBox5x5 ? {
                [SPTLootContainer.WEAPONBOX5X5]: {
                    itemcountDistribution: container_WeaponBox5x5_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_WeaponBox5x5_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: weaponBox5x5Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: weaponBox5x5ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.WEAPONBOX5X5]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX5X5].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX5X5].itemDistribution,
                }
            }),
            ...(overwriteContainer_WeaponBox5x2 ? {
                [SPTLootContainer.WEAPONBOX5X2]: {
                    itemcountDistribution: container_WeaponBox5x2_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_WeaponBox5x2_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: weaponBox5x2Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: weaponBox5x2ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.WEAPONBOX5X2]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX5X2].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX5X2].itemDistribution,
                }
            }),
            ...(overwriteContainer_DuffleBag01 ? {
                [SPTLootContainer.DUFFLEBAG01]: {
                    itemcountDistribution: container_DuffleBag01_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_DuffleBag01_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: duffleBag01Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: duffleBag01ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.DUFFLEBAG01]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DUFFLEBAG01].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DUFFLEBAG01].itemDistribution,
                }
            }),
            ...(overwriteContainer_WeaponBox6x3 ? {
                [SPTLootContainer.WEAPONBOX6X3]: {
                    itemcountDistribution: container_WeaponBox6x3_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_WeaponBox6x3_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: weaponBox6x3Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: weaponBox6x3ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.WEAPONBOX6X3]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX6X3].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX6X3].itemDistribution,
                }
            }),
            ...(overwriteContainer_WeaponBox4x4 ? {
                [SPTLootContainer.WEAPONBOX4X4]: {
                    itemcountDistribution: container_WeaponBox4x4_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_WeaponBox4x4_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: weaponBox4x4Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: weaponBox4x4ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.WEAPONBOX4X4]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX4X4].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WEAPONBOX4X4].itemDistribution,
                }
            }),
            ...(overwriteContainer_GrenadeBox ? {
                [SPTLootContainer.GRENADEBOX]: {
                    itemcountDistribution: container_GrenadeBox_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_GrenadeBox_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: grenadeBoxItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: grenadeBoxItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.GRENADEBOX]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.GRENADEBOX].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.GRENADEBOX].itemDistribution,
                }
            }),
            ...(overwriteContainer_PlasticSuitcase ? {
                [SPTLootContainer.PLASTICSUITCASE]: {
                    itemcountDistribution: container_PlasticSuitcase_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_PlasticSuitcase_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: plasticSuitcaseItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: plasticSuitcaseItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.PLASTICSUITCASE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.PLASTICSUITCASE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.PLASTICSUITCASE].itemDistribution,
                }
            }),
            ...(overwriteContainer_MedbagSmu0601 ? {
                [SPTLootContainer.MEDBAGSMU0601]: {
                    itemcountDistribution: container_MedbagSmu0601_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_MedbagSmu0601_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: medbagSmu0601Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: medbagSmu0601ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.MEDBAGSMU0601]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDBAGSMU0601].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDBAGSMU0601].itemDistribution,
                }
            }),
            ...(overwriteContainer_WoodenCrate ? {
                [SPTLootContainer.WOODENCRATE]: {
                    itemcountDistribution: container_WoodenCrate_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_WoodenCrate_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: woodenCrateItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: woodenCrateItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.WOODENCRATE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WOODENCRATE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WOODENCRATE].itemDistribution,
                }
            }),
            ...(overwriteContainer_MedicalSupplyCrate ? {
                [SPTLootContainer.MEDICALSUPPLYCRATE]: {
                    itemcountDistribution: container_MedicalSupplyCrate_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_MedicalSupplyCrate_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: medicalSupplyCrateItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: medicalSupplyCrateItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.MEDICALSUPPLYCRATE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDICALSUPPLYCRATE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDICALSUPPLYCRATE].itemDistribution,
                }
            }),
            ...(overwriteContainer_TechnicalSupplyCrate ? {
                [SPTLootContainer.TECHNICALSUPPLYCRATE]: {
                    itemcountDistribution: container_TechnicalSupplyCrate_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_TechnicalSupplyCrate_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: technicalSupplyCrateItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: technicalSupplyCrateItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.TECHNICALSUPPLYCRATE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.TECHNICALSUPPLYCRATE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.TECHNICALSUPPLYCRATE].itemDistribution,
                }
            }),
            ...(overwriteContainer_DeadScav ? {
                [SPTLootContainer.DEADSCAV]: {
                    itemcountDistribution: container_DeadScav_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_DeadScav_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: deadScavItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: deadScavItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.DEADSCAV]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DEADSCAV].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DEADSCAV].itemDistribution,
                }
            }),
            ...(overwriteContainer_GroundCache ? {
                [SPTLootContainer.GROUNDCACHE]: {
                    itemcountDistribution: container_GroundCache_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_GroundCache_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: groundCacheItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: groundCacheItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.GROUNDCACHE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.GROUNDCACHE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.GROUNDCACHE].itemDistribution,
                }
            }),
            ...(overwriteContainer_BurriedBarrelCache ? {
                [SPTLootContainer.BURRIEDBARRELCACHE]: {
                    itemcountDistribution: container_BurriedBarrelCache_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_BurriedBarrelCache_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: burriedBarrelCacheItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: burriedBarrelCacheItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.BURRIEDBARRELCACHE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.BURRIEDBARRELCACHE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.BURRIEDBARRELCACHE].itemDistribution,
                }
            }),
            ...(overwriteContainer_WoodenAmmoBox ? {
                [SPTLootContainer.WOODENAMMOBOX]: {
                    itemcountDistribution: container_WoodenAmmoBox_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_WoodenAmmoBox_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: woodenAmmoBoxItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: woodenAmmoBoxItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.WOODENAMMOBOX]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WOODENAMMOBOX].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.WOODENAMMOBOX].itemDistribution,
                }
            }),
            ...(overwriteContainer_JacketDorms114 ? {
                [SPTLootContainer.JACKETDORMS114]: {
                    itemcountDistribution: container_JacketDorms114_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_JacketDorms114_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: jacketDorms114Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: jacketDorms114ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.JACKETDORMS114]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKETDORMS114].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKETDORMS114].itemDistribution,
                }
            }),
            ...(overwriteContainer_JacketMachineryKey ? {
                [SPTLootContainer.JACKETMACHINERYKEY]: {
                    itemcountDistribution: container_JacketMachineryKey_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_JacketMachineryKey_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: jacketMachineryKeyItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: jacketMachineryKeyItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.JACKETMACHINERYKEY]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKETMACHINERYKEY].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKETMACHINERYKEY].itemDistribution,
                }
            }),
            ...(overwriteContainer_RationSupplyCrate ? {
                [SPTLootContainer.RATIONSUPPLYCRATE]: {
                    itemcountDistribution: container_RationSupplyCrate_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_RationSupplyCrate_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: rationSupplyCrateItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: rationSupplyCrateItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.RATIONSUPPLYCRATE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.RATIONSUPPLYCRATE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.RATIONSUPPLYCRATE].itemDistribution,
                }
            }),
            ...(overwriteContainer_JacketDorms204 ? {
                [SPTLootContainer.JACKETDORMS204]: {
                    itemcountDistribution: container_JacketDorms204_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_JacketDorms204_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: jacketDorms204Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: jacketDorms204ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.JACKETDORMS204]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKETDORMS204].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.JACKETDORMS204].itemDistribution,
                }
            }),
            ...(overwriteContainer_ShturmansStash ? {
                [SPTLootContainer.COMMONFUNDSTASH]: {
                    itemcountDistribution: container_ShturmansStash_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_ShturmansStash_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: commonFundStashItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: commonFundStashItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.COMMONFUNDSTASH]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.COMMONFUNDSTASH].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.COMMONFUNDSTASH].itemDistribution,
                }
            }),
            ...(overwriteContainer_DuffleBag02 ? {
                [SPTLootContainer.DUFFLEBAG02]: {
                    itemcountDistribution: container_DuffleBag02_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_DuffleBag02_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: duffleBag02Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: duffleBag02ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.DUFFLEBAG02]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DUFFLEBAG02].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.DUFFLEBAG02].itemDistribution,
                }
            }),
            ...(overwriteContainer_MedbagSmu0602 ? {
                [SPTLootContainer.MEDBAGSMU0602]: {
                    itemcountDistribution: container_MedbagSmu0602_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_MedbagSmu0602_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: medbagSmu0602Items.map((tpl, index) => ({
                        tpl,
                        relativeProbability: medbagSmu0602ItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.MEDBAGSMU0602]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDBAGSMU0602].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.MEDBAGSMU0602].itemDistribution,
                }
            }),
            ...(overwriteContainer_CashRegisterTAR ? {
                [SPTLootContainer.CASHREGISTERTAR]: {
                    itemcountDistribution: container_CashRegisterTAR_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_CashRegisterTAR_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: cashRegisterTARItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: cashRegisterTARItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.CASHREGISTERTAR]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.CASHREGISTERTAR].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.CASHREGISTERTAR].itemDistribution,
                }
            }),
            ...(overwriteContainer_BankCashRegister ? {
                [SPTLootContainer.BANKCASHREGISTER]: {
                    itemcountDistribution: container_BankCashRegister_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_BankCashRegister_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: bankCashRegisterItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: bankCashRegisterItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.BANKCASHREGISTER]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.BANKCASHREGISTER].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.BANKCASHREGISTER].itemDistribution,
                }
            }),
            ...(overwriteContainer_BankSafe ? {
                [SPTLootContainer.BANKSAFE]: {
                    itemcountDistribution: container_BankSafe_ItemsDistribution.map((count, index) => ({
                        count,
                        relativeProbability: container_BankSafe_ItemsDistributionProbabilities[index] || 1,
                    })),
                    itemDistribution: bankSafeItems.map((tpl, index) => ({
                        tpl,
                        relativeProbability: bankSafeItemsProbabilities[index] || 1,
                    })),
                }
            } : {
                [SPTLootContainer.BANKSAFE]: {
                    itemcountDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.BANKSAFE].itemcountDistribution,
                    itemDistribution: this.database.getTables().loot.staticLoot[SPTLootContainer.BANKSAFE].itemDistribution,
                }
            }),
        };
        // DEBUG output
        if (this.config.debugMode_ShowSpawnRates_Drawer) {
            this.logger.error("Amount of Drawer items: " + drawerItems.length.toString());
            this.logger.error("All " + drawerItems.length.toString() + " drawer items with adjusted spawn rates");
            for (let i = 0; i < drawerItems.length; i++) {
                const propertyName = `${drawerItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + drawerItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_CashRegister) {
            this.logger.error("Amount of Cash Register items: " + cashRegisterItems.length.toString());
            this.logger.error("All " + cashRegisterItems.length.toString() + " cash register items with adjusted spawn rates");
            for (let i = 0; i < cashRegisterItems.length; i++) {
                const propertyName = `${cashRegisterItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + cashRegisterItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_PCBlock) {
            this.logger.error("Amount of PC Block items: " + pcBlockItems.length.toString());
            this.logger.error("All " + pcBlockItems.length.toString() + " PC block items with adjusted spawn rates");
            for (let i = 0; i < pcBlockItems.length; i++) {
                const propertyName = `${pcBlockItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + pcBlockItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_Jacket) {
            this.logger.error("Amount of Jacket items: " + jacketItems.length.toString());
            this.logger.error("All " + jacketItems.length.toString() + " jacket items with adjusted spawn rates");
            for (let i = 0; i < jacketItems.length; i++) {
                const propertyName = `${jacketItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + jacketItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_Technical) {
            this.logger.error("Amount of Toolbox items: " + toolboxItems.length.toString());
            this.logger.error("All " + toolboxItems.length.toString() + " toolbox items with adjusted spawn rates");
            for (let i = 0; i < toolboxItems.length; i++) {
                const propertyName = `${toolboxItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + toolboxItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_Medical) {
            this.logger.error("Amount of Medcase items: " + medcaseItems.length.toString());
            this.logger.error("All " + medcaseItems.length.toString() + " medcase items with adjusted spawn rates");
            for (let i = 0; i < medcaseItems.length; i++) {
                const propertyName = `${medcaseItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + medcaseItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_Safe) {
            this.logger.error("Amount of Safe items: " + safeItems.length.toString());
            this.logger.error("All " + safeItems.length.toString() + " safe items with adjusted spawn rates");
            for (let i = 0; i < safeItems.length; i++) {
                const propertyName = `${safeItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + safeItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_WeaponBox5x5) {
            this.logger.error("Amount of Weapon box 5x5 items: " + weaponBox5x5Items.length.toString());
            this.logger.error("All " + weaponBox5x5Items.length.toString() + " weapon box 5x5 items with adjusted spawn rates");
            for (let i = 0; i < weaponBox5x5Items.length; i++) {
                const propertyName = `${weaponBox5x5Items[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + weaponBox5x5ItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_WeaponBox5x2) {
            this.logger.error("Amount of Weapon box 5x2 items: " + weaponBox5x2Items.length.toString());
            this.logger.error("All " + weaponBox5x2Items.length.toString() + " weapon box 5x2 items with adjusted spawn rates");
            for (let i = 0; i < weaponBox5x2Items.length; i++) {
                const propertyName = `${weaponBox5x2Items[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + weaponBox5x2ItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_DuffleBag) {
            this.logger.error("Amount of Dufflebag items: " + duffleBag01Items.length.toString());
            this.logger.error("All " + weaponBox5x2Items.length.toString() + " dufflebag items with adjusted spawn rates");
            for (let i = 0; i < duffleBag01Items.length; i++) {
                const propertyName = `${duffleBag01Items[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + duffleBag01ItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_WeaponBox6x3) {
            this.logger.error("Amount of Weapon box 6x3 items: " + weaponBox6x3Items.length.toString());
            this.logger.error("All " + weaponBox6x3Items.length.toString() + " weapon box 6x3 items with adjusted spawn rates");
            for (let i = 0; i < weaponBox6x3Items.length; i++) {
                const propertyName = `${weaponBox6x3Items[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + weaponBox6x3ItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_WeaponBox4x4) {
            this.logger.error("Amount of Weapon box 4x4 items: " + weaponBox4x4Items.length.toString());
            this.logger.error("All " + weaponBox4x4Items.length.toString() + " weapon box 4x4 items with adjusted spawn rates");
            for (let i = 0; i < weaponBox4x4Items.length; i++) {
                const propertyName = `${weaponBox4x4Items[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + weaponBox4x4ItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_WoodenCrate) {
            this.logger.error("Amount of Wooden Crate items: " + woodenCrateItems.length.toString());
            this.logger.error("All " + woodenCrateItems.length.toString() + " wooden crate items with adjusted spawn rates");
            for (let i = 0; i < woodenCrateItems.length; i++) {
                const propertyName = `${woodenCrateItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + woodenCrateItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_GrenadeBox) {
            this.logger.error("Amount of Grenade Box items: " + grenadeBoxItems.length.toString());
            this.logger.error("All " + grenadeBoxItems.length.toString() + " grenade box items with adjusted spawn rates");
            for (let i = 0; i < grenadeBoxItems.length; i++) {
                const propertyName = `${grenadeBoxItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + grenadeBoxItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_Caches) {
            this.logger.error("Amount of Caches items: " + groundCacheItems.length.toString());
            this.logger.error("All " + groundCacheItems.length.toString() + " caches items with adjusted spawn rates");
            for (let i = 0; i < groundCacheItems.length; i++) {
                const propertyName = `${groundCacheItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + groundCacheItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_WoodenAmmoBox) {
            this.logger.error("Amount of Wooden Ammo Box items: " + woodenAmmoBoxItems.length.toString());
            this.logger.error("All " + woodenAmmoBoxItems.length.toString() + " wooden ammo box items with adjusted spawn rates");
            for (let i = 0; i < woodenAmmoBoxItems.length; i++) {
                const propertyName = `${woodenAmmoBoxItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + woodenAmmoBoxItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_JacketMachineryKey) {
            this.logger.error("Amount of JacketMachineryKey items: " + jacketMachineryKeyItems.length.toString());
            this.logger.error("All " + jacketMachineryKeyItems.length.toString() + " jacket machinery key items with adjusted spawn rates");
            for (let i = 0; i < jacketMachineryKeyItems.length; i++) {
                const propertyName = `${jacketMachineryKeyItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + jacketMachineryKeyItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_RationsSupplyCrate) {
            this.logger.error("Amount of Rations Supply Crate items: " + rationSupplyCrateItems.length.toString());
            this.logger.error("All " + rationSupplyCrateItems.length.toString() + " rations supply crate items with adjusted spawn rates");
            for (let i = 0; i < rationSupplyCrateItems.length; i++) {
                const propertyName = `${rationSupplyCrateItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + rationSupplyCrateItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_ShturmansStash) {
            this.logger.error("Amount of Shturman's Stash items: " + commonFundStashItems.length.toString());
            this.logger.error("All " + commonFundStashItems.length.toString() + " shturman's stash items with adjusted spawn rates");
            for (let i = 0; i < commonFundStashItems.length; i++) {
                const propertyName = `${commonFundStashItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + commonFundStashItemsProbabilities[i]);
            }
        }
        if (this.config.debugMode_ShowSpawnRates_BankCashRegister) {
            this.logger.error("Amount of Bank Cash Register items: " + bankCashRegisterItems.length.toString());
            this.logger.error("All " + cashRegisterTARItems.length.toString() + " bank cash register items with adjusted spawn rates");
            for (let i = 0; i < bankCashRegisterItems.length; i++) {
                const propertyName = `${bankCashRegisterItems[i]} Name`;
                const value = this.jsonDataClearNames[propertyName];
                this.logger.warning(value + " Spawn rate: " + bankCashRegisterItemsProbabilities[i]);
            }
        }
        return lootRecordsAll;
    }
}
module.exports = { mod: new AllTheLoot() };
//# sourceMappingURL=mod.js.map