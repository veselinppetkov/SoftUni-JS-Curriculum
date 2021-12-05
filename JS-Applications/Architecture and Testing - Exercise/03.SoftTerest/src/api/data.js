import * as api from "./api.js";

export const login = api.login;
export const logout = api.logout;
export const register = api.register;
export const get = api.get;
export const post = api.post;
export const del = api.del;

export async function getAllIdeas() {
  return get("/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc");
}

export async function getById(id) {
  return get(`/data/ideas/${id}`);
}

export async function createIdea(idea) {
  return post(`/data/ideas`, idea);
}

export async function deleteById(id) {
  return del(`/data/ideas/${id}`);
}
