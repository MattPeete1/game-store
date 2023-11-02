import GameCard from "../../components/GameCard/GameCard"
import "./GamePage.css"

export default function GamePage(props) {
    return (
        <div className="games-container">
            {
                props.games.map(game => {
                    return <GameCard key={game.title} game={game} />
                })
            }
        </div>
    )
}