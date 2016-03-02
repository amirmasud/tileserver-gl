'use strict';

module.exports.getTileUrls = function(
    protocol, domains, host, path, tilePath, format, key) {
  domains = domains && domains.length > 0 ? domains : [host];
  var query = (key && key.length > 0) ? ('?key=' + key) : '';
  if (path == '/') {
    path = '';
  }

  var uris = [];
  domains.forEach(function(domain) {
    uris.push(protocol + '://' + domain + path +
              tilePath.replace('{format}', format).replace(/\/+/g, '/') +
              query);
  });

  return uris;
};
