import { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

import { usePagination } from '@magento/peregrine/lib/hooks/usePagination';

import { GET_BLOG_POSTS } from './blog.gql';

export const useBlog = () => {
    const history = useHistory();

    const pageSize = 12;

    // Venia pagination
    const [paginationValues, paginationApi] = usePagination();

    const { currentPage, totalPages } = paginationValues;
    const { setCurrentPage, setTotalPages } = paginationApi;

    // Apollo query
    const [
        runQuery,
        {
            called,
            loading,
            error,
            data
        }
    ] = useLazyQuery(GET_BLOG_POSTS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    /**
     * Load posts whenever page changes
     */
    useEffect(() => {
        runQuery({
            variables: {
                pageSize,
                currentPage
            }
        });
    }, [runQuery, currentPage]);

    /**
     * Update total pages from GraphQL response
     */
    useEffect(() => {
        if (!data?.blogPosts?.page_info) {
            return;
        }
        setTotalPages(data.blogPosts.page_info.total_pages);
    }, [data, setTotalPages]);

    /**
     * Optional: Sync URL with current page
     */
    useEffect(() => {
        history.replace(`/blog?page=${currentPage}`);
    }, [currentPage, history]);

    const pageControl = useMemo(
        () => ({
            currentPage,
            totalPages,
            setPage: setCurrentPage
        }),
        [currentPage, totalPages, setCurrentPage]
    );

    return {
        loading: called ? loading : true,
        error,
        posts: data?.blogPosts?.items || [],
        totalCount: data?.blogPosts?.total_count || 0,
        pageControl
    };
};