const router = required('express').Router();
const
    {

        // need to add ../../controlers/thought-controller.js once created
    } = require('');

// SET up GET and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts);

    // create new thought id to the associated users thought array
router



// Set up GET one, PUT and DELTE /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Set up POST and DELETE /api/thoughts/:thoughtId/reactions
router
    // create a POST reaction stored in a single thought's reactions array
    .post()
    // pull and remove a reaction by the reactions reactionId value *removeReactionID*??
    .delete()
    

