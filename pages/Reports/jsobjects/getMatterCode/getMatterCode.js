export default {
  getSelectedMatterCodes: () => {
    const selectedIds = MattersMultiSelect.selectedOptionValues; // These are `code`
    const allMatters = matterDropDownList.getMattersDropDown();

    return allMatters
      .filter(m => selectedIds.includes(m.code)) // match by `code`
      .map(m => m.matterCode) // extract `matterCode`
      .join(", ");
  }
}
