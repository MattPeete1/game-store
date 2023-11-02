const Wish = require('../../models/wish')

async function createWish(req, res) {
    try {
        const wishData = { ...req.body, user: req.user._id };
        const wish = await Wish.create(wishData);
        res.status(201).json(wish);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function deleteWish(req, res) {
    try {
        const wish = await Wish.findByIdAndDelete(req.params.id)
        await wish.deleteOne()
        res.status(204)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function updateWish(req, res) {
    try {
        const wish = await Wish.findById(req.params.id)
        wish.text = req.body.text
        await wish.save()
        res.status(200).json(wish)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function index(req, res) {
    try {
        const userId = req.params.id;
        const wishes = await Wish.find({ user: userId });
        res.status(200).json(wishes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createWish,
    deleteWish,
    updateWish,
    index
};
