const router = require('express').Router();
const
    {
        getAllThoughts,
        createThought,
        getThoughtById,
        updateThought,
        deleteThought,
        addReaction,
        removeReaction
        // need to add ../../controlers/thought-controller.js once created
    } = require('../../controllers/thought-controller');

// SET up GET at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// Set up GET one, PUT /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

// create thought and add to user
router 
    .route('/:userId')
    .post(createThought);

router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);
// Set up POST and DELETE /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    // create a POST reaction stored in a single thought's reactions array
    .post(addReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    // pull and remove a reaction by the reactions reactionId value *removeReactionID*??
    .delete(removeReaction);


module.exports = router;

