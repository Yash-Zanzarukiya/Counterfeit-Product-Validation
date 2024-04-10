export class AuthService {
	async createAccount({ email, password, fullName, username }) {
		try {
			let userAccount;

			await fetch("http://localhost:3000/api/v1/users/register", {
				method: "POST",
				body: JSON.stringify({
					username,
					password,
					fullName,
					email,
				}),
				headers: { "Content-Type": "application/json" },
			})
				.then((blob) => blob.json())
				.then((res) => {
					userAccount = res.success;
				});
			if (userAccount) {
				return this.login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			console.log(
				"APPWRITE_SERVICE :: CREATE_ACCOUNT :: ERROR -> ",
				error,
			);
			throw error;
		}
	}

	async login({ email, password }) {
		try {
			return await fetch("http://localhost:3000/api/v1/users/login", {
				method: "POST",
				body: JSON.stringify({
					password,
					email,
				}),
				headers: { "Content-Type": "application/json" },
			});
		} catch (error) {
			console.log("APPWRITE_SERVICE :: LOGIN :: ERROR -> ", error);
			throw error;
		}
	}

	async getCurrentUser() {
		try {
			return await fetch(
				"http://localhost:3000/api/v1/users/get-current-user",
			);
		} catch (error) {
			console.log(
				"APPWRITE_SERVICE :: GET_CURRENT_USER :: ERROR -> ",
				error,
			);
			throw error;
		}
		return null;
	}

	async logout() {
		try {
			return await fetch("http://localhost:3000/api/v1/users/logout", {
				method: "POST",
				body: JSON.stringify({}),
				headers: { "Content-Type": "application/json" },
			});
		} catch (error) {
			console.log("APPWRITE_SERVICE :: LOGOUT :: ERROR -> ", error);
			throw error;
		}
	}
}

const authService = new AuthService();

export default authService;
