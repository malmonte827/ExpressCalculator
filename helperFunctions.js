function convertToNums(numsAsString) {
    let convertednums = [];

    for (let i = 0; i < numsAsString.length; i++) {
        const num = Number(numsAsString[i]);

        if (Number.isNaN(num)) {
            return new Error(
                `The Value ${numsAsString[i]} is not a valid number`
            );
        }
        convertednums.push(num);
    }
    return convertednums;
}

function createFrequancyCounter(arr) {
    let count = {};
    for (let num of arr) {
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }
    return count;
}

function findMedian(nums) {
    nums.sort();

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 !== 0) {
        median = nums[middleIndex];
    } else {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    }
    return median;
}

function findMean(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}

function findMode(arr) {
    let freqCounter = createFrequancyCounter(arr);

    let count = 0;
    let mode;

    for (let key in freqCounter){
        if (freqCounter[key]>count){
            mode = key
            count = freqCounter[key]
        }
    }
    return mode
}

module.exports = {
    findMode,
    findMean,
    findMedian,
    convertToNums,
    createFrequancyCounter,
};
