// Brand data
export const brands = [
  { id: "apple", name: "Apple", logo: "🍎", color: "#555555" },
  { id: "samsung", name: "Samsung", logo: "📱", color: "#1428A0" },
  { id: "xiaomi", name: "Xiaomi", logo: "🔶", color: "#FF6700" },
  { id: "oneplus", name: "OnePlus", logo: "🔴", color: "#EB0028" },
  { id: "realme", name: "Realme", logo: "🟡", color: "#F7C600" },
  { id: "vivo", name: "Vivo", logo: "🔵", color: "#415FFF" },
  { id: "oppo", name: "OPPO", logo: "🟢", color: "#1BA261" },
  { id: "motorola", name: "Motorola", logo: "Ⓜ️", color: "#5C2D91" },
  { id: "google", name: "Google", logo: "🔷", color: "#4285F4" },
  { id: "nothing", name: "Nothing", logo: "⚪", color: "#000000" },
  { id: "iqoo", name: "iQOO", logo: "🟠", color: "#FF5722" },
  { id: "tecno", name: "Tecno", logo: "🔺", color: "#00BCD4" },
];

// All phones data
export const phones = [
  // Apple
  { id: "iphone-16-pro-max", name: "iPhone 16 Pro Max", brand: "apple", price: "₹1,44,900", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCkia4u-LeYsaB0b9-IalEokN0Ds5arn6noc9mrV4yrahXbZdKdNgjvlXy9MfwfaLluR6fTudyoPc3EMSwX0Kh-Dv5QAsH3EShrAjjZ8dlL6AE_bSoja8A--Z3NDn6Sr_TmahB3ms&usqp=CAc", display: "6.9\" Super Retina XDR OLED", processor: "A18 Pro", ram: "8 GB", storage: "256 GB / 512 GB / 1 TB", battery: "4685 mAh", camera: "48 MP + 12 MP + 48 MP" },
  { id: "iphone-16-pro", name: "iPhone 16 Pro", brand: "apple", price: "₹1,19,900", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcD1KkgG1YiqnUGc9Rj8C2zQrbxP5fAJpTa1wrpdFYaWksZDr7KhMSDkZGWBvPUMYo0t_LWSVaZiq6cVCwa-t7EQgUno1USWBGZnrLlkwKxgP-kCxIU859bdPudz7gM9wg5FHML6E&usqp=CAc", display: "6.3\" Super Retina XDR OLED", processor: "A18 Pro", ram: "8 GB", storage: "128 GB / 256 GB / 512 GB / 1 TB", battery: "4274 mAh", camera: "48 MP + 12 MP + 48 MP" },
  { id: "iphone-16", name: "iPhone 16", brand: "apple", price: "₹79,900", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLKmGR0V11bpJupb5re8KXRIz8oBDqgIGVOqQd0JPhPxamYiJoZ8tMaQcSoaKHKqTACGxrOJ0k7npMn7vLA8NgcYHgGmYuhsXnNhJILppSWCPXXXxo1QDiWaOSPw&usqp=CAc", display: "6.1\" Super Retina XDR OLED", processor: "A18", ram: "8 GB", storage: "128 GB / 256 GB / 512 GB", battery: "3561 mAh", camera: "48 MP + 12 MP" },
  { id: "iphone-15", name: "iPhone 15", brand: "apple", price: "₹69,900", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxDh-nO1f5NXh4ZAYwWx-v27lQZXXvcsRY-rAs-d9l5FV400JoO-R3TTFWM_Ub22UJHCNwqu4m4raFZ6IYDumXN90pc9R1Cs8J8IDPoKs&usqp=CAc", display: "6.1\" Super Retina XDR OLED", processor: "A16 Bionic", ram: "6 GB", storage: "128 GB / 256 GB / 512 GB", battery: "3349 mAh", camera: "48 MP + 12 MP" },
  { id: "iphone-15-pro", name: "iPhone 15 Pro", brand: "apple", price: "₹1,34,900", image: " https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzOSq-47QiskOhdOgtQG4p99zr2vDSQuKLJTPX_FJEaUmP8hSxtvjkHTgN_7_xZegerx8ykKWp_iL1sgJAm8mXZ-dxDuwCBY2phqKhmgfuNS2rLzcmG-CZbbeHCkuS2-WT8fcHIw&usqp=CAc", display: "6.1\" Super Retina XDR OLED", processor: "A17 Pro", ram: "8 GB", storage: "128 GB / 256 GB / 512 GB / 1 TB", battery: "3274 mAh", camera: "48 MP + 12 MP + 12 MP" },

  // Samsung
  { id: "samsung-s24-ultra", name: "Galaxy S24 Ultra", brand: "samsung", price: "₹1,29,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSq7eUzfE9_oWkDuMA52OWk8yOF9D-t_JGhQNADP7eQugMk-zohZoEB7N3ijPiSPeURfJ9c6_1Y_20Uw42M8XyJjyaZ0uujFtQBhNAlYeOZetUm_urKi54A&usqp=CAc", display: "6.8\" Dynamic AMOLED 2X", processor: "Snapdragon 8 Gen 3", ram: "12 GB", storage: "256 GB / 512 GB / 1 TB", battery: "5000 mAh", camera: "200 MP + 12 MP + 50 MP + 10 MP" },
  { id: "samsung-s24-plus", name: "Galaxy S24+", brand: "samsung", price: "₹99,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBAiMCVrFTHCQfDD6BbdcLFVz54MQLLxKu14E94qQUvBbyYWClrPkKx2rN-YRm2_6tKmQxzhSj4u3oh6Kac_eKym-tdc8eHcKd9U4ij9I&usqp=CAc", display: "6.7\" Dynamic AMOLED 2X", processor: "Exynos 2400", ram: "12 GB", storage: "256 GB / 512 GB", battery: "4900 mAh", camera: "50 MP + 12 MP + 10 MP" },
  { id: "samsung-s24", name: "Galaxy S24", brand: "samsung", price: "₹74,999", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR73W8gABck70dX7McYgBGE6xb5Kg93x9OV55OuGbby8syZ7N942uBUCCjZ9XnBFI3rSLr5WEC-6ErdcyuDnmzR2QCyzWxVyLQ_bXg19V5xhAMcTFTzCiWD6ZqK4qljXFQMD_AYzAY&usqp=CAc", display: "6.2\" Dynamic AMOLED 2X", processor: "Exynos 2400", ram: "8 GB", storage: "128 GB / 256 GB", battery: "4000 mAh", camera: "50 MP + 12 MP + 10 MP" },
  { id: "samsung-a55", name: "Galaxy A55 5G", brand: "samsung", price: "₹39,999", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR73W8gABck70dX7McYgBGE6xb5Kg93x9OV55OuGbby8syZ7N942uBUCCjZ9XnBFI3rSLr5WEC-6ErdcyuDnmzR2QCyzWxVyLQ_bXg19V5xhAMcTFTzCiWD6ZqK4qljXFQMD_AYzAY&usqp=CAc", display: "6.6\" Super AMOLED", processor: "Exynos 1480", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 12 MP + 5 MP" },
  { id: "samsung-m55", name: "Galaxy M55 5G", brand: "samsung", price: "₹26,999", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR73W8gABck70dX7McYgBGE6xb5Kg93x9OV55OuGbby8syZ7N942uBUCCjZ9XnBFI3rSLr5WEC-6ErdcyuDnmzR2QCyzWxVyLQ_bXg19V5xhAMcTFTzCiWD6ZqK4qljXFQMD_AYzAY&usqp=CAc", display: "6.7\" Super AMOLED", processor: "Snapdragon 7 Gen 1", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 8 MP + 2 MP" },
  { id: "samsung-a15", name: "Galaxy A15 5G", brand: "samsung", price: "₹13,999", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR73W8gABck70dX7McYgBGE6xb5Kg93x9OV55OuGbby8syZ7N942uBUCCjZ9XnBFI3rSLr5WEC-6ErdcyuDnmzR2QCyzWxVyLQ_bXg19V5xhAMcTFTzCiWD6ZqK4qljXFQMD_AYzAY&usqp=CAc", display: "6.5\" Super AMOLED", processor: "Dimensity 6100+", ram: "4 GB / 6 GB / 8 GB", storage: "128 GB", battery: "5000 mAh", camera: "50 MP + 5 MP + 2 MP" },

  // Xiaomi
  { id: "xiaomi-14-ultra", name: "Xiaomi 14 Ultra", brand: "xiaomi", price: "₹99,999", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuVpopHegOJQDwxQkWSOmpo-KgJ90fvwLMNNMwGMjwbrv8bUUDzGUPp6Xmwz2RqGMkwy4cyl892RanpmyesV0pXQjuI02NX4RUNfqucr56qSm5H0Mco1ehl6TA4Ne0aNst60QKgkzR_Q&usqp=CAc", display: "6.73\" LTPO AMOLED", processor: "Snapdragon 8 Gen 3", ram: "16 GB", storage: "512 GB", battery: "5300 mAh", camera: "50 MP + 50 MP + 50 MP + 50 MP" },
  { id: "xiaomi-14", name: "Xiaomi 14", brand: "xiaomi", price: "₹69,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoI2gxUa2oNng6pOcSZjzP-12VBRK-OM4FSq2hpBVf_wM244TeRPE-pK78hMTROinNl7nBC6_BYXEbSC2bvXVsYH3FBH_XJm-yH__JM9g_2HCp876DU0iTc6mikHM6&usqp=CAc", display: "6.36\" LTPO AMOLED", processor: "Snapdragon 8 Gen 3", ram: "12 GB", storage: "256 GB / 512 GB", battery: "4610 mAh", camera: "50 MP + 50 MP + 50 MP" },
  { id: "redmi-note-13-pro", name: "Redmi Note 13 Pro+ 5G", brand: "xiaomi", price: "₹31,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoI2gxUa2oNng6pOcSZjzP-12VBRK-OM4FSq2hpBVf_wM244TeRPE-pK78hMTROinNl7nBC6_BYXEbSC2bvXVsYH3FBH_XJm-yH__JM9g_2HCp876DU0iTc6mikHM6&usqp=CAc", display: "6.67\" AMOLED", processor: "Dimensity 7200 Ultra", ram: "8 GB / 12 GB", storage: "256 GB / 512 GB", battery: "5000 mAh", camera: "200 MP + 8 MP + 2 MP" },
  { id: "poco-x6-pro", name: "POCO X6 Pro 5G", brand: "xiaomi", price: "₹24,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiftHooqtWaWUcx6RUcPQSzSDPpSffHVyhBBETk5QDlDgAN0_XeOKImFmVow55h4AQOIPzRg1lC8aB-diCiugFkM7Dvm51t1E_cXfWPZHOMdFYQr1wB0PvegrVE3_iSRJMDfQQFuk&usqp=CAc", display: "6.67\" AMOLED", processor: "Dimensity 8300 Ultra", ram: "8 GB / 12 GB", storage: "256 GB / 512 GB", battery: "5000 mAh", camera: "64 MP + 8 MP + 2 MP" },
  { id: "redmi-13c", name: "Redmi 13C 5G", brand: "xiaomi", price: "₹11,999", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLL5DyZaawbva3eATGj-9v5ozNxaS52LN35cumkUSzjjVLk__S8TlMNFR_CxXYR_0PoZwx6Y5-5vcb4l_E_MhLMub1hdJ-xB6MT85QOk9RJcm8oJNDrwmoIR_FMLWPRWjz1PsCRAA&usqp=CAc", display: "6.74\" IPS LCD", processor: "Dimensity 6100+", ram: "4 GB / 6 GB / 8 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 2 MP" },

  // OnePlus
  { id: "oneplus-12", name: "OnePlus 12", brand: "oneplus", price: "₹64,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSI4hhwH9AYCSYJo-302xY6U_XQe22yBDtQF7ToUd4ZtS8Ol6QfEQEFdM2AlBBUX7ZMR7nDmflkZzFcdUmvHk-4Z3zJDr4NvADxrRXWIXnGGMO9_rPyeZD6BW7bL687&usqp=CAc", display: "6.82\" LTPO AMOLED", processor: "Snapdragon 8 Gen 3", ram: "12 GB / 16 GB", storage: "256 GB / 512 GB", battery: "5400 mAh", camera: "50 MP + 48 MP + 64 MP" },
  { id: "oneplus-12r", name: "OnePlus 12R", brand: "oneplus", price: "₹39,999", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRi4cyHUSmay26THblOqHKQIhWbkbdrYcp-VccrEbprwfINSA4yAOsa7X12CyW-4C4BCIQ9wyDNxrVUfRFJ5_EXpKOme59xeL9nrLzPN0J3jU1ta5zUH2T2u0xeid2UsIz_wWHJfQ&usqp=CAc", display: "6.78\" LTPO AMOLED", processor: "Snapdragon 8 Gen 2", ram: "8 GB / 16 GB", storage: "128 GB / 256 GB", battery: "5500 mAh", camera: "50 MP + 8 MP + 2 MP" },
  { id: "oneplus-nord-ce4", name: "OnePlus Nord CE 4", brand: "oneplus", price: "₹24,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSI4hhwH9AYCSYJo-302xY6U_XQe22yBDtQF7ToUd4ZtS8Ol6QfEQEFdM2AlBBUX7ZMR7nDmflkZzFcdUmvHk-4Z3zJDr4NvADxrRXWIXnGGMO9_rPyeZD6BW7bL687&usqp=CAc", display: "6.7\" AMOLED", processor: "Snapdragon 7 Gen 3", ram: "8 GB", storage: "128 GB / 256 GB", battery: "5500 mAh", camera: "50 MP + 2 MP" },
  { id: "oneplus-nord-4", name: "OnePlus Nord 4", brand: "oneplus", price: "₹29,999", image: "https://m.media-amazon.com/images/I/41Z3zn7d+JL._SY300_SX300_QL70_FMwebp_.jpg", display: "6.74\" AMOLED", processor: "Snapdragon 7+ Gen 3", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5500 mAh", camera: "50 MP + 8 MP" },

  // Realme
  { id: "realme-gt-6", name: "Realme GT 6", brand: "realme", price: "₹40,999", image: " https://m.media-amazon.com/images/I/41Z3zn7d+JL._SY300_SX300_QL70_FMwebp_.jpg", display: "6.78\" LTPO AMOLED", processor: "Snapdragon 8s Gen 3", ram: "8 GB / 12 GB / 16 GB", storage: "256 GB / 512 GB", battery: "5500 mAh", camera: "50 MP + 8 MP + 2 MP" },
  { id: "realme-12-pro-plus", name: "Realme 12 Pro+ 5G", brand: "realme", price: "₹29,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOEqXahe0qiNx_nxLcfCQoYFAB-elrKySFO8ymxOP0DJGvwMsHqvOm89OOrzG6ZzN_R7W2CYvFcKV-LCW2KR0t6iEErK0osgFFkGNQUxZCDDBg3g4jZTGap_nsYdjZYiLLFz5VBtg&usqp=CAc  ", display: "6.7\" AMOLED", processor: "Snapdragon 7s Gen 2", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 64 MP + 8 MP" },
  { id: "realme-narzo-70-pro", name: "Realme Narzo 70 Pro 5G", brand: "realme", price: "₹19,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOEqXahe0qiNx_nxLcfCQoYFAB-elrKySFO8ymxOP0DJGvwMsHqvOm89OOrzG6ZzN_R7W2CYvFcKV-LCW2KR0t6iEErK0osgFFkGNQUxZCDDBg3g4jZTGap_nsYdjZYiLLFz5VBtg&usqp=CAc  ", display: "6.67\" AMOLED", processor: "Dimensity 7050", ram: "8 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 2 MP" },
  { id: "realme-c67", name: "Realme C67 5G", brand: "realme", price: "₹10,999", image: "https://m.media-amazon.com/images/I/41Z3zn7d+JL._SY300_SX300_QL70_FMwebp_.jpg", display: "6.72\" IPS LCD", processor: "Dimensity 6100+", ram: "4 GB / 6 GB", storage: "128 GB", battery: "5000 mAh", camera: "50 MP + 2 MP" },

  // Vivo
  { id: "vivo-x100-pro", name: "Vivo X100 Pro", brand: "vivo", price: "₹89,999", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOEqXahe0qiNx_nxLcfCQoYFAB-elrKySFO8ymxOP0DJGvwMsHqvOm89OOrzG6ZzN_R7W2CYvFcKV-LCW2KR0t6iEErK0osgFFkGNQUxZCDDBg3g4jZTGap_nsYdjZYiLLFz5VBtg&usqp=CAc ", display: "6.78\" LTPO AMOLED", processor: "Dimensity 9300", ram: "16 GB", storage: "256 GB / 512 GB", battery: "5400 mAh", camera: "50 MP + 50 MP + 50 MP" },
  { id: "vivo-v30-pro", name: "Vivo V30 Pro", brand: "vivo", price: "₹39,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS10y0CySn6ThxQ_sd3vBLiJpc2M6-p98uQ6NXMa5PzTri8gshitYxvNTEmJnMSYsUaEHHHskqKOQWtrHh5QFgEnAfR5vEyOj697QuCZa0-VMZdHpmrezui1oLlfnhE7xMccoRPLLQ&usqp=CAc", display: "6.78\" AMOLED", processor: "Snapdragon 7 Gen 3", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 50 MP + 8 MP" },
  { id: "vivo-t3-5g", name: "Vivo T3 5G", brand: "vivo", price: "₹19,999", image: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1726213254481/zip/img/mobi/kv-bg.png", display: "6.67\" AMOLED", processor: "Dimensity 7200", ram: "8 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 2 MP" },
  { id: "vivo-y28-5g", name: "Vivo Y28 5G", brand: "vivo", price: "₹14,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS10y0CySn6ThxQ_sd3vBLiJpc2M6-p98uQ6NXMa5PzTri8gshitYxvNTEmJnMSYsUaEHHHskqKOQWtrHh5QFgEnAfR5vEyOj697QuCZa0-VMZdHpmrezui1oLlfnhE7xMccoRPLLQ&usqp=CAc", display: "6.56\" IPS LCD", processor: "Dimensity 6020", ram: "4 GB / 6 GB / 8 GB", storage: "128 GB", battery: "5000 mAh", camera: "50 MP + 2 MP" },

  // OPPO
  { id: "oppo-find-x7-ultra", name: "OPPO Find X7 Ultra", brand: "oppo", price: "₹89,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH12wqR0r_Zl4aSpMJ3bQbrozWoTav75Exwg3BCYpJ-yA7uudGj3PySp6HvGqWEX6brHgAqjRUY8NTSsAZ2eIY04IoPWnrzLH7hFHa0vCx0Zi7Ci2DJDuiT_mYkxpG3_49ZlMW73M&usqp=CAc", display: "6.82\" LTPO AMOLED", processor: "Snapdragon 8 Gen 3", ram: "16 GB", storage: "256 GB / 512 GB", battery: "5600 mAh", camera: "50 MP + 50 MP + 50 MP + 50 MP" },
  { id: "oppo-reno-12-pro", name: "OPPO Reno 12 Pro 5G", brand: "oppo", price: "₹36,999", image: "https://cdn1.smartprix.com/rx-i0HCd8WAb-w420-h420/oppo-find-x7-ultra.webp", display: "6.7\" AMOLED", processor: "Dimensity 7300", ram: "12 GB", storage: "256 GB / 512 GB", battery: "5000 mAh", camera: "50 MP + 8 MP + 2 MP" },
  { id: "oppo-a79-5g", name: "OPPO A79 5G", brand: "oppo", price: "₹18,999", image: "https://cdn1.smartprix.com/rx-ik3vhMXpY-w420-h420/oppo-find-x7-ultra.webp", display: "6.72\" IPS LCD", processor: "Dimensity 6020", ram: "8 GB", storage: "128 GB", battery: "5000 mAh", camera: "50 MP + 2 MP" },
  { id: "oppo-f25-pro", name: "OPPO F25 Pro 5G", brand: "oppo", price: "₹24,999", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH12wqR0r_Zl4aSpMJ3bQbrozWoTav75Exwg3BCYpJ-yA7uudGj3PySp6HvGqWEX6brHgAqjRUY8NTSsAZ2eIY04IoPWnrzLH7hFHa0vCx0Zi7Ci2DJDuiT_mYkxpG3_49ZlMW73M&usqp=CAc", display: "6.7\" AMOLED", processor: "Dimensity 7050", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "64 MP + 8 MP + 2 MP" },

  // Motorola
  { id: "moto-edge-50-ultra", name: "Motorola Edge 50 Ultra", brand: "motorola", price: "₹59,999", image: "https://motorolain.vtexassets.com/arquivos/ids/158091/Motorola-Edge-50-Ultra-Forest-Grey-Product-Image-1.png?v=638529089627030000", display: "6.7\" LTPO pOLED", processor: "Snapdragon 8s Gen 3", ram: "12 GB / 16 GB", storage: "256 GB / 512 GB / 1 TB", battery: "4500 mAh", camera: "50 MP + 50 MP + 64 MP" },
  { id: "moto-g85", name: "Motorola Moto G85 5G", brand: "motorola", price: "₹17,999", image: "https://motorolain.vtexassets.com/arquivos/ids/158089/moto-g85-5g-olive-green-pdp-render-1.png?v=638529089342500000", display: "6.67\" pOLED", processor: "Snapdragon 6s Gen 3", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 8 MP" },
  { id: "moto-g64", name: "Motorola Moto G64 5G", brand: "motorola", price: "₹13,999", image: "https://motorolain.vtexassets.com/arquivos/ids/157945/moto-g64-5g-ice-lilac-pdp-render-1.png?v=638523074001370000", display: "6.5\" IPS LCD", processor: "Dimensity 7025", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "6000 mAh", camera: "50 MP + 2 MP" },

  // Google
  { id: "pixel-8-pro", name: "Google Pixel 8 Pro", brand: "google", price: "₹1,06,999", image: "https://in.static.webuy.com/product_images/Phones/Phones%20Android/SGOOPIX8P256GBUNLB_l.jpg", display: "6.7\" LTPO OLED", processor: "Google Tensor G3", ram: "12 GB", storage: "128 GB / 256 GB / 512 GB / 1 TB", battery: "5050 mAh", camera: "50 MP + 48 MP + 48 MP" },
  { id: "pixel-8a", name: "Google Pixel 8a", brand: "google", price: "₹52,999", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnb9VZ5fzS2A343K4Kc9WmhrRqM-SB46BrkROwrL9HYMA2lTjJ5OmCXdi9s-Bp9k0Zj4PBCY81NzGYB8cUD689b7HAlSeXJPU1U7gEL09RERAZ6nxfmQAoZpA7vtUbYuNGSZ9pawk&usqp=CAc", display: "6.1\" OLED", processor: "Google Tensor G3", ram: "8 GB", storage: "128 GB / 256 GB", battery: "4492 mAh", camera: "64 MP + 13 MP" },
  { id: "pixel-7a", name: "Google Pixel 7a", brand: "google", price: "₹43,999", image: "https://in.static.webuy.com/product_images/Phones/Phones%20Android/SGOOPIX8P256GBUNLB_l.jpg", display: "6.1\" OLED", processor: "Google Tensor G2", ram: "8 GB", storage: "128 GB", battery: "4385 mAh", camera: "64 MP + 13 MP" },

  // Nothing
  { id: "nothing-phone-2a", name: "Nothing Phone (2a)", brand: "nothing", price: "₹23,999", image: "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/308987_7_bb0plu.png", display: "6.7\" AMOLED", processor: "Dimensity 7200 Pro", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "5000 mAh", camera: "50 MP + 50 MP" },
  { id: "nothing-phone-2", name: "Nothing Phone (2)", brand: "nothing", price: "₹44,999", image: "https://kirtisales.in/wp-content/uploads/2024/04/NOTHING-PHONE-2A-8-128.jpg", display: "6.7\" LTPO OLED", processor: "Snapdragon 8+ Gen 1", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB / 512 GB", battery: "4700 mAh", camera: "50 MP + 50 MP" },
  { id: "nothing-phone-1", name: "Nothing Phone (1)", brand: "nothing", price: "₹29,999", image: "https://kapaver.com/cdn/shop/files/71f98FmhD8L._SL1500_3a83b384-34ba-4b36-b574-32f2699c557c.jpg?v=1753708169", display: "6.55\" OLED", processor: "Snapdragon 778G+", ram: "8 GB / 12 GB", storage: "128 GB / 256 GB", battery: "4500 mAh", camera: "50 MP + 50 MP" },

 
];

// Helper Functions
export const getPhonesByBrand = (brandId) => phones.filter(phone => phone.brand === brandId);

export const searchPhones = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return phones.filter(phone => 
    phone.name.toLowerCase().includes(q) || 
    phone.brand.toLowerCase().includes(q) ||
    phone.processor.toLowerCase().includes(q)
  );
};

export const getBrand = (brandId) => brands.find(brand => brand.id === brandId);