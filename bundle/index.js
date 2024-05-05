"use strict";
// let namaSaya: string = "valdano Esnaidar";
// let username: number = 123;
// let isDead: boolean = false;
const createIntel = (processor) => {
    console.log(`
    termikasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut:

    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSize}
    turbo boost enable?: ${processor.turboBoost}
  `);
};
const createAMD = (processor) => {
    console.log(`
      termikasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut:
  
      nama base model: ${processor.baseModel}
      nama model: ${processor.modelName}
      kecepatan clock: ${processor.clockSize}
      turbo boost enable?: ${processor.precisionBoost}
    `);
};
const intelCoreI5 = {
    brand: "Intel",
    baseModel: "core i5",
    modelName: "i5-11990",
    clockSize: 4,
    turboBoost: false,
};
const AMDR = {
    brand: "AMD",
    baseModel: "Ryzen 5",
    modelName: "Ryzen 5 4500G",
    clockSize: 4,
    precisionBoost: true,
};
createIntel(intelCoreI5);
createAMD(AMDR);
