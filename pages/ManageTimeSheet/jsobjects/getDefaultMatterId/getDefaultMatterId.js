export default {
  getDefaultMatterIdFun: () => {
    const selectedId = filteredTimeSheets.selectedRow?.TimeSheet_Matters_ID 
      ?? appsmith.store.selectedMatterCode;

    const options = MatterDropDown.options ?? [];

    // Check if selectedId exists in options
    const matched = options.find(opt => opt.value === selectedId);

    // Return valid value or fallback to empty string
    return matched?.value ?? "";
  }
}
