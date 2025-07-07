export default {
  async onClientChange() {
    try {
      // Clear selected matters
      await MattersMultiSelect.setSelectedOptions([]);

      const selectedClients = ClientsMultiSelect.selectedOptionValues || [];
      await storeValue("selectedClients", selectedClients);

      // Hide printed invoice section if no clients are selected
      if (selectedClients.length === 0) {
        await storeValue("showPrintedInvoice", false);
				await storeValue("showBreackDown", false);
        await storeValue("showInvoices", false);
      }

      // Re-fetch matters related to selected clients
      await getMatterManage.run();
    } catch (error) {
      showAlert("Error updating matter list based on selected clients.", "error");
      console.error("onClientChange error:", error);
    }
  }
};
