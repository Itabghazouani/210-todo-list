import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>
      <div className={styles.todoContainer}>
        <input type="text" id="new-task" className={styles.newTask} placeholder="Add a new task..." disabled />
        <button id="add-task" className={styles.addTask} disabled>Add</button>
        <ul id="todo-list" className={styles.todoList}>
          <li className={styles.todoItem}>Buy groceries</li>
          <li className={styles.todoItem}>Call the doctor</li>
          <li className={styles.todoItem}>Finish homework</li>
          <li className={styles.todoItem}>Clean the house</li>
          <li className={styles.todoItem}>Read a book</li>
        </ul>
      </div>
    </div>
  );
}
