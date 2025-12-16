// Exercise #3: Debugging (Boolean & Logical Operations)

// Start coding here
// แก้ไขจาก const เป็น let เพื่อให้ reassign ค่าใหม่ได้
let numberA = 100;
let numberB = "20";

numberA = 10;
// แปลง numberB จาก String "20" เป็น Number 20
numberB = Number(numberB);

// ผลลัพธ์ใน Console จะเป็น Sum: 30
console.log(`Sum: ${numberA + numberB}`);