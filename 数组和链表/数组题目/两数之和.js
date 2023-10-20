/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @see https://leetcode.cn/problems/two-sum/
 */
const twoSum = function (nums, target) {

    //遍历这个数组，用Map去存储数组中值：索引的关系，在遍历的过程中用目标值-当前遍历的值 = 所需要的寻找的另一个数，看Map中有没有
    // 这个所需数，有则返回Map中的这个值的索引和当前遍历值的索引， 没有就往Map里添加当前的值:索引
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i]
        if (map.has(need)) {
            return [map.get(need), i]
        } else {
            map.set(nums[i], i)
        }
    }
};
