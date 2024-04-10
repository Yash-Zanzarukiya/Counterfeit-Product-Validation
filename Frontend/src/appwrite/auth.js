export class AuthService {
  async createAccount({ ...data }) {
    try {
      let userAccount;

      const formData = new FormData();

      for (const key in data) {
        formData.append(key, data[key]);
      }
      if (data.logo) {
        formData.append("logo", data.logo[0]);
      }

      await fetch("/api/v1/users/register", {
        method: "POST",
        body: formData,
      })
        .then((blob) => blob.json())
        .then((res) => {
          userAccount = res.success;

        });
      if (userAccount) {
        return this.login({ email:data.email, password: data.password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("BACKEND_SERVICE :: CREATE_ACCOUNT :: ERROR -> ", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {

      return await fetch("/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify({
          password,
          email,
        }),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("BACKEND_SERVICE :: LOGIN :: ERROR -> ", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await fetch("api/v1/users/get-current-user");
    } catch (error) {
      console.log("BACKEND_SERVICE :: GET_CURRENT_USER :: ERROR -> ", error);
      throw error;
    }
    return null;
  }

  async logout() {
    try {
      return await fetch("/api/v1/users/logout", {
        method: "POST",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("BACKEND_SERVICE :: LOGOUT :: ERROR -> ", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
