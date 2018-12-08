
(function () {
  var jsdom;
  try {
    jsdom = require("jsdom/lib/old-api.js"); // jsdom >= 10.x
  } catch (e) {
    jsdom = require("jsdom"); // jsdom <= 9.x
  }
  var windowKeys = [];

  jsdom.env({
    html: "",
    virtualConsole: jsdom.createVirtualConsole().sendTo(console),
    created: function (error, window) {
      if (error == null) {
        window["__ScalaJSEnv"] = __ScalaJSEnv;
        window["scalajsCom"] = global.scalajsCom;
        windowKeys = Object.keys(window);
      } else {
        console.log(error);
      }
    },
    scripts: ["/home/muller/Documents/scalarepo/shinlyko/target/scala-2.12/scalajs-bundler/test/shinlyko-test-fastopt-bundle.js"],
    onload: function (window) {
      jsdom.changeURL(window, "http://localhost");
      for (var k in window) {
        if (windowKeys.indexOf(k) == -1)
          global[k] = window[k];
      }

      
      (function() {
        "use strict";
        var namespace = typeof(org) != 'undefined' ? org : {};
        namespace = namespace.scalajs || {};
        namespace = namespace.testinterface || {};
        namespace = namespace.internal || {};
        var bridge = namespace.startBridge || function() {};
        bridge();
      })();
    
    }
  });
})();
