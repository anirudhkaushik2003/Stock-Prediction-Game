import axios from 'axios';

const url = 'http://localhost:5000/posts';

// export const fetchPosts = () => axios.get(url);

export interface IPost {
    firstName: string;
    lastName: string;
    game1: number[];
    game2: number[];
    game3: number[];
    game4: number[];

    game2_opp: number[];
    game3_opp: number[];
    game4_opp: number[];

    modeOrder: number[];
}

export const createPost = (newPost: IPost) => axios.post(url, newPost);