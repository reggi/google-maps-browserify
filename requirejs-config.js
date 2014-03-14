'use strict';
// above is most likely the only good practice in the entire file

module.exports = {
    baseUrl: './public',
    entry: '../main',
    paths: {
        // Warning below are bad practices -- for demonstration only

        // jquery and backbone are loaded from cdn
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
        'backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js',

        // For whatever reason we don't use underscore from npm or from a cdn, but pulled the file down from somewhere
        // Unfortunately we are not even sure which underscore version this is ;)
        'underscore': 'vendor/underscore-min',
        'google': 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false',
    },
    shim: {
        'google': {
            exports: 'window.google'
        },
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            // deps are slightly adapted from a typical requirejs config to provide a big more information
            // 1. what is the dependent module 
            // 2. under which name does the dependent expect to find it on the window
            // original was:  deps: ['jquery', 'underscore']
            deps: {
                jquery: '$',
                underscore: '_'
            },
            exports: 'Backbone'
        },
    }
};