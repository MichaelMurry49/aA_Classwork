Array.prototype.uniq = function() {
    let uniqEles = [];
    for( let i = 0; i < this.length; i++){
        
        if (!uniqEles.includes(this[i])) {
            uniqEles.push(this[i]); 
        } 
    }
        
    
    return uniqEles;
}
// let arr = [1,1,2,3,2,4];
// console.log(arr.uniq());

Array.prototype.twoSum = function(){
    let pairs = [];
    for(let i = 0; i < this.length; i++){
        for(let j = i+1; j < this.length; j++){
            if(this[i] + this[j] === 0){
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
}

// let array = [1,2,-1,3,4,-2];
// console.log(array.twoSum());

Array.prototype.transpose = function() {
    let trans = [];
    for(let col = 0; col < this[0].length; col++) {
        let colArray = [];
        for (let row = 0; row < this.length; row++) { 
            colArray.push(this[row][col]);
        }
        trans.push(colArray);
    }
    return trans;
}

let transArray = [[1,3,5],[2,4,6]];
console.log(transArray.transpose());



// Array.prototype.includes = function(num) {return num}

// let arr = new Array
// console.log(arr.includes(7))