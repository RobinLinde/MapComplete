

 bicycle_tube_vending_machine 
==============================



<img src='https://mapcomplete.osm.be/pin:#ffffff;./assets/layers/bicycle_tube_vending_machine/pinIcon.svg' height="100px"> 

A layer showing vending machines for bicycle tubes (either purpose-built bicycle tube vending machines or classical vending machines with bicycle tubes and optionally additional bicycle related objects such as lights, gloves, locks, …)






  - This layer is shown at zoomlevel **13** and higher




#### Themes using this layer 





  - [cyclofix](https://mapcomplete.osm.be/cyclofix)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dvending_machine' target='_blank'>vending_machine</a>
  - vending~^(.*bicycle_tube.*)$


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22vending_machine%22%5D%5B%22vending%22~%22%5E(.*bicycle_tube.*)%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operational_status#values) [operational_status](https://wiki.openstreetmap.org/wiki/Key:operational_status) | [string](../SpecialInputElements.md#string) | [](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3D) [broken](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dbroken) [closed](https://wiki.openstreetmap.org/wiki/Tag:operational_status%3Dclosed)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/charge#values) [charge](https://wiki.openstreetmap.org/wiki/Key:charge) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/brand#values) [brand](https://wiki.openstreetmap.org/wiki/Key:brand) | [string](../SpecialInputElements.md#string) | [Continental](https://wiki.openstreetmap.org/wiki/Tag:brand%3DContinental) [Schwalbe](https://wiki.openstreetmap.org/wiki/Tag:brand%3DSchwalbe)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | [Schwalbe](https://wiki.openstreetmap.org/wiki/Tag:operator%3DSchwalbe) [Continental](https://wiki.openstreetmap.org/wiki/Tag:operator%3DContinental)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### Still in use? 



The question is  *Is this vending machine still operational?*

This rendering asks information about the property  [operational_status](https://wiki.openstreetmap.org/wiki/Key:operational_status) 

This is rendered with  `The operational status is <i>{operational_status}</i>`





  - *This vending machine works*  corresponds with  ``
  - *This vending machine is broken*  corresponds with  `operational_status=broken`
  - *This vending machine is closed*  corresponds with  `operational_status=closed`




### bicycle_tube_vending_machine-charge 



The question is  *How much does a bicycle tube cost?*

This rendering asks information about the property  [charge](https://wiki.openstreetmap.org/wiki/Key:charge) 

This is rendered with  `A bicycle tube costs {charge}`





### vending-machine-payment-methods 



The question is  *How can one pay at this tube vending machine?*





  - *Payment with coins is possible*  corresponds with  `payment:coins=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:coins' target='_blank'>payment:coins</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:coins%3Dno' target='_blank'>no</a>
  - *Payment with notes is possible*  corresponds with  `payment:notes=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:notes' target='_blank'>payment:notes</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:notes%3Dno' target='_blank'>no</a>
  - *Payment with cards is possible*  corresponds with  `payment:cards=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:payment:cards' target='_blank'>payment:cards</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:payment:cards%3Dno' target='_blank'>no</a>




### bicycle_tube_vending_machine-brand 



The question is  *Which brand of tubes are sold here?*

This rendering asks information about the property  [brand](https://wiki.openstreetmap.org/wiki/Key:brand) 

This is rendered with  `{brand} tubes are sold here`





  - *Continental tubes are sold here*  corresponds with  `brand=Continental`
  - *Schwalbe tubes are sold here*  corresponds with  `brand=Schwalbe`




### bicycle_tube_vending_machine-operator 



The question is  *Who maintains this vending machine?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `This vending machine is maintained by {operator}`





  - *Maintained by Schwalbe*  corresponds with  `operator=Schwalbe`
  - *Maintained by Continental*  corresponds with  `operator=Continental`




### bicycle_tube_vending_maching-other-items 



The question is  *Are other bicycle bicycle accessories sold here?*





  - *Bicycle lights are sold here*  corresponds with  `vending:bicycle_light=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:vending:bicycle_light' target='_blank'>vending:bicycle_light</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending:bicycle_light%3Dno' target='_blank'>no</a>
  - *Gloves are sold here*  corresponds with  `vending:gloves=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:vending:gloves' target='_blank'>vending:gloves</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending:gloves%3Dno' target='_blank'>no</a>
  - *Bicycle repair kits are sold here*  corresponds with  `vending:bicycle_repair_kit=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:vending:bicycle_repair_kit' target='_blank'>vending:bicycle_repair_kit</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending:bicycle_repair_kit%3Dno' target='_blank'>no</a>
  - *Bicycle pumps are sold here*  corresponds with  `vending:bicycle_pump=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:vending:bicycle_pump' target='_blank'>vending:bicycle_pump</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending:bicycle_pump%3Dno' target='_blank'>no</a>
  - *Bicycle locks are sold here*  corresponds with  `vending:bicycle_lock=yes`
  - Unselecting this answer will add <a href='https://wiki.openstreetmap.org/wiki/Key:vending:bicycle_lock' target='_blank'>vending:bicycle_lock</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending:bicycle_lock%3Dno' target='_blank'>no</a>
 

This document is autogenerated from [assets/layers/bicycle_tube_vending_machine/bicycle_tube_vending_machine.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/bicycle_tube_vending_machine/bicycle_tube_vending_machine.json)