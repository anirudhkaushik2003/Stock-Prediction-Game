import axios from 'axios';

const url = 'http://localhost:5000/posts';

// export const fetchPosts = () => axios.get(url);

export interface IPost {
    firstName: string;
    lastName: string;
    days: number[];
}

export const createPost = (newPost: IPost) => axios.post(url, newPost);