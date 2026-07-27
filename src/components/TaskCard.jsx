import Button from "./Button";
import "../Style/TaskCard.css";

export function TaskCard({
  text,
  completed = false,
  onToggle,
  onDelete,
  status,
  id,
}) {
  return (

    <label className="flex w-full border-b border-gray-300 py-0  items-center gap-2 cursor-pointer">
        <input type="checkbox" className="hidden" checked={completed} onChange={onToggle} />

        <span className={`text-2xl font-bold w-5 ${
          completed ? "text-green-400" : "text-gray-400"
        }`}>

          {completed ? "x" : "□"}
        </span>

        <span className={completed ? "line-through text-gray-600": "text-black-600"}>{text}</span>
    </label>    

    // <div className="task-card border-2 border-l-indigo-500/50 mb-5 mt-2 ">
    //   <input type="checkbox" checked={completed} className={completed ? 'hide': "visible"} onChange={() => {
    //     onToggle(id) ;
    //     console.log("text: " + text + "complete: " + completed);

    //   }} />


    //   <label className={completed ? "line-through": ""}>{text}</label>

    //   <Button
    //     label="toggle"
    //     handleClick={() => {
    //       onToggle(id);
    //       console.log("text: " + text + "complete: " + completed);
    //     }}
    //     />
    //   <Button
    //     label="remove"
    //     handleClick={() => {
    //         console.log("deleted id: " + id);
    //         onDelete(id);
    //         console.log("deleted text: " + text);
    //     }}
    //     />

    //   <Button handleClick={() => {
    //       status(id) ;
    //       console.log("text: " + text + "complete: " + completed);
    //   }} label="status" />
    // </div>
  );
}

export default TaskCard;
