export function formatNumber(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
