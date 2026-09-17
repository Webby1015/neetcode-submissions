class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        data = {}
        for i in nums:
            data[i] = data.get(i, 0) + 1
        for i in data:
            if data[i]>1:
                return True
        return False

        