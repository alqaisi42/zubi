export default {
  submitUser: async () => {
    try {
      const response = await addUserProc.run();
      const affected = response[0]?.affectedRows;

      if (affected === 1) {
        showAlert("✅ User added successfully.", "success");
        closeModal(AddUserModal.name);
        Select_dbo_Users1.run(); // Refresh the table
      } else {
        showAlert("⚠️ Failed to add user. No rows affected.", "warning");
      }
    } catch (err) {
      showAlert("❌ Error: " + err.message, "error");
    }
  }
};
