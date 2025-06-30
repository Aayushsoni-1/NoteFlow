import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
// We exclude /notes from the baseURL to keep the API flexible and modular. The baseURL (like http://localhost:5001/api) points to the main backend, while /notes, /auth, etc., represent specific resources. Including /notes in the base would tightly couple the app to one feature and make future scaling (like adding /users, /tasks) harder to manage. This approach also aligns with RESTful API structure and improves route maintainability.