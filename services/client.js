import apisauce from "apisauce";
import authStorage from "../auth/storage";
export const server_url = "http://192.168.1.36:8000";

const client = apisauce.create({
  baseURL: `${server_url}/api`,
});

client.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = `Bearer ${authToken}`;
});

export default client;
