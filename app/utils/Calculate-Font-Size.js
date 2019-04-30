export default function calculateFontSizes(baseSize, scaleFactor) {
    return {
      baseSize,
      XS: baseSize * 0.75,
      S: baseSize,
      M: baseSize * 1.25,
      L: baseSize * 1.5,
      XL: baseSize * 3.25,
      XXL: baseSize * 5.25,
    }
}