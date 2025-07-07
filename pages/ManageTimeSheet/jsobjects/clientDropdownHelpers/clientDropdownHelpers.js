export default {
  getDefaultClientId: () => {
    const selectedRowClientId = filteredTimeSheets.selectedRow?.TimeSheet_Clients_ID;
    const storedClientId = appsmith.store.selectedClient;

    const options = ClientDropDown.options ?? [];

    // Helper to validate existence in dropdown
    const isValid = (id) => options.some(opt => opt.value === id);

    // Priority: selected row > stored value > ""
    if (selectedRowClientId && isValid(selectedRowClientId)) {
      return selectedRowClientId;
    }

    if (storedClientId && isValid(storedClientId)) {
      return storedClientId;
    }

    return "";
  }
}
