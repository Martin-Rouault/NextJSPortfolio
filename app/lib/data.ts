import { sql } from "@vercel/postgres";

export async function fetchProject() {
  try {
    const data = await sql`SELECT * from PROJECTS`;
    return data.rows;
  } catch (error) {
    console.error("Database errror", error);
    throw new Error("Failed to fetch project data");
  }
}

export async function fetchProjectById(id: string) {
  try {
    const data = await sql`SELECT * from PROJECTS WHERE id = ${id}`;
    return data.rows[0];
  } catch (error) {
    console.error("Database errror", error);
    throw new Error("Failed to fetch project data");
  }
}
