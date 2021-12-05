function condense(nums) {
  while (nums.length > 1) {
    let condesed = [];
    for (let i = 0; i < nums.length - 1; i++) {
      condesed[i] = nums[i] + nums[i + 1];
    }
    nums = condesed;
    i = 0;
  }
  console.log(Number(nums));
}
condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);
