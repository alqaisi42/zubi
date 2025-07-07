export default {
  resetSelectionsAndReload: async () => {
    await storeValue("selectedUser", usersDropDown.selectedOptionValue);
		await storeValue("selectedClient", "")
    await MatterDropDown.setSelectedOption("");
    await ClientDropDown.setSelectedOption("");
    await Select_dbo_timeSheetManager.run();
  }
}
