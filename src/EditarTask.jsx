import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const EditarTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const {
    error,
    isPending,
    data: task,
  } = useFetch(`https://localhost:7033/api/Tasks/${params.id}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, isCompleted: taskCompleted };
    console.log(taskCompleted);
    fetch(`https://localhost:7033/api/Tasks/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setTaskCompleted(task.isCompleted);
    }
  }, [task]);

  return (
    <div className="create">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {task && (
        <>
          <h2>Edit Task</h2>
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
            <div className="status">
              <p>{taskCompleted ? "completado" : "sin completar"}</p>
              <input
                type="checkbox"
                checked={taskCompleted}
                onChange={(e) => setTaskCompleted(e.target.checked)}
              />
            </div>

            <button>Edit Task</button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditarTask;
