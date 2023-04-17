const { Schema, model } = require('mongoose');

//schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: DataTypes.NOW,
            //a getter method to format the timestamp on query
        },
        username: { //the user that created this thought
            type: String,
            required: true,
        },
        reactions: {
            //array of nested documents created with the 'reactionSchema'
        },

    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    //     id: false,
    // }
);

//creating a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});