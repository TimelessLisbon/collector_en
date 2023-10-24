
if (typeof gdjs.evtsExt__Geolocation__WatchPlayer !== "undefined") {
  gdjs.evtsExt__Geolocation__WatchPlayer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Geolocation__WatchPlayer = {};


gdjs.evtsExt__Geolocation__WatchPlayer.userFunc0x88a740 = function(runtimeScene, eventsFunctionContext) {
"use strict";
this.logger = (this.logger || new gdjs.Logger("Geolocation extension"))

if (navigator && navigator.geolocation) navigator
    .geolocation
    .watchPosition(
        location => {
            const variable = eventsFunctionContext.getArgument("callback");
            for (const child of Object.keys(location.coords.__proto__)) {
                variable.getChild(child).setNumber(location.coords[child]);
            }
        },
        (error) => this.logger.error(`Couldn't locate player: ` + error.message),
        { enableHighAccuracy: true }
    );

};
gdjs.evtsExt__Geolocation__WatchPlayer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Geolocation__WatchPlayer.userFunc0x88a740(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Geolocation__WatchPlayer.func = function(runtimeScene, callback, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "callback") return callback;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Geolocation__WatchPlayer.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Geolocation__WatchPlayer.registeredGdjsCallbacks = [];