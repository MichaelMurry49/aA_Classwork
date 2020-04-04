const readline = require('readline');

reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if(numsLeft > 0){
        reader.question('Type a number: ', (answer) => {
            answer = parseInt(answer);
            // console.log(answer);
            sum += answer;
            numsLeft -= 1;
            console.log(sum);
            addNumbers(sum, numsLeft, completionCallback);
        })
    } else {
        completionCallback(sum);
        reader.close();
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));