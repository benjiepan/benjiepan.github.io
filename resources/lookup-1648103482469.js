(function(window, undefined) {
  var dictionary = {
    "4a660cea-1496-495c-bd06-15d13ce55a68": "Results - Mobile",
    "18008313-0e93-4c26-a752-8ff3cdf953bb": "Personal Data - Option 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Results - Desktop",
    "f6a52dc8-2219-4e9c-8e97-bfa1923eabb6": "Personal Data - Option 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);