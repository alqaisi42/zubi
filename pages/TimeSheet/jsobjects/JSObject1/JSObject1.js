export default {
  hideInvoices: async () => {
    await storeValue("showInvoices", false);
		await storeValue("showPrintedInvoice", false);
  }
}
