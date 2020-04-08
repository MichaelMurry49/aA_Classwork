function MovingObject(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
}

MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fill();
}

MovingObject.prototype.move = function(ctx){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    let temp = this.game.wrap(this.pos);
    this.pos[0] = temp[0];
    this.pos[1] = temp[1];
}

MovingObject.prototype.isCollidedWith = function(otherObject){
    return (this.radius + otherObject.radius > this.distance(this, otherObject)) ? true : false;
}

MovingObject.prototype.distance = function(obj1, obj2){
    return Math.sqrt((obj1.pos[0] - obj2.pos[0]) ** 2 + (obj1.pos[1] - obj2.pos[1]) ** 2)
}

module.exports = MovingObject;