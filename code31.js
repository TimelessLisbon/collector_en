gdjs.FimCode = {};
gdjs.FimCode.GDvideoObjects1= [];
gdjs.FimCode.GDvideoObjects2= [];
gdjs.FimCode.GDvideoObjects3= [];
gdjs.FimCode.GDNewSpriteObjects1= [];
gdjs.FimCode.GDNewSpriteObjects2= [];
gdjs.FimCode.GDNewSpriteObjects3= [];
gdjs.FimCode.GDhighlightObjects1= [];
gdjs.FimCode.GDhighlightObjects2= [];
gdjs.FimCode.GDhighlightObjects3= [];
gdjs.FimCode.GDlinkObjects1= [];
gdjs.FimCode.GDlinkObjects2= [];
gdjs.FimCode.GDlinkObjects3= [];
gdjs.FimCode.GDscoreObjects1= [];
gdjs.FimCode.GDscoreObjects2= [];
gdjs.FimCode.GDscoreObjects3= [];
gdjs.FimCode.GDnext_9595sceneObjects1= [];
gdjs.FimCode.GDnext_9595sceneObjects2= [];
gdjs.FimCode.GDnext_9595sceneObjects3= [];
gdjs.FimCode.GDURLObjects1= [];
gdjs.FimCode.GDURLObjects2= [];
gdjs.FimCode.GDURLObjects3= [];
gdjs.FimCode.GDfundopistagmObjects1= [];
gdjs.FimCode.GDfundopistagmObjects2= [];
gdjs.FimCode.GDfundopistagmObjects3= [];
gdjs.FimCode.GDpistagmObjects1= [];
gdjs.FimCode.GDpistagmObjects2= [];
gdjs.FimCode.GDpistagmObjects3= [];


gdjs.FimCode.eventsList0 = function(runtimeScene) {

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


};gdjs.FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13344628);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


};gdjs.FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13338964);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13343332);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(120 - (((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("hour_finish")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))) * 60) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("min_finish")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
{ //Subevents
gdjs.FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.FimCode.mapOfGDgdjs_9546FimCode_9546GDlinkObjects1Objects = Hashtable.newFrom({"link": gdjs.FimCode.GDlinkObjects1});
gdjs.FimCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.FimCode.GDlinkObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FimCode.mapOfGDgdjs_9546FimCode_9546GDlinkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://drive.google.com/file/d/1LgGr7Np0Ypi1DJcpb7T_xEuhuLwEDLBc/view?usp=drive_link", runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.FimCode.eventsList4 = function(runtimeScene) {

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
gdjs.FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highlight"), gdjs.FimCode.GDhighlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.FimCode.GDlinkObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(29);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
}{for(var i = 0, len = gdjs.FimCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDhighlightObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.FimCode.GDhighlightObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.FimCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDlinkObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.FimCode.GDlinkObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.FimCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDhighlightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FimCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDlinkObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.FimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "TESTE";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highlight"), gdjs.FimCode.GDhighlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.FimCode.GDlinkObjects1);
{for(var i = 0, len = gdjs.FimCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDhighlightObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.FimCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDlinkObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "video") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.FimCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.FimCode.GDvideoObjects1);
{for(var i = 0, len = gdjs.FimCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDNewSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FimCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDvideoObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "video");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.FimCode.GDvideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FimCode.GDvideoObjects1.length;i<l;++i) {
    if ( gdjs.FimCode.GDvideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FimCode.GDvideoObjects1[k] = gdjs.FimCode.GDvideoObjects1[i];
        ++k;
    }
}
gdjs.FimCode.GDvideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.FimCode.GDlinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FimCode.GDlinkObjects1.length;i<l;++i) {
    if ( gdjs.FimCode.GDlinkObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.FimCode.GDlinkObjects1[k] = gdjs.FimCode.GDlinkObjects1[i];
        ++k;
    }
}
gdjs.FimCode.GDlinkObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.1;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};

gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDvideoObjects1.length = 0;
gdjs.FimCode.GDvideoObjects2.length = 0;
gdjs.FimCode.GDvideoObjects3.length = 0;
gdjs.FimCode.GDNewSpriteObjects1.length = 0;
gdjs.FimCode.GDNewSpriteObjects2.length = 0;
gdjs.FimCode.GDNewSpriteObjects3.length = 0;
gdjs.FimCode.GDhighlightObjects1.length = 0;
gdjs.FimCode.GDhighlightObjects2.length = 0;
gdjs.FimCode.GDhighlightObjects3.length = 0;
gdjs.FimCode.GDlinkObjects1.length = 0;
gdjs.FimCode.GDlinkObjects2.length = 0;
gdjs.FimCode.GDlinkObjects3.length = 0;
gdjs.FimCode.GDscoreObjects1.length = 0;
gdjs.FimCode.GDscoreObjects2.length = 0;
gdjs.FimCode.GDscoreObjects3.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.FimCode.GDURLObjects1.length = 0;
gdjs.FimCode.GDURLObjects2.length = 0;
gdjs.FimCode.GDURLObjects3.length = 0;
gdjs.FimCode.GDfundopistagmObjects1.length = 0;
gdjs.FimCode.GDfundopistagmObjects2.length = 0;
gdjs.FimCode.GDfundopistagmObjects3.length = 0;
gdjs.FimCode.GDpistagmObjects1.length = 0;
gdjs.FimCode.GDpistagmObjects2.length = 0;
gdjs.FimCode.GDpistagmObjects3.length = 0;

gdjs.FimCode.eventsList4(runtimeScene);

return;

}

gdjs['FimCode'] = gdjs.FimCode;
