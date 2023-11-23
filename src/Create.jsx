import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, isCompleted: taskCompleted };
    console.log(taskCompleted);
    fetch("https://localhost:7033/api/Tasks/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Task title:</strong>
        </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>
          <strong>Task Description:</strong>
        </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <span>
          <strong>Task Status:</strong>
        </span>
        <input
          type="checkbox"
          onChange={(e) => setTaskCompleted(e.target.checked)}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default Create;
