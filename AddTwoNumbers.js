// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
//Add the two numbers and return the sum as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.


//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let l1 = [2,4,3];
let l2 = [5,6,4];

let resultArray = []
let reminder = 0;
let total;
var addTwoNumbers = function(l1, l2) {

    for(var i =0 ; i< l1.length ; i++){
       if(reminder > 0){
         total = l1[i] + l2[i] + parseInt(reminder);
       } else {
        total = l1[i] + l2[i]
       }

      if(total % 10 === 0 || total === 0){
        resultArray.push(0)
        reminder = total.toString()[0]
      } else if(total.toString()[1] !== 0 || total !== 0){
        reminder =0;
        resultArray.push(total)
      }

    }
    return resultArray;

};



const output = addTwoNumbers(l1,l2)


console.log(output)