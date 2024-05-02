import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Projects ( Id int identity(1,1), Project_name varchar(25), Description varchar(255), Title_1 varchar(25), Content_1 varchar(255), Title_2 varchar(25), Content_2 varchar(255), Title_3 varchar(25), Content_3 varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
