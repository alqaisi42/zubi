export default {
  loginUser: async () => {
    const email = inputEmail.text.trim();
    const password = inputPassword.text;

    storeValue("loginLoading", true);

    try {
      await getUserByUsername.run({ email });

      if (getUserByUsername.data.length === 0) {
        storeValue("loginLoading", false);
        showAlert("Email not found", "error");
        return;
      }

      // Simple password check (you can replace with real auth logic)
      if (password === "123123") {
        storeValue("currentUser", getUserByUsername.data[0]);
        storeValue("isLoggedIn", true);
        storeValue("loginLoading", false);
        navigateTo("MainPage", {}, "SAME_WINDOW");
      } else {
        storeValue("loginLoading", false);
        showAlert("Invalid password", "error");
      }

    } catch (err) {
      storeValue("loginLoading", false);
      showAlert("Login failed: " + err.message, "error");
    }
  },
	
	

  logout: () => {
    storeValue("isLoggedIn", false);
    storeValue("currentUser", null);
    navigateTo("SignIn", {}, "SAME_WINDOW");
  }
};
