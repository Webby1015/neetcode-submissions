class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        data = {}
        for i in nums:
            data[i]=0
        for i in nums:
            data[i]+=1
            
        for i in data:
            if data[i]>1:
                return True
        return False

        