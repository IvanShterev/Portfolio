
interface TicTacToeProps {
    show: (value: boolean) => void;
}

const TicTacToe: React.FC<TicTacToeProps> = ({show}) => {
    return (
        <>
            <div className="tic-tac-toe-cont">
                
            </div>
        </>
    )

}

export default TicTacToe;