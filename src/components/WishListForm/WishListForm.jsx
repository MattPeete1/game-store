export default function WishListForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <label>Add to your wish list!<br /></label>
            <input type="text" name="text" />
            <button type="submit">Submit</button>
        </form>
    )
}