import React, { useEffect } from 'react';
import BlogPost from '../blogPost';
import { useBlogPost } from '../talons/useBlogPost';

const BlogPostRoute = () => {
    const { post } = useBlogPost();
    const title = post?.name;
    useEffect(() => {
        document.title = title || 'Blog Post';
    }, [title]);
    return <BlogPost />;
};

export default BlogPostRoute;