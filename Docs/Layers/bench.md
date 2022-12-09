

 bench 
=======



<img src='https://mapcomplete.osm.be/./assets/layers/bench/bench.svg' height="100px"> 

A bench is a wooden, metal, stone, … surface where a human can sit. This layers visualises them and asks a few questions about them.






  - This layer is shown at zoomlevel **17** and higher




#### Themes using this layer 





  - [benches](https://mapcomplete.osm.be/benches)
  - [nature](https://mapcomplete.osm.be/nature)
  - [personal](https://mapcomplete.osm.be/personal)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbench' target='_blank'>bench</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22bench%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/backrest#values) [backrest](https://wiki.openstreetmap.org/wiki/Key:backrest) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:backrest%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:backrest%3Dno)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/seats#values) [seats](https://wiki.openstreetmap.org/wiki/Key:seats) | [nat](../SpecialInputElements.md#nat) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/material#values) [material](https://wiki.openstreetmap.org/wiki/Key:material) | [string](../SpecialInputElements.md#string) | [wood](https://wiki.openstreetmap.org/wiki/Tag:material%3Dwood) [metal](https://wiki.openstreetmap.org/wiki/Tag:material%3Dmetal) [stone](https://wiki.openstreetmap.org/wiki/Tag:material%3Dstone) [concrete](https://wiki.openstreetmap.org/wiki/Tag:material%3Dconcrete) [plastic](https://wiki.openstreetmap.org/wiki/Tag:material%3Dplastic) [steel](https://wiki.openstreetmap.org/wiki/Tag:material%3Dsteel)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/direction#values) [direction](https://wiki.openstreetmap.org/wiki/Key:direction) | [direction](../SpecialInputElements.md#direction) | 
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/colour#values) [colour](https://wiki.openstreetmap.org/wiki/Key:colour) | [color](../SpecialInputElements.md#color) | [brown](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dbrown) [green](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dgreen) [gray](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dgray) [white](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dwhite) [red](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dred) [black](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dblack) [blue](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dblue) [yellow](https://wiki.openstreetmap.org/wiki/Tag:colour%3Dyellow)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/survey:date#values) [survey:date](https://wiki.openstreetmap.org/wiki/Key:survey:date) | [date](../SpecialInputElements.md#date) | [](https://wiki.openstreetmap.org/wiki/Tag:survey:date%3D)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### bench-backrest 



The question is  *Does this bench have a backrest?*





  - *Does have a backrest*  corresponds with  `backrest=yes`
  - *Does <b>not</b> have a backrest*  corresponds with  `backrest=no`




### bench-seats 



The question is  *How many seats does this bench have?*

This rendering asks information about the property  [seats](https://wiki.openstreetmap.org/wiki/Key:seats) 

This is rendered with  `{seats} seats`





### bench-material 



The question is  *What is the bench (seating) made from?*

This rendering asks information about the property  [material](https://wiki.openstreetmap.org/wiki/Key:material) 

This is rendered with  `Material: {material}`





  - *The seating is made from wood*  corresponds with  `material=wood`
  - *The seating is made from metal*  corresponds with  `material=metal`
  - *The seating is made from stone*  corresponds with  `material=stone`
  - *The seating is made from concrete*  corresponds with  `material=concrete`
  - *The seating is made from plastic*  corresponds with  `material=plastic`
  - *The seating is made from steel*  corresponds with  `material=steel`




### bench-direction 



The question is  *In which direction are you looking when sitting on the bench?*

This rendering asks information about the property  [direction](https://wiki.openstreetmap.org/wiki/Key:direction) 

This is rendered with  `When sitting on the bench, one looks towards {direction}°.`





### bench-colour 



The question is  *Which colour does this bench have?*

This rendering asks information about the property  [colour](https://wiki.openstreetmap.org/wiki/Key:colour) 

This is rendered with  `Colour: {colour}`





  - *Colour: brown*  corresponds with  `colour=brown`
  - *Colour: green*  corresponds with  `colour=green`
  - *Colour: gray*  corresponds with  `colour=gray`
  - *Colour: white*  corresponds with  `colour=white`
  - *Colour: red*  corresponds with  `colour=red`
  - *Colour: black*  corresponds with  `colour=black`
  - *Colour: blue*  corresponds with  `colour=blue`
  - *Colour: yellow*  corresponds with  `colour=yellow`




### bench-survey:date 



The question is  *When was this bench last surveyed?*

This rendering asks information about the property  [survey:date](https://wiki.openstreetmap.org/wiki/Key:survey:date) 

This is rendered with  `This bench was last surveyed on {survey:date}`





  - *Surveyed today!*  corresponds with  `survey:date=`
 

This document is autogenerated from [assets/layers/bench/bench.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/bench/bench.json)