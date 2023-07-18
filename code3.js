gdjs.RegistoCode = {};
gdjs.RegistoCode.GDscoreObjects1= [];
gdjs.RegistoCode.GDscoreObjects2= [];
gdjs.RegistoCode.GDscoreObjects3= [];
gdjs.RegistoCode.GDnext_95sceneObjects1= [];
gdjs.RegistoCode.GDnext_95sceneObjects2= [];
gdjs.RegistoCode.GDnext_95sceneObjects3= [];
gdjs.RegistoCode.GDURLObjects1= [];
gdjs.RegistoCode.GDURLObjects2= [];
gdjs.RegistoCode.GDURLObjects3= [];
gdjs.RegistoCode.GDfundopistagmObjects1= [];
gdjs.RegistoCode.GDfundopistagmObjects2= [];
gdjs.RegistoCode.GDfundopistagmObjects3= [];
gdjs.RegistoCode.GDpistagmObjects1= [];
gdjs.RegistoCode.GDpistagmObjects2= [];
gdjs.RegistoCode.GDpistagmObjects3= [];
gdjs.RegistoCode.GDanswerObjects1= [];
gdjs.RegistoCode.GDanswerObjects2= [];
gdjs.RegistoCode.GDanswerObjects3= [];
gdjs.RegistoCode.GDokObjects1= [];
gdjs.RegistoCode.GDokObjects2= [];
gdjs.RegistoCode.GDokObjects3= [];
gdjs.RegistoCode.GDfundoObjects1= [];
gdjs.RegistoCode.GDfundoObjects2= [];
gdjs.RegistoCode.GDfundoObjects3= [];
gdjs.RegistoCode.GDinvalidObjects1= [];
gdjs.RegistoCode.GDinvalidObjects2= [];
gdjs.RegistoCode.GDinvalidObjects3= [];
gdjs.RegistoCode.GDUIDObjects1= [];
gdjs.RegistoCode.GDUIDObjects2= [];
gdjs.RegistoCode.GDUIDObjects3= [];
gdjs.RegistoCode.GDloadingObjects1= [];
gdjs.RegistoCode.GDloadingObjects2= [];
gdjs.RegistoCode.GDloadingObjects3= [];
gdjs.RegistoCode.GDloading_95animationObjects1= [];
gdjs.RegistoCode.GDloading_95animationObjects2= [];
gdjs.RegistoCode.GDloading_95animationObjects3= [];


gdjs.RegistoCode.eventsList0 = function(runtimeScene) {

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


};gdjs.RegistoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13027244);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}}

}


};gdjs.RegistoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13045300);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


};gdjs.RegistoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13048196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.RegistoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13049332);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.writeField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.writeField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.writeField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


};gdjs.RegistoCode.eventsList5 = function(runtimeScene) {

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
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.RegistoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.RegistoCode.GDloadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.RegistoCode.GDloading_95animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.RegistoCode.GDokObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDokObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.RegistoCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.RegistoCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.RegistoCode.GDinvalidObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDinvalidObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RegistoCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDloadingObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RegistoCode.GDloading_95animationObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDloading_95animationObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs.RegistoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.RegistoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.RegistoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.RegistoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.RegistoCode.GDanswerObjects1[i].getString())));
}
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.RegistoCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDinvalidObjects1.length;i<l;++i) {
    if ( !(gdjs.RegistoCode.GDinvalidObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDinvalidObjects1[k] = gdjs.RegistoCode.GDinvalidObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDinvalidObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDokObjects1[k] = gdjs.RegistoCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.RegistoCode.GDloadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.RegistoCode.GDloading_95animationObjects1);
/* Reuse gdjs.RegistoCode.GDokObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.RegistoCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.RegistoCode.GDanswerObjects1[0].getString()));
}{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RegistoCode.GDokObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RegistoCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDloadingObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.RegistoCode.GDloading_95animationObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDloading_95animationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.RegistoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.RegistoCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDinvalidObjects1.length;i<l;++i) {
    if ( !(gdjs.RegistoCode.GDinvalidObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDinvalidObjects1[k] = gdjs.RegistoCode.GDinvalidObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDinvalidObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDokObjects1[k] = gdjs.RegistoCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() == "COORDENADAS" ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.RegistoCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.RegistoCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.RegistoCode.GDanswerObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Coordenadas", false);
}
{ //Subevents
gdjs.RegistoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.RegistoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Video", false);
}}

}


};

gdjs.RegistoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RegistoCode.GDscoreObjects1.length = 0;
gdjs.RegistoCode.GDscoreObjects2.length = 0;
gdjs.RegistoCode.GDscoreObjects3.length = 0;
gdjs.RegistoCode.GDnext_95sceneObjects1.length = 0;
gdjs.RegistoCode.GDnext_95sceneObjects2.length = 0;
gdjs.RegistoCode.GDnext_95sceneObjects3.length = 0;
gdjs.RegistoCode.GDURLObjects1.length = 0;
gdjs.RegistoCode.GDURLObjects2.length = 0;
gdjs.RegistoCode.GDURLObjects3.length = 0;
gdjs.RegistoCode.GDfundopistagmObjects1.length = 0;
gdjs.RegistoCode.GDfundopistagmObjects2.length = 0;
gdjs.RegistoCode.GDfundopistagmObjects3.length = 0;
gdjs.RegistoCode.GDpistagmObjects1.length = 0;
gdjs.RegistoCode.GDpistagmObjects2.length = 0;
gdjs.RegistoCode.GDpistagmObjects3.length = 0;
gdjs.RegistoCode.GDanswerObjects1.length = 0;
gdjs.RegistoCode.GDanswerObjects2.length = 0;
gdjs.RegistoCode.GDanswerObjects3.length = 0;
gdjs.RegistoCode.GDokObjects1.length = 0;
gdjs.RegistoCode.GDokObjects2.length = 0;
gdjs.RegistoCode.GDokObjects3.length = 0;
gdjs.RegistoCode.GDfundoObjects1.length = 0;
gdjs.RegistoCode.GDfundoObjects2.length = 0;
gdjs.RegistoCode.GDfundoObjects3.length = 0;
gdjs.RegistoCode.GDinvalidObjects1.length = 0;
gdjs.RegistoCode.GDinvalidObjects2.length = 0;
gdjs.RegistoCode.GDinvalidObjects3.length = 0;
gdjs.RegistoCode.GDUIDObjects1.length = 0;
gdjs.RegistoCode.GDUIDObjects2.length = 0;
gdjs.RegistoCode.GDUIDObjects3.length = 0;
gdjs.RegistoCode.GDloadingObjects1.length = 0;
gdjs.RegistoCode.GDloadingObjects2.length = 0;
gdjs.RegistoCode.GDloadingObjects3.length = 0;
gdjs.RegistoCode.GDloading_95animationObjects1.length = 0;
gdjs.RegistoCode.GDloading_95animationObjects2.length = 0;
gdjs.RegistoCode.GDloading_95animationObjects3.length = 0;

gdjs.RegistoCode.eventsList5(runtimeScene);

return;

}

gdjs['RegistoCode'] = gdjs.RegistoCode;
