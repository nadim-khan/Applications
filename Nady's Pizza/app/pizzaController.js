app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'OUR MENU',
            
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers','No-Topping'],
            
            toppings: []
        };

        $scope.addTopping = function(topping){
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
        };

        $scope.Menu={title : 'Our Menu'};

       /* $scope.changeMainDish = function (item) {
            $scope.mainDish = item;
        };*/
        $scope.pizza= [
            {name : "Cheese Pizza",price : "$5 usd"},
            {name : "Pepperoni Pizza",price : "$3 usd"},
            {name : "Margherita Pizza",price : "$2.1 usd"},
            {name : "BBQ Chicken Pizza",price : "$4.5 usd"},
            {name : "Combo Pizza",price : "$5.5 usd"}
        ];
        $scope.changeMainDish = function (item) {
            $scope.mainDish = item;
        };
        
// Use of watch object
        $scope.$watch('mainDish',function(newValue,oldValue){
            //alert(oldValue); -- initially undefined
            if(newValue==="BBQ Chicken Pizza")
                alert('Great Choice --> '+newValue);
        });
    }
]);