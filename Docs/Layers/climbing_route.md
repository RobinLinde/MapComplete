

 climbing_route 
================



<img src='https://mapcomplete.osm.be/circle:white;./assets/themes/climbing/climbing_route.svg' height="100px"> 

A single climbing route and its properties. Some properties are derived from the containing features






  - This layer is shown at zoomlevel **18** and higher
  - This layer is needed as dependency for layer [climbing_area](#climbing_area)




#### Themes using this layer 





  - [climbing](https://mapcomplete.osm.be/climbing)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:climbing' target='_blank'>climbing</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:climbing%3Droute' target='_blank'>route</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22climbing%22%3D%22route%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/name#values) [name](https://wiki.openstreetmap.org/wiki/Key:name) | [string](../SpecialInputElements.md#string) | [](https://wiki.openstreetmap.org/wiki/Tag:name%3D)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/climbing:length#values) [climbing:length](https://wiki.openstreetmap.org/wiki/Key:climbing:length) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/climbing:grade:french#values) [climbing:grade:french](https://wiki.openstreetmap.org/wiki/Key:climbing:grade:french) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/climbing:bolts#values) [climbing:bolts](https://wiki.openstreetmap.org/wiki/Key:climbing:bolts) | [pnat](../SpecialInputElements.md#pnat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/description#values) [description](https://wiki.openstreetmap.org/wiki/Key:description) | [string](../SpecialInputElements.md#string) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/_embedding_features_with_rock:rock#values) [_embedding_features_with_rock:rock](https://wiki.openstreetmap.org/wiki/Key:_embedding_features_with_rock:rock) | [string](../SpecialInputElements.md#string) | 




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### Name 



The question is  *What is the name of this climbing route?*

This rendering asks information about the property  [name](https://wiki.openstreetmap.org/wiki/Key:name) 

This is rendered with  `<strong>{name}</strong>`





  - *This climbing route doesn't have a name*  corresponds with  `noname=yes`




### Length 



The question is  *How long is this climbing route (in meters)?*

This rendering asks information about the property  [climbing:length](https://wiki.openstreetmap.org/wiki/Key:climbing:length) 

This is rendered with  `This route is {canonical(climbing:length)} long`





### Difficulty 



The question is  *What is the grade of this climbing route according to the french/belgian system?*

This rendering asks information about the property  [climbing:grade:french](https://wiki.openstreetmap.org/wiki/Key:climbing:grade:french) 

This is rendered with  `The grade is {climbing:grade:french} according to the french/belgian system`





### bolts 



The question is  *How many bolts does this route have before reaching the anchor?*

This rendering asks information about the property  [climbing:bolts](https://wiki.openstreetmap.org/wiki/Key:climbing:bolts) 

This is rendered with  `This route has {climbing:bolts} bolts <div class='subtle'>This is without relays and indicates how much quickdraws a climber needs</div>`





  - *This route is not bolted*  corresponds with  `climbing:bolted=no`




### description 



The question is  *Is there still something relevant you couldn't give in the previous questions? Add it here.<br/><span style='font-size: small'>Don't repeat already stated facts</span>*

This rendering asks information about the property  [description](https://wiki.openstreetmap.org/wiki/Key:description) 

This is rendered with  `{description}`





### Rock type via embedded feature 



This tagrendering has no question and is thus read-only

This rendering asks information about the property  [_embedding_features_with_rock:rock](https://wiki.openstreetmap.org/wiki/Key:_embedding_features_with_rock:rock) 

This is rendered with  `The rock type is {_embedding_features_with_rock:rock} as stated <a href='#{_embedding_features_with_rock:id}'>on the surrounding crag</a>`

 

This document is autogenerated from [assets/layers/climbing_route/climbing_route.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/climbing_route/climbing_route.json)