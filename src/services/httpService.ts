import apiClient from "./api-client";

class httpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  delete(userId: number) {
    return apiClient.delete(this.endpoint + "/" + userId);
  }

  add<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T>(entity: T, userId: number) {
    return apiClient.patch(this.endpoint + "/" + userId, entity);
  }
}

const create = (endpoint: string) => new httpService(endpoint);

export default create;
