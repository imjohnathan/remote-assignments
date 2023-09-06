// Assignment 1: Function and Array
// Complete the function below to find the max number of the passing array of numbers.
// Reminder: you can't use built-in Math.max() or sort() to complete this assignment.
function max(numbers) {
    return numbers.
        reduce(
            (lastNumber, currentNumber) =>
                lastNumber > currentNumber ? lastNumber : currentNumber  // if lastNumber larger than currentNumber return lastNumber, if not return currentNumber
            , numbers[0] //reduce init number
        )

}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7



// Assignment 2: Function and Object
// Complete the function below to calculate the result of the passing object.
function calculate(args) {
    const argsTemplate = { n1: 0, n2: 0, op: '' }; //give args a template
    const mergeArgs = { ...argsTemplate, ...args }; //be sure all the args keyname are exsit
    const n1 = Number(mergeArgs?.n1);
    const n2 = Number(mergeArgs?.n2); //prevent n1,n2 is not a number
    if (mergeArgs?.op && mergeArgs?.op === '+') {
        return n1 + n2;
    } else if (mergeArgs?.op && mergeArgs?.op === '-') {
        return n1 - n2;
    } else {
        return 'Not supported';
    }
}
console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'




// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the total price of all products after applying a discount.
function calculate_(data) {
    const discount = Number(data?.discount) || 1; // give discount a default value if doesn't exist
    const products = data?.products;

    if (!products.length) return; //if product list is empty, stop the function

    const totalAfterDiscount = products.
        reduce(
            (last, current) =>
                last + (current?.price * discount) //last number plus current number and apply the discount
            , 0 //reduce init number
        );

    return totalAfterDiscount

}
const discountedPrice = calculate_({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});
console.log(discountedPrice) // show the total price of all products after applying a discount




// Assignment 5: Algorithm (Advanced Optional)
// Given an array of integers, return index of the two numbers such that they add up to a
// specific target. You may assume that each input would have exactly one solution, and you
// may not use the same element twice.
function twoSum(nums, target) {
    let finalIndex = []; //store the final index

    for (let i = 0; i < nums.length; i++) {
        let innerBreak = false; //set a variable to store a stutas if inner loop find the target
        const copyNums = [...nums] //copy the nums due to the splice() will modify the original array
        copyNums.splice(i, 1) //delete the number that current loop is, since the number can't use twice

        for (let x = 0; x < copyNums.length; x++) { //loop again from the array that delete the current number
            if (nums[i] + copyNums[x] === target) { //if the current number equal target number break the loop
                innerBreak = true
                finalIndex = [i, nums.indexOf(copyNums[x])] //output the final result
                break;
            }

        }
        if (innerBreak) break //break the out loop
    }

    return finalIndex
}

console.log(twoSum([2, 7, 11, 15], 13))
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0] + nums[1] is 9
*/