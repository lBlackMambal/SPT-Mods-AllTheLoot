Hello there and thanks for trying out my first mod, AllTheLoot :)

Background:
In SPT the loot which can spawn in containers is defined in the following file:
"Aki_Data\Server\database\loot\staticLoot.json".
This file is derived from dumps of offline raids (as far as I know).
Depending on how BSG is setting up the container loot tables (for Live Tarkov), you end up with a certain variety of items and spawns in SPT.

If you wanted to change something yourself you first had to go to
https://db.sp-tarkov.com/search
to find out the item ID of interest and then open (that big chunk of unreadable data) staticLoot.json, parse and adjust it.
What a tedious process.


===== AllTheLoot =====

The intention behind AllTheLoot was:
- being able to loot anything from containers
- being able to easily boost specific items or item categories
- being able to easily adjust the item distribution of each container type (i.e. how many items can spawn per type)
- being able to easily adjust the spawn rate of those distributions (i.e. how likely it is that e.g. 2 or 3 items spawn)

The mod works based on the item prices stored in the handbook.
Based on its value, it will get a spawn rate assigned.
Since I was struggling hard to implement a "per-item-price-spawn-logic" (e.g. inverse of the price for each item)
I used a value range condition.
The conditions are currently as following:
0 - 2000		-> 25000	// specifically to avoid super low value items (but mainly ammo rounds) spawning all over
2000 - 20000	-> 50000
20000 - 30000   -> 40000
30000 - 50000   -> 30000
50000 - 100000  -> 20000
100000 - 300000 -> 15000
300000 - 600000 -> 7500
600000 - 		-> 3750


All in all there are 32 different containers in EFT. You can find them here:
https://escapefromtarkov.fandom.com/wiki/Looting#Searchable_Containers

When I created the mod my intention was not to define certain loot tables for each and every container type.
Instead I reduced them to defined categories of items that (in my eyes) make sense.
Those categories are as following:
-- Drawer --
-- Jacket --
-- Weapon Box Global --
-- Cache --
-- Duffle bag --
-- Medical --
-- Technical --
-- Rations --
-- PC Block --
-- Safe --
-- Ammo --
-- Shturman's Stash Content --
-- Weapon Box 5x5 --
-- Weapon Box 6x3 --



There are 3 files in the config folder:
- clearNames.json
- config.json
- config_clearText.txt

clearNames.json basically is a copy of the en.json translation file that holds the clear names of everything.
Regarding the mod this file is only used to retrieve the clear name of an item/ID.

config.json holds all the necessary information to modify the behavior of the mod.
config_clearText.txt is for the "human observer", i.e. somebody that doesn't immediately know
what item lies behind an ID of "5c0530ee86f774697952d952" (btw, that's a LEDX) :)

config.json and config_clearText.txt are intented to be used in parallel.
I recommend to use Notepad++ to edit those files.
The principle would be to first load "config.json" into Notepad++, afterwards load "config_clearText.txt".
Via "Move Document->Move to Other View" have the files side by side.
To guarantee modifying the files at the correct location (line) finally activate "View->Synchronize Vertical Scrolling".
(make sure that each scrollbar is at the top before activating that synchronize funtion)

IMPORTANT:
Any changes in "config_clearText.txt" WON'T have any effect on the mod's behavior. This file is simply to keep track of any adjustments.


Within the file config.json you have different options:
- blacklistedItems_xx to blacklist items for each category
- for Shturman's Stash, WeaponBox5x5 (Green) and WeaponBox6x3 (Big grey) the min and max item value that can spawn in that container
- container_xx_ItemsDistribution to define the amount of items that can spawn, "0" = no item, "1" = one item, "5" = five items etc.
- container_xx_ItemsDistributionProbabilities to define the probabilities for the distributions
- rate_xx is a multiplier for each of the 71 (Tarkov) item categories
- removeBackpackRestrictions, self explanatory if you find an item of type storageContainer that you can pick it up
- showItemListing allows to see all the items, corresponding IDs and prices - so you don't need to search for them on spt.db
- debugMode allows to see all the items and adjusted spawn rates (higher value, more likely to spawn)
- selectedItems_IncreaseSpawnChance allows to increasae the spawn rate of defined items


Additional info:
Shturman's Stash, Weapon Box 5x5 and Weapon Box 6x3 have items assigned based on a specified value range. Like such chances are
much higher that less "garbage" and more "big guns" spawn in those.
In addition to value ranges for those 3 container types I globally removed some of the weapon mods categories (e.g. Iron sights, Charging Handles, etc.).

The items are currently assigned so it's not really "breaking" some of the game principles, i.e items specific to bosses (e.g. Tagilla, Killa, Kaban, etc.) are blacklisted
Feel free to remove them from the config to make them spawn again.


I hope with that mod you will have even more fun within this awesome project SPT.

Any feedback highly appreciated.