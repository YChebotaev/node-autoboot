var path = require('path');

var bootFile = path.join(process.cwd(), 'boot.js');
var ready = false;

function autoboot(_callback){

  function callback(error){
    ready = true;
    if (typeof _callback === 'function'){
      _callback(error);
    }
  }

  if (ready){
    callback();
  } else {
    try{
      require(bootFile)(callback);
    } catch (err){
      callback(err);
    }
  }

}

module.exports = autoboot;