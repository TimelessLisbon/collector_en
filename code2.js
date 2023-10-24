gdjs.VideoCode = {};
gdjs.VideoCode.GDvideoObjects1= [];
gdjs.VideoCode.GDvideoObjects2= [];
gdjs.VideoCode.GDplayObjects1= [];
gdjs.VideoCode.GDplayObjects2= [];
gdjs.VideoCode.GDfundoObjects1= [];
gdjs.VideoCode.GDfundoObjects2= [];
gdjs.VideoCode.GDlinkObjects1= [];
gdjs.VideoCode.GDlinkObjects2= [];
gdjs.VideoCode.GDhighlightObjects1= [];
gdjs.VideoCode.GDhighlightObjects2= [];
gdjs.VideoCode.GDchromeObjects1= [];
gdjs.VideoCode.GDchromeObjects2= [];
gdjs.VideoCode.GDscoreObjects1= [];
gdjs.VideoCode.GDscoreObjects2= [];
gdjs.VideoCode.GDnext_9595sceneObjects1= [];
gdjs.VideoCode.GDnext_9595sceneObjects2= [];
gdjs.VideoCode.GDURLObjects1= [];
gdjs.VideoCode.GDURLObjects2= [];
gdjs.VideoCode.GDfundopistagmObjects1= [];
gdjs.VideoCode.GDfundopistagmObjects2= [];
gdjs.VideoCode.GDpistagmObjects1= [];
gdjs.VideoCode.GDpistagmObjects2= [];


gdjs.VideoCode.eventsList0 = function(runtimeScene) {

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


};gdjs.VideoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9335396);
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


};gdjs.VideoCode.mapOfGDgdjs_9546VideoCode_9546GDlinkObjects1Objects = Hashtable.newFrom({"link": gdjs.VideoCode.GDlinkObjects1});
gdjs.VideoCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.VideoCode.GDlinkObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.VideoCode.mapOfGDgdjs_9546VideoCode_9546GDlinkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://drive.google.com/file/d/1HKuKMqxR7ye-j8GG_UPTrhzdMd2TMGNU/view?usp=sharing", runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Pedro Alcantara", false);
}}

}


};gdjs.VideoCode.eventsList3 = function(runtimeScene) {

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
gdjs.VideoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highlight"), gdjs.VideoCode.GDhighlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.VideoCode.GDlinkObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.VideoCode.GDplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.VideoCode.GDvideoObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDplayObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.VideoCode.GDplayObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.VideoCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDlinkObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.VideoCode.GDlinkObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.VideoCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDhighlightObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.VideoCode.GDhighlightObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.VideoCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDplayObjects1[i].setY((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.VideoCode.GDplayObjects1[i].getHeight())) / 2);
}
}{for(var i = 0, len = gdjs.VideoCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideoObjects1[i].pause();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "video");
}{for(var i = 0, len = gdjs.VideoCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDlinkObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDhighlightObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.VideoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.VideoCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VideoCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.VideoCode.GDplayObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.VideoCode.GDplayObjects1[k] = gdjs.VideoCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.VideoCode.GDplayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VideoCode.GDplayObjects1.length;i<l;++i) {
    if ( gdjs.VideoCode.GDplayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.VideoCode.GDplayObjects1[k] = gdjs.VideoCode.GDplayObjects1[i];
        ++k;
    }
}
gdjs.VideoCode.GDplayObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "video");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "video") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.VideoCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.VideoCode.GDplayObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDplayObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDplayObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.VideoCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDfundoObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "video") > 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.VideoCode.GDvideoObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideoObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "video");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.VideoCode.GDvideoObjects1);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}{for(var i = 0, len = gdjs.VideoCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDvideoObjects1[i].pause();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.VideoCode.GDvideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VideoCode.GDvideoObjects1.length;i<l;++i) {
    if ( gdjs.VideoCode.GDvideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.VideoCode.GDvideoObjects1[k] = gdjs.VideoCode.GDvideoObjects1[i];
        ++k;
    }
}
gdjs.VideoCode.GDvideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

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
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Pedro Alcantara", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "TESTE";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highlight"), gdjs.VideoCode.GDhighlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.VideoCode.GDlinkObjects1);
{for(var i = 0, len = gdjs.VideoCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDhighlightObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.VideoCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.VideoCode.GDlinkObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.VideoCode.GDlinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.VideoCode.GDlinkObjects1.length;i<l;++i) {
    if ( gdjs.VideoCode.GDlinkObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.VideoCode.GDlinkObjects1[k] = gdjs.VideoCode.GDlinkObjects1[i];
        ++k;
    }
}
gdjs.VideoCode.GDlinkObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.VideoCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.VideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VideoCode.GDvideoObjects1.length = 0;
gdjs.VideoCode.GDvideoObjects2.length = 0;
gdjs.VideoCode.GDplayObjects1.length = 0;
gdjs.VideoCode.GDplayObjects2.length = 0;
gdjs.VideoCode.GDfundoObjects1.length = 0;
gdjs.VideoCode.GDfundoObjects2.length = 0;
gdjs.VideoCode.GDlinkObjects1.length = 0;
gdjs.VideoCode.GDlinkObjects2.length = 0;
gdjs.VideoCode.GDhighlightObjects1.length = 0;
gdjs.VideoCode.GDhighlightObjects2.length = 0;
gdjs.VideoCode.GDchromeObjects1.length = 0;
gdjs.VideoCode.GDchromeObjects2.length = 0;
gdjs.VideoCode.GDscoreObjects1.length = 0;
gdjs.VideoCode.GDscoreObjects2.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects1.length = 0;
gdjs.VideoCode.GDnext_9595sceneObjects2.length = 0;
gdjs.VideoCode.GDURLObjects1.length = 0;
gdjs.VideoCode.GDURLObjects2.length = 0;
gdjs.VideoCode.GDfundopistagmObjects1.length = 0;
gdjs.VideoCode.GDfundopistagmObjects2.length = 0;
gdjs.VideoCode.GDpistagmObjects1.length = 0;
gdjs.VideoCode.GDpistagmObjects2.length = 0;

gdjs.VideoCode.eventsList3(runtimeScene);

return;

}

gdjs['VideoCode'] = gdjs.VideoCode;
