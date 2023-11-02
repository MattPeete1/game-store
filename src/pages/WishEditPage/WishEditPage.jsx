import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { updateWish, deleteWish } from '../../utilities/wishes-api'
import WishListForm from '../../components/WishListForm/WishListForm'

export default function WishEditPage({ user }) {
    const [wish, setWish] = useState({})
    const { wishId } = useParams()

    async function handleSubmit(event) {
        event.preventDefault()
        const wish = { text: event.target.text.value }
        const savedWish = await updateWish(wish, wishId)
        setWish(savedWish)
    }

    async function handleDelete() {
        await deleteWish(wishId)
    }

    return (
        <div>
            <h1>Edit Your Wish List Game Info</h1>
            { wish && <p>Game: {wish.text}</p> }
            <WishListForm handleSubmit={handleSubmit} formText={'Edit'}/>
            <button onClick={handleDelete}>Delete Wish List Item</button>
        </div>
    )
}