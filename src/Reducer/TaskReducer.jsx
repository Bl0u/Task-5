export function TaskReducer(state, action){
    switch (action.type){
        case "ADD_TASK":
            return [...state, {id: Date.now(), text: action.text, completed:false}]
        case "TOGGLE_TASK":
            return state.map((task) => task.id === action.id ? {...task, completed: !task.completed} : task ) ;
        case "DELETE_TASK":
            return state.filter((task) => {
                console.log("here nigga: " + action.id) ;
                return task.id !== action.id
            }) ;
        case "STATUS_TASK":
            return state.find(task => task.id === action.id) ;
        default:
            return state ;
    }

}

export default TaskReducer ;