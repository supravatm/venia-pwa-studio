import { useEffect, useMemo, useState } from 'react';

import { useAwaitQuery } from '@magento/peregrine/lib/hooks/useAwaitQuery';

import { GET_BLOG_POSTS } from '../../../components/Blog/talons/blog.gql';

export const useBlog = () => {
    const fetchPosts = useAwaitQuery(GET_BLOG_POSTS);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let mounted = true;

        const loadPosts = async () => {
            try {
                const { data } = await fetchPosts({
                    variables: {
                        pageSize: 10,
                        currentPage: 5
                    }
                });
                if (mounted) {
                    setPosts(data.blogPosts.items);
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

        loadPosts();

        return () => {
            mounted = false;
        };
    }, [fetchPosts]);

    return useMemo(
        () => ({
            loading,
            error,
            posts
        }),
        [loading, error, posts]
    );
};