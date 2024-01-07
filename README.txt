Hello there and thanks for trying out my first mod, AllTheLoot :)

Background:
In SPT the loot which can spawn in containers is defined in the following file:
"Aki_Data\Server\database\loot\staticLoot.json".
This file is created from dumps of offline raids (as far as I know).
Depending on how BSG was setting up the container loot tables (for Live Tarkov), you end up with a certain variety of items and spawns in SPT.

If you wanted to change something yourself you first had to go to
https://db.sp-tarkov.com/search
to find out the item ID of interest and then open (that big chunk of unreadable data) staticLoot.json, parse and adjust it.
Somehow a quite tedious process.


===== AllTheLoot =====

The intention behind AllTheLoot was:
- being able to loot the complete Tarkov loot pool from containers
- being able to easily boost specific items or item categories
- being able to easily adjust the item distribution of each container type (i.e. how many items can spawn per type)
- being able to easily adjust the spawn rate of those distributions (i.e. how likely it is that e.g. 2 or 3 items spawn)

The mod works with the item prices stored in the handbook.
Based on its value, each item will get a spawn rate assigned.
Since I was struggling hard to implement a "per-item-price-spawn-logic" (e.g. inverse of the price for each item plus some fancy magic)
I used a simple value range condition approach.
The conditions (item value above/below) and the resulting spawn rate are currently set as following:
0 - 6000         -> 50000	// AMMO_ROUNDS
0 - 6000		 -> 45000	// Everything else
6000 - 50000     -> 50000
50000 - 100000   -> 40000
100000 - 1000000 -> 20000
1000000 - 2000000-> 10000
2000000 -        -> 5000


Each item category, e.g. Barters/Electronics can be tuned via the config file (see below).
If you want to tweak on an item basis, that's also possible via the config file.


All in all there are 32 different containers in EFT. You can find them here:
https://escapefromtarkov.fandom.com/wiki/Looting#Searchable_Containers

When I created the mod my intention was not to define certain loot tables for each and every container type.
Instead I reduced them to defined categories of items that (in my eyes) make sense.
Those categories are as following and managed within the mod implementation:
-- Drawer --
-- Jacket --
-- Weapon Box 4x4 --
-- Weapon Box 5x2 --
-- Wooden Crate --
-- Cache --
-- Duffle bag --
-- Medical --
-- Technical --
-- Rations --
-- PC Block --
-- Safe --
-- Ammo --
-- Grenades --
-- Money --
-- Shturman's Stash --
-- Weapon Box 5x5 --
-- Weapon Box 6x3 --



There are 4 files in the config folder:
- clearNames.json
- config.json
- config_clearText.txt
- ContainerAssignment.txt

clearNames.json basically is a copy of the en.json translation file that holds the clear names of everything.
Regarding the mod this file is only used to retrieve the clear name of an item/ID.

config.json holds all the necessary information to modify the behavior of the mod.
config_clearText.txt is for the "human observer", i.e. somebody that doesn't immediately know what item lies behind an ID of "5c0530ee86f774697952d952" (btw, that's a LEDX) :)

config.json and config_clearText.txt are intented to be used in parallel.
I recommend to use Notepad++ to edit those files.
The principle would be to first load "config.json" into Notepad++, afterwards load "config_clearText.txt".
Via "Move Document->Move to Other View" have the files side by side.
To guarantee modifying the files at the correct location (line) finally activate "View->Synchronize Vertical Scrolling".
(make sure that each scrollbar is at the top before activating that synchronize funtion)

config_clearText.txt also contains the info about what item category actually is assigned to the main categories mentioned above.

IMPORTANT:
Any changes in "config_clearText.txt" WON'T have any effect on the mod's behavior. This file is simply to keep track of any adjustments.


Within the file config.json you have different options:
- blacklistedItems_xx to blacklist items for each category
- for Shturman's Stash, WeaponBox5x5 (Green) and WeaponBox6x3 (Big grey) the min and max item value that can spawn in that container
- container_xx_ItemsDistribution to define the amount of items that can spawn, "0" = no item, "1" = one item, "5" = five items etc.
- container_xx_ItemsDistributionProbabilities to define the probabilities for the distributions
- rate_xx is a multiplier for each of the 71 (Tarkov) item categories
- removeBackpackRestrictions, self explanatory, if you find an item of type storageContainer that you can pick it up
- showItemListing allows to see all the items, corresponding IDs and prices - so you don't need to search for them on db.sp-tarkov
- debugMode allows to see all the items and adjusted spawn rates (higher value, more likely to spawn)
- selectedItems_IncreaseSpawnChance allows to increase the spawn rate of defined items


(everything below refers to adjustments in the config.json)
Example 1 - Adjusting spawn rates for an item category
Assuming you want to increase/decrease the spawn probability of all Barter-Electronics items, then simply increase/decrease the parameter rate_BARTER_ELECTRONICS
If you want to deactivate the spawn chance of an item category completely, use the value 0.0 (e.g. default value for rate_GEAR_SECURECONTAINERS)


Example 2 - Adjusting the spawn rates for specific items
First find out the corresponding ID by either go to db.sptarkov or - much easier - via getting the ID from the server console (if config option "showItemListing" is true).
Add another line at "selectedItems_IncreaseSpawnChance" and put the ID between double quotes ("), if it's the last line of that section, remove any comma
Add another line at "selectedItems_spawnChance", at the same position as you added the ID (selectedItems_IncreaseSpawnChance) before. Put the spawn rate again in double quotes.
Make sure that the very last line of that section again doesn't have a comma.
The rate you define here will be multiplied with the item category spawn rate, i.e. if Barter-Eletronics = 2.0 and you define e.g. Eletric Motor (ID: 5d1b2fa286f77425227d1674) with a rate of 1.5, the final calculation input will be 3.0
To find out the category in which the item is stored, in SPT either directly open up the handbook and check for the item of interest or use flea and inspect it there. At the top of the small window you will see the category path.


Example 3 - Adjusting the spawn behavior of containers
Each of the 32 containers has 2 parameters:
#1 defines how many items can spawn in a container of this type (container_xx_ItemsDistribution)
#2 defines the possibilities (container_xx_ItemsDistributionProbabilities) of #1
Assuming you have
"0","1","2","3" (container_xx_ItemsDistribution) and
"0","80","200","80" (container_xx_ItemsDistributionProbabilities)

This means that either 0, 1, 2 or 3 items can spawn with a chance of 0 (for 0 items), 80 (for 1 item), 200 (for 2 items) and 80 (for 3 items). Most likely you will get 2 items but there's a chance to get 1 or 3 items. Somehow (SPT related?) - even if the probability value is set to 0 - very very rarely you get no item spawned.



Additional info:
Shturman's Stash, Weapon Box 5x5 and Weapon Box 6x3 have items assigned based on a specified value range. Like such chances are much higher that less "garbage" and more "worthy" items spawn in those.

The items are currently assigned so it's not really "breaking" some of the game principles, i.e most of the items specific to bosses (e.g. Tagilla, Killa, Kaban, etc.) are blacklisted.
Feel free to remove them from the config to make them spawn again.


I hope with that mod you will have even more fun within this awesome project SPT.

Any feedback highly appreciated.



Changelog v1.0.5:
- added the functionality to properly process non SPT-default ammo types, i.e. custom ammo rounds
- added the config option "noAmmoValueWeightingForMagazines" - when set to "true" every ammo type can equally spawn in magazines or magazines attached to weapons


Changelog v1.0.4:
- fine tuned spawn system (finally a IMHO very good balance :) )
- added unique item spawn rates per container (i.e. a certain spawn rate only occurs once per container)
- removed WeaponBox Global assignment for Weapon Box 4x4, Weapon Box 5x2 and Wooden Crate - instead now using dedicated collections for each, for further details please check file "ContainerAssignment.txt"
- adjusted container item distribution/probability rate similar to default SPT
- removed Backpacks and Tacticalrigs from Shturman's Stash (to avoid one item only spawns)
- adjusted value ranges for Shturman's Stash (185 items), Weapon Box 5x5 (546 items) and Weapon Box 6x3 (808 items)
- high tier Special purpose sights now only spawn in Shturman's stash (T-7, GPNVG, Zeus, REAP-IR, FLIR), Weapon Box 5x5 (GPNVG, Zeus, REAP-IR, FLIR) and Weapon Box 6x3 (GPNVG, Zeus, REAP-IR, FLIR) 
- added "ContainerAssignment.txt" to config folder


Changelog v1.0.3:
- fixed broken value based item assignment for Shturman's Stash, Weapon Box 5x5 and Weapon Box 6x3


Changelog v1.0.2:
- modified the spawn system by taking into account the sum of all items assignable to a container type - makes items of categories with little content spawn more often
- further tweaked spawn rates
- added Debug option for specific container types (allows to see the spawn rates for each pre-selection)


Changelog v1.0.1:
- added the functionality to overwrite only certain container types (via config.json)
- added backpacks to lootpool (since most of the good backpacks won't fit in containers anyways, items haven't been considered in 1.0.0
- added very high value electronics items to Weapon Box 5x5
- removed some blacklisted items from certain loot categories
- updated details on used item categories for Shturman's stash, Weapon Box 5x5 and Weapon Box 6x3 (config_clearText.txt)
- added another condition for extremely high value items (2000000+ -> initial spawn rate: 2000)
- final spawn rate is now slightly randomized to decrease chance of multiple items of same type in one container
- explicit spawn rate adjustment of certain special equipment items (MS2000 Marker, Signal Jammer, Vortex Ranger 1500 rangefinder, WI-FI Camera)
- further tweaking of category and container spawn rates




