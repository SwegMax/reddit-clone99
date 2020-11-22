import { Subreddit } from "../subreddit/Subreddit";

export interface Post {
    title: string;
    description?: string;
    image_src?: string;
    upvotes: Number;
    comments: string;
    subreddit: Subreddit;
    username: string;
}