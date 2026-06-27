import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../productListing.gql';

export const useProductListing = props => {
    const {
        pageSize = 10,
        currentPage = 1,
        queries = {}
    } = props;

    // Allow query override, similar to Venia/Peregrine pattern
    const operations = {
        getProductsQuery: GET_PRODUCTS,
        ...queries
    };

    const { getProductsQuery } = operations;

    const { loading, error, data } = useQuery(getProductsQuery, {
        variables: {
            pageSize,
            currentPage
        },
        fetchPolicy: 'cache-and-network'
    });

    const products = useMemo(() => {
        return data?.products?.items || [];
    }, [data]);

    const pageInfo = data?.products?.page_info || null;
    const totalCount = data?.products?.total_count || 0;

    return {
        isLoading: loading,
        error,
        products,
        pageInfo,
        totalCount
    };
};