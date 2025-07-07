export default {
  logout: async () => {
    try {
      // Clear stored session values
      await storeValue("isLoggedIn", false);
      await storeValue("currentUser", null);
      await storeValue("loginLoading", false);
      await storeValue("authToken", null);
      await storeValue("userPermissions", null);
      await storeValue("sessionExpires", null);
      await storeValue("pdfBase64", null);

      // Optional: clear additional stored keys if needed
      // await storeValue("authToken", null);
      // await storeValue("pdfBase64", null);

      // Navigate to SignIn page
      navigateTo("SignIn", {}, "SAME_WINDOW");
    } catch (err) {
      showAlert("Logout failed: " + err.message, "error");
    }
  }
};
