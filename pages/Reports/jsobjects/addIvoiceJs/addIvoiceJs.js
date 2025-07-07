export default {
  async runAddInvoice() {
    try {
      const check = await CheckDuplicateInvoice.run();

      if (check && check[0]?.IsDuplicate === 1) {
        showAlert("Duplicate invoice detected. Insert aborted.", "warning");
        return;
      }

      const result = await AddInvoice.run();

      const invoiceId = result[0].ReturnValue || result[0].NewInvoiceID;
      showAlert(`✅ Invoice added successfully. ID: ${invoiceId}`, "success");
    
      await generateInvoicePDFFunc.generateStyledPDF();
      navigateTo('Page1', {}, 'NEW_WINDOW');

    } catch (error) {
      showAlert(`❌ Error: ${error.message}`, "error");
    }
  },
};
