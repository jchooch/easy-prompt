// IMPORT LIBRARIES
// IMPORT REACT PAGES
// IMPORT REACT COMPONENTS
// IMPORT STYLES
import "./PromptsPage.scss";
import deleteIconSource from "../../assets/icons/delete.svg";
import editIconSource from "../../assets/icons/edit.svg";

export default function PromptsPage({ prompts, promptSeqs }) {

    if (!prompts) {
        return <p>Loading...</p>;
    }

    console.log("prompts: ", prompts);

    return (
        <div className="prompts-table">

            <div className="prompts-table__fields">
                <p className="prompts-table__field prompts-table__field--id">ID</p>
                <p className="prompts-table__field prompts-table__field--label">LABEL</p>
                <p className="prompts-table__field prompts-table__field--content">CONTENT</p>
                <p className="prompts-table__field prompts-table__field--seq">SEQ</p>
                <p className="prompts-table__field prompts-table__field--order">ORDER</p>
                <p className="prompts-table__field prompts-table__field--delete">DEL</p>
                <p className="prompts-table__field prompts-table__field--edit">EDIT</p>
            </div>

            {prompts.map((prompt) => {
                return (
                    <div className="prompts-table__row">
                        <p className="prompts-table__col prompts-table__col--id">{prompt.id}</p>
                        <p className="prompts-table__col prompts-table__col--label">{prompt.label}</p>
                        <p className="prompts-table__col prompts-table__col--content">{prompt.content.slice(0, 50)}</p>
                        {/* TOGGLE BIG OR SMALL DEPENDING ON FOCUS? */}
                        {/* <p className="prompts-table__col prompts-table__col--content-full">{prompt.content}</p>  */}
                        <p className="prompts-table__col prompts-table__col--seq">{promptSeqs.find(promptseq => promptseq.id === prompt.promptseq_id).label}</p>
                        <p className="prompts-table__col prompts-table__col--order">{prompt.order}</p>
                        <div className="prompts-table__col prompts-table__col--delete">
                            <img className="prompts-table__delete-icon" src={deleteIconSource} alt="delete"/>
                        </div>
                        <div className="prompts-table__col prompts-table__col--edit" >
                            <img className="prompts-table__edit-icon" src={editIconSource} alt="edit"/>
                        </div>
                        
                        
                    </div>
                );
            })}
        </div>
    );
}