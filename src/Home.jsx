import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: tasks } = useFetch('https://localhost:7033/api/tasks')
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tasks && <TaskList tasks={tasks} /> }
    </div>
  );
}
 
export default Home;
