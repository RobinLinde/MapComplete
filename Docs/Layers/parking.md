

 parking 
=========



<img src='https://mapcomplete.osm.be/./assets/layers/parking/parking.svg' height="100px"> 

A layer showing car parkings






  - This layer is shown at zoomlevel **12** and higher




#### Themes using this layer 





  - [onwheels](https://mapcomplete.osm.be/onwheels)
  - [parkings](https://mapcomplete.osm.be/parkings)
  - [personal](https://mapcomplete.osm.be/personal)
  - [transit](https://mapcomplete.osm.be/transit)




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:amenity' target='_blank'>amenity</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking' target='_blank'>parking</a>


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22amenity%22%3D%22parking%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/level#values) [level](https://wiki.openstreetmap.org/wiki/Key:level) | [float](../SpecialInputElements.md#float) | [0](https://wiki.openstreetmap.org/wiki/Tag:level%3D0) [1](https://wiki.openstreetmap.org/wiki/Tag:level%3D1) [-1](https://wiki.openstreetmap.org/wiki/Tag:level%3D-1)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/parking#values) [parking](https://wiki.openstreetmap.org/wiki/Key:parking) | Multiple choice | [surface](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dsurface) [street_side](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dstreet_side) [underground](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dunderground) [multi-storey](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dmulti-storey) [rooftop](https://wiki.openstreetmap.org/wiki/Tag:parking%3Drooftop) [lane](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dlane) [carports](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dcarports) [garage_boxes](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dgarage_boxes) [layby](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dlayby) [sheds](https://wiki.openstreetmap.org/wiki/Tag:parking%3Dsheds)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity:disabled#values) [capacity:disabled](https://wiki.openstreetmap.org/wiki/Key:capacity:disabled) | [pnat](../SpecialInputElements.md#pnat) | [0](https://wiki.openstreetmap.org/wiki/Tag:capacity:disabled%3D0)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/capacity#values) [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) | [pnat](../SpecialInputElements.md#pnat) | 




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### level 



The question is  *On what level is this feature located?*

This rendering asks information about the property  [level](https://wiki.openstreetmap.org/wiki/Key:level) 

This is rendered with  `Located on the {level}th floor`





  - *Located underground*  corresponds with  `location=underground`
  - This option cannot be chosen as answer
  - *Located on the ground floor*  corresponds with  `level=0`
  - *Located on the ground floor*  corresponds with  ``
  - This option cannot be chosen as answer
  - *Located on the first floor*  corresponds with  `level=1`
  - *Located on the first basement level*  corresponds with  `level=-1`




### parking-type 



The question is  *What kind of parking is this?*





  - *This is a surface parking lot*  corresponds with  `parking=surface`
  - *This is a parking bay next to a street*  corresponds with  `parking=street_side`
  - *This is an underground parking garage*  corresponds with  `parking=underground`
  - *This is a multi-storey parking garage*  corresponds with  `parking=multi-storey`
  - *This is a rooftop parking deck*  corresponds with  `parking=rooftop`
  - *This is a lane for parking on the road*  corresponds with  `parking=lane`
  - *This is parking covered by carports*  corresponds with  `parking=carports`
  - *This a parking consisting of garage boxes*  corresponds with  `parking=garage_boxes`
  - *This is a parking on a layby*  corresponds with  `parking=layby`
  - *This is a parking consisting of sheds*  corresponds with  `parking=sheds`




### capacity-disabled 



The question is  *How many disabled parking spots are there at this parking?*

This rendering asks information about the property  [capacity:disabled](https://wiki.openstreetmap.org/wiki/Key:capacity:disabled) 

This is rendered with  `There are {capacity:disabled} disabled parking spots`





  - *There are disabled parking spots, but it is not known how many*  corresponds with  `capacity:disabled=yes`
  - This option cannot be chosen as answer
  - *There are no disabled parking spots*  corresponds with  `capacity:disabled=no`
  - This option cannot be chosen as answer
  - *There are no disabled parking spots*  corresponds with  `capacity:disabled=0`




### capacity 



The question is  *How many parking spots are there at this parking?*

This rendering asks information about the property  [capacity](https://wiki.openstreetmap.org/wiki/Key:capacity) 

This is rendered with  `There are {capacity} parking spots`

 

This document is autogenerated from [assets/layers/parking/parking.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/parking/parking.json)