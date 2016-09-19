String.prototype.replaceAll = function (search, replace) {
  return this.replace(new RegExp(search, 'g'), replace);
};

String.prototype.ltrim = function () {
  return this.replace(/^\s+/,"");
};

String.prototype.rtrim = function () {
  return this.replace(/\s+$/,"");
};
