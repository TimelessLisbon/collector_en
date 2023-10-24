gdjs.CodeCode = {};
gdjs.CodeCode.GDfundoObjects1= [];
gdjs.CodeCode.GDfundoObjects2= [];
gdjs.CodeCode.GDfundoObjects3= [];
gdjs.CodeCode.GDfundo2Objects1= [];
gdjs.CodeCode.GDfundo2Objects2= [];
gdjs.CodeCode.GDfundo2Objects3= [];
gdjs.CodeCode.GDcodeObjects1= [];
gdjs.CodeCode.GDcodeObjects2= [];
gdjs.CodeCode.GDcodeObjects3= [];
gdjs.CodeCode.GDcode_9595addObjects1= [];
gdjs.CodeCode.GDcode_9595addObjects2= [];
gdjs.CodeCode.GDcode_9595addObjects3= [];
gdjs.CodeCode.GDokObjects1= [];
gdjs.CodeCode.GDokObjects2= [];
gdjs.CodeCode.GDokObjects3= [];
gdjs.CodeCode.GDyesObjects1= [];
gdjs.CodeCode.GDyesObjects2= [];
gdjs.CodeCode.GDyesObjects3= [];
gdjs.CodeCode.GDnoObjects1= [];
gdjs.CodeCode.GDnoObjects2= [];
gdjs.CodeCode.GDnoObjects3= [];
gdjs.CodeCode.GDinscritoObjects1= [];
gdjs.CodeCode.GDinscritoObjects2= [];
gdjs.CodeCode.GDinscritoObjects3= [];
gdjs.CodeCode.GDloading_9595animationObjects1= [];
gdjs.CodeCode.GDloading_9595animationObjects2= [];
gdjs.CodeCode.GDloading_9595animationObjects3= [];
gdjs.CodeCode.GDchromeObjects1= [];
gdjs.CodeCode.GDchromeObjects2= [];
gdjs.CodeCode.GDchromeObjects3= [];
gdjs.CodeCode.GDandroidObjects1= [];
gdjs.CodeCode.GDandroidObjects2= [];
gdjs.CodeCode.GDandroidObjects3= [];
gdjs.CodeCode.GDscoreObjects1= [];
gdjs.CodeCode.GDscoreObjects2= [];
gdjs.CodeCode.GDscoreObjects3= [];
gdjs.CodeCode.GDnext_9595sceneObjects1= [];
gdjs.CodeCode.GDnext_9595sceneObjects2= [];
gdjs.CodeCode.GDnext_9595sceneObjects3= [];
gdjs.CodeCode.GDURLObjects1= [];
gdjs.CodeCode.GDURLObjects2= [];
gdjs.CodeCode.GDURLObjects3= [];
gdjs.CodeCode.GDfundopistagmObjects1= [];
gdjs.CodeCode.GDfundopistagmObjects2= [];
gdjs.CodeCode.GDfundopistagmObjects3= [];
gdjs.CodeCode.GDpistagmObjects1= [];
gdjs.CodeCode.GDpistagmObjects2= [];
gdjs.CodeCode.GDpistagmObjects3= [];


gdjs.CodeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14100412);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.CodeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14125332);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.CodeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Amarela", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Azul", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Castanha", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Rosa", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Roxa", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("UID", "Verde", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.CodeCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14139660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.CodeCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14143700);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.CodeCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("amarela").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("azul").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("castanha").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("rosa").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("roxa").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("verde").setNumber(2);
}}

}


};gdjs.CodeCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("inscrito"), gdjs.CodeCode.GDinscritoObjects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.CodeCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.CodeCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.CodeCode.GDyesObjects1);
{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CodeCode.GDcodeObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CodeCode.GDokObjects1[i].getWidth())) / 2);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "inscrito");
}{runtimeScene.getScene().getVariables().get("equipa").setString("");
}{for(var i = 0, len = gdjs.CodeCode.GDinscritoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDinscritoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDnoObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("amarela").setNumber(3);
}{runtimeScene.getScene().getVariables().get("azul").setNumber(3);
}{runtimeScene.getScene().getVariables().get("castanha").setNumber(3);
}{runtimeScene.getScene().getVariables().get("rosa").setNumber(3);
}{runtimeScene.getScene().getVariables().get("roxa").setNumber(3);
}{runtimeScene.getScene().getVariables().get("verde").setNumber(3);
}{for(var i = 0, len = gdjs.CodeCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDloading_9595animationObjects1[i].hide();
}
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("code_add"), gdjs.CodeCode.GDcode_9595addObjects1);
{for(var i = 0, len = gdjs.CodeCode.GDcode_9595addObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcode_9595addObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CodeCode.GDcode_9595addObjects1[i].getWidth())) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inscrito"), gdjs.CodeCode.GDinscritoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDinscritoObjects1.length;i<l;++i) {
    if ( !(gdjs.CodeCode.GDinscritoObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDinscritoObjects1[k] = gdjs.CodeCode.GDinscritoObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDinscritoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDokObjects1[k] = gdjs.CodeCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDokObjects1[k] = gdjs.CodeCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("android")) == 1;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("android"), gdjs.CodeCode.GDandroidObjects1);
/* Reuse gdjs.CodeCode.GDokObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "android");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "android");
}{for(var i = 0, len = gdjs.CodeCode.GDandroidObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDandroidObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("android").setNumber(0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "chrome");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inscrito"), gdjs.CodeCode.GDinscritoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDinscritoObjects1.length;i<l;++i) {
    if ( !(gdjs.CodeCode.GDinscritoObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDinscritoObjects1[k] = gdjs.CodeCode.GDinscritoObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDinscritoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDokObjects1[k] = gdjs.CodeCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDokObjects1[k] = gdjs.CodeCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("chrome")) == 1;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chrome"), gdjs.CodeCode.GDchromeObjects1);
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.CodeCode.GDfundo2Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "chrome");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "chrome");
}{for(var i = 0, len = gdjs.CodeCode.GDchromeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDchromeObjects1[i].setOpacity(0);
}
}{runtimeScene.getScene().getVariables().get("chrome").setNumber(0);
}{for(var i = 0, len = gdjs.CodeCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.CodeCode.GDfundo2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("inscrito"), gdjs.CodeCode.GDinscritoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDinscritoObjects1.length;i<l;++i) {
    if ( !(gdjs.CodeCode.GDinscritoObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDinscritoObjects1[k] = gdjs.CodeCode.GDinscritoObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDinscritoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDokObjects1[k] = gdjs.CodeCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDokObjects1[k] = gdjs.CodeCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("chrome")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("android")) == 0;
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
{runtimeScene.getScene().getVariables().get("equipa").setString((( gdjs.CodeCode.GDcodeObjects1.length === 0 ) ? "" :gdjs.CodeCode.GDcodeObjects1[0].getString()));
}
{ //Subevents
gdjs.CodeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") > 0.1;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 4;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID")), "Team", runtimeScene.getScene().getVariables().get("team_name"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID")), "Score", runtimeScene.getScene().getVariables().get("score"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID")), "Progress", runtimeScene.getScene().getVariables().get("progress"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 4;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("team_name")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("progress")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1101";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Amarela", runtimeScene.getScene().getVariables().get("amarela"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "inscrito");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("amarela")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1202";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Azul", runtimeScene.getScene().getVariables().get("azul"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "inscrito");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("azul")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1303";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Castanha", runtimeScene.getScene().getVariables().get("castanha"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "inscrito");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("castanha")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1404";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Rosa", runtimeScene.getScene().getVariables().get("rosa"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "inscrito");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rosa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1505";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Roxa", runtimeScene.getScene().getVariables().get("roxa"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "inscrito");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("roxa")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) == "1606";
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.hasVariable("UID/Verde", runtimeScene.getScene().getVariables().get("verde"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "inscrito");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("verde")) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("code_add"), gdjs.CodeCode.GDcode_9595addObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.CodeCode.GDfundo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("loading_animation"), gdjs.CodeCode.GDloading_9595animationObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);
{for(var i = 0, len = gdjs.CodeCode.GDcode_9595addObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcode_9595addObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.CodeCode.GDfundo2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDloading_9595animationObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDloading_9595animationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.CodeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}
{ //Subevents
gdjs.CodeCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1101";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1202";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1303";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1404";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1505";
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("equipa")) != "1606";
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("code_add"), gdjs.CodeCode.GDcode_9595addObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);
{runtimeScene.getScene().getVariables().get("equipa").setString("");
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].setDisabled(true);
}
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}{for(var i = 0, len = gdjs.CodeCode.GDcode_9595addObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcode_9595addObjects1[i].setString("INVALID CODE");
}
}
{ //Subevents
gdjs.CodeCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "invalid") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("code_add"), gdjs.CodeCode.GDcode_9595addObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].setDisabled(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDcode_9595addObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcode_9595addObjects1[i].setString("INSERT THE CODE");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "inscrito") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("inscrito"), gdjs.CodeCode.GDinscritoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.CodeCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.CodeCode.GDyesObjects1);
{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.CodeCode.GDinscritoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDinscritoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("equipa").setString("");
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].hide();
}
}
{ //Subevents
gdjs.CodeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.CodeCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDnoObjects1[k] = gdjs.CodeCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDnoObjects1[k] = gdjs.CodeCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("inscrito"), gdjs.CodeCode.GDinscritoObjects1);
/* Reuse gdjs.CodeCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.CodeCode.GDyesObjects1);
{for(var i = 0, len = gdjs.CodeCode.GDinscritoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDinscritoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDyesObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("amarela").setNumber(3);
}{runtimeScene.getScene().getVariables().get("azul").setNumber(3);
}{runtimeScene.getScene().getVariables().get("castanha").setNumber(3);
}{runtimeScene.getScene().getVariables().get("rosa").setNumber(3);
}{runtimeScene.getScene().getVariables().get("roxa").setNumber(3);
}{runtimeScene.getScene().getVariables().get("verde").setNumber(3);
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "inscrito");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "inscrito");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.CodeCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDyesObjects1[k] = gdjs.CodeCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CodeCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.CodeCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.CodeCode.GDyesObjects1[k] = gdjs.CodeCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.CodeCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("code"), gdjs.CodeCode.GDcodeObjects1);
gdjs.copyArray(runtimeScene.getObjects("inscrito"), gdjs.CodeCode.GDinscritoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.CodeCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.CodeCode.GDokObjects1);
/* Reuse gdjs.CodeCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.CodeCode.GDinscritoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDinscritoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDokObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDokObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.CodeCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.CodeCode.GDcodeObjects1.length ;i < len;++i) {
    gdjs.CodeCode.GDcodeObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "inscrito");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "inscrito");
}
{ //Subevents
gdjs.CodeCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.CodeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CodeCode.GDfundoObjects1.length = 0;
gdjs.CodeCode.GDfundoObjects2.length = 0;
gdjs.CodeCode.GDfundoObjects3.length = 0;
gdjs.CodeCode.GDfundo2Objects1.length = 0;
gdjs.CodeCode.GDfundo2Objects2.length = 0;
gdjs.CodeCode.GDfundo2Objects3.length = 0;
gdjs.CodeCode.GDcodeObjects1.length = 0;
gdjs.CodeCode.GDcodeObjects2.length = 0;
gdjs.CodeCode.GDcodeObjects3.length = 0;
gdjs.CodeCode.GDcode_9595addObjects1.length = 0;
gdjs.CodeCode.GDcode_9595addObjects2.length = 0;
gdjs.CodeCode.GDcode_9595addObjects3.length = 0;
gdjs.CodeCode.GDokObjects1.length = 0;
gdjs.CodeCode.GDokObjects2.length = 0;
gdjs.CodeCode.GDokObjects3.length = 0;
gdjs.CodeCode.GDyesObjects1.length = 0;
gdjs.CodeCode.GDyesObjects2.length = 0;
gdjs.CodeCode.GDyesObjects3.length = 0;
gdjs.CodeCode.GDnoObjects1.length = 0;
gdjs.CodeCode.GDnoObjects2.length = 0;
gdjs.CodeCode.GDnoObjects3.length = 0;
gdjs.CodeCode.GDinscritoObjects1.length = 0;
gdjs.CodeCode.GDinscritoObjects2.length = 0;
gdjs.CodeCode.GDinscritoObjects3.length = 0;
gdjs.CodeCode.GDloading_9595animationObjects1.length = 0;
gdjs.CodeCode.GDloading_9595animationObjects2.length = 0;
gdjs.CodeCode.GDloading_9595animationObjects3.length = 0;
gdjs.CodeCode.GDchromeObjects1.length = 0;
gdjs.CodeCode.GDchromeObjects2.length = 0;
gdjs.CodeCode.GDchromeObjects3.length = 0;
gdjs.CodeCode.GDandroidObjects1.length = 0;
gdjs.CodeCode.GDandroidObjects2.length = 0;
gdjs.CodeCode.GDandroidObjects3.length = 0;
gdjs.CodeCode.GDscoreObjects1.length = 0;
gdjs.CodeCode.GDscoreObjects2.length = 0;
gdjs.CodeCode.GDscoreObjects3.length = 0;
gdjs.CodeCode.GDnext_9595sceneObjects1.length = 0;
gdjs.CodeCode.GDnext_9595sceneObjects2.length = 0;
gdjs.CodeCode.GDnext_9595sceneObjects3.length = 0;
gdjs.CodeCode.GDURLObjects1.length = 0;
gdjs.CodeCode.GDURLObjects2.length = 0;
gdjs.CodeCode.GDURLObjects3.length = 0;
gdjs.CodeCode.GDfundopistagmObjects1.length = 0;
gdjs.CodeCode.GDfundopistagmObjects2.length = 0;
gdjs.CodeCode.GDfundopistagmObjects3.length = 0;
gdjs.CodeCode.GDpistagmObjects1.length = 0;
gdjs.CodeCode.GDpistagmObjects2.length = 0;
gdjs.CodeCode.GDpistagmObjects3.length = 0;

gdjs.CodeCode.eventsList6(runtimeScene);

return;

}

gdjs['CodeCode'] = gdjs.CodeCode;
