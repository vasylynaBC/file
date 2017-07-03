app.controller("myCtrl", function($scope){
    
    $scope.checker=true;

   
    $scope.sort = "name";
    $scope.users = [
        {
            name:"vasa",
            surname:"tsepak",
            phone: "0639797203",
            age: 34
        },
         {
            name:"Andrain",
            surname:"Sarabryn",
            phone: "0639797203",
            age: 24
        },
         {
            name:"Ola",
            surname:"Lok",
            phone: "0989720993",
            age: 16
        },
         {
            name:"lpsp",
            surname:"Nick",
            phone: "09887767203",
            age: 39
        }
    ];
    
    
    $scope.addUser = function(){
    var x = {
        name: $scope.name,
        surname: $scope.surname,
        phone: $scope.phone,
        age:$scope.age
    };
        $scope.users.push(x);
        
      $scope.name=''; 
      $scope.surname=''; 
      $scope.phone=''; 
      $scope.age=''; 
        
    }
    
    
    
    $scope.removeItem = function(index){
    $scope.users.splice(index, 1);
  }
  $scope.hideBox = function(){
    $scope.checker=!$scope.checker;
  
}
    
})