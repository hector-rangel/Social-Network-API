const router = required('express').Router();
const
    {
        getAllUsers,
        createUser,
        getUserById,
        updateUser,
        deleteUser,
        addFriend,
        removeFriend
        // need to add ../../controlers/user-controller.js once created
    } = required('');

// api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Set up POST AND DELETE at /api/users/:userID/friends/:friendId
router
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;
