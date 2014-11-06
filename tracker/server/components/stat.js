
/**
 * stat module
 */
'use strict';

var Q = require('q');
var Search = require('../../search/search');
var statist = require('../../statist');
var helper = require('../../helper');


exports.generate = function (options) {
    var deferred = Q.defer();
    Search.query(options)
        .then(function (queryResult) {
            var data = helper.adaptSearchResult(queryResult);
            var result = statist.dispose(options, data);
            deferred.resolve(result);
        }).catch(function (err) {
            deferred.reject(err);
        });
    return deferred.promise;
};