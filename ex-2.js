// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

// 1. Reassign ค่าตามคุณสมบัติของ John
lastMonthPaidMoreThan4000 = true;       // 4001 มากกว่า 4000
isWeekday = true;                       // วันศุกร์ คือ Weekday
hasBoughtProductFromITCategory = false; // ไม่เคยซื้อหมวด IT
hasAttendedDiscountEvent = true;        // เคยเข้าร่วมกิจกรรมแล้ว
isPlatinum = false;                     // เป็น Gold (ไม่ใช่ Platinum)

// 2. Reassign ค่า hasPromotion
// เงื่อนไขคือ (กรณีที่ 1 เป็นจริง) หรือ (กรณีที่ 2 เป็นจริง)
// กรณีที่ 1: ต้องครบทุกข้อ (ยอดถึง && วันธรรมดา && ไม่ซื้อไอที && ไม่เคยร่วมกิจกรรม)
// กรณีที่ 2: เป็น Platinum

hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum;

console.log(hasPromotion); // ผลลัพธ์จะเป็น false เพราะ John เคยร่วมกิจกรรมลดราคามาแล้ว และไม่ได้เป็น Platinum