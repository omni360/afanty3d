/**
*@author Afanty3d / http://www.afanty3d.com
*/

var afanty3d = {revison: 0.0.1};

//for node.js
if(typeof module === 'object'){

	module.exports = afanty3d;
}

// scene state mode
afanty3d.stateViewed = 0;
afanty3d.statePlaced = 1;
afanty3d.stateModified = 2;


afanty3d.stateManager = function () {

		// place command started

		this.placed = true;

		// modify command started

		this.modified = false;

		// view opration started

		this.viewed = true;

		this.activeState = afanty3d.stateViewed;


}
afanty3d.stateManager.prototype = {

	constructor: afanty3d.stateManager,

	startPlaced: function() {

	},

	startModified: function () {

	},

	startViewed: function  () {
		
	},


}



afanty3d.signalManager = function () {

		// script

		editScript: new SIGNALS.Signal(),

		// player

		startPlayer: new SIGNALS.Signal(),
		stopPlayer: new SIGNALS.Signal(),

		// actions

		playAnimation: new SIGNALS.Signal(),
		stopAnimation: new SIGNALS.Signal(),

		showDialog: new SIGNALS.Signal(),

		// notifications

		editorCleared: new SIGNALS.Signal(),

		savingStarted: new SIGNALS.Signal(),
		savingFinished: new SIGNALS.Signal(),

		themeChanged: new SIGNALS.Signal(),

		transformModeChanged: new SIGNALS.Signal(),
		snapChanged: new SIGNALS.Signal(),
		spaceChanged: new SIGNALS.Signal(),
		rendererChanged: new SIGNALS.Signal(),

		sceneGraphChanged: new SIGNALS.Signal(),

		cameraChanged: new SIGNALS.Signal(),

		geometryChanged: new SIGNALS.Signal(),

		objectSelected: new SIGNALS.Signal(),
		objectFocused: new SIGNALS.Signal(),

		objectAdded: new SIGNALS.Signal(),
		objectChanged: new SIGNALS.Signal(),
		objectRemoved: new SIGNALS.Signal(),

		helperAdded: new SIGNALS.Signal(),
		helperRemoved: new SIGNALS.Signal(),

		materialChanged: new SIGNALS.Signal(),

		scriptAdded: new SIGNALS.Signal(),
		scriptChanged: new SIGNALS.Signal(),
		scriptRemoved: new SIGNALS.Signal(),

		fogTypeChanged: new SIGNALS.Signal(),
		fogColorChanged: new SIGNALS.Signal(),
		fogParametersChanged: new SIGNALS.Signal(),
		windowResize: new SIGNALS.Signal(),

		showGridChanged: new SIGNALS.Signal()


}

afanty3d.sceneInit = function(){

}