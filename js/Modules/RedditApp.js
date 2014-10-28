var RedditApp = angular.module('RedditApp', ['ngAnimate','ui.bootstrap.modal', "ngDragDrop"], function($compileProvider){
    SetUrlSanitizationWhitelist($compileProvider);
});

RedditApp.factory( '$exceptionHandler', function () {
    return function (exception) {
        HandleAngularError(exception, 'RedditApp');
    };
});

RedditApp.config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});