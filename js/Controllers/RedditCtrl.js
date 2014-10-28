
RedditApp.controller("RedditCtrl", function RedditCtrl(getPosts, $rootScope, $scope, $modal, $log) {

    //Init
    $scope.searchTerm = "funny";
    $scope.dragItem = {};
    $rootScope.isLoading = false;

    //initial load of the reddit data
    getPosts.getData("funny").then(function(data){

        $rootScope.isLoading = false;
        parseAPIData(data.data.children);
    });

    /*--------------------------------------------------functions--------------------------------------------------*/

    //search function to retrieve data
    $scope.searchReddit = function(){
        getPosts.getData($scope.searchTerm).then(function(data){
            parseAPIData(data.data.children);
        });
    };


    $scope.openModal = function (post) {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: ModalInstanceCtrl,
            resolve: {
                post: function () {
                    return $scope.posts[$scope.posts.indexOf(post)];
                }
            }
        });

        modalInstance.result.then(function (post) {
            $scope.selected = post;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    var ModalInstanceCtrl = function ($scope, $modalInstance, $window, post) {

        $scope.post = post;

        $scope.ok = function () {
            $modalInstance.close($scope.post);
        };

        $scope.openLink = function(link){
            $window.open(link)

        };

        $scope.emailLink = function(){
            $window.open("mailto:?subject=Cool Reddit Link&body=+" + post.data.url)
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    function parseAPIData(result){
        $scope.posts = [];
        angular.forEach(result, function(object, key){
            $scope.posts.push(object);
        });
    }


});