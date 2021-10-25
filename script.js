// ######################################## 1 (1400.07.22) ##########################################
// const printNumber = (input) => {
//
//     if (!input && input !==0){
//         return ''
//     }
//     input = input.toString()
//     let arrInput = input.split('');
//     let result='';
//     arrInput.map(num =>{
//         result += `${num}:`
//         for(let i=0;i<num;i++){
//             result += num;
//         }
//         result +='\n'
//     })
//     return result;
// }
// console.log(printNumber(5136))
// ######################################## 2 (1400.07.22) ##########################################
// function subSearch(str1, str2) {
//     if (typeof str1 !== 'string' || typeof str2 !== 'string')
//         return -1
//     for (let i = 0; i < str1.length - str2.length + 1; i++) {
//         for (let j = 0; j < str2.length; j++) {
//             if (str1[i + j] !== str2[j]) {
//                 break;
//             }
//                 if(j==str2.length-1){
//                     return i;
//                 }
//             }
//         }
//     return -1;
// }
//
// console.log(subSearch('hello world', 'wo'))
// ######################################## or (1400.07.22) ##########################################
// function  search(str1,str2){
//     if(str1.search(str2)){
//         console.log(str1.search(str2))
//     }else{
//         console.log(-1)
//     }
// }
// search('hello world','d')
// ######################################## 3 (1400.07.22) ##########################################
// function square(input) {
//     console.log('*'.repeat(input));
//     for(let i = 1; i < input - 1; i++) {
//         console.log('*' + ' '.repeat(input-2) + '*');
//     }
//     console.log('*'.repeat(input));
// };
// square(6);
// ######################################## 4 (1400.07.22) ##########################################
// function rem(arr1,arr2){
//     if(typeof arr1 === 'string' && typeof arr2 === 'string'){
//         const  str_arr1=arr1.split('')
//         const  str_arr2=arr2.split('')
//         return  str_arr1.filter(item => !str_arr2.includes(item))
//     }else
//     return  arr1.filter(item => !arr2.includes(item))
//
// }
// console.log(rem([1,2,3,4],[2,3]))
// ######################################## 5 (1400.07.22) ##########################################
// function move(arr, index, offset) {
//     if (typeof arr==="string"){
//         arr=arr.split('')
//     }
//     if (offset >= arr.length) {
//         console.log('offset is bigger than length arr')
//
//     } else {
//         arr.splice(offset + index, 0, arr.splice(index, 1)[0]);
//         return arr
//     };
//
// }
//
//
// console.log(move('kkbkk', 2, 2))
//################################################# 6 (1400.07.22) ######################################
const removeAdj = (str) => {
    if(typeof str === Array.isArray(str)){
        str=str.split('')
    }
    let res = ''
    let lastChar = ''
    for (let char of str) {
        // res += lastChar !== char ? char : '';
        if(lastChar !== char){
            res += char
            lastChar=char
        }
    }
    return res
}
console.log(removeAdj([1,1,1,2,2,2,2,5,5,5,8,7]))
// ################################################### 7 (1400.07.22) #########################################
// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('hello welcome'));