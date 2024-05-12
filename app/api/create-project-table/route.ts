import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Projects ( Id int identity(1,1), project_name varchar(25), small_description varchar(50), image_path varchar(255), description varchar(255), title_1 varchar(25), content_1 varchar(255), title_2 varchar(25), content_2 varchar(255), title_3 varchar(25), content_3 varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
