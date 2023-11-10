const productData = [
      {
        sku: 1720000,
        name: "Lunar I",
        specs: {
            CPU : "Intel Core i5-13600K",
            RAM : "16 GB DDR5-4800",
            GPU : "RTX 4060",
            STORAGE : "512 GB SSD",
            PSU : "650 Watt",
        },
            salePrice: "$1199",
      },
      {
        sku: 1720001,
        name: "Lunar II",
        specs: {
            CPU : "Intel Core i7-13700K",
            RAM : "32 GB DDR5-4800",
            GPU : "RTX 4060 Ti",
            STORAGE : "1 TB SSD",
            PSU : "700 Watt",
        },
            salePrice : "$1599",
        },
        {
            sku: 1720003,
            name: "Lunar V",
            specs: {
                CPU : "Intel Core i7-14700K",
                RAM : "32 GB DDR5-5600",
                GPU : "RTX 4070 Ti",
                STORAGE : "1 TB SSD",
                PSU : "750 Watt",
            },
            salePrice : "$2099",
          },
          {
            sku: 1720004,
            name: "Lunar X",
            specs: {
                CPU : "Intel Core i9-14900K",
                RAM : "32 GB DDR5-5600",
                GPU : "RTX 4090",
                STORAGE : "2 TB SSD",
                PSU : "1000 Watt",
            },
            salePrice : "$3299",
      }];
export const names = [];
export const specs = [];
export const salePrice = [];
const sortedArr = productData.sort((a, b) => a.sku - b.sku);
sortedArr.forEach((el)=>names.push(el.name));
sortedArr.forEach((el)=>specs.push(el.specs));
sortedArr.forEach((el)=>salePrice.push(el.salePrice));