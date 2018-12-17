function insertionSort(nums: number[]): number[] {
  let len = nums.length - 1;
  for (let i = 0; i < len; i++) {
    let j = i;
    while (nums[j] > nums[j + 1]) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      j--;
    }
  }

  return nums;
}

export default insertionSort;
