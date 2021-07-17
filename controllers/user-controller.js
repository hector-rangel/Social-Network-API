const { User } = require('../models');

const userController = {
    // get all users /api/users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    // get one user by id /api/users/:id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    // create a User POST
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    // update USER PUT
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400),json(err));
    },
    // Delete User 
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    // add a new friend to a user's friend list POST
    // /api/users/:usersId/friends/:friendId
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId  }},
            { new: true }
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
    // DELETE to remove friend from a users friend list 
    // /api/users/:usersId/friends/:friendId
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData =>  res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    }
};


module.exports = userController;
