import "./Box.css"

const Box = ({ value, handleClick }) => {
    
    const style = value === "X" ? "box x" : "box o"
    
    return (
        <button className={style} onClick={handleClick}>{value}</button>
    )
}

export default Box;