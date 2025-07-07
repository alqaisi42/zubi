export default {
  convertAmountToWords(amount) {
    const ones = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
      'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function convert_hundreds(n) {
      if (n < 20) return ones[n];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
      return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + convert_hundreds(n % 100) : '');
    }

    function convert_thousands(n) {
      if (n < 1000) return convert_hundreds(n);
      return convert_hundreds(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + convert_hundreds(n % 1000) : '');
    }

    const [dollarsStr, centsStr] = amount.toFixed(2).split('.');
    const dollars = parseInt(dollarsStr, 10);
    const dollarWords = convert_thousands(dollars);
    return `U.S. Dollars ${dollarWords || 'Zero'} & ${centsStr}/100.`;
  }
};
