const containsDuplicate = nums => {
  return nums.length !== new Set([...nums]).size;
};
