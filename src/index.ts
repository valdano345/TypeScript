// let namaSaya: string = "valdano Esnaidar";
// let username: number = 123;
// let isDead: boolean = false;

// // Array Biasa
// let pacarSaya: string[];
// pacarSaya = ["asdasd", "asdasd"];

// // Tupple Array
// let selingkuhanSaya: [string, number, boolean];
// selingkuhanSaya = ["sere", 24, true];

// // Tipe data custom
// type TemanType = {
//   nama: string;
//   isKampret: boolean;
//   hutang: number;
// };

// let temanKita: TemanType;

// temanKita = {
//   nama: "yeski",
//   isKampret: true,
//   hutang: 50000,
// };

// console.log({ temanKita });

// console.log({ namaSaya });
// console.log({ username });
// console.log({ isDead });
// console.log({ pacarSaya });
// console.log({ selingkuhanSaya });

// FUNCTION

// const add = (x: number, y: number): string => {
//   return `${x} ditambah ${y} hasilnya: ${x + y};`;
// };

// console.log(add(10, 20));

// type Wanita = string;
// type Pria = boolean;

// type Gender = Wanita | Pria;

// let sayaManusia: Gender;
// sayaManusia = "Valdano Esniadr";

// let agnes: Wanita;

// agnes = "agnes mo";
// console.log(agnes);

interface IProsessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSize: number;
}

interface Intel extends IProsessor {
  turboBoost: boolean;
}

interface AMD extends IProsessor {
  precisionBoost: boolean;
}

const createIntel = (processor: Intel): void => {
  console.log(`
    termikasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut:

    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSize}
    turbo boost enable?: ${processor.turboBoost}
  `);
};

const createAMD = (processor: AMD): void => {
  console.log(`
      termikasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut:
  
      nama base model: ${processor.baseModel}
      nama model: ${processor.modelName}
      kecepatan clock: ${processor.clockSize}
      turbo boost enable?: ${processor.precisionBoost}
    `);
};

const intelCoreI5: Intel = {
  brand: "Intel",
  baseModel: "core i5",
  modelName: "i5-11990",
  clockSize: 4,
  turboBoost: false,
};

const AMDR: AMD = {
  brand: "AMD",
  baseModel: "Ryzen 5",
  modelName: "Ryzen 5 4500G",
  clockSize: 4,
  precisionBoost: true,
};

createIntel(intelCoreI5);
createAMD(AMDR);
