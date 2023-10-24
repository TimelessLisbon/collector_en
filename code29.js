gdjs.Percurso_32S_46_32CarlosCode = {};
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1_1final = [];

gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1_1final = [];

gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDfundopistagmObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDfundopistagmObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDfundopistagmObjects3= [];
gdjs.Percurso_32S_46_32CarlosCode.GDpistagmObjects1= [];
gdjs.Percurso_32S_46_32CarlosCode.GDpistagmObjects2= [];
gdjs.Percurso_32S_46_32CarlosCode.GDpistagmObjects3= [];


gdjs.Percurso_32S_46_32CarlosCode.eventsList0 = function(runtimeScene) {

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


};gdjs.Percurso_32S_46_32CarlosCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10560828);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10564916);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 0, 1);
}}

}


};gdjs.Percurso_32S_46_32CarlosCode.userFunc0xad47f8 = function(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Longitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${longitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32S_46_32CarlosCode.userFunc0xad4b08 = function(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Latitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${latitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32S_46_32CarlosCode.mapOfGDgdjs_9546Percurso_959532S_959546_959532CarlosCode_9546GDpercursoObjects2Objects = Hashtable.newFrom({"percurso": gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects2});
gdjs.Percurso_32S_46_32CarlosCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10578084);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32S_46_32CarlosCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2);
gdjs.copyArray(gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1, gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects2);

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects2);
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10580916);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32S_46_32CarlosCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10582804);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1);
/* Reuse gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.window.openURL((( gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1.length === 0 ) ? "" :gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1[0].getString()), runtimeScene);
}}

}


};gdjs.Percurso_32S_46_32CarlosCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10592092);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.Percurso_32S_46_32CarlosCode.eventsList6 = function(runtimeScene) {

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
gdjs.Percurso_32S_46_32CarlosCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(27);
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1[i].setString("S. Carlos");
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1[i].setString("https://maps.app.goo.gl/n5844tA4EeXGKDhv7?g_st=iw");
}
}{runtimeScene.getScene().getVariables().get("latif").setNumber(38.7094);
}{runtimeScene.getScene().getVariables().get("latsup").setNumber(38.7112);
}{runtimeScene.getScene().getVariables().get("longsup").setNumber(-(9.1415));
}{runtimeScene.getScene().getVariables().get("longinf").setNumber(-(9.1423));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32S_46_32CarlosCode.eventsList1(runtimeScene);} //End of subevents
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
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "TESTE";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


gdjs.Percurso_32S_46_32CarlosCode.userFunc0xad47f8(runtimeScene);

}


{


gdjs.Percurso_32S_46_32CarlosCode.userFunc0xad4b08(runtimeScene);

}


{

gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1.length = 0;

gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1_1final.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2);
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2.length;i<l;++i) {
    if ( !(gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2[i].isVisible()) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2[k] = gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32S_46_32CarlosCode.mapOfGDgdjs_9546Percurso_959532S_959546_959532CarlosCode_9546GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1_1final.indexOf(gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2[j]) === -1 )
            gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1_1final.push(gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1_1final.indexOf(gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects2[j]) === -1 )
            gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1_1final.push(gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps") >= 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1_1final, gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1);
gdjs.copyArray(gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1_1final, gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "maps2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps2") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Percurso_32S_46_32CarlosCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[k] = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[k] = gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32S_46_32CarlosCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[k] = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[k] = gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32S_46_32CarlosCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("latinf"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("latsup"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("longsup"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("longinf"));
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[k] = gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[k] = gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1_1final.indexOf(gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[j]) === -1 )
            gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1_1final.push(gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2[j]);
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
gdjs.copyArray(gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1_1final, gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.Percurso_32S_46_32CarlosCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Percurso_32S_46_32CarlosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDnoObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDyesObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDgmapsObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDGMObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDURLObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDfundopistagmObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDfundopistagmObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDfundopistagmObjects3.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDpistagmObjects1.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDpistagmObjects2.length = 0;
gdjs.Percurso_32S_46_32CarlosCode.GDpistagmObjects3.length = 0;

gdjs.Percurso_32S_46_32CarlosCode.eventsList6(runtimeScene);

return;

}

gdjs['Percurso_32S_46_32CarlosCode'] = gdjs.Percurso_32S_46_32CarlosCode;
