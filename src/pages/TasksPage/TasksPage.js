// IMPORT LIBRARIES
// IMPORT REACT PAGES
// IMPORT REACT COMPONENTS
// IMPORT STYLES
import "./TasksPage.scss";
import deleteIconSource from "../../assets/icons/delete.svg";
import editIconSource from "../../assets/icons/edit.svg";

export default function TasksPage({ tasks, taskSets }) {

    if (!tasks) {
        return <p>Loading...</p>;
    }

    console.log("tasks: ", tasks);

    return (
        <div className="tasks-table">
            <div className="tasks-table__fields">
                <p className="tasks-table__field tasks-table__field--id">ID</p>
                <p className="tasks-table__field tasks-table__field--content">CONTENT</p>
                <p className="tasks-table__field tasks-table__field--set">SET</p>
                <p className="tasks-table__field tasks-table__field--delete">DEL</p>
                <p className="tasks-table__field tasks-table__field--edit">EDIT</p>
            </div>

            {tasks.map((task) => {
                return (
                    <div className="tasks-table__row">
                        <p className="tasks-table__col tasks-table__col--id">{task.id}</p>
                        {/* <p className="tasks-table__col tasks-table__col--content">{task.content.slice(0, 60)}</p> */}
                        {/* TOGGLE BIG OR SMALL DEPENDING ON FOCUS? */}
                        <p className="tasks-table__col tasks-table__col--content">{task.content}</p>
                        <p className="tasks-table__col tasks-table__col--set">{taskSets.find(taskset => taskset.id === task.taskset_id).label}</p>
                        <div className="tasks-table__col tasks-table__col--delete">
                            <img className="tasks-table__delete-icon" src={deleteIconSource} alt="delete"/>
                        </div>
                        <div className="tasks-table__col tasks-table__col--edit" >
                            <img className="tasks-table__edit-icon" src={editIconSource} alt="edit"/>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}