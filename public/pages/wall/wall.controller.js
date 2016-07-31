/**
 * Created by Ali on 2016-07-30.
 */
app.controller('wallCtrl',function(wallService,posts){
    var vm = this;

    vm.tinymceModel = 'Initial content';

    vm.messagesArray = wallService;

    vm.getContent = function () {

    };

    vm.setContent = function(){
        vm.messagesArray.$add(vm.tinymceModel);
    };

    vm.tinymceOptions = {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    }
});