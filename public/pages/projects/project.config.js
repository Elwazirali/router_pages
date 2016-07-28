/**
 * Created by Ali on 2016-07-16.
 */
app.config(function ($stateProvider,$urlRouterProvider){
    $stateProvider.state('projects',{
        url:'/projects',
        templateUrl:'pages/projects/project.tpl.html',
        controller:'projectsCtrl as vm'
    })
});

