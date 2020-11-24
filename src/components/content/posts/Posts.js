import React from "react";

import "./Posts.css";

import posts from "../../../data/posts/posts.json";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Button from "../../button/Button";

export default function Posts() {
    return (
        <div className="posts-wrapper">
            {posts.map((post, index) => (
                <div className="post">
                    <div className="post-sidebar">
                        <ArrowUpwardIcon className="upvote" />
                        <span>{post.upvotes}</span>
                        <ArrowDownwardIcon className="downvote"/>
                    </div>
                    <div className="post-title">
                        <img src={post.subreddit.image_src}/>
                        <span className="subreddit-name">r/{post.subreddit.name}</span>  // subreddit name
                        <span className="post-user">Posted by</span>
                        <span className="post-user underline">u/{post.username}</span>
                        <div className="spacer"></div>
                        <Button label="+ JOIN" />
                    </div>
                    <div className="post-body">S</div>
                    <div className="post-footer">S</div>
                </div>
            ))}
        </div>
    );
}