# **CP FUNCTIONS**

It's a project to create functions that are not in Javascript language like this:

```js
var str = 'Cezar, Colar, Amar';
str.replaceAll('ar', 'bar');
```

**_Instalation:_**

```bash
bower install cp-functions --save
```

then:

```html
<script src="bower_components/cp-functions/main.js"></script>
```

**_List of functions until now:_**
- String.replaceAll();
- String.ltrim();
- String.rtrim();
- Array.likeFilter();

# Examples

String.replaceAll(search, replace) :

```js
var str = 'Cezar, Colar, Amar';
str.replaceAll('ar', 'bar');
//Result: 'Cezbar, Colbar, Ambar'
```

String.ltrim() :

```js
var str = '           Cezar';
str.ltrim();
//Result: 'Cezar'
```

String.rtrim() :

```js
var str = 'Cezar              ';
str.rtrim();
//Result: 'Cezar'
```

Array.likeFilter(nodeName, searchTerm) :

```js
var arr = [
  {name: 'Cezar'},
  {name: 'André'},
  {name: 'Eduardo'},
  {name: 'Carlos'}
];

arr.likeFilter('name', 'cez');
//Result: [{name: 'Cezar'}]
```
