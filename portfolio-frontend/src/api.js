//const BASE_URL = "http://localhost:3000/api";
// //const BASE_URL = "http://127.0.0.1:3000/api";

// export const getProjects = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/projects`);
//     if (!response.ok) throw new Error("Failed to fetch projects");
//     return await response.json();
//   } catch (error) {
//     console.error("❌ Error fetching projects:", error.message);
//     return [];
//   }
// };

// export const getSkills = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/skills`);
//     if (!response.ok) throw new Error("Failed to fetch skills");
//     return await response.json();
//   } catch (error) {
//     console.error("❌ Error fetching skills:", error.message);
//     return [];
//   }
// };

// export const getUser = async (id) => {
//   try {
//     const response = await fetch(`${BASE_URL}/users/${id}`);
//     if (!response.ok) throw new Error("Failed to fetch user");
//     return await response.json();
//   } catch (error) {
//     console.error("❌ Error fetching user:", error.message);
//     return null;
//   }
// };