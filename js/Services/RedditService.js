RedditApp.factory('getPosts', function($http, $rootScope){
    var jsonData = {
        getData: function(searchTerm){
            $rootScope.isLoading = true;
            var urlString = "http://www.reddit.com/r/" + searchTerm.toString().trim()+ "/.json";
            var promise = $http.get(urlString).then(function (response){
                return response.data
            });
            return promise
        }
    };
    return jsonData;
});