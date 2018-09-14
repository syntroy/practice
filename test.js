/**
 * 判断是否为回文数
 * @param {number} n
 * @return {boolean}
 */
let isPalindrome = function(n){
    let str = n.toString();
    let reverses = str.split('').reverse().join('');
    console.log(str, reverses)
    if(str === reverses){
        return true;
    }
    return false;
}

/**
 * 删除数组中重复元素
 * @param {number} a
 * @return {number} length
 */

 let removeDuplicate  = function(a){
    let res = [];
    for(const i of a){
        if(!res.includes(i)){
            res.push(i);
        }
    }

    return res.length;
 }