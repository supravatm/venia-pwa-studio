import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
    query GetBlogPosts($pageSize: Int!, $currentPage: Int!) {
        blogPosts(
            pageSize: $pageSize
            currentPage: $currentPage
        ) {
            items {
                post_id
                name
                short_description
                url_key
                publish_date
            }
            total_count
        }
    }
`;

export const GET_BLOG_POST = gql`
    query GetBlogPost($urlKey: String!) {
        blogPostByUrlKey(urlKey: $urlKey) {
            post_id
            name
            short_description
            post_content
            publish_date
            url_key
        }
    }
`;