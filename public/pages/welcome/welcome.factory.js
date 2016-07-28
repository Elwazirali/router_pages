/**
 * Created by Ali on 2016-07-07.
 */
app.factory('welcome',function($firebaseArray){
    var itemsRef = new Firebase("https://statemachines-7242f.firebaseio.com");
    return $firebaseArray(itemsRef);
});
