class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sdata = {}
        tdata = {}
        for i in s:
            sdata[i] = sdata.get(i, 0) + 1
        
        for j in t:
            tdata[j] = tdata.get(j,0) + 1
        
        return sdata == tdata