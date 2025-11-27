import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/slices/todolist";
import Todolist from "../component/TodoList/Todolist";

const HomePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState('');
  const  dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted data:", title, description, status);

    dispatch(
      addtodo({
        id:2,
        title:title,
        status:status,
         description:description

      })
    )
  };
  

  return (
    <div>
      <h1 className="text-xl font-bold text-center">My Todo App</h1>

      <div className="w-[80%] mx-auto my-3">
        <form onSubmit={handleSubmit}>

          <div className="inputGroup grid">
            <label htmlFor="todo">Enter Todo Title</label>
            <input
              type="text"
              className="p-3 rounded-md border"
              placeholder="Enter todo title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="inputGroup grid my-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="p-3 rounded-md border"
              placeholder="Enter todo description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="status">Status</label>
            <select
              className="border w-full p-3 rounded-md"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Not started">Not Started</option>
              <option value="In progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="submitbtn my-3">
            <button className="bg-blue-600 px-8 py-3 text-white rounded-md font-bold hover:bg-blue-500 transition shadow-md">
              Save
            </button>
          </div>

        </form>
        <Todolist/>
      </div>
    </div>
  );
};

export default HomePage;
