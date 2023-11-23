import PostMessage from '../models/postMessage.js';


export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    res.send('Post Creation');

    try{

        await newPost.save();

        res.status(201).json(newPost);

    }
    catch (error) {
        res.status(409).json({ message: error.message });
        
    }
};