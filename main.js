String.prototype.replaceAll = function (search, replace) {
  return this.replace(new RegExp(search, 'g'), replace);
};
