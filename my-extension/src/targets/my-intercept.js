module.exports = targets => {
    console.log(">>> my-extension intercept loaded");
    const peregrineTargets = targets.of("@magento/peregrine");

    const talonsTarget = peregrineTargets.talons;

    talonsTarget.tap(config => {
        config.ProductFullDetail
            .useProductFullDetail
            .wrapWith("my-extension");
    });

    const builtins = targets.of("@magento/pwa-buildpack");

    builtins.specialFeatures.tap(features => {
        features["my-extension"] = {
            esModules: true
        };
    });
};