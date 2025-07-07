export default {
  resetTimeSheetForm: async () => {
    try {
      // Reset date input to current datetime
      await Input_TimeSheetDate.setValue(moment().format("YYYY-MM-DDTHH:mm:ss"));

      // Reset dropdown selections
      await usersDropDown.setSelectedOption("");
      await ClientDropDown.setSelectedOption("");
      await MatterDropDown.setSelectedOption("");
      await time_sheet_status.setSelectedOption("");

      // Reset duration input
      await Input_TimeDuration.setValue("");
			await userRate.setValue("");

      // Clear all stored variables if needed
      await clearStore();

    } catch (e) {
      showAlert("Error resetting form: " + e.message, "error");
    }
  }
}
