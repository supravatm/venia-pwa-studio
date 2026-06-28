import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import Blog from '../blog';

const BlogRoute = () => {
    const { formatMessage } = useIntl();
    useEffect(() => {
        document.title = formatMessage({
            id: 'blog.pageTitle',
            defaultMessage: 'My Blog'
        });
    }, [formatMessage]);
    return <Blog />;
};

export default BlogRoute;