/**
 * Created by Ali on 2016-07-30.
 */
app.config(function ($provide,$stateProvider,$urlRouterProvider){

    $stateProvider.state('wall',{
        url:'/wall',
        templateUrl:'pages/wall/wall.tpl.html',
        controller:'wallCtrl as vm',
        resolve: {posts:function(wallService){
            return wallService;
        }}
    });
});