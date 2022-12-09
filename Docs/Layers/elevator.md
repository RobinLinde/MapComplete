

 elevator 
==========



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/elevator/elevator_wheelchair.svg' height="100px"> 

This layer show elevators and asks for operational status and elevator dimensions. Useful for wheelchair accessibility information






  - This layer is shown at zoomlevel **13** and higher




#### Themes using this layer 





  - [blind_osm](https://mapcomplete.osm.be/blind_osm)
  - [indoors](https://mapcomplete.osm.be/indoors)
  - [onwheels](https://mapcomplete.osm.be/onwheels)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Delevator' target='_blank'>elevator</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22highway%22%3D%22elevator%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/level#values) [level](https://wiki.openstreetmap.org/wiki/Key:level) | [string](../SpecialInputElements.md#string) | [0](https://wiki.openstreetmap.org/wiki/Tag:level%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:level%3D1) [-1](https://wiki.openstreetmap.org/wiki/Tag:level%3D-1)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operational_status#values) [operational_status](https://wiki.openstreetmap.org/wiki/Key:operational_status) | Multiple choice | [broken](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dbroken) [closed](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dclosed) [ok](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dok)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/door:width#values) [door:width](https://wiki.openstreetmap.org/wiki/Key:door:width) | [pfloat](../SpecialInputElements.md#pfloat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/elevator:width#values) [elevator:width](https://wiki.openstreetmap.org/wiki/Key:elevator:width) | [pfloat](../SpecialInputElements.md#pfloat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/elevator:depth#values) [elevator:depth](https://wiki.openstreetmap.org/wiki/Key:elevator:depth) | [pfloat](../SpecialInputElements.md#pfloat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/hearing_loop#values) [hearing_loop](https://wiki.openstreetmap.org/wiki/Key:hearing_loop) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:hearing_loop%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:hearing_loop%3Dno)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### multilevels 



The question is  *What levels does this elevator go to?*

This rendering asks information about the property  [level](https://wiki.openstreetmap.org/wiki/Key:level) 

This is rendered with  `This elevator goes to floors {level}`





  - *Located underground*  corresponds with  `location=underground`
  - This option cannot be chosen as answer
  - *Located on the ground floor*  corresponds with  `level=0`
  - *Located on the ground floor*  corresponds with  ``
  - This option cannot be chosen as answer
  - *Located on the first floor*  corresponds with  `level=1`
  - *Located on the first basement level*  corresponds with  `level=-1`




### operational_status 



The question is  *Does this elevator work?*





  - *This elevator is broken*  corresponds with  `operational_status=broken`
  - *This elevator is closed <span class='subtle'>e.g. because renovation works are going on</span>*  corresponds with  `operational_status=closed`
  - *This elevator works*  corresponds with  `operational_status=ok`
  - *This elevator works*  corresponds with  ``
  - This option cannot be chosen as answer




### door-width 



The question is  *What is the width of this elevator's entrance?*

This rendering asks information about the property  [door:width](https://wiki.openstreetmap.org/wiki/Key:door:width) 

This is rendered with  `This elevator's doors have a width of {canonical(door:width)}`





### elevator-width 



The question is  *What is the width of this elevator?*

This rendering asks information about the property  [elevator:width](https://wiki.openstreetmap.org/wiki/Key:elevator:width) 

This is rendered with  `This elevator has a width of {canonical(elevator:width)}`





### elevator-depth 



The question is  *What is the depth of this elevator?*

This rendering asks information about the property  [elevator:depth](https://wiki.openstreetmap.org/wiki/Key:elevator:depth) 

This is rendered with  `This elevator has a depth of {canonical(elevator:depth)}`





### induction-loop 



An accessibility feature: induction loops are for hard-hearing persons which have an FM-receiver.

The question is  *Does this place have an audio induction loop for people with reduced hearing?*





  - *This place has an audio induction loop*  corresponds with  `hearing_loop=yes`
  - *This place <b>does not</b> have an audio induction loop*  corresponds with  `hearing_loop=no`




### tactile_writing_language 



This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/layers/elevator/elevator.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/elevator/elevator.json)