gdjs.Bolo_32de_32BacalhauCode = {};
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1_1final = [];

gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundopistagmObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundopistagmObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundopistagmObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDpistagmObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDpistagmObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDpistagmObjects3= [];


gdjs.Bolo_32de_32BacalhauCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_amarela"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_azul"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_castanha"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_rosa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_roxa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_verde"));
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logout", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13330852);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13335460);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13342540);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13344692);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13348476);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13350900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("UID_atual").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(11);
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1[i].setString("Percurso Brasileira");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[k] = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[k] = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1_1final.indexOf(gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[j]) === -1 )
            gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1_1final.push(gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1_1final, gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Bolo_32de_32BacalhauCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDprox_9595localObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundopistagmObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundopistagmObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundopistagmObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDpistagmObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDpistagmObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDpistagmObjects3.length = 0;

gdjs.Bolo_32de_32BacalhauCode.eventsList6(runtimeScene);

return;

}

gdjs['Bolo_32de_32BacalhauCode'] = gdjs.Bolo_32de_32BacalhauCode;
