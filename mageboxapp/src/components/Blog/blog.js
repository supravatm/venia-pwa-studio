import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useBlog } from './talons/useBlog';
import classes from './blog.module.css';
import Pagination from '@magento/venia-ui/lib/components/Pagination';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';

const Blog = () => {
    const { loading, error, posts, pageControl, handlePageChange } = useBlog();
    
    if (loading) {
        return (
            <LoadingIndicator global>
                <FormattedMessage
                    id={'loadingIndicator.message'}
                    defaultMessage="Fatching Data..."
                />
            </LoadingIndicator>
        );
    }

    if (error) {
        return (
            <div className={classes.message}>
                Something went wrong while loading blog posts.
            </div>
        );
    }

    if (!posts.length) {
        return (
            <div className={classes.message}>
                No blog posts found.
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <h1 className={classes.pageTitle}>
                    Blog
                </h1>

                <p className={classes.pageDescription}>
                    Discover the latest articles, updates and insights.
                </p>
            </div>

            <div className={classes.blogGrid}>
                {posts.map(post => (
                    <article
                        key={post.post_id}
                        className={classes.card}
                    >
                        <div className={classes.cardBody}>
                            <span className={classes.date}>
                                {new Date(post.publish_date).toLocaleDateString()}
                            </span>
                            <h2 className={classes.title}>
                                {post.name}
                            </h2>
                            <div
                                className={classes.description}
                                dangerouslySetInnerHTML={{
                                    __html: post.short_description
                                }}
                            />
                            <Link
                                className={classes.readMore}
                                to={`/blog/${post.url_key}`}>
                                Read More →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
            {/* Pagination */}
            <Pagination pageControl={pageControl} />
        </div>
    );
};
export default Blog;