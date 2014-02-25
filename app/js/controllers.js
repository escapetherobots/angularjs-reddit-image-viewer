'use strict';

var app = angular.module('myApp', []);

function RedditCtrl($scope, $http) {
    $scope.redditPosts = [];
    var dataUrl = "http://www.reddit.com/r/earthporn+villageporn+cityporn+spaceporn+waterporn+abandonedporn+animalporn+humanporn+botanicalporn+adrenalineporn+destructionporn+movieposterporn+albumartporn+machineporn+newsporn+geekporn+bookporn+mapporn+adporn+designporn+roomporn+militaryporn+historyporn+quotesporn+skyporn+fireporn+infrastructureporn.json?limit=100";
    var tempReddit = [];
	$http.get(dataUrl).then(function(response){
        tempReddit  = response.data.data.children;
        //only grab images - this should be done in the view via filter...?
        angular.forEach(tempReddit, function(post, key) {
            if (post.data.url.match(/\.(jpe?g|gif|png)$/i)) {
                $scope.redditPosts.push(post);
            }
	    })
    })
}