String.prototype.replaceAll = function (search, replace) {
  return this.replace(new RegExp(search, 'g'), replace);
};

String.prototype.ltrim = function () {
  return this.replace(/^\s+/,"");
};

String.prototype.rtrim = function () {
  return this.replace(/\s+$/,"");
};

Array.prototype.likeFilter = function (nodeName, searchTerm) {
  var filtered = this.filter(function(str){
    return clearString(str[nodeName]).toUpperCase().indexOf(searchTerm.toUpperCase()) != -1;
  });

  return filtered;
};

clearString = function(str){
  str = str.toString();
  str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
  str = str.replace(/[àáâãäå]/,"a");
  str = str.replace(/[ÈÉÊË]/,"E");
  str = str.replace(/[Ç]/,"C");
  str = str.replace(/[ç]/,"c");
  return str.replace(/[^a-z0-9]/gi,'');
};

var arr = [
  {name: 'Cezar'},
  {name: 'André'},
  {name: 'Eduardo'},
  {name: 'Carlos'}
];

console.log(arr.likeFilter('name', 'cez'));
