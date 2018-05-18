const Cat = require('../model/cats.model');
const Q = require('q');

let service = {};


service.getAllCats = allCats;
service.addNewCat = addCat;


function allCats(){
    let deferred = Q.defer();
    Cat.find(function(err, cats){
        if(err){
            deferred.reject(err.name + " "+err.message);
        }else{
            deferred.resolve(cats)
        }
    });

    return deferred.promise;
}

function addCat(name, owner,age){
    let deferred = Q.defer();
    let newCat = new Cat({
        name: name,
        owner: owner,
        age: age
    });

    newCat.save(function(err, cat){
          if(err){
              deferred.reject(err.name + " "+ err.message);
          }else{
              deferred.resolve(cat);
          }
    });

    return deferred.promise;
}

module.exports = service;
