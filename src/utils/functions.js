import { LUNGS } from "./constants";

export const returnLungImagePath = (percentage) => {
  let actualPercentage = percentage * 100;
  switch (true) {
    case actualPercentage >= 0 && actualPercentage <= 15:
      return LUNGS[7];
    case actualPercentage > 15 && actualPercentage <= 25:
      return LUNGS[6];
    case actualPercentage > 25 && actualPercentage <= 35:
      return LUNGS[5];
    case actualPercentage > 35 && actualPercentage <= 45:
      return LUNGS[4];
    case actualPercentage > 45 && actualPercentage <= 55:
      return LUNGS[3];
    case actualPercentage > 55 && actualPercentage <= 65:
      return LUNGS[2];
    case actualPercentage > 65 && actualPercentage <= 80:
      return LUNGS[1];
    case actualPercentage > 80 && actualPercentage <= 100:
      return LUNGS[0];
    default:
      return LUNGS[7];
  }
};
