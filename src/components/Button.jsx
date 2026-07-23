export function Button({label, handleClick, optional="", btnType="button"}){
    return (
        <button className={optional} onClick={handleClick} type={btnType}> {label}</button>
    )
}


export default Button