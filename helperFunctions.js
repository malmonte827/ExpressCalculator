function convertToNums(numsAsString){
    let convertednums = []

    for(let i = 0; i < numsAsString.length; i++){
        const num = Number(numsAsString[i])

        if (Number.isNaN(num)){
            return new Error(
                `The Value ${numsAsString[i]} is not a valid number`
            )
        }
    convertednums.push(num)
    }
    return convertednums
}

function createFrequancyCounter(){
    return
}

function findMedian(nums){

    nums.sort()

    let middleIndex = Math.floor(nums.length / 2)
    let median;

    if(nums.length % 2 !== 0){
        median = nums[middleIndex]
    } else {
       median = (nums[middleIndex]+nums[middleIndex - 1]) / 2
    }
    return median
}

function findMean(nums){
    let sum = 0
for(let i = 0; i < nums.length; i++){
    sum += nums[i]
}
return sum/nums.length
}

function findMode(nums){
    
}