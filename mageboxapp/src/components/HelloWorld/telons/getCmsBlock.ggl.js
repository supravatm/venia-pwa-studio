import { gql } from '@apollo/client';

export const GET_CMS_BLOCK_LOREM = gql`
    query getCmsBlock($identifier: [String]!) {
        cmsBlocks(identifiers: $identifier) {
            items {
                title
                content
                identifier
            }
        }
    }
`;