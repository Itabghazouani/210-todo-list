import { connect } from "@/dbConfig/db";
import { NextResponse, NextRequest } from "next/server";
import Todo from "@/models/todo";
import { v4 } from "uuid";

connect();

export const GET = async () => {
  try {
    const todos = await Todo.find({});
    console.log(todos);

    return NextResponse.json({ msg: "Found all todos", success: true, todos });
  } catch (error) {
    return NextResponse.json({ msg: "Issue happened!" }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { title, category, priority } = reqBody;
    console.log(title, category, priority);

    const newTodo = new Todo({
      id: v4(),
      title,
      category,
      priority,
      completed: false,
    })
    const savedTodo = await newTodo.save();

    return NextResponse.json({ msg: "Todo added successfully", success: true, todo: savedTodo });
  } catch (error) {
    return NextResponse.json({ msg: "Issue happened!" }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    await Todo.deleteMany({})
    return NextResponse.json({ msg: "All todos cleared successfully", success: true });
  } catch (error) {
    return NextResponse.json({ msg: "Issue happened!" }, { status: 500 });
  }
}
