/**
 * Created by Ali on 2016-07-07.
 */
app.controller('welcomeCtrl',function(welcome){
    var vm = this;
    vm.testing = 'testing child controller';

    vm.data = welcome;


    vm.postMessage = function(){
        vm.data.$add({"message": vm.message});
    };




});