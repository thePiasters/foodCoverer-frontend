export function isBrandValid(brand) {
  return !(
    brand.length > 100 ||
    brand.length < 1 ||
    !brand ||
    brand.trim().length === 0
  );
}
