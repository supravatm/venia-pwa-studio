import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useBlogPost } from './talons/useBlogPost';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import classes from './blog.module.css';

const BlogPost = () => {
    const { loading, error, post } = useBlogPost();
    const { formatMessage } = useIntl();
    if (loading) {
        return (
            <LoadingIndicator global>
                <FormattedMessage
                    id={'blog.loadingIndicatorMessage'}
                    defaultMessage="Fatching Data..."
                />
            </LoadingIndicator>
        );
    }

    if (error) {
        return <div className={classes.message}>
            <FormattedMessage
                id={'blog.loadingIndicatorErrorMessage'}
                defaultMessage="Unable to load post."
            /></div>;
    }

    if (!post) {
        return <div className={classes.message}>
            <FormattedMessage
                id={'blog.loadingIndicatorNotFound'}
                defaultMessage="Post not found."
            />
        </div>;
    }

    return (
        <div className={classes.root}>

            <Link
                to="/blog"
                className={classes.back}
            >
                <FormattedMessage
                    id={'blog.backMessage'}
                    defaultMessage="← Back to Blog"
                />
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