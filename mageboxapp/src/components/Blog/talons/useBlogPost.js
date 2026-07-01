import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_BLOG_POST } from './blog.gql';

export const useBlogPost = () => {
    const { urlKey } = useParams();

    const { data, loading, error } = useQuery(GET_BLOG_POST, {
        variables: { urlKey },
        fetchPolicy: 'cache-and-network'
    });

    return useMemo(
        () => ({
            loading,
            error,
            post: data?.blogPostByUrlKey || null
        }),
        [loading, error, data]
    );
};