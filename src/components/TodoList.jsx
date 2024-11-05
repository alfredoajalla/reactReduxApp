import { useSelector } from "react-redux"
import TodoItems from "./TodoItems";

function TodoList() {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;
    return todos.filter((item) => {
      const matchsFilter = (filter === "COMPLETED" && item.completed) || (filter === "INCOMPLETED" && !item.completed) || (filter === "ALL");
      const matchsSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase());
      return matchsFilter && matchsSearch;
    })
  })
  return (
    <ul>
      <li>
        {
          filteredTodos.map((todo, index) => (
            <TodoItems key={index} todo={todo} index={index} />
          ))
        }
      </li>
    </ul>
  )
}

export default TodoList