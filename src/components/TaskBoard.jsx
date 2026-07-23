import TaskReducer from "../Reducer/TaskReducer";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { useReducer } from "react";

export function TaskBoard(){
    const [tasks, dispatch] = useReducer(TaskReducer, []) ;
    const taskStatus = (taskId) => {
        console.log(tasks.find(task => task.id === taskId)) ;
      };
    return (
        <>
        
        <TaskForm onAddTask={(text) => dispatch({type: 'ADD_TASK', text: text})}></TaskForm>
        {tasks?.map((element, index) => {

            return (
                <TaskCard
                key={index}
                text={element.text}
                id={element.id}
                completed={element.completed}
                onToggle={() => dispatch({type: 'TOGGLE_TASK', id: element.id})}
                onDelete={() => dispatch({type: 'DELETE_TASK', id: element.id})}
                status = {taskStatus}
                >
                </TaskCard>
            )
        })}
        </>
    )
} ;

export default TaskBoard;