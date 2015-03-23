/**
*@author Afanty3d / http://www.afanty3d.com
*/

var afanty3d = {revison: '0.0.1'};

//for node.js
if(typeof module === 'object'){

	module.exports = afanty3d;
}

// scene state mode
afanty3d.stateViewed = 0;
afanty3d.statePlaced = 1;
afanty3d.stateModified = 2;

//afanty3d domObject
afanty3d.domObject = function() {

};

//afanty3d scene init
afanty3d.scene = function () {

	this.parentdomclass = "";
	this.parentdomid = "";
	// this.scene = "";


};

afanty3d.scene.prototype.constructor = afanty3d.scene;
afanty3d.scene.prototype.init = function() {


};

afanty3d.scene.prototype.appendtodomid = function (domid) {

};

afanty3d.scene.prototype.appendtodomclass = function (domclass) {

	


};
/*
@length 
*/
afanty3d.packagegeomety = function(depth, width, height,bevel,revers) {

	THREE.Geometry.call(this);

	this.type = 'packagegeomety';

	this.depth = depth != undefined ? depth : 200;
	this.width = width != undefined ? width : 100;
	this.height = height != undefined ? height : 60;
	this.bevel = bevel != undefined ? bevel : 10;
	this.revers = revers != undefined ? revers : 1;

	this.widthSegments =  1;
	this.heightSegments =  1;
	this.depthSegments =  1;

	var scope = this;

	var width_half = width / 2;
	var height_half = height / 2;
	var depth_half = depth / 2;

	buildPlane( 'z', 'y', - 1, - 1, depth, height, width_half, 0 ); // px
	buildPlane( 'z', 'y',   1, - 1, depth, height, - width_half, 1 ); // nx
	buildPlane( 'x', 'z',   1,   1, width, depth, height_half, 2 ); // py
	buildPlane( 'x', 'z',   1, - 1, width, depth, - height_half, 3 ); // ny
	buildPlane( 'x', 'y',   1, - 1, width, height, depth_half, 4 ); // pz
	buildPlane( 'x', 'y', - 1, - 1, width, height, - depth_half, 5 ); // nz

	function buildPlane( u, v, udir, vdir, width, height, depth, materialIndex ) {

		var w, ix, iy,
		gridX = scope.widthSegments,
		gridY = scope.heightSegments,
		width_half = width / 2,
		height_half = height / 2,
		offset = scope.vertices.length;

		if ( ( u === 'x' && v === 'y' ) || ( u === 'y' && v === 'x' ) ) {

			w = 'z';

		} else if ( ( u === 'x' && v === 'z' ) || ( u === 'z' && v === 'x' ) ) {

			w = 'y';
			gridY = scope.depthSegments;

		} else if ( ( u === 'z' && v === 'y' ) || ( u === 'y' && v === 'z' ) ) {

			w = 'x';
			gridX = scope.depthSegments;

		}

		var gridX1 = gridX + 1,
		gridY1 = gridY + 1,
		segment_width = width / gridX,
		segment_height = height / gridY,
		normal = new THREE.Vector3();

		normal[ w ] = depth > 0 ? 1 : - 1;

		for ( iy = 0; iy < gridY1; iy ++ ) {

			for ( ix = 0; ix < gridX1; ix ++ ) {

				var vector = new THREE.Vector3();
				vector[ u ] = ( ix * segment_width - width_half ) * udir;
				vector[ v ] = ( iy * segment_height - height_half ) * vdir;
				vector[ w ] = depth;

				scope.vertices.push( vector );

			}

		}

		for ( iy = 0; iy < gridY; iy ++ ) {

			for ( ix = 0; ix < gridX; ix ++ ) {

				var a = ix + gridX1 * iy;
				var b = ix + gridX1 * ( iy + 1 );
				var c = ( ix + 1 ) + gridX1 * ( iy + 1 );
				var d = ( ix + 1 ) + gridX1 * iy;

				var uva = new THREE.Vector2( ix / gridX, 1 - iy / gridY );
				var uvb = new THREE.Vector2( ix / gridX, 1 - ( iy + 1 ) / gridY );
				var uvc = new THREE.Vector2( ( ix + 1 ) / gridX, 1 - ( iy + 1 ) / gridY );
				var uvd = new THREE.Vector2( ( ix + 1 ) / gridX, 1 - iy / gridY );

				var face = new THREE.Face3( a + offset, b + offset, d + offset );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				face.materialIndex = materialIndex;

				scope.faces.push( face );
				scope.faceVertexUvs[ 0 ].push( [ uva, uvb, uvd ] );

				face = new THREE.Face3( b + offset, c + offset, d + offset );
				face.normal.copy( normal );
				face.vertexNormals.push( normal.clone(), normal.clone(), normal.clone() );
				face.materialIndex = materialIndex;

				scope.faces.push( face );
				scope.faceVertexUvs[ 0 ].push( [ uvb.clone(), uvc, uvd.clone() ] );

			}

		}

	}

	this.mergeVertices();

};

afanty3d.packagegeomety.prototype = Object.create( THREE.Geometry.prototype );
afanty3d.packagegeomety.prototype.constructor = afanty3d.packagegeomety;


//afanty3d logo
afanty3d.afanty3dlogo = function() {

	this.parentdomclass = "";
	this.parentdomid = "";
	this.scene = "";

};

afanty3d.afanty3dlogo.prototype.init = function	() {


};

// afanty3d.afanty3dlogo.prototype = Object.create( );
afanty3d.afanty3dlogo.prototype.constructor = afanty3d.afanty3dlogo;

//afanty3d state manager
afanty3d.stateManager = function () {

		// place command started

		this.placed = true;

		// modify command started

		this.modified = false;

		// view opration started

		this.viewed = true;

		this.activeState = afanty3d.stateViewed;


};

afanty3d.stateManager.prototype = {

	constructor: afanty3d.stateManager,

	startPlaced: function() {

	},

	startModified: function () {

	},

	startViewed: function  () {
		
	},

};

//afanty3d signal manager
afanty3d.signalManager = function () {

		// script

		this.editScript = new SIGNALS.Signal();

		// player

		this.startPlayer = new SIGNALS.Signal();
		this.stopPlayer = new SIGNALS.Signal();

		// actions

		this.playAnimation = new SIGNALS.Signal();
		this.stopAnimation = new SIGNALS.Signal();

		this.showDialog = new SIGNALS.Signal();

		// notifications

		this.editorCleared = new SIGNALS.Signal();

		this.savingStarted = new SIGNALS.Signal();
		this.savingFinished = new SIGNALS.Signal();

		this.themeChanged = new SIGNALS.Signal();

		this.transformModeChanged = new SIGNALS.Signal();
		this.snapChanged = new SIGNALS.Signal();
		this.spaceChanged = new SIGNALS.Signal();
		this.rendererChanged = new SIGNALS.Signal();

		this.sceneGraphChanged = new SIGNALS.Signal();

		this.cameraChanged = new SIGNALS.Signal();

		this.geometryChanged = new SIGNALS.Signal();

		this.objectSelected = new SIGNALS.Signal();
		this.objectFocused = new SIGNALS.Signal();

		this.objectAdded = new SIGNALS.Signal();
		this.objectChanged = new SIGNALS.Signal();
		this.objectRemoved = new SIGNALS.Signal();

		this.helperAdded = new SIGNALS.Signal();
		this.helperRemoved = new SIGNALS.Signal();

		this.materialChanged = new SIGNALS.Signal();

		this.scriptAdded = new SIGNALS.Signal();
		this.scriptChanged = new SIGNALS.Signal();
		this.scriptRemoved = new SIGNALS.Signal();

		this.fogTypeChanged = new SIGNALS.Signal();
		this.fogColorChanged = new SIGNALS.Signal();
		this.fogParametersChanged = new SIGNALS.Signal();
		this.windowResize = new SIGNALS.Signal();

		this.showGridChanged = new SIGNALS.Signal();


};



afanty3d.sceneInit = function(){

};