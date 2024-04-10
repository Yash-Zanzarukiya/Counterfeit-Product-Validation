export default async function registerUser({ username, password, fullName, email }){
    try {
      return await fetch("/api/v1/users/register", {
        method: "POST",
        body: JSON.stringify({
          password,
          username,
          email,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("BACKEND_SERVICE :: CREATE_POST :: ERROR -> ", error);
    }
  }