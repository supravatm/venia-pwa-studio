import React from 'react';
import { Link } from 'react-router-dom';

import { useBlogPost } from './talons/useBlogPost';

import classes from './blog.module.css';

const BlogPost = () => {
    const { loading, error, post } = useBlogPost();
    
    if (loading) {
        return <div className={classes.message}>Loading...</div>;
    }

    if (error) {
        return <div className={classes.message}>Unable to load post.</div>;
    }

    if (!post) {
        return <div className={classes.message}>Post not found.</div>;
    }

    return (
        <div className={classes.root}>

            <Link
                to="/blog"
                className={classes.back}
            >
                ← Back to Blog
            </Link>

            <h1 className={classes.title}>
                {post.name}
            </h1>

            <div className={classes.date}>
                {new Date(post.publish_date).toLocaleDateString()}
            </div>

            <div
                className={classes.shortDescription}
                dangerouslySetInnerHTML={{
                    __html: post.short_description
                }}
            />

            <div
                className={classes.content}
                dangerouslySetInnerHTML={{
                    __html: post.post_content
                }}
            />

        </div>
    );
};

export default BlogPost;