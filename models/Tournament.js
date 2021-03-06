const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TournamentSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    game: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    },

    date: {
        type: Date,
        default: Date.now
    },

    brackets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Bracket"
        }
    ],

    players: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            },

            //pending, approved, declined
            status: {
                type: String,
                required: true
            }
        }
    ],

    judges: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            },

            //pending, approved, declined
            status: {
                type: String,
                required: true
            }
        }
    ],

    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: "Notification"
        }
    ],

    result: [
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: "User"
            },
            position: {
                type: Number,
                required: true
            }
        }
    ],
    
    // the possible values are new, open, closed, running, ended
    status: {
        type: String,
        required: true
    }
});

module.exports = Tournament = mongoose.model("tournaments", TournamentSchema);