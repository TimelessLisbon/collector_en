gdjs.S_46_32Roque_32EntradaCode = {};
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final = [];

gdjs.S_46_32Roque_32EntradaCode.GDokObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDhighlightObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDhighlightObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDhighlightObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects3= [];


gdjs.S_46_32Roque_32EntradaCode.eventsList0 = function(runtimeScene) {

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


};gdjs.S_46_32Roque_32EntradaCode.mapOfGDgdjs_9546S_959546_959532Roque_959532EntradaCode_9546GDlinkObjects1Objects = Hashtable.newFrom({"link": gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1});
gdjs.S_46_32Roque_32EntradaCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.S_46_32Roque_32EntradaCode.mapOfGDgdjs_9546S_959546_959532Roque_959532EntradaCode_9546GDlinkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://museusaoroque.scml.pt/museu-igreja/#", runtimeScene);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10472388);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10476364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10334828);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1, gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[0].getString()), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10449780);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10374004);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10368364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10481556);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList8 = function(runtimeScene) {

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
gdjs.S_46_32Roque_32EntradaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(4);
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1[i].setString("S. Roque Cruzadas 1");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("CROSSWORDS");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList2(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getString())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final, gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wrong");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1_1final, gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setDisabled(true);
}
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setString("");
}
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

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
gdjs.S_46_32Roque_32EntradaCode.eventsList7(runtimeScene);} //End of subevents
}

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
{
}

}


};

gdjs.S_46_32Roque_32EntradaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDhighlightObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDhighlightObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDhighlightObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDlinkObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDpistagmObjects3.length = 0;

gdjs.S_46_32Roque_32EntradaCode.eventsList8(runtimeScene);

return;

}

gdjs['S_46_32Roque_32EntradaCode'] = gdjs.S_46_32Roque_32EntradaCode;
