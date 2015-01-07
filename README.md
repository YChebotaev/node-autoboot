node-autoboot
=============

Node.js app boot helper

install
-------

there is no npm module for this package

```bash
npm install --save YChebotaev/node-autoboot
```

usage
-----

create `boot.js` in working directory of your app:

```javascript
// boot.js in working directory
module.exports = function(ready){
  ready();
};
```

```javascript
// your app code
require('autoboot')(function(err){
  // at this point app environmet are ready
});
```
