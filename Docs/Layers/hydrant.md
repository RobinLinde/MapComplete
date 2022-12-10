

 hydrant 
=========



<img src='https://mapcomplete.osm.be/./assets/themes/hailhydrant/hydrant.svg' height="100px"> 

Map layer to show fire hydrants.






  - This layer is shown at zoomlevel **14** and higher




#### Themes using this layer 





  - [hailhydrant](https://mapcomplete.osm.be/hailhydrant)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:emergency' target='_blank'>emergency</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:emergency%3Dfire_hydrant' target='_blank'>fire_hydrant</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22emergency%22%3D%22fire_hydrant%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/colour#values) [colour](https://wiki.openstreetmap.org/wiki/Key:colour) | [string](../SpecialInputElements.md#string) | [yellow](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dyellow) [red](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dred)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/fire_hydrant:type#values) [fire_hydrant:type](https://wiki.openstreetmap.org/wiki/Key:fire_hydrant:type) | [string](../SpecialInputElements.md#string) | [pillar](https://wiki.openstreetmap.org/wiki/Tag:fire_hydrant:type%3Dpillar) [pipe](https://wiki.openstreetmap.org/wiki/Tag:fire_hydrant:type%3Dpipe) [wall](https://wiki.openstreetmap.org/wiki/Tag:fire_hydrant:type%3Dwall) [underground](https://wiki.openstreetmap.org/wiki/Tag:fire_hydrant:type%3Dunderground)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/emergency#values) [emergency](https://wiki.openstreetmap.org/wiki/Key:emergency) | Multiple choice | [fire_hydrant](https://wiki.openstreetmap.org/wiki/Tag:emergency%3Dfire_hydrant) [](https://wiki.openstreetmap.org/wiki/Tag:emergency%3D) [](https://wiki.openstreetmap.org/wiki/Tag:emergency%3D)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/fire_hydrant:diameter#values) [fire_hydrant:diameter](https://wiki.openstreetmap.org/wiki/Key:fire_hydrant:diameter) | [int](../SpecialInputElements.md#int) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/couplings:type#values) [couplings:type](https://wiki.openstreetmap.org/wiki/Key:couplings:type) | [string](../SpecialInputElements.md#string) | [Storz](https://wiki.openstreetmap.org/wiki/Tag:couplings:type%3DStorz) [UNI](https://wiki.openstreetmap.org/wiki/Tag:couplings:type%3DUNI) [Barcelona](https://wiki.openstreetmap.org/wiki/Tag:couplings:type%3DBarcelona)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/couplings:diameters#values) [couplings:diameters](https://wiki.openstreetmap.org/wiki/Key:couplings:diameters) | [string](../SpecialInputElements.md#string) | 




### hydrant-color 



The question is  *What color is the hydrant?*

This rendering asks information about the property  [colour](https://wiki.openstreetmap.org/wiki/Key:colour) 

This is rendered with  `The hydrant color is {colour}`





  - *The hydrant color is unknown.*  corresponds with  ``
  - This option cannot be chosen as answer
  - *The hydrant color is yellow.*  corresponds with  `colour=yellow`
  - *The hydrant color is red.*  corresponds with  `colour=red`




### hydrant-type 



The question is  *What type of hydrant is it?*

This rendering asks information about the property  [fire_hydrant:type](https://wiki.openstreetmap.org/wiki/Key:fire_hydrant:type) 

This is rendered with  ` Hydrant type: {fire_hydrant:type}`





  - *The hydrant type is unknown.*  corresponds with  ``
  - This option cannot be chosen as answer
  - *Pillar type.*  corresponds with  `fire_hydrant:type=pillar`
  - *Pipe type.*  corresponds with  `fire_hydrant:type=pipe`
  - *Wall type.*  corresponds with  `fire_hydrant:type=wall`
  - *Underground type.*  corresponds with  `fire_hydrant:type=underground`




### hydrant-state 



The question is  *Is this hydrant still working?*





  - *The hydrant is (fully or partially) working*  corresponds with  `emergency=fire_hydrant`
  - *The hydrant is unavailable*  corresponds with  `disused:emergency=fire_hydrant`
  - *The hydrant has been removed*  corresponds with  `removed:emergency=fire_hydrant`




### hydrant-diameter 



The question is  *What is the pipe diameter of this hydrant?*

This rendering asks information about the property  [fire_hydrant:diameter](https://wiki.openstreetmap.org/wiki/Key:fire_hydrant:diameter) 

This is rendered with  `Pipe diameter: {canonical(fire_hydrant:diameter)}`





### hydrant-couplings 



The question is  *What kind of couplings does this hydrant have?*

This rendering asks information about the property  [couplings:type](https://wiki.openstreetmap.org/wiki/Key:couplings:type) 

This is rendered with  `Couplings: {couplings:type}`





  - *Storz coupling*  corresponds with  `couplings:type=Storz`
  - *UNI coupling*  corresponds with  `couplings:type=UNI`
  - *Barcelona coupling*  corresponds with  `couplings:type=Barcelona`




### hydrant-couplings-diameters 



The question is  *What diameter are the couplings of this hydrant?*

This rendering asks information about the property  [couplings:diameters](https://wiki.openstreetmap.org/wiki/Key:couplings:diameters) 

This is rendered with  `Coupling diameters: {couplings:diameters}`





### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/layers/hydrant/hydrant.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/hydrant/hydrant.json)