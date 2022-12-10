

 parcel_lockers 
================



<img src='https://mapcomplete.osm.be/square:white;./assets/layers/parcel_lockers/parcel_lockers.svg' height="100px"> 

Layer showing parcel lockers for collecting and sending parcels.






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [personal](https://mapcomplete.osm.be/personal)
  - [postboxes](https://mapcomplete.osm.be/postboxes)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparcel_locker' target='_blank'>parcel_locker</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dvending_machine' target='_blank'>vending_machine</a>&<a href='https://wiki.openstreetmap.org/wiki/Key:vending' target='_blank'>vending</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:vending%3Dparcel_pickup;parcel_mail_in' target='_blank'>parcel_pickup;parcel_mail_in</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22parcel_locker%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22amenity%22%3D%22vending_machine%22%5D%5B%22vending%22%3D%22parcel_pickup%3Bparcel_mail_in%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/brand#values) [brand](https://wiki.openstreetmap.org/wiki/Key:brand) | [string](../SpecialInputElements.md#string) | [Amazon Locker](https://wiki.openstreetmap.org/wiki/Tag:brand%3DAmazon Locker) [DHL Packstation](https://wiki.openstreetmap.org/wiki/Tag:brand%3DDHL Packstation) [Pickup Station](https://wiki.openstreetmap.org/wiki/Tag:brand%3DPickup Station) [PostNL](https://wiki.openstreetmap.org/wiki/Tag:brand%3DPostNL)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/operator#values) [operator](https://wiki.openstreetmap.org/wiki/Key:operator) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | [24/7](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/ref#values) [ref](https://wiki.openstreetmap.org/wiki/Key:ref) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/parcel_mail_in#values) [parcel_mail_in](https://wiki.openstreetmap.org/wiki/Key:parcel_mail_in) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:parcel_mail_in%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:parcel_mail_in%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/parcel_pickup#values) [parcel_pickup](https://wiki.openstreetmap.org/wiki/Key:parcel_pickup) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:parcel_pickup%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:parcel_pickup%3Dno)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### brand 



The question is  *What is the brand of the parcel locker?*

This rendering asks information about the property  [brand](https://wiki.openstreetmap.org/wiki/Key:brand) 

This is rendered with  `This is a {brand} parcel locker`





  - *This is an Amazon Locker*  corresponds with  `brand=Amazon Locker`
  - *This is a DHL Packstation*  corresponds with  `brand=DHL Packstation`
  - *This is a DPD Pickup Station*  corresponds with  `brand=Pickup Station`
  - *This is a PostNL Parcel Locker*  corresponds with  `brand=PostNL`




### operator 



The question is  *What is the operator of the parcel locker?*

This rendering asks information about the property  [operator](https://wiki.openstreetmap.org/wiki/Key:operator) 

This is rendered with  `This parcel locker is operated by {operator}`





### opening_hours_24_7 



The question is  *What are the opening hours of {title()}?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `<h3>Opening hours</h3>{opening_hours_table(opening_hours)}`





  - *24/7 opened (including holidays)*  corresponds with  `opening_hours=24/7`




### ref 



The question is  *What is the reference number/identifier of this parcel locker?*

This rendering asks information about the property  [ref](https://wiki.openstreetmap.org/wiki/Key:ref) 

This is rendered with  `This parcel locker has the reference {ref}`





### mail-in 



The question is  *Can you send packages from this parcel locker?*





  - *You can send packages from this parcel locker*  corresponds with  `parcel_mail_in=yes`
  - *You <b>can't</b> send packages from this parcel locker*  corresponds with  `parcel_mail_in=no`


This tagrendering is only visible in the popup if the following condition is met: `amenity=parcel_locker`



### pickup 



The question is  *Can you pick up packages from this parcel locker?*





  - *You can pick up packages from this parcel locker*  corresponds with  `parcel_pickup=yes`
  - *You <b>can't</b> pick up packages from this parcel locker*  corresponds with  `parcel_pickup=no`


This tagrendering is only visible in the popup if the following condition is met: `amenity=parcel_locker`



#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Opened now | _isOpen=yes
 

This document is autogenerated from [assets/layers/parcel_lockers/parcel_lockers.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/parcel_lockers/parcel_lockers.json)