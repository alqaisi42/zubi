export default {
  getStyledTotalText: (amount) => {
    const words = getCostText.numberToWords(amount);
    return `<span style="font-weight:bold;">Total Amount Due:  </span><span style="font-weight:normal;"> U.S. Dollars ${words}</span>`;
  }
}
