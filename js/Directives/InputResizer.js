RedditApp.directive('expandTo', function(){
    return{
        restrict: 'A',
        link: function($scope, $element, $attributes){
            var expandSize = $attributes['expandTo'] || '50px';
            var defaultSize = $element.width();

            $element.on('focus', function(){
                $element.animate({ width: expandSize}, 500, function() {});
            }).on('blur', function(){
                $element.animate({ width: defaultSize + 'px'}, 500, function() {});
            });
        }
    }
});