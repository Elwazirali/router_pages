/**
 * Created by Ali on 2016-07-30.
 */
app.factory('wallService',function($firebaseArray){
    var itemsRef = new Firebase("https://statemachines-7242f.firebaseio.com/wallPosts");
    return $firebaseArray(itemsRef);
});
