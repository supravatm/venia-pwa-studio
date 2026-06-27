import { gql } from '@apollo/client';


export const GET_PRODUCTS = gql`
    query GetProducts($pageSize: Int = 10, $currentPage: Int = 2) {
        products(search: "", pageSize: $pageSize, currentPage: $currentPage) {
            items {
                id
                uid
                name
                sku
                url_key
                small_image {
                    url
                    label
                }
                price_range {
                    minimum_price {
                        regular_price {
                            value
                            currency
                        }
                    }
                }
            }
            total_count
            page_info {
                current_page
                total_pages
            }
        }
    }
`;