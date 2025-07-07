export default {
  async runAddOrUpdateClient() {
    const result = await AddUpdateClientQuery.run();
    console.log("🔍 Result[0]:", result[0]);

    switch (result[0].Result) {
      case -1:
        showAlert("Client name already exists.", "error");
        break;
      case -2:
        showAlert("Client does not exist.", "error");
        break;
      case -3:
        showAlert("Client code already exists.", "error");
        break;
      case 0:
        showAlert("Something went wrong. Please try again.", "error");
        break;
      default:
        showAlert("Client saved successfully.", "success");
        closeModal(addClientModal.name);
        await Select_dbo_Clients1.run()
        clientName.setValue('');
        ClientCode.setValue('');
        ClientStatus.setSelectedOption('');
        ClientContactPerson.setValue('');
        ClientContactPersonMobile.setValue('');
        ClientContactPersonEmail.setValue('');
        ClientAddress.setValue('');
        ClientTelephone.setValue('');
        ClientFax.setValue('');
        PaymentsType.setSelectedOption('');
        Currency.setSelectedOption('');
        rateValue.setValue('');
        break;
    }
  }
};
