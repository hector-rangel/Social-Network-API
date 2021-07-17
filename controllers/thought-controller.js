const { Thought, User } = require('../models');

const thoughtController = {
    // add thought to user /api/thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // GET thought by id /api/thoughts/:id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(400).json({ message: 'No thought with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    // create a thought POST (don't forget to push the created thought's _id to the associated user's thoughts array field)
    // /api/thoughts
    createThought({ body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                {_id: params.pizzaId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    // UPDATE thoughts PUT by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new:true, runValidators: true })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    // DELETE thoughts by id
    deleteThought({ params}, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    }
};
module.exports = thoughtController;