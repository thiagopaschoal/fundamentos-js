var twoSum = function(nums, target) {
    for (let i in nums) {
        const currentPosition = parseInt(i);
        for (let j = currentPosition; j <= nums.length; j++) {
            const nextPosition = j + 1
            const sum = nums[currentPosition] + nums[nextPosition]
            if (sum == target) {
                return [currentPosition, nextPosition]
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,2,4],5));
console.log(twoSum([8,8,9,7,9], 16));
console.log(twoSum([3,2,3], 6));
console.log(twoSum([2,5,5,11], 10));
