export default {
  getAttorneyDropdown: () => {
    return getUsers.data
      ? getUsers.data.map(c => ({
          name: c.Users_DisplayName,
          code: c.ID
        }))
      : [];
  }
};
