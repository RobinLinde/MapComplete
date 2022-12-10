

 sport_pitch 
=============



<img src='https://mapcomplete.osm.be/circle:white;./assets/layers/sport_pitch/sport_pitch.svg' height="100px"> 

A sport pitch






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [personal](https://mapcomplete.osm.be/personal)
  - [sport_pitches](https://mapcomplete.osm.be/sport_pitches)
  - [sports](https://mapcomplete.osm.be/sports)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:leisure' target='_blank'>leisure</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dpitch' target='_blank'>pitch</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22leisure%22%3D%22pitch%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/sport#values) [sport](https://wiki.openstreetmap.org/wiki/Key:sport) | [string](../SpecialInputElements.md#string) | [basketball](https://wiki.openstreetmap.org/wiki/Tag:sport%3Dbasketball) [soccer](https://wiki.openstreetmap.org/wiki/Tag:sport%3Dsoccer) [table_tennis](https://wiki.openstreetmap.org/wiki/Tag:sport%3Dtable_tennis) [tennis](https://wiki.openstreetmap.org/wiki/Tag:sport%3Dtennis) [korfball](https://wiki.openstreetmap.org/wiki/Tag:sport%3Dkorfball)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/surface#values) [surface](https://wiki.openstreetmap.org/wiki/Key:surface) | [string](../SpecialInputElements.md#string) | [grass](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dgrass) [sand](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsand) [paving_stones](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dpaving_stones) [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/access#values) [access](https://wiki.openstreetmap.org/wiki/Key:access) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:access%3Dyes) [limited](https://wiki.openstreetmap.org/wiki/Tag:access%3Dlimited) [members](https://wiki.openstreetmap.org/wiki/Tag:access%3Dmembers) [private](https://wiki.openstreetmap.org/wiki/Tag:access%3Dprivate)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/reservation#values) [reservation](https://wiki.openstreetmap.org/wiki/Key:reservation) | Multiple choice | [required](https://wiki.openstreetmap.org/wiki/Tag:reservation%3Drequired) [recommended](https://wiki.openstreetmap.org/wiki/Tag:reservation%3Drecommended) [yes](https://wiki.openstreetmap.org/wiki/Tag:reservation%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:reservation%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/phone#values) [phone](https://wiki.openstreetmap.org/wiki/Key:phone) | [phone](../SpecialInputElements.md#phone) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/email#values) [email](https://wiki.openstreetmap.org/wiki/Key:email) | [email](../SpecialInputElements.md#email) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/opening_hours#values) [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) | [opening_hours](../SpecialInputElements.md#opening_hours) | [24/7](https://wiki.openstreetmap.org/wiki/Tag:opening_hours%3D24/7)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### sport_pitch-sport 



The question is  *Which sport can be played here?*

This rendering asks information about the property  [sport](https://wiki.openstreetmap.org/wiki/Key:sport) 

This is rendered with  `{sport} is played here`





  - *Basketball is played here*  corresponds with  `sport=basketball`
  - *Soccer is played here*  corresponds with  `sport=soccer`
  - *This is a pingpong table*  corresponds with  `sport=table_tennis`
  - *Tennis is played here*  corresponds with  `sport=tennis`
  - *Korfball is played here*  corresponds with  `sport=korfball`
  - *Basketball is played here*  corresponds with  `sport=basket`
  - This option cannot be chosen as answer




### sport_pitch-surface 



The question is  *Which is the surface of this sport pitch?*

This rendering asks information about the property  [surface](https://wiki.openstreetmap.org/wiki/Key:surface) 

This is rendered with  `The surface is <b>{surface}</b>`





  - *The surface is <b>grass</b>*  corresponds with  `surface=grass`
  - *The surface is <b>sand</b>*  corresponds with  `surface=sand`
  - *The surface is <b>paving stones</b>*  corresponds with  `surface=paving_stones`
  - *The surface is <b>asphalt</b>*  corresponds with  `surface=asphalt`
  - *The surface is <b>concrete</b>*  corresponds with  `surface=concrete`




### sport-pitch-access 



The question is  *Is this sport pitch publicly accessible?*





  - *Public access*  corresponds with  `access=yes`
  - *Limited access (e.g. only with an appointment, during certain hours, …)*  corresponds with  `access=limited`
  - *Only accessible for members of the club*  corresponds with  `access=members`
  - *Private - not accessible to the public*  corresponds with  `access=private`
  - *Public access*  corresponds with  `access=public`
  - This option cannot be chosen as answer




### sport-pitch-reservation 



The question is  *Does one have to make an appointment to use this sport pitch?*





  - *Making an appointment is obligatory to use this sport pitch*  corresponds with  `reservation=required`
  - *Making an appointment is recommended when using this sport pitch*  corresponds with  `reservation=recommended`
  - *Making an appointment is possible, but not necessary to use this sport pitch*  corresponds with  `reservation=yes`
  - *Making an appointment is not possible*  corresponds with  `reservation=no`




### sport_pitch-phone 



The question is  *What is the phone number of the operator?*

This rendering asks information about the property  [phone](https://wiki.openstreetmap.org/wiki/Key:phone) 

This is rendered with  `<a href='tel:{phone}'>{phone}</a>`





### sport_pitch-email 



The question is  *What is the email address of the operator?*

This rendering asks information about the property  [email](https://wiki.openstreetmap.org/wiki/Key:email) 

This is rendered with  `<a href='mailto:{email}' target='_blank'>{email}</a>`





### sport_pitch-opening_hours 



The question is  *When is this pitch accessible?*

This rendering asks information about the property  [opening_hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours) 

This is rendered with  `Openingsuren: {opening_hours_table()}`





  - *Always accessible*  corresponds with  ``
  - This option cannot be chosen as answer
  - *Always accessible*  corresponds with  `opening_hours=24/7`


This tagrendering is only visible in the popup if the following condition is met: `access~.+`



### questions 



This tagrendering has no question and is thus read-only





### sport-pitch-reviews 



This tagrendering has no question and is thus read-only





#### Filters 





id | question | osmTags
---- | ---------- | ---------
open_now.0 | Opened now | _isOpen=yes
 

This document is autogenerated from [assets/layers/sport_pitch/sport_pitch.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/sport_pitch/sport_pitch.json)