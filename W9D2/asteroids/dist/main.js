/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\n\nfunction Asteroid(pos, game, color = \"red\", radius = 15){\n    let vel = Utils.randomVec(15);\n    MovingObject.call(\n        this,\n        {\n            pos: pos,\n            vel: vel,\n            radius: radius,\n            color: color,\n            game: game\n        });\n\n}\n\nUtils.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nfunction Game(){\n    this.dimX = 800;\n    this.dimY = 800;\n    this.numAsteroids = 10;\n    this.addAsteroids();\n}\n\n\nGame.prototype.randomPosition = function(){\n    let posX = Math.floor(Math.random() * this.dimX);\n    let posY = Math.floor(Math.random() * this.dimY);\n    return [posX, posY];\n}\n\nGame.prototype.addAsteroids = function(){\n    let asteroids = [];\n    for(let i = 0; i < this.numAsteroids; i++){\n        asteroids.push(new Asteroid(this.randomPosition(), this));\n    }\n    this.asteroids =  asteroids;\n}\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, 800, 800);\n    this.asteroids.forEach(\n        (x) => {\n            console.log(\"drawing next asteroid at pos: \", x);\n            x.draw(ctx);\n        }\n    )\n}\n\nGame.prototype.moveObjects = function(ctx){\n    this.asteroids.forEach(\n        (x) => {\n            x.move(ctx);\n        }\n    )\n}\n\nGame.prototype.wrap = function(pos){\n    return [pos[0]%this.dimX, pos[1]%this.dimY];\n}\n\nGame.prototype.checkCollisions = function(){\n    for(let i = 0; i < this.asteroids.length; i++){\n        for(let j = i+1; j < this.asteroids.length; j++ ){\n            if(this.asteroids[i].isCollidedWith(this.asteroids[j])){\n                alert(\"COLLISION\");\n                this.remove(j);\n                this.remove(i);\n            }\n        }\n    }\n}\n\nGame.prototype.step = function(ctx){\n    this.moveObjects(ctx);\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(i){\n    this.asteroids.splice(i, 1);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\n\nfunction GameView(game, ctx){\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n    window.setInterval(function() {\n        this.game.step(this.ctx);\n        this.game.draw(this.ctx);        \n    }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n\nlet pos = [\n    [10, 10],\n    [100, 100],\n    [250, 250]\n];\n\n\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    let canvas = document.getElementById('game-canvas');\n    let ctx = canvas.getContext('2d');\n    window.mo = mo;\n    window.game = new Game();\n    // window.ast = new Asteroid([250,250], game );\n    window.gameview = new GameView(window.game, ctx);\n    window.gameview.start();\n    // window.game.addAsteroids();\n\n    // mo.draw(ctx); // can now be tested in window due to window.ctx = ctx\n    window.ctx = ctx; // makes the window context the current context\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n    this.game = obj.game;\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.fillStyle = this.color;\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(ctx){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    let temp = this.game.wrap(this.pos);\n    this.pos[0] = temp[0];\n    this.pos[1] = temp[1];\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    return (this.radius + otherObject.radius > this.distance(this, otherObject)) ? true : false;\n}\n\nMovingObject.prototype.distance = function(obj1, obj2){\n    return Math.sqrt((obj1.pos[0] - obj2.pos[0]) ** 2 + (obj1.pos[1] - obj2.pos[1]) ** 2)\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject= __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Ship(){\n    \n}\n\nmodule.exports = Ship; \n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass){\n        function Surrogate(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });