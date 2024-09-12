// const s="abcd"
// const t="abcde"
// sa = s.split("")
// ta = t.split("")
// console.log(sa)
// console.log(ta)

// let i = 0
// let j = 0
// while (i<sa.length && j<ta.length){
//     if (sa[i] !== ta[j]){
//         i += 1
//     }
// }

// // FIND THE DIFFERENT------- SOLUTION 1: MAP --> Time complexity: O(n) --> Space: 1 hash map với n phần tử
// // 1. Đếm số lần xuất hiện của mỗi ký tự trong chuỗi s và đưa vào map với 
// // giá key-value: a-1
// // 2. Đối với chuỗi t thì 

// for (let i=0; i<s.length; i++)


//     FIRST-UNIQUE-CHAR-IN-A-STRING: Sử dụng set hoặc map
// 1. Duyệt lần 1: Sử dụng map để đếm số lần xuất hiện
// 2. Duyệt lần 2: Kiểm tra xem giá trị có unique không

const s="leetcodelove";
const charCount = new Map();
    
// Count the occurrences of each character in s
for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
}

console.log(charCount)
for (const char of s) {
    if (charCount.get(char)==1){
        return 
    }
}


// // MAKE THE STRING GREAT
// Phương pháp: sử dụng stack
// 1. Duyệt qua string bỏ vào stack
// 2. So sánh giá trị 
// Lưu ý: Validate là stack/queue có rỗng hay không, nếu rỗng thì add dô