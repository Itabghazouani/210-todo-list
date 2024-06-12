import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/db";
import Todo from "@/models/todo";

connect();

const getIdFromPathname = (s: string) => {
  let parts = s.split("/");
  return parts[parts.length - 1];
};

export const GET = async (request: NextRequest) => {
  try {
    const path = request.nextUrl.pathname;
    const id = getIdFromPathname(path);

    const todo = await Todo.findById({ id });
    console.log(todo);

    return NextResponse.json({ msg: "Found all todos", success: true, todo });
  } catch (error) {
    return NextResponse.json({ msg: "Issue happened" }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const path = request.nextUrl.pathname;
    const id = getIdFromPathname(path);

    await Todo.deleteOne({ id });

    return NextResponse.json({ msg: "Todo deleted", success: true });
  } catch (error) {
    return NextResponse.json({ msg: "Issue happened" }, { status: 500 });
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const path = request.nextUrl.pathname;
    const id = getIdFromPathname(path);

    const reqBody = await request.json();
    const { title, category, priority, completed } = reqBody;

    const todo = await Todo.updateOne({ id }, { $set: { title, category, priority, completed } });

    return NextResponse.json({ msg: "Todo edited", success: true });
  } catch (error) {
    return NextResponse.json({ msg: "Issue happened" }, { status: 500 });
  }
}
