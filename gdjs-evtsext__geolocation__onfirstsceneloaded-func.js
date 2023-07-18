
if (typeof gdjs.evtsExt__Geolocation__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__Geolocation__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Geolocation__onFirstSceneLoaded = {};


gdjs.evtsExt__Geolocation__onFirstSceneLoaded.userFunc0x78d478 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.evtTools.geolocation = {
    permission: { state: navigator.permissions ? "loading" : "unknown" }
};

// Prefetch the permission and set up an event handler to keep it up to date
if (navigator.permissions) navigator.permissions.query({ name: 'geolocation' })
    .then((permission) => {
        gdjs.evtTools.geolocation.permission = permission;
    });

};
gdjs.evtsExt__Geolocation__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Geolocation__onFirstSceneLoaded.userFunc0x78d478(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Geolocation__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Geolocation__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Geolocation__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__Geolocation__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Geolocation__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__Geolocation__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__Geolocation__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
