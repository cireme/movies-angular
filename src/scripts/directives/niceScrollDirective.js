define(['app', 'nicescroll'], function(gobbmovies){
	gobbmovies.directive('ngNiceScroll', function(){
		return {
	    	restrict: 'AEC',
        	link: function($scope, $element, $attrs) {
        		$element.niceScroll();
        	}
	    };
	});
});