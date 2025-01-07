import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class userService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(userId: number) {
    return apiClient.delete("/users/" + userId);
  }

  addUser(newUser: User) {
    return apiClient.post("/users", newUser);
  }

  updateUser(updateUser: User, userId: number) {
    return apiClient.patch("/users/" + userId, updateUser);
  }
}

export default new userService();
