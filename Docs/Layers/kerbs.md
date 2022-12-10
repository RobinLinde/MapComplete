

 kerbs 
=======



<img src='https://mapcomplete.osm.be/./assets/layers/kerbs/KerbIcon.svg' height="100px"> 

A layer showing kerbs.






  - This layer is shown at zoomlevel **13** and higher
  - This layer will automatically load  [cycleways_and_roads](./cycleways_and_roads.md)  into the layout as it depends on it:  a preset snaps to this layer (presets[0])
  - This layer will automatically load  [kerbs](./kerbs.md)  into the layout as it depends on it:  a preset snaps to this layer (presets[0])
  - This layer is needed as dependency for layer [kerbs](#kerbs)




#### Themes using this layer 





  - [blind_osm](https://mapcomplete.osm.be/blind_osm)
  - [kerbs_and_crossings](https://mapcomplete.osm.be/kerbs_and_crossings)
  - [onwheels](https://mapcomplete.osm.be/onwheels)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:barrier' target='_blank'>barrier</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dkerb' target='_blank'>kerb</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22barrier%22%3D%22kerb%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/kerb#values) [kerb](https://wiki.openstreetmap.org/wiki/Key:kerb) | Multiple choice | [raised](https://wiki.openstreetmap.org/wiki/Tag:kerb%3Draised) [lowered](https://wiki.openstreetmap.org/wiki/Tag:kerb%3Dlowered) [flush](https://wiki.openstreetmap.org/wiki/Tag:kerb%3Dflush)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/tactile_paving#values) [tactile_paving](https://wiki.openstreetmap.org/wiki/Key:tactile_paving) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:tactile_paving%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:tactile_paving%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/kerb:height#values) [kerb:height](https://wiki.openstreetmap.org/wiki/Key:kerb:height) | [pnat](../SpecialInputElements.md#pnat) | [0](https://wiki.openstreetmap.org/wiki/Tag:kerb:height%3D0)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### kerb-type 



The question is  *What is the height of this kerb?*





  - *This kerb is raised (>3 cm)*  corresponds with  `kerb=raised`
  - *This kerb is lowered (~3 cm)*  corresponds with  `kerb=lowered`
  - *This kerb is flush (~0cm)*  corresponds with  `kerb=flush`
  - *There is no kerb here*  corresponds with  `kerb=no`
  - This option cannot be chosen as answer
  - *There is a kerb of unknown height*  corresponds with  `kerb=yes`
  - This option cannot be chosen as answer


This tagrendering is only visible in the popup if the following condition is met: `_geometry:type=Point`



### tactile-paving 



The question is  *Is there tactile paving at this kerb?*





  - *This kerb has tactile paving.*  corresponds with  `tactile_paving=yes`
  - *This kerb does not have tactile paving.*  corresponds with  `tactile_paving=no`
  - *This kerb has tactile paving, but it is incorrect.*  corresponds with  `tactile_paving=incorrect`
  - This option cannot be chosen as answer


This tagrendering is only visible in the popup if the following condition is met: `_geometry:type=Point`



### kerb-height 



The question is  *What is the height of this kerb?*

This rendering asks information about the property  [kerb:height](https://wiki.openstreetmap.org/wiki/Key:kerb:height) 

This is rendered with  `Kerb height: {kerb:height}`





  - *This kerb is flush and is lower than 1cm.*  corresponds with  `kerb:height=0`




#### Filters 





id | question | osmTags
---- | ---------- | ---------
kerb-type.0 | All types of kerbs (default) | 
kerb-type.1 | Raised kerb (>3 cm) | kerb=raised
kerb-type.2 | Lowered kerb (~3 cm) | kerb=lowered
kerb-type.3 | Flush kerb (~0cm) | kerb=flush
kerb-type.4 | No kerb | kerb=no
kerb-type.5 | Kerb with unknown height | 




id | question | osmTags
---- | ---------- | ---------
tactile_paving_advanced.0 | With or without tactile paving (default) | 
tactile_paving_advanced.1 | With tactile paving | tactile_paving=yes
tactile_paving_advanced.2 | Without tactile paving | tactile_paving=no
tactile_paving_advanced.3 | No information about tactile paving | 
 

This document is autogenerated from [assets/layers/kerbs/kerbs.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/kerbs/kerbs.json)