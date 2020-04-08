const Utils = require('./utils.js');
const MovingObject = require('./moving_object.js');



function Asteroid(pos, game, color = "red", radius = 15){
    let vel = Utils.randomVec(15);
    MovingObject.call(
        this,
        {
            pos: pos,
            vel: vel,
            radius: radius,
            color: color,
            game: game
        });

}

Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;