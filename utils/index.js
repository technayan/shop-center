export const getDiscountedPrice = (price, discountPercentage) => {
  const previousPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return previousPrice;
};
