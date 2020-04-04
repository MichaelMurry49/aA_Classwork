const readline = require('readline');

reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
    let inp = ''
    // console.log(callback)
    // while(inp != 'yes' && inp != 'no'){
        message = 'is ' + el1 + ' > ' + el2 + ' (yes or no - lowercase): ';
        reader.question(message, (answer) => {
            if(answer !== 'yes' && answer !== 'no') throw 'invalid input';
            inp = answer;
            if (inp === 'yes') {
                // console.log('it is true')
                callback(true);
                // reader.close();
            } else {
                callback(false);
                // reader.close();
            }
        })
        // while(inp === ''){

        // }
    // }

}

// askIfGreaterThan(1,5, function(bool){
//     console.log(`It is ${bool}`);
// })

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    if(i === arr.length-1){
         outerBubbleSortLoop(madeAnySwaps)
    }
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    else {
        askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
            if(isGreaterThan){
                [arr[i], arr[i+1]] = [arr[i+1],arr[i]]
                madeAnySwaps = true;
            }
            // console.log(madeAnySwaps)
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        })
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        }
        else{
            sortCompletionCallback(arr)
        }

    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true)
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    console.log(arr)
    reader.close();
});
