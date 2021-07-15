const dateFormat = require('../utils/dateFormat');
const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: [ true, 'Need email address' ],
            unique: true
            // must match a valid email address (mongoose matching validation)
        },
        // array of _id values referencing the Thought model,
        thoughts: [],
            // array of _id values referencing the User model(self-reference)
        friends: []
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;