export const formatPrice = (amount) =>
  `৳${amount.toLocaleString("en-BD")}`;

export const calcDiscount = (price, originalPrice) => {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};
