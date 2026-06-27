/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

function localIntercept(targets) {
    const veniaTargets = targets.of('@magento/venia-ui');

    veniaTargets.routes.tap(routes => {
        // hello world
        routes.push({
            name: 'HelloWorldRoute',
            pattern: '/hello-world',
            exact: true,
            path: require.resolve('./src/components/HelloWorld/helloWorld.js')
        });
        // simple-form
        routes.push({
            name: 'SimpleFormRoute',
            pattern: '/simple-form',
            exact: true,
            path: require.resolve('./src/components/SimpleForm/simpleForm.js')
        });

        // sample-product-listing
        routes.push({
            name: 'SimpleProductListingRoute',
            pattern: '/sample-product-listing',
            exact: true,
            path: require.resolve('./src/components/ProductListing')
        });

        routes.push({
            name: "MyGreetingRoute",
            pattern: "/greeting/:who?",
            path: require.resolve("./src/components/GreetingPage"),
        });

        // Blog Page
        routes.push({
            name: 'BlogRoute',
            pattern: '/blog',
            exact: true,
            path: require.resolve('./src/components/Blog/routes/blog')
        });
        // Blog Post Page
        routes.push({
            name: 'BlogPostRoute',
            pattern: '/blog/:urlKey',
            exact: true,
            path: require.resolve('./src/components/Blog/routes/blogPost')
        });
        return routes;
    });
}

module.exports = localIntercept;