export default {
  getClientsDropdown: () => {
    return getClients.data
      ? getClients.data.map(c => ({
          name: c.Clients_ClientName,
          code: c.ID
        }))
      : [];
  }
};
