import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    game1: [Number],
    game2: [Number],
    game3: [Number],
    game4: [Number],

    game2_opp: [Number],
    game3_opp: [Number],
    game4_opp: [Number],

    modeOrder: [Number],

    
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;