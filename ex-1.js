let isOver18;
let hasCriminalBlacklist;

let isAllow;

isOver18 = 18;
hasCriminalBlacklist = false;

isAllow = (isOver18 >= 18) && !hasCriminalBlacklist;


console.log(isAllow);
