const dateFormat = require('../utils/dateFormat');
const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            // Need to figure out unique
            //unique:
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            // Need to figure out unique
            //unique:
            // must match a valid email address (mongoose matching validation)
        },
        thoughts: {
            // array of _id values referencing the Thought model
        },
        friends: {
            // array of _id values referencing the User model(self-reference)
        }
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