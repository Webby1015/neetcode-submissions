/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let curr = head;
        let prev = null;
        let new_head = null
        while(curr){
            let next = curr.next;
            curr.next = prev
            prev = curr
            new_head = curr
            curr = next
        }
        return new_head

    }
}
