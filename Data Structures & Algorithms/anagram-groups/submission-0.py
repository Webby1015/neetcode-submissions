class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        data = {}
        for i in strs:
            key = "".join(sorted(i))
            if key not in data:
                data[key] = []
            data[key].append(i)

        return list(data.values())
