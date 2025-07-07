export default {
  deleteUser: async () => {
    try {
      await deleteUser.run(); // Call the delete query
      showAlert("✅ User deleted", "success");
      await Select_dbo_Users1.run(); // Refresh the table
    } catch (err) {
      showAlert("❌ Error deleting user: " + err.message, "error");
    }
  }
};
