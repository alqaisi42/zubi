export default {
  async generateAndMaybeNavigate() {
    if (appsmith.store.showInvoices) {
      await addIvoiceJs.runAddInvoice(); // generate invoice PDF
    } else {
      await generate_pdf_breakdown_report.generateStyledPDF(); // generate breakdown PDF
      navigateTo('Page1', {}, 'NEW_WINDOW'); // navigate only for breakdown
    }
  }
}
