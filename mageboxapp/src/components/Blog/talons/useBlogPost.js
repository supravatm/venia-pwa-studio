import { useEffect, useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { GET_BLOG_POST } from './blog.gql';

export const useBlogPost = () => {
    const { urlKey } = useParams();

    const fetchBlogPost = useAwaitQuery(GET_BLOG_POST);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [post, setPost] = useState(null);

    useEffect(() => {
        let mounted = true;

        const loadPost = async () => {
            try {
                const { data } = await fetchBlogPost({
                    variables: {
                        urlKey
                    }
                });

                if (mounted) {
                    setPost(data.blogPostByUrlKey);
                }
            } catch (err) {
                if (mounted) {
                    setError(err);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        loadPost();

        return () => {
            mounted = false;
        };
    }, [fetchBlogPost, urlKey]);

    return useMemo(
        () => ({
            loading,
            error,
            post
        }),
        [loading, error, post]
    );
};