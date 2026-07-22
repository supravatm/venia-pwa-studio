import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

const BlogLink = () => {

    const { formatMessage } = useIntl();
    const translatedText = formatMessage({
        id: "block.blogLink",
        defaultMessage: "Blogs",
    });
    return (
        <Link to="/blog">
            {translatedText}
        </Link>
    );
};

export default BlogLink;