(function () {
  var urls;//%%URLS%% // this will be replaced with a real URL list.

  function url(hash) {
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i];
      if (url.hash === hash) {
        return url.url;
      }
    }
    return null;
  }

  function main() {
    var hash = location.hash.split('#')[1];
    if (!hash) {
      return;
    }

    var redirect = url(hash);
    if (redirect) {
      location.href = redirect;
    }
  }
  window.addEventListener('hashchange', main);
  window.addEventListener('load', main);
  main();
})();
