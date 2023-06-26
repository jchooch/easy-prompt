// IMPORT LIBRARIES
// IMPORT REACT PAGES
// IMPORT REACT COMPONENTS
// IMPORT STYLES
import "./EvalsPage.scss";
import deleteIconSource from "../../assets/icons/delete.svg";
import editIconSource from "../../assets/icons/edit.svg";

export default function EvalsPage({ promptSeqs, taskSets, evals }) {

    console.log("evals: ", evals);
    console.log("promptSeqs: ", promptSeqs);
    console.log("taskSets: ", taskSets);

    if (!evals) {
        return <p>Loading...</p>;
    }

    return (
        <div className="evals-table">
            <div className="evals-table__fields">
                <p className="evals-table__field evals-table__field--id">ID</p>
                <p className="evals-table__field evals-table__field--set">SET</p>
                <p className="evals-table__field evals-table__field--seq">SEQ</p>
                <p className="evals-table__field evals-table__field--delete">DEL</p>
                <p className="evals-table__field evals-table__field--edit">EDIT</p>
            </div>

            {evals.map((item, index) => {
                return (
                    <div className="evals-table__row">
                        <p className="evals-table__col evals-table__col--id">{item.id}</p>
                        <p className="evals-table__col evals-table__col--set">{taskSets.find((taskSet) => taskSet.id === item.taskset_id).label}</p>
                        <p className="evals-table__col evals-table__col--seq">{promptSeqs.find((promptSeq) => promptSeq.id === item.promptseq_id).label}</p>
                        <div className="evals-table__col evals-table__col--delete">
                            <img className="evals-table__delete-icon" src={deleteIconSource} alt="delete"/>
                        </div>
                        <div className="evals-table__col evals-table__col--edit" >
                            <img className="evals-table__edit-icon" src={editIconSource} alt="edit"/>
                        </div>
                        
                        
                    </div>
                );
            })}
        </div>
    );
}