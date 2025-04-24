const BASE_URL = "http://localhost:3000/api";
// const BASE_URL = "http://127.0.0.1:3000/api";

export const getProjects = async () => {
  const response = await fetch(`${BASE_URL}/projects`);
  console.log("Response from API:", response);
  return await response.json();
};

export const getSkills = async () => {
  const response = await fetch(`${BASE_URL}/skills`);
  return await response.json();
};

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return await response.json();
};