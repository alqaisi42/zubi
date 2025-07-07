export default {
  async runAddOrUpdateMatter() {
    const result = await AddUpdateMatterQuery.run();
    console.log("📌 Matter Result:", result[0]);

    switch (result[0].Result) {
      case -1:
        showAlert("Matter name already exists for this client.", "error");
        break;
      case -2:
        showAlert("Matter record not found (might be deleted).", "error");
        break;
      case -3:
        showAlert("Matter code already exists.", "error");
        break;
      case 0:
        showAlert("Something went wrong. Please try again.", "error");
        break;
      default:
        showAlert("Matter saved successfully.", "success");

        // Close modal
        closeModal(addMatterModal.name);
        Select_dbo_Matters1.run()
        // Reset fields
        matterName.setValue("");
        matterCode.setValue("");
        matterClient.setSelectedOption("");

        break;
    }
  }
};
