export default {
  getDefaultMatterIdFun: () => {
    const selectedId = appsmith.store.selectedMatterCode;
    const options = MatterDropDown?.options || [];

    // Find if the selected ID exists in the options
    const matchedOption = options.find(opt => opt.value === selectedId);

    // Return selected value if valid, otherwise fallback to the first available option or empty string
    return matchedOption?.value || (options.length > 0 ? options[0].value : "");
  }
};
