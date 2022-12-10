

 dumpstations 
==============



<img src='https://mapcomplete.osm.be/circle:white;./assets/themes/campersite/sanitary_dump_station.svg' height="100px"> 

Sanitary dump stations






  - This layer is shown at zoomlevel **10** and higher




#### Themes using this layer 





  - [campersite](https://mapcomplete.osm.be/campersite)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dsanitary_dump_station' target='_blank'>sanitary_dump_station</a>
  - vehicle!~^(no)$


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22sanitary_dump_station%22%5D%5B%22vehicle%22!~%22%5E(no)%24%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/fee#values) [fee](https://wiki.openstreetmap.org/wiki/Key:fee) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:fee%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:fee%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/charge#values) [charge](https://wiki.openstreetmap.org/wiki/Key:charge) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/water_point#values) [water_point](https://wiki.openstreetmap.org/wiki/Key:water_point) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:water_point%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:water_point%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/sanitary_dump_station:grey_water#values) [sanitary_dump_station:grey_water](https://wiki.openstreetmap.org/wiki/Key:sanitary_dump_station:grey_water) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:sanitary_dump_station:grey_water%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:sanitary_dump_station:grey_water%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/sanitary_dump_station:chemical_toilet#values) [sanitary_dump_station:chemical_toilet](https://wiki.openstreetmap.org/wiki/Key:sanitary_dump_station:chemical_toilet) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:sanitary_dump_station:chemical_toilet%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:sanitary_dump_station:chemical_toilet%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/access#values) [access](https://wiki.openstreetmap.org/wiki/Key:access) | Multiple choice | [network](https://wiki.openstreetmap.org/wiki/Tag:access%3Dnetwork) [customers](https://wiki.openstreetmap.org/wiki/Tag:access%3Dcustomers) [yes](https://wiki.openstreetmap.org/wiki/Tag:access%3Dyes)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/network#values) [network](https://wiki.openstreetmap.org/wiki/Key:network) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/power_supply#values) [power_supply](https://wiki.openstreetmap.org/wiki/Key:power_supply) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:power_supply%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:power_supply%3Dno)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### dumpstations-fee 



The question is  *Does this place charge a fee?*





  - *You need to pay for use*  corresponds with  `fee=yes`
  - *Can be used for free*  corresponds with  `fee=no`




### dumpstations-charge 



The question is  *How much does this place charge?*

This rendering asks information about the property  [charge](https://wiki.openstreetmap.org/wiki/Key:charge) 

This is rendered with  `This place charges {charge}`



This tagrendering is only visible in the popup if the following condition is met: `fee=yes`



### dumpstations-waterpoint 



The question is  *Does this place have a water point?*





  - *This place has a water point*  corresponds with  `water_point=yes`
  - *This place does not have a water point*  corresponds with  `water_point=no`




### dumpstations-grey-water 



The question is  *Can you dispose of grey water here?*





  - *You can dispose of grey water here*  corresponds with  `sanitary_dump_station:grey_water=yes`
  - *You cannot dispose of gray water here*  corresponds with  `sanitary_dump_station:grey_water=no`




### dumpstations-chemical-waste 



The question is  *Can you dispose of chemical toilet waste here?*





  - *You can dispose of chemical toilet waste here*  corresponds with  `sanitary_dump_station:chemical_toilet=yes`
  - *You cannot dispose of chemical toilet waste here*  corresponds with  `sanitary_dump_station:chemical_toilet=no`




### dumpstations-access 



The question is  *Who can use this dump station?*





  - *You need a network key/code to use this*  corresponds with  `access=network`
  - *You need to be a customer of camping/campersite to use this place*  corresponds with  `access=customers`
  - *Anyone can use this dump station*  corresponds with  `access=public`
  - This option cannot be chosen as answer
  - *Anyone can use this dump station*  corresponds with  `access=yes`




### dumpstations-network 



The question is  *What network is this place a part of? (skip if none)*

This rendering asks information about the property  [network](https://wiki.openstreetmap.org/wiki/Key:network) 

This is rendered with  `This station is part of network {network}`





### operator 



The question is  *Who operates this place?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `This place is operated by {operator}`





### power_supply 



The question is  *Does this place have a power supply?*





  - *This place has a power supply*  corresponds with  `power_supply=yes`
  - *This place does not have power supply*  corresponds with  `power_supply=no`




### questions 



Show the images block at this location

This tagrendering has no question and is thus read-only





### minimap 



Shows a small map with the feature. Added by default to every popup

This tagrendering has no question and is thus read-only

 

This document is autogenerated from [assets/themes/campersite/campersite.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/themes/campersite/campersite.json)