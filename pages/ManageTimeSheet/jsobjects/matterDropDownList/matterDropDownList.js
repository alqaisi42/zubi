export default {
  getMattersDropDown: () => {
    return getMatterManage.data
      ? getMatterManage.data.map(c => ({
          name: c.Matters_Name,
          code: c.ID
        }))
      : [];
  }
	

};
