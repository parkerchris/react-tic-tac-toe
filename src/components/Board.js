import Box from "./Box";
import "./Board.css"


const Board = ({ board, handleClick }) => {
    return (
        <div className="board">
            {board.map((value,idx) => {
                return <Box value={value} handleClick={() => value === null && handleClick(idx)} />
            })}
            
        </div>
        
    )
}

/* Time stamp 13:17 
https://www.youtube.com/watch?v=c8dXnuVwmA8
*/


export default Board;