import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getWishes, createWish } from '../../utilities/wishes-api'
import WishListForm from '../../components/WishListForm/WishListForm'
import './WishListPage.css'

export default function WishListPage({ user }) {
    const [wishes, setWishes] = useState([])

    useEffect(() => {
        async function getUserWishes() {
            const wishes = await getWishes(user._id)
            setWishes(wishes)
        }
        getUserWishes()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const wish = { text: event.target.text.value }
        const savedWish = await createWish(wish)
        setWishes([...wishes, savedWish])
    }

    return (
        <div className='wish-page'>
            <h1>Your Game Wish List</h1>
            <div className='wForm'>
                <WishListForm handleSubmit={handleSubmit} formText={'Create'}/>
            {wishes.length > 0 ? (
                <>
                {wishes.map(wish => (
                    <div key={wish._id}>
                        <p>Game: {wish.text}</p>
                        <Link to={`/wishes/${wish._id}`}>Edit Game</Link>
                    </div>
                ))}
                </>
            ) : (
                <p>No games have been added to you list!</p>
            )}
        </div>
        </div>
    )
}