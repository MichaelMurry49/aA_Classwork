const Game = require("./game.js");
const Ship = require("./ship.js");



function GameView(game, ctx){
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    window.setInterval(function() {
        this.game.step(this.ctx);
        this.game.draw(this.ctx);        
    }, 20);
}

module.exports = GameView;