import React from 'react';
import { useProductListing } from './talons/useProductListing';
import classes from './productListing.module.css';
import { useLocation } from 'react-router-dom';



const ProductListing = ({ pageSize = 10 }) => {
    // const { pageSize, currentPage } = props;

    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const currentPage = Number(params.get('page')) || 1;

    const { isLoading, error, products, totalCount, pageInfo } =
        useProductListing({
            pageSize,
            currentPage
        });
    console.log(isLoading);
    if (isLoading) {
        return (
            <div className={classes.root}>
                <h1 className={classes.heading}>Product Listing</h1>
                <p>Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={classes.root}>
                <h1 className={classes.heading}>Product Listing</h1>
                <p className={classes.error}>Error loading products.</p>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>Product Listing</h1>

            <div className={classes.meta}>
                <span>Total products: {totalCount}</span>
                {pageInfo ? (
                    <span>
                        Page {pageInfo.current_page} of {pageInfo.total_pages}
                    </span>
                ) : null}
            </div>

            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <ul className={classes.list}>
                    {products.map(product => {
                        const imageUrl = product?.small_image?.url;
                        const price =
                            product?.price_range?.minimum_price?.regular_price
                                ?.value;
                        const currency =
                            product?.price_range?.minimum_price?.regular_price
                                ?.currency;

                        return (
                            <li key={product.id || product.uid} className={classes.item}>
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt={product.name}
                                        className={classes.image}
                                    />
                                ) : null}

                                <div className={classes.details}>
                                    <h2 className={classes.productName}>
                                        {product.name}
                                    </h2>

                                    <p className={classes.sku}>
                                        SKU: {product.sku}
                                    </p>

                                    {price !== undefined ? (
                                        <p className={classes.price}>
                                            {price} {currency}
                                        </p>
                                    ) : null}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

// ProductListing.defaultProps = {
//     pageSize: 10,
//     currentPage: 19
// };

export default ProductListing;