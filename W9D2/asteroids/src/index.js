const MovingObject = require("./moving_object.js");
const Utils = require('./utils.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');


const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

let pos = [
    [10, 10],
    [100, 100],
    [250, 250]
];



window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(){
    let canvas = document.getElementById('game-canvas');
    let ctx = canvas.getContext('2d');
    window.mo = mo;
    window.game = new Game();
    // window.ast = new Asteroid([250,250], game );
    window.gameview = new GameView(window.game, ctx);
    window.gameview.start();
    // window.game.addAsteroids();

    // mo.draw(ctx); // can now be tested in window due to window.ctx = ctx
    window.ctx = ctx; // makes the window context the current context
});