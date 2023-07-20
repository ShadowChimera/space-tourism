export const padZeros = (number: string | number, maxLength = 2) => {
  number = String(number);
  const padCount = maxLength - number.length;

  if (padCount < 0) {
    return number;
  }

  return '0'.repeat(padCount) + number;
};
