export default {
  async runUpdateInvoice() {
    try {
      const result = await updateInvoice.run();

      if (result[0].ReturnValue === 1) {
        showAlert("✅ Invoice updated successfully.", "success");
      } else {
        showAlert("⚠️ Update failed. Please verify the data.", "warning");
      }
    } catch (e) {
      showAlert(`❌ Error updating invoice: ${e.message}`, "error");
    }
  }
}
