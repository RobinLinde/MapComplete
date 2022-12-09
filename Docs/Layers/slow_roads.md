

 slow_roads 
============



<img src='https://mapcomplete.osm.be/./assets/layers/slow_roads/slow_road.svg' height="100px"> 

All carfree roads






  - This layer is shown at zoomlevel **16** and higher




 Basic tags for this layer 
---------------------------



Elements must have the all of following tags to be shown on this layer:



  - <a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dpedestrian' target='_blank'>pedestrian</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway' target='_blank'>footway</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dpath' target='_blank'>path</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway' target='_blank'>bridleway</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dliving_street' target='_blank'>living_street</a>|<a href='https://wiki.openstreetmap.org/wiki/Key:highway' target='_blank'>highway</a>=<a href='https://wiki.openstreetmap.org/wiki/Tag:highway%3Dtrack' target='_blank'>track</a>
  - access!=no
  - access!=private


[Execute on overpass](http://overpass-turbo.eu/?Q=%5Bout%3Ajson%5D%5Btimeout%3A90%5D%3B(%20%20%20%20nwr%5B%22highway%22%3D%22pedestrian%22%5D%5B%22access%22!%3D%22no%22%5D%5B%22access%22!%3D%22private%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22footway%22%5D%5B%22access%22!%3D%22no%22%5D%5B%22access%22!%3D%22private%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22path%22%5D%5B%22access%22!%3D%22no%22%5D%5B%22access%22!%3D%22private%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22bridleway%22%5D%5B%22access%22!%3D%22no%22%5D%5B%22access%22!%3D%22private%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22living_street%22%5D%5B%22access%22!%3D%22no%22%5D%5B%22access%22!%3D%22private%22%5D(%7B%7Bbbox%7D%7D)%3B%0A%20%20%20%20nwr%5B%22highway%22%3D%22track%22%5D%5B%22access%22!%3D%22no%22%5D%5B%22access%22!%3D%22private%22%5D(%7B%7Bbbox%7D%7D)%3B%0A)%3Bout%20body%3B%3E%3Bout%20skel%20qt%3B)



 Supported attributes 
----------------------



Warning: 

this quick overview is incomplete



attribute | type | values which are supported by this layer
----------- | ------ | ------------------------------------------
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/highway#values) [highway](https://wiki.openstreetmap.org/wiki/Key:highway) | Multiple choice | [living_street](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dliving_street) [pedestrian](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dpedestrian) [footway](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) [path](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dpath) [bridleway](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway) [track](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dtrack)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/surface#values) [surface](https://wiki.openstreetmap.org/wiki/Key:surface) | [string](../SpecialInputElements.md#string) | [grass](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dgrass) [ground](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dground) [sand](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsand) [paving_stones](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dpaving_stones) [asphalt](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) [concrete](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete)
[<img src='https://mapcomplete.osm.be/assets/svg/statistics.svg' height='18px'>](https://taginfo.openstreetmap.org/keys/lit#values) [lit](https://wiki.openstreetmap.org/wiki/Key:lit) | Multiple choice | [yes](https://wiki.openstreetmap.org/wiki/Tag:lit%3Dyes) [no](https://wiki.openstreetmap.org/wiki/Tag:lit%3Dno)




### images 



This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`

This tagrendering has no question and is thus read-only





### explanation 



This tagrendering has no question and is thus read-only





  - *<div> Dit is een woonerf: <ul><li>Voetgangers mogen hier de volledige breedte van de straat gebruiken</li><li>Gemotoriseerd verkeer mag maximaal <b>20km/h</b> rijden</li></ul></div>*  corresponds with  `highway=living_street`
  - *Dit is een brede, autovrije straat*  corresponds with  `highway=pedestrian`
  - *Dit is een voetpaadje*  corresponds with  `highway=footway`
  - *Dit is een wegeltje of bospad*  corresponds with  `highway=path`
  - *Dit is een ruiterswegel*  corresponds with  `highway=bridleway`
  - *Dit is een tractorspoor of weg om landbouwgrond te bereikken*  corresponds with  `highway=track`




### slow_roads-surface 



The question is  *Wat is de wegverharding van dit pad?*

This rendering asks information about the property  [surface](https://wiki.openstreetmap.org/wiki/Key:surface) 

This is rendered with  `The surface is <b>{surface}</b>`





  - *The surface is <b>grass</b>*  corresponds with  `surface=grass`
  - *The surface is <b>ground</b>*  corresponds with  `surface=ground`
  - *The surface is <b>unpaved</b>*  corresponds with  `surface=unpaved`
  - This option cannot be chosen as answer
  - *The surface is <b>sand</b>*  corresponds with  `surface=sand`
  - *The surface is <b>paving stones</b>*  corresponds with  `surface=paving_stones`
  - *The surface is <b>asphalt</b>*  corresponds with  `surface=asphalt`
  - *The surface is <b>concrete</b>*  corresponds with  `surface=concrete`
  - *The surface is <b>paved</b>*  corresponds with  `surface=paved`
  - This option cannot be chosen as answer




### slow_road_is_lit 



The question is  *Is deze weg 's nachts verlicht?*





  - *'s nachts verlicht*  corresponds with  `lit=yes`
  - *Niet verlicht*  corresponds with  `lit=no`
 

This document is autogenerated from [assets/layers/slow_roads/slow_roads.json](https://github.com/pietervdvn/MapComplete/blob/develop/assets/layers/slow_roads/slow_roads.json)