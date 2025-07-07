export default {
  getMattersDropDown: () => {
    return getMatter.data
      ? getMatter.data.map(c => ({
          name: c.Matters_Name,
          code: c.ID
        }))
      : [];
  }
};
