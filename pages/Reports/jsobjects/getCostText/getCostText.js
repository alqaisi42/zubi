export default {
  numberToWords: (amount) => {
    const a = [
      "", "One", "Two", "Three", "Four", "Five", "Six",
      "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
      "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
      "Eighteen", "Nineteen"
    ];
    const b = [
      "", "", "Twenty", "Thirty", "Forty", "Fifty",
      "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    const numToWords = (n) => {
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
      if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + numToWords(n % 100) : "");
      if (n < 1000000) return numToWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + numToWords(n % 1000) : "");
      return "Too Large";
    };

    const parts = amount.toString().split(".");
    const dollars = parseInt(parts[0]);
    const cents = parts[1] ? parseInt(parts[1].padEnd(2, "0")) : 0;

    let result = numToWords(dollars) + " Dollars";
    if (cents > 0) {
      result += " and " + numToWords(cents) + " Cents";
    }

    return result;
  }
}
