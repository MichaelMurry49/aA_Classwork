Array.prototype.myEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

let arr = [1,2, -5];
arr.myEach( function(num) {
    console.log(num * num);
}
);

