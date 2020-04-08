const Asteroid = require('./asteroid.js');

function Game(){
    this.dimX = 800;
    this.dimY = 800;
    this.numAsteroids = 10;
    this.addAsteroids();
}


Game.prototype.randomPosition = function(){
    let posX = Math.floor(Math.random() * this.dimX);
    let posY = Math.floor(Math.random() * this.dimY);
    return [posX, posY];
}

Game.prototype.addAsteroids = function(){
    let asteroids = [];
    for(let i = 0; i < this.numAsteroids; i++){
        asteroids.push(new Asteroid(this.randomPosition(), this));
    }
    this.asteroids =  asteroids;
}
Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, 800, 800);
    this.asteroids.forEach(
        (x) => {
            console.log("drawing next asteroid at pos: ", x);
            x.draw(ctx);
        }
    )
}

Game.prototype.moveObjects = function(ctx){
    this.asteroids.forEach(
        (x) => {
            x.move(ctx);
        }
    )
}

Game.prototype.wrap = function(pos){
    return [pos[0]%this.dimX, pos[1]%this.dimY];
}

Game.prototype.checkCollisions = function(){
    for(let i = 0; i < this.asteroids.length; i++){
        for(let j = i+1; j < this.asteroids.length; j++ ){
            if(this.asteroids[i].isCollidedWith(this.asteroids[j])){
                alert("COLLISION");
                this.remove(j);
                this.remove(i);
            }
        }
    }
}

Game.prototype.step = function(ctx){
    this.moveObjects(ctx);
    this.checkCollisions();
}

Game.prototype.remove = function(i){
    this.asteroids.splice(i, 1);
}

module.exports = Game;