

 cycleways_and_roads 
=====================



<img src='https://mapcomplete.osm.be/./assets/themes/cycle_infra/bicycleway.svg' height="100px"> 

All infrastructure that someone can cycle over, accompanied with questions about this infrastructure






  - This layer is shown at zoomlevel **16** and higher
  - This layer is needed as dependency for layer [barrier](#barrier)
  - This layer is needed as dependency for layer [crossings](#crossings)
  - This layer is needed as dependency for layer [kerbs](#kerbs)
  - This layer is needed as dependency for layer [rainbow_crossings](#rainbow_crossings)




#### Themes using this layer 





  - [blind_osm](https://mapcomplete.osm.be/blind_osm)
  - [cycle_infra](https://mapcomplete.osm.be/cycle_infra)
  - [kerbs_and_crossings](https://mapcomplete.osm.be/kerbs_and_crossings)
  - [onwheels](https://mapcomplete.osm.be/onwheels)
  - [personal](https://mapcomplete.osm.be/personal)
  - [rainbow_crossings](https://mapcomplete.osm.be/rainbow_crossings)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dcycleway' target='_blank'>cycleway</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:cycleway' target='_blank'>cycleway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dlane' target='_blank'>lane</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:cycleway' target='_blank'>cycleway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dshared_lane' target='_blank'>shared_lane</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:cycleway' target='_blank'>cycleway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dtrack' target='_blank'>track</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:cyclestreet' target='_blank'>cyclestreet</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3Dyes' target='_blank'>yes</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential' target='_blank'>residential</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dtertiary' target='_blank'>tertiary</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dunclassified' target='_blank'>unclassified</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dprimary' target='_blank'>primary</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary' target='_blank'>secondary</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dtertiary_link' target='_blank'>tertiary_link</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dprimary_link' target='_blank'>primary_link</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary_link' target='_blank'>secondary_link</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dservice' target='_blank'>service</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway' target='_blank'>footway</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dpedestrian' target='_blank'>pedestrian</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dliving_street' target='_blank'>living_street</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dpath' target='_blank'>path</a>&<a href='https://wiki.openstreetmap.org/wiki/Key:bicycle' target='_blank'>bicycle</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:bicycle%3Ddesignated' target='_blank'>designated</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22cyclestreet%22%3D%22yes%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22cycleway%22%3D%22lane%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22cycleway%22%3D%22shared_lane%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22cycleway%22%3D%22track%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22cycleway%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22residential%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22tertiary%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22unclassified%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22primary%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22secondary%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22tertiary_link%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22primary_link%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22secondary_link%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22service%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22footway%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22pedestrian%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22living_street%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22bicycle%22%3D%22designated%22%5D%5B%22highway%22%3D%22path%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cycleway#values) [cycleway](https://wiki.openstreetmap.org/wiki/Key:cycleway) | Multiple choice | [shared_lane](https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dshared_lane) [lane](https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dlane) [track](https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dtrack) [separate](https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dseparate) [no](https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dno) [no](https://wiki.openstreetmap.org/wiki/Tag:cycleway%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/lit#values) [lit](https://wiki.openstreetmap.org/wiki/Key:lit) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:lit%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:lit%3Dno) [24/7](https://wiki.openstreetmap.org/wiki/Tag:lit%3D24/7)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cyclestreet#values) [cyclestreet](https://wiki.openstreetmap.org/wiki/Key:cyclestreet) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3Dyes) [yes](https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3Dyes) [](https://wiki.openstreetmap.org/wiki/Tag:cyclestreet%3D)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/maxspeed#values) [maxspeed](https://wiki.openstreetmap.org/wiki/Key:maxspeed) | [nat](../SpecialInputElements.md#nat) | [20](https://wiki.openstreetmap.org/wiki/Tag:maxspeed%3D20) [30](https://wiki.openstreetmap.org/wiki/Tag:maxspeed%3D30) [50](https://wiki.openstreetmap.org/wiki/Tag:maxspeed%3D50) [70](https://wiki.openstreetmap.org/wiki/Tag:maxspeed%3D70) [90](https://wiki.openstreetmap.org/wiki/Tag:maxspeed%3D90)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cycleway:surface#values) [cycleway:surface](https://wiki.openstreetmap.org/wiki/Key:cycleway:surface) | [string](../SpecialInputElements.md#string) | [asphalt](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dasphalt) [paving_stones](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dpaving_stones) [concrete](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dconcrete) [unhewn_cobblestone](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dunhewn_cobblestone) [sett](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dsett) [wood](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dwood) [gravel](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dgravel) [fine_gravel](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dfine_gravel) [pebblestone](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dpebblestone) [ground](https://wiki.openstreetmap.org/wiki/Tag:cycleway:surface%3Dground)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cycleway:smoothness#values) [cycleway:smoothness](https://wiki.openstreetmap.org/wiki/Key:cycleway:smoothness) | Multiple choice | [excellent](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dexcellent) [good](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dgood) [intermediate](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dintermediate) [bad](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dbad) [very_bad](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dvery_bad) [horrible](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dhorrible) [very_horrible](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dvery_horrible) [impassable](https://wiki.openstreetmap.org/wiki/Tag:cycleway:smoothness%3Dimpassable)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/surface#values) [surface](https://wiki.openstreetmap.org/wiki/Key:surface) | [string](../SpecialInputElements.md#string) | [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) [paving_stones](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dpaving_stones) [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) [unhewn_cobblestone](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dunhewn_cobblestone) [sett](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett) [wood](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dwood) [gravel](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dgravel) [fine_gravel](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dfine_gravel) [pebblestone](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dpebblestone) [ground](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dground)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/smoothness#values) [smoothness](https://wiki.openstreetmap.org/wiki/Key:smoothness) | Multiple choice | [excellent](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dexcellent) [good](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dgood) [intermediate](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dintermediate) [bad](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dbad) [very_bad](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dvery_bad) [horrible](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dhorrible) [very_horrible](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dvery_horrible) [impassable](https://wiki.openstreetmap.org/wiki/Tag:smoothness%3Dimpassable)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/width:carriageway#values) [width:carriageway](https://wiki.openstreetmap.org/wiki/Key:width:carriageway) | [distance](../SpecialInputElements.md#distance) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cycleway:traffic_sign#values) [cycleway:traffic_sign](https://wiki.openstreetmap.org/wiki/Key:cycleway:traffic_sign) | Multiple choice | [BE:D7](https://wiki.openstreetmap.org/wiki/Tag:cycleway:traffic_sign%3DBE:D7) [BE:D9](https://wiki.openstreetmap.org/wiki/Tag:cycleway:traffic_sign%3DBE:D9) [BE:D10](https://wiki.openstreetmap.org/wiki/Tag:cycleway:traffic_sign%3DBE:D10) [none](https://wiki.openstreetmap.org/wiki/Tag:cycleway:traffic_sign%3Dnone)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/traffic_sign#values) [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign) | Multiple choice | [BE:D7](https://wiki.openstreetmap.org/wiki/Tag:traffic_sign%3DBE:D7) [BE:D9](https://wiki.openstreetmap.org/wiki/Tag:traffic_sign%3DBE:D9) [BE:D10](https://wiki.openstreetmap.org/wiki/Tag:traffic_sign%3DBE:D10) [NL:G11](https://wiki.openstreetmap.org/wiki/Tag:traffic_sign%3DNL:G11) [NL:G12a](https://wiki.openstreetmap.org/wiki/Tag:traffic_sign%3DNL:G12a) [NL:G13](https://wiki.openstreetmap.org/wiki/Tag:traffic_sign%3DNL:G13) [none](https://wiki.openstreetmap.org/wiki/Tag:traffic_sign%3Dnone)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cycleway:buffer#values) [cycleway:buffer](https://wiki.openstreetmap.org/wiki/Key:cycleway:buffer) | [distance](../SpecialInputElements.md#distance) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/cycleway:separation#values) [cycleway:separation](https://wiki.openstreetmap.org/wiki/Key:cycleway:separation) | Multiple choice | [dashed_line](https://wiki.openstreetmap.org/wiki/Tag:cycleway:separation%3Ddashed_line) [solid_line](https://wiki.openstreetmap.org/wiki/Tag:cycleway:separation%3Dsolid_line) [parking_lane](https://wiki.openstreetmap.org/wiki/Tag:cycleway:separation%3Dparking_lane) [kerb](https://wiki.openstreetmap.org/wiki/Tag:cycleway:separation%3Dkerb)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/separation#values) [separation](https://wiki.openstreetmap.org/wiki/Key:separation) | Multiple choice | [dashed_line](https://wiki.openstreetmap.org/wiki/Tag:separation%3Ddashed_line) [solid_line](https://wiki.openstreetmap.org/wiki/Tag:separation%3Dsolid_line) [parking_lane](https://wiki.openstreetmap.org/wiki/Tag:separation%3Dparking_lane) [kerb](https://wiki.openstreetmap.org/wiki/Tag:separation%3Dkerb)




### Cycleway type for a road 



The question is  *What kind of cycleway is here?*





  - *There is a shared lane*  corresponds with  `cycleway=shared_lane`
  - *There is a lane next to the road (separated with paint)*  corresponds with  `cycleway=lane`
  - *There is a track, but no cycleway drawn separately from this road on the map.*  corresponds with  `cycleway=track`
  - *There is a separately drawn cycleway*  corresponds with  `cycleway=separate`
  - *There is no cycleway*  corresponds with  `cycleway=no`
  - *There is no cycleway*  corresponds with  `cycleway=no`




### is lit? 



The question is  *Is this street lit?*





  - *This street is lit*  corresponds with  `lit=yes`
  - *This road is not lit*  corresponds with  `lit=no`
  - *This road is lit at night*  corresponds with  `lit=sunset-sunrise`
  - This option cannot be chosen as answer
  - *This road is lit 24/7*  corresponds with  `lit=24/7`




### Is this a cyclestreet? (For a road) 



The question is  *Is this a cyclestreet?*





  - *This is a cyclestreet, and a 30km/h zone.*  corresponds with  `cyclestreet=yes`
  - *This is a cyclestreet*  corresponds with  `cyclestreet=yes`
  - *This is not a cyclestreet.*  corresponds with  ``




### Maxspeed (for road) 



The question is  *What is the maximum speed in this street?*

This rendering asks information about the property  [maxspeed](https://wiki.openstreetmap.org/wiki/Key:maxspeed) 

This is rendered with  `The maximum speed on this road is {maxspeed} km/h`





  - *The maximum speed is 20 km/h*  corresponds with  `maxspeed=20`
  - *The maximum speed is 30 km/h*  corresponds with  `maxspeed=30`
  - *The maximum speed is 50 km/h*  corresponds with  `maxspeed=50`
  - *The maximum speed is 70 km/h*  corresponds with  `maxspeed=70`
  - *The maximum speed is 90 km/h*  corresponds with  `maxspeed=90`




### Cycleway:surface 



The question is  *What is the surface of the cycleway made from?*

This rendering asks information about the property  [cycleway:surface](https://wiki.openstreetmap.org/wiki/Key:cycleway:surface) 

This is rendered with  `This cyleway is made of {cycleway:surface}`





  - *This cycleway is unpaved*  corresponds with  `cycleway:surface=unpaved`
  - This option cannot be chosen as answer
  - *This cycleway is paved*  corresponds with  `cycleway:surface=paved`
  - This option cannot be chosen as answer
  - *This cycleway is made of asphalt*  corresponds with  `cycleway:surface=asphalt`
  - *This cycleway is made of smooth paving stones*  corresponds with  `cycleway:surface=paving_stones`
  - *This cycleway is made of concrete*  corresponds with  `cycleway:surface=concrete`
  - *This cycleway is made of cobblestone (unhewn or sett)*  corresponds with  `cycleway:surface=cobblestone`
  - This option cannot be chosen as answer
  - *This cycleway is made of raw, natural cobblestone*  corresponds with  `cycleway:surface=unhewn_cobblestone`
  - *This cycleway is made of flat, square cobblestone*  corresponds with  `cycleway:surface=sett`
  - *This cycleway is made of wood*  corresponds with  `cycleway:surface=wood`
  - *This cycleway is made of gravel*  corresponds with  `cycleway:surface=gravel`
  - *This cycleway is made of fine gravel*  corresponds with  `cycleway:surface=fine_gravel`
  - *This cycleway is made of pebblestone*  corresponds with  `cycleway:surface=pebblestone`
  - *This cycleway is made from raw ground*  corresponds with  `cycleway:surface=ground`


This tagrendering is only visible in the popup if the following condition is met: `cycleway=shared_lane|cycleway=lane|cycleway=track`



### Cycleway:smoothness 



The question is  *What is the smoothness of this cycleway?*





  - *Usable for thin rollers: rollerblade, skateboard*  corresponds with  `cycleway:smoothness=excellent`
  - *Usable for thin wheels: racing bike*  corresponds with  `cycleway:smoothness=good`
  - *Usable for normal wheels: city bike, wheelchair, scooter*  corresponds with  `cycleway:smoothness=intermediate`
  - *Usable for robust wheels: trekking bike, car, rickshaw*  corresponds with  `cycleway:smoothness=bad`
  - *Usable for vehicles with high clearance: light duty off-road vehicle*  corresponds with  `cycleway:smoothness=very_bad`
  - *Usable for off-road vehicles: heavy duty off-road vehicle*  corresponds with  `cycleway:smoothness=horrible`
  - *Usable for specialized off-road vehicles: tractor, ATV*  corresponds with  `cycleway:smoothness=very_horrible`
  - *Impassable / No wheeled vehicle*  corresponds with  `cycleway:smoothness=impassable`


This tagrendering is only visible in the popup if the following condition is met: `cycleway=shared_lane|cycleway=lane|cycleway=track`



### Surface of the road 



The question is  *What is the surface of the street made from?*

This rendering asks information about the property  [surface](https://wiki.openstreetmap.org/wiki/Key:surface) 

This is rendered with  `This road is made of {surface}`





  - *This cycleway is unhardened*  corresponds with  `surface=unpaved`
  - This option cannot be chosen as answer
  - *This cycleway is paved*  corresponds with  `surface=paved`
  - This option cannot be chosen as answer
  - *This cycleway is made of asphalt*  corresponds with  `surface=asphalt`
  - *This cycleway is made of smooth paving stones*  corresponds with  `surface=paving_stones`
  - *This cycleway is made of concrete*  corresponds with  `surface=concrete`
  - *This cycleway is made of cobblestone (unhewn or sett)*  corresponds with  `surface=cobblestone`
  - This option cannot be chosen as answer
  - *This cycleway is made of raw, natural cobblestone*  corresponds with  `surface=unhewn_cobblestone`
  - *This cycleway is made of flat, square cobblestone*  corresponds with  `surface=sett`
  - *This cycleway is made of wood*  corresponds with  `surface=wood`
  - *This cycleway is made of gravel*  corresponds with  `surface=gravel`
  - *This cycleway is made of fine gravel*  corresponds with  `surface=fine_gravel`
  - *This cycleway is made of pebblestone*  corresponds with  `surface=pebblestone`
  - *This cycleway is made from raw ground*  corresponds with  `surface=ground`




### Surface of the street 



The question is  *What is the smoothness of this street?*





  - *Usable for thin rollers: rollerblade, skateboard*  corresponds with  `smoothness=excellent`
  - *Usable for thin wheels: racing bike*  corresponds with  `smoothness=good`
  - *Usable for normal wheels: city bike, wheelchair, scooter*  corresponds with  `smoothness=intermediate`
  - *Usable for robust wheels: trekking bike, car, rickshaw*  corresponds with  `smoothness=bad`
  - *Usable for vehicles with high clearance: light duty off-road vehicle*  corresponds with  `smoothness=very_bad`
  - *Usable for off-road vehicles: heavy duty off-road vehicle*  corresponds with  `smoothness=horrible`
  - *Usable for specialized off-road vehicles: tractor, ATV*  corresponds with  `smoothness=very_horrible`
  - *Impassable / No wheeled vehicle*  corresponds with  `smoothness=impassable`


This tagrendering is only visible in the popup if the following condition is met: `cycleway=no|highway=cycleway`



### width:carriageway 



The question is  *What is the carriage width of this road (in meters)?<br/><span class='subtle'>This is measured curb to curb and thus includes the width of parallell parking lanes</span>*

This rendering asks information about the property  [width:carriageway](https://wiki.openstreetmap.org/wiki/Key:width:carriageway) 

This is rendered with  `The carriage width of this road is <strong>{width:carriageway}m</strong>`





### cycleway-lane-track-traffic-signs 



The question is  *What traffic sign does this cycleway have?*





  - *Compulsory cycleway*  corresponds with  `cycleway:traffic_sign=BE:D7`
  - *Compulsory cycleway (with supplementary sign)<br>*  corresponds with  `cycleway:traffic_sign~^(BE:D7;.*)$`
  - This option cannot be chosen as answer
  - *Segregated foot/cycleway*  corresponds with  `cycleway:traffic_sign=BE:D9`
  - *Unsegregated foot/cycleway*  corresponds with  `cycleway:traffic_sign=BE:D10`
  - *No traffic sign present*  corresponds with  `cycleway:traffic_sign=none`


This tagrendering is only visible in the popup if the following condition is met: `cycleway=lane|cycleway=track&_country=be`



### cycleway-traffic-signs 



The question is  *What traffic sign does this cycleway have?*





  - *Compulsory cycleway*  corresponds with  `traffic_sign=BE:D7`
  - *Compulsory cycleway (with supplementary sign)<br>*  corresponds with  `traffic_sign~^(BE:D7;.*)$`
  - This option cannot be chosen as answer
  - *Segregated foot/cycleway*  corresponds with  `traffic_sign=BE:D9`
  - *Unsegregated foot/cycleway*  corresponds with  `traffic_sign=BE:D10`
  - *Compulsory cycleway*  corresponds with  `traffic_sign=NL:G11`
  - *Compulsory (moped)cycleway*  corresponds with  `traffic_sign=NL:G12a`
  - *Non-compulsory cycleway*  corresponds with  `traffic_sign=NL:G13`
  - *No traffic sign present*  corresponds with  `traffic_sign=none`


This tagrendering is only visible in the popup if the following condition is met: `highway=cycleway|highway=path&_country=be|_country=nl`



### cycleway-traffic-signs-supplementary 



The question is  *Does the traffic sign D7 (<img src='./assets/layers/cycleways_and_roads/traffic_sign/be/Belgian_road_sign_D07.svg' style='width: 1.5em'>) have a supplementary sign?*





  - *Mopeds must use the cycleway*  corresponds with  `cycleway:traffic_sign=BE:D7;BE:M6`
  - *Speedpedelecs must use the cycleway*  corresponds with  `cycleway:traffic_sign=BE:D7;BE:M13`
  - *Mopeds and speedpedelecs must use the cycleway*  corresponds with  `cycleway:traffic_sign=BE:D7;BE:M14`
  - *Mopeds are not allowed*  corresponds with  `cycleway:traffic_sign=BE:D7;BE:M7`
  - *Speedpedelecs are not allowed*  corresponds with  `cycleway:traffic_sign=BE:D7;BE:M15`
  - *Mopeds and speedpedelecs are not allowed*  corresponds with  `cycleway:traffic_sign=BE:D7;BE:M16`
  - *No supplementary traffic sign present*  corresponds with  `cycleway:traffic_sign:supplementary=none`


This tagrendering is only visible in the popup if the following condition is met: `cycleway:traffic_sign=BE:D7|cycleway:traffic_sign~^(BE:D7;.*)$`



### cycleways_and_roads-cycleway:buffer 



The question is  *How wide is the gap between the cycleway and the road?*

This rendering asks information about the property  [cycleway:buffer](https://wiki.openstreetmap.org/wiki/Key:cycleway:buffer) 

This is rendered with  `The buffer besides this cycleway is {cycleway:buffer} m`



This tagrendering is only visible in the popup if the following condition is met: `cycleway=track|cycleway=lane`



### cyclelan-segregation 



The question is  *How is this cycleway separated from the road?*





  - *This cycleway is separated by a dashed line*  corresponds with  `cycleway:separation=dashed_line`
  - *This cycleway is separated by a solid line*  corresponds with  `cycleway:separation=solid_line`
  - *This cycleway is separated by a parking lane*  corresponds with  `cycleway:separation=parking_lane`
  - *This cycleway is separated by a kerb*  corresponds with  `cycleway:separation=kerb`


This tagrendering is only visible in the popup if the following condition is met: `cycleway=track|cycleway=lane`



### cycleway-segregation 



The question is  *How is this cycleway separated from the road?*





  - *This cycleway is separated by a dashed line*  corresponds with  `separation=dashed_line`
  - *This cycleway is separated by a solid line*  corresponds with  `separation=solid_line`
  - *This cycleway is separated by a parking lane*  corresponds with  `separation=parking_lane`
  - *This cycleway is separated by a kerb*  corresponds with  `separation=kerb`


This tagrendering is only visible in the popup if the following condition is met: `highway=cycleway|highway=path` 

This document is autogenerated from [assets/layers/cycleways_and_roads/cycleways_and_roads.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/cycleways_and_roads/cycleways_and_roads.json)