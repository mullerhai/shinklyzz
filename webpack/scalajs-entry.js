if (process.env.NODE_ENV === "production") {
    const opt = require("./shinlyko-opt.js");
    opt.entrypoint.main();
    module.exports = opt;
} else {
    var exports = window;
    exports.require = require("./shinlyko-fastopt-entrypoint.js").require;
    window.global = window;

    const fastOpt = require("./shinlyko-fastopt.js");
    fastOpt.entrypoint.main()
    module.exports = fastOpt;

    if (module.hot) {
        module.hot.accept();
    }
}
