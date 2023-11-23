import { useNavigate } from "react-router-dom";



const TaskList = ({ tasks }) => {
  const navigate = useNavigate();
  const onClickEdit = ({id}) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="task-list">
      {tasks.data.length === 0 ? (
        <span
          style={{
            backgroundColor: "#fa0000",
            color: "#fff",
            padding: "2px 6px",
          }}
        >
          No hay tareas
        </span>
      ) : (
        tasks.data.map((task) => (
          <div className="task-preview" key={task.id}>
            <div className="task-preview-item">
              <span
                style={{
                  backgroundColor: "#205db2",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "2px 8px",
                }}
              >
                {task.id}
              </span>
              <h2>{task.title}</h2>
              <p>
                <strong>Descripción:</strong> {task.description}
              </p>
              <p> 
                <strong>Estado:</strong>{" "}
                {task.isCompleted ? "Realizado ✔️" : "Sin realizar ❌"}
              </p>
            </div>
            <div className="task-preview-item btn">
              <button
                style={{
                  color: "white",
                  backgroundColor: "#205db2",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => onClickEdit(task)}
                
              >
                editar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
