export const calcColor = positivePercentage => {
  if (positivePercentage < 30) {
    return 'red';
  }
  if (positivePercentage >= 80) {
    return 'green';
  }
  return 'orange';
};
