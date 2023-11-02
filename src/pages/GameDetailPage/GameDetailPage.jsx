import { useParams } from "react-router-dom";
import './GameDetailPage.css';

export default function GameDetailPage({games}) {
  let { gameName } = useParams();
  let game = games.find(gam => gam.title === gameName);

  return (
    <div className="details-container">
        <img src={`${game.posterPath}`} alt=""/>
      <div className="details-info">
        <h1>{game.title}</h1>
        <h3>Released: {new Date(game.releaseDate).toLocaleDateString()}</h3>
        <h3>Description</h3>
        <p>{game.description}</p>
        <h3>Content Rating</h3>
        <p>{game.conetentRating}</p>
        <h3>Developers:</h3>
        <ul>
          {
            game.devs.map(developer => {
              return <li key={developer}>{developer}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}