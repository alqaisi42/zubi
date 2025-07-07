export default {
  getAttorneyRate: () => {
    const cost = getUserCostById.data?.[0]?.ResolvedCost;

    let data;

    if (filteredTimeSheets.selectedRow) {
      data = filteredTimeSheets.selectedRow.TimeSheet_Cost || cost;
    } else {
      data = cost;
    }

    return data;
  }
};
