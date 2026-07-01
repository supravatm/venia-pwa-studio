import { useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CMS_BLOCK_LOREM } from './getCmsBlock.ggl';


export const useCmsBlock = () => {
    const { data, loading, error } = useQuery(GET_CMS_BLOCK_LOREM, {
        variables: { identifier: ['lorem-ipsum-block'] },
        fetchPolicy: 'cache-and-network'
    });
    return useMemo(
        () => ({
            block: data?.cmsBlocks?.items?.[0] || null
        }),
        [loading, error, data]
    );
};