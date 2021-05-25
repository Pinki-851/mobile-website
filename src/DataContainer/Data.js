import oneplus1 from "../one-plus/one-plus1.png";
import oneplus2 from "../one-plus/one-plus2.png";
import oneplus3 from "../one-plus/one-plus3.png";
import oneplus4 from "../one-plus/one-plus4.png";
import carbonBlackcolor from "../one-plus/carbonBlackcolor.jpg";
import Lakeblue from "../one-plus/Lakeblue.jpg";
import securityImg from "../one-plus/securityImg.png";
import phone from "../autocarouselImage/phone.png";
import chargerImg from "../autocarouselImage/chargerImg.png";
import wrapChargerImg from "../autocarouselImage/wrapChargerImg.png";
import autocarousel1 from "../autocarouselImage/autocarousel1.jpg";
import autocarousel2 from "../autocarouselImage/autocarousel2.jpg";
import autocarousel3 from "../autocarouselImage/autocarousel3.jpg";
import autocarousel4 from "../autocarouselImage/autocarousel4.jpg";

export const Data = [
  {
    id: 1,
    productName: "OnePlus 9R 5G",
    productImage: oneplus1,
    allImage: [oneplus1, oneplus2, oneplus3, oneplus4],
    color: [
      { colorName: "Carbon Black", img: carbonBlackcolor },
      { colorName: "Lake Blue", img: Lakeblue },
    ],
    capacity: [
      {
        capacity: "8 GB RAM + 128 GB Storage",
        price: 39999,
        MRP: 39999,
      },
      {
        capacity: "12 GB RAM + 256 GB Storage",
        price: 43999,
        MRP: 43999,
      },
    ],
    price: 39999,
    processor: "Qualcomm™ Snapdragon® 870 and 5G",
    design: "High-end Design",
    display: "120 Hz Fluid AMOLED Display",
    charger: "Warp Charge 65",
  },
];
export const security = [
  {
    securityImg: securityImg,
    text: "Protect your smartphone",
    discount: "Discount available",
  },
];

export const boxData = [
  { boxImg: phone, productName: "OnePlus 9R 5G" },
  { boxImg: chargerImg, productName: "Warp Charge 65 Power Adapter" },
  { boxImg: wrapChargerImg, productName: "Warp Charge Type-C Cable" },
];

export const AutoCarouselData = [
  autocarousel1,
  autocarousel2,
  autocarousel3,
  autocarousel4,
];
