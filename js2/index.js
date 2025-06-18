const promptsync = require("prompt-sync")();

// const yin = Number(promptsync("BE: "));
// console.log("[Anon] พ.ศ", yin, "ตรงกับ ค.ศ.", yin - 543);

// const yin2 = Number(promptsync("CE: "));
// console.log("[Anon] พ.ศ", yin2 - -543, "ตรงกับ ค.ศ.", yin2);

// console.log("คำนวนพื้นที่สี่เหลี่ยมจัตุรัส");
// const daan = Number(promptsync("ด้าน: "));
// console.log("[Anon] พื้นที่สี่เหลี่ยมจัตุรัสคือ:", daan ** 2);

// console.log("คำนวนพื้นที่สี่เหลี่ยมผืนผ้า");
// const gwang = Number(promptsync("กว้าง: "));
// const yao = Number(promptsync("ยาว: "));
// console.log("[Anon] พื้นที่สี่เหลี่ยมผืนผ้าคือ:", gwang * yao);

console.log("คำนวนพื้นที่วงกลม");
const ratsme = Number(promptsync("รัศมี: "));
console.log("[Anon] พื้นที่วงกลมคือ:", Math.PI * ratsme ** 2);