export default function WishListForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" />
            <button type="submit">Submit</button>
        </form>
    )
}