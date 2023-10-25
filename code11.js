gdjs.Carmo_32EscadasCode = {};
gdjs.Carmo_32EscadasCode.GDyesObjects1_1final = [];

gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1= [];
gdjs.Carmo_32EscadasCode.GDprox_9595localObjects2= [];
gdjs.Carmo_32EscadasCode.GDprox_9595localObjects3= [];
gdjs.Carmo_32EscadasCode.GDnoObjects1= [];
gdjs.Carmo_32EscadasCode.GDnoObjects2= [];
gdjs.Carmo_32EscadasCode.GDnoObjects3= [];
gdjs.Carmo_32EscadasCode.GDyesObjects1= [];
gdjs.Carmo_32EscadasCode.GDyesObjects2= [];
gdjs.Carmo_32EscadasCode.GDyesObjects3= [];
gdjs.Carmo_32EscadasCode.GDfundoObjects1= [];
gdjs.Carmo_32EscadasCode.GDfundoObjects2= [];
gdjs.Carmo_32EscadasCode.GDfundoObjects3= [];
gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1= [];
gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects2= [];
gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects3= [];
gdjs.Carmo_32EscadasCode.GDscoreObjects1= [];
gdjs.Carmo_32EscadasCode.GDscoreObjects2= [];
gdjs.Carmo_32EscadasCode.GDscoreObjects3= [];
gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1= [];
gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects2= [];
gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects3= [];
gdjs.Carmo_32EscadasCode.GDURLObjects1= [];
gdjs.Carmo_32EscadasCode.GDURLObjects2= [];
gdjs.Carmo_32EscadasCode.GDURLObjects3= [];
gdjs.Carmo_32EscadasCode.GDfundopistagmObjects1= [];
gdjs.Carmo_32EscadasCode.GDfundopistagmObjects2= [];
gdjs.Carmo_32EscadasCode.GDfundopistagmObjects3= [];
gdjs.Carmo_32EscadasCode.GDpistagmObjects1= [];
gdjs.Carmo_32EscadasCode.GDpistagmObjects2= [];
gdjs.Carmo_32EscadasCode.GDpistagmObjects3= [];


gdjs.Carmo_32EscadasCode.eventsList0 = function(runtimeScene) {

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


};gdjs.Carmo_32EscadasCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9775668);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9778116);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9611988);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9692028);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9871748);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9966444);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList6 = function(runtimeScene) {

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
gdjs.Carmo_32EscadasCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(9);
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1[i].setString("Carmo Enigma");
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Carmo_32EscadasCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList1(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EscadasCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EscadasCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EscadasCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1[k] = gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Carmo_32EscadasCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Carmo_32EscadasCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDnoObjects1[k] = gdjs.Carmo_32EscadasCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDnoObjects1[k] = gdjs.Carmo_32EscadasCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Carmo_32EscadasCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.Carmo_32EscadasCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Carmo_32EscadasCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Carmo_32EscadasCode.GDyesObjects2[k] = gdjs.Carmo_32EscadasCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Carmo_32EscadasCode.GDyesObjects2[k] = gdjs.Carmo_32EscadasCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Carmo_32EscadasCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Carmo_32EscadasCode.GDyesObjects1_1final.indexOf(gdjs.Carmo_32EscadasCode.GDyesObjects2[j]) === -1 )
            gdjs.Carmo_32EscadasCode.GDyesObjects1_1final.push(gdjs.Carmo_32EscadasCode.GDyesObjects2[j]);
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
gdjs.copyArray(gdjs.Carmo_32EscadasCode.GDyesObjects1_1final, gdjs.Carmo_32EscadasCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList4(runtimeScene);} //End of subevents
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
gdjs.Carmo_32EscadasCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Carmo_32EscadasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Carmo_32EscadasCode.GDprox_9595localObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDprox_9595localObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDprox_9595localObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDnoObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDnoObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDnoObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDyesObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDyesObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDyesObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDfundoObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDfundoObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDfundoObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDscoreObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDscoreObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDscoreObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDURLObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDURLObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDURLObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDfundopistagmObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDfundopistagmObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDfundopistagmObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDpistagmObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDpistagmObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDpistagmObjects3.length = 0;

gdjs.Carmo_32EscadasCode.eventsList6(runtimeScene);

return;

}

gdjs['Carmo_32EscadasCode'] = gdjs.Carmo_32EscadasCode;
