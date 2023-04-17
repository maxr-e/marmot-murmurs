const { Schema, model } = require('mongoose');

//schema to create Thought model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            maxlength: 30,
            minlength: 2,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^([\w-\.]+@([|w-]+\.)+[|w-]{2,4})?$/, //must match a valid email address
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'}],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'}],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//creating a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//intialize the model
const User = model('User', username);

module.exports = User;