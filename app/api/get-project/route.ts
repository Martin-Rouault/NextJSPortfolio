import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// this is the api route for fetching all the projects
export async function getProjects (request: Request) {
  try {
    const projects = await sql`SELECT * FROM Projects;`;
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}