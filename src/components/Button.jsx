export function Button({label, handleClick, optional="", btnType="button"}){
    return (
        <button className={`${optional} bg-sky-500 hover:bg-sky-700 `} onClick={handleClick} type={btnType}> {label}</button>
    )
}


export default Button