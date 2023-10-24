gdjs.Manteigaria_32EnigmaCode = {};
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final = [];

gdjs.Manteigaria_32EnigmaCode.GDokObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDokObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDokObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDclueObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDclueObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDscoreObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDscoreObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDURLObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDURLObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDURLObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects3= [];
gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1= [];
gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects2= [];
gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects3= [];


gdjs.Manteigaria_32EnigmaCode.eventsList0 = function(runtimeScene) {

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


};gdjs.Manteigaria_32EnigmaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10382708);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10387444);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10396052);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10397884);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10403884);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1, gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[0].getString()), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10405628);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10407732);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10409724);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10411716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10413588);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10420148);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10428308);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10436556);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10444804);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10453260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10457716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10462196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10466588);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10447900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10353828);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10459260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}}

}


};gdjs.Manteigaria_32EnigmaCode.eventsList22 = function(runtimeScene) {

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
gdjs.Manteigaria_32EnigmaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(16);
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1[i].setString("Manteigaria Fim");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("CREATIVITY");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList1(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].getString())));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i].setAnimation((gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i].setAnimation((gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i].getAnimation()) - 1);
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDokObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].getString() != "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDokObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Manteigaria_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDokObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final, gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDokObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final, gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDokObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final, gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Manteigaria_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDokObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[k] = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1_1final, gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList18(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Manteigaria_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32EnigmaCode.GDokObjects1[k] = gdjs.Manteigaria_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cluegiven")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")));
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].setY(575 - (gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")) != "";
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().get("clueGM"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}
{ //Subevents
gdjs.Manteigaria_32EnigmaCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Manteigaria_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Manteigaria_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDokObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDanswerObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDfundopistagmObjects3.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects1.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects2.length = 0;
gdjs.Manteigaria_32EnigmaCode.GDpistagmObjects3.length = 0;

gdjs.Manteigaria_32EnigmaCode.eventsList22(runtimeScene);

return;

}

gdjs['Manteigaria_32EnigmaCode'] = gdjs.Manteigaria_32EnigmaCode;
