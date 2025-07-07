export default {
  initializeClientAndMatter: async () => {
    try {
      // Step 1: Get and apply default client ID
      const clientId = clientDropdownHelpers.getDefaultClientId();
      await ClientDropDown.setSelectedOption(clientId);
      await storeValue("selectedClient", clientId);

      // Step 2: Run Matter query based on selected client
      await getMatterManage.run();

      // Step 3: Get and apply default matter ID (after matter options are loaded)
      const matterId = getDefaultMatterId.getDefaultMatterIdFun();
      await MatterDropDown.setSelectedOption(matterId);
    } catch (err) {
      console.error("Error initializing client and matter dropdowns", err);
      showAlert("Failed to load default selections", "error");
    }
  }
}
