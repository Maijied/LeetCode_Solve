class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        length = 0
        count = 0
        for i in nums:
            if i == 0:
                length += 1
                count += length
            else:
                length = 0
        return count
# Beats 100% in leetcode               