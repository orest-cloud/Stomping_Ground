(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"StompingGround_logo_animation_HTML5 Canvas_atlas_", frames: [[935,0,51,61],[935,63,40,75],[977,63,35,49],[988,0,18,23],[528,0,405,191],[0,0,526,191]]}
];


// symbols:



(lib.CachedTexturedBitmap_25 = function() {
	this.initialize(ss["StompingGround_logo_animation_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_26 = function() {
	this.initialize(ss["StompingGround_logo_animation_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_27 = function() {
	this.initialize(ss["StompingGround_logo_animation_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["StompingGround_logo_animation_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["StompingGround_logo_animation_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_30 = function() {
	this.initialize(ss["StompingGround_logo_animation_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Stomping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_30();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,263,95.5);


(lib.Ground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_29();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.5,95.5);


(lib.FootIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_28();
	this.instance.parent = this;
	this.instance.setTransform(8.7,26.2,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.7,37.7);


(lib.FootrimRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_26();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4383,0.4383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.6,32.9);


(lib.FootrimLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_25();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,30.5);


(lib.Scene_1_Stomping = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stomping
	this.instance = new lib.Stomping("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153,38.7,1,1,0,0,0,131.5,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:131},49,cjs.Ease.quintOut).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Ground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ground
	this.instance = new lib.Ground("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(384.85,38.7,1,1,0,0,0,101.2,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:405.75},49,cjs.Ease.quintOut).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.FootAnimationRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Foot_total
	this.instance = new lib.FootIcon("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9,18.7,1,1,0,0,0,9,18.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(2));

	// Mask_Rim (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABYCcIgCgjIhUAOQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAABIgBACIgBgVIACgFQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIBUgOIACAjQABAUgBANIAAgJgAAXhKQgWgmgjgNQgbgJgYAQIgDABQAFgXAUgOQAYgQAbAKQAjAMAXAnQAlBAABBeQAAAHgDAEQgDAEgIABIgJABQgEhSgig6g");
	mask.setTransform(9.0065,16.4855);

	// Foot_rim
	this.instance_1 = new lib.FootrimRight("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.5,12.7,1.1408,1.0258,0,0,0,8.9,16.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:8.8,regY:16.5,scaleX:1,scaleY:1,x:8.95,y:16.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.9,37.7);


(lib.FootAnimationLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Foot_Total
	this.instance = new lib.FootIcon("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.9,19.45,0.9999,0.9999,0,-47.8074,132.1926,9.1,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(2));

	// Foot_Rim_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB0CNQgNgPgcgaQgBgCgEAAQAAAAgBAAQgBgBAAAAQgBAAAAABQgBAAAAAAIg3ArIgLgNIBCg0QAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQAEAAABACQAcAaANAPQAPAQgHASQgDgGgFgGgAAIALIgOg5QgOgtgigbQgXgQgbAGQgNAEgIAHQAKgaAcgIQAcgGAWAQQAjAbANAtIAPA6QAJAhAPAVIgVASQgNgUgIgeg");
	mask.setTransform(19.6733,17.8082);

	// Foot_Rim
	this.instance_1 = new lib.FootrimLeft("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.15,14.15,1,1,0,0,0,12.6,15.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:19.65,y:17.75},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0,33.800000000000004,38.4);


(lib.Scene_1_Foot_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Foot_3
	this.instance = new lib.FootAnimationRight("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(279.6,19.75,1,1,-22.5538,0,0,9,18.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Foot_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Foot_2
	this.instance = new lib.FootAnimationLeft("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(277.65,50.5,1,1,0,0,0,19.9,19.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(26));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Foot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Foot_1
	this.instance = new lib.FootAnimationRight("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(289.85,40.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(41));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.StompingGround_logo_animation_HTML5Canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_49 = function() {
		this.___loopingOver___ = true;
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Foot_3_obj_
	this.Foot_3 = new lib.Scene_1_Foot_3();
	this.Foot_3.name = "Foot_3";
	this.Foot_3.parent = this;
	this.Foot_3.depth = 0;
	this.Foot_3.isAttachedToCamera = 0
	this.Foot_3.isAttachedToMask = 0
	this.Foot_3.layerDepth = 0
	this.Foot_3.layerIndex = 0
	this.Foot_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Foot_3).wait(50));

	// Foot_2_obj_
	this.Foot_2 = new lib.Scene_1_Foot_2();
	this.Foot_2.name = "Foot_2";
	this.Foot_2.parent = this;
	this.Foot_2.depth = 0;
	this.Foot_2.isAttachedToCamera = 0
	this.Foot_2.isAttachedToMask = 0
	this.Foot_2.layerDepth = 0
	this.Foot_2.layerIndex = 1
	this.Foot_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Foot_2).wait(50));

	// Foot_1_obj_
	this.Foot_1 = new lib.Scene_1_Foot_1();
	this.Foot_1.name = "Foot_1";
	this.Foot_1.parent = this;
	this.Foot_1.depth = 0;
	this.Foot_1.isAttachedToCamera = 0
	this.Foot_1.isAttachedToMask = 0
	this.Foot_1.layerDepth = 0
	this.Foot_1.layerIndex = 2
	this.Foot_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Foot_1).wait(50));

	// Stomping_obj_
	this.Stomping = new lib.Scene_1_Stomping();
	this.Stomping.name = "Stomping";
	this.Stomping.parent = this;
	this.Stomping.setTransform(153,38.6,1,1,0,0,0,153,38.6);
	this.Stomping.depth = 0;
	this.Stomping.isAttachedToCamera = 0
	this.Stomping.isAttachedToMask = 0
	this.Stomping.layerDepth = 0
	this.Stomping.layerIndex = 3
	this.Stomping.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Stomping).wait(50));

	// Ground_obj_
	this.Ground = new lib.Scene_1_Ground();
	this.Ground.name = "Ground";
	this.Ground.parent = this;
	this.Ground.setTransform(384.9,38.6,1,1,0,0,0,384.9,38.6);
	this.Ground.depth = 0;
	this.Ground.isAttachedToCamera = 0
	this.Ground.isAttachedToMask = 0
	this.Ground.layerDepth = 0
	this.Ground.layerIndex = 4
	this.Ground.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ground).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(252,30.9,255.10000000000002,55.50000000000001);
// library properties:
lib.properties = {
	id: '6081592079DE6944AC2B9DCDC8066303',
	width: 505,
	height: 80,
	fps: 24,
	color: "#999999",
	opacity: 0.00,
	manifest: [
		{src:"images/StompingGround_logo_animation_HTML5 Canvas_atlas_.png", id:"StompingGround_logo_animation_HTML5 Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6081592079DE6944AC2B9DCDC8066303'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;