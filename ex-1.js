// Exercise #1: Event Conditions

let isOver18;
let hasCriminalBlacklist;
let isAllow;

// Start coding here

// 1. Reassign ค่าตามคุณสมบัติของ James
// James อายุ 18 ปี (ตามเงื่อนไข "มากกว่า 18" ดังนั้น 18 จึงยังไม่ผ่าน เป็น false)
isOver18 = false; 

// James ไม่เคยมีประวัติอาชญากรรม
hasCriminalBlacklist = false; 

// 2. Reassign ค่า isAllow ตามเงื่อนไข
// เงื่อนไข: อายุมากกว่า 18 และ (!) ต้องไม่มีประวัติอาชญากรรม
isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow); // ผลลัพธ์จะเป็น false