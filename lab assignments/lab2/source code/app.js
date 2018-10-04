angular.module('tictac', [])
    .controller('game', ['$scope', function($scope) {
        $scope.count = 0;
        $scope.name1=null;
        $scope.name2=null;
        $scope.name3=null;
        $scope.name4=null;
        $scope.name5=null;
        $scope.name6=null;
        $scope.name7=null;
        $scope.name8=null;
        $scope.name9=null;
        $scope.xcount=null;
        $scope.ocount=null;
        $scope.result="game";


        //first
        $scope.first = function() {
           $scope.count++;
          //console.log($scope.count);
            var x = $scope.count % 2
            console.log(x);
            //if even
            if( x === 0)
            {

              $scope.name1 = "X";
                $scope.xcount++;
                console.log($scope.name1);
                if($scope.count>=5) {
                    $scope.verify();
                }

            }
            // odd
            else
            {
                $scope.name1="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            //console.log($scope.name1);
        }

        //second
        $scope.second = function() {
            $scope.count++;

            if($scope.count % 2 === 0)
            {

                $scope.name2 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name2="O";
                $scope.ocount++;

                    if($scope.count>=5) {
                        $scope.verify();
                    }

            }
        };

        //third
        $scope.third = function() {

            $scope.count++;
            if($scope.count % 2 === 0)
            {

                $scope.name3 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name3="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
        };

        //fourth

        $scope.fourth = function() {
            $scope.count++;
            if($scope.count % 2 === 0)
            {

                $scope.name4 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name4="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
        };

        //fifth
        $scope.fifth = function() {
            $scope.count++;
            if($scope.count % 2 === 0)
            {

                $scope.name5 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name5="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
        };


        //sixth
        $scope.sixth = function() {
            $scope.count++;
            if($scope.count % 2 === 0)
            {

                $scope.name6 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name6="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
        };

        //seven
        $scope.seven = function() {
            $scope.count++;

            if(($scope.count % 2 )=== 0)
            {

                $scope.name7 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name7="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
        };


        //eight
        $scope.eight = function() {
            $scope.count++;

            if($scope.count % 2 === 0)
            {

                $scope.name8 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name8="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
        };

        //nine
        $scope.nine = function() {
            $scope.count++;
            if($scope.count % 2 === 0)
            {

                $scope.name9 = "X";
                $scope.xcount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
            else
            {
                $scope.name9="O";
                $scope.ocount++;
                if($scope.count>=5) {
                    $scope.verify();
                }
            }
        };
 // all posible scenarios
        $scope.verify = function() {


            console.log($scope.result);
            if($scope.xcount >2)
            {
                console.log($scope.name1);
                console.log($scope.name5);
                console.log($scope.name9);

                if($scope.name1 === "X" && $scope.name5 === "X" && $scope.name9 === "X")
                {
                     alert("X won the game");
                    $scope.result ="X won";
                }
                if($scope.name2 === "X" && $scope.name5 === "X" && $scope.name8 === "X")
                {
                    alert("X won the game");
                    $scope.result ="X won";
                }
                if($scope.name1 ==="X" && $scope.name2 ==="X" && $scope.name3 ==="X")
                {
                    alert("X won the game");
                    $scope.result ="X won";
                }
                if($scope.name1 ==="X" && $scope.name4 ==="X" && $scope.name7 ==="X")
                {
                    alert("X won the game");
                    $scope.result ="X won";
                }
                if($scope.name1 ==="X" && $scope.name5 ==="X" && $scope.name9 ==="X")
                {
                    alert("X won the game");
                    $scope.result ="X won";
                }
                if($scope.name3 ==="X" && $scope.name5 ==="X" && $scope.name7 ==="X")
                {
                    alert("X won the game");
                    $scope.result ="X won";
                }
                if($scope.name7 ==="X" && $scope.name8 ==="X" && $scope.name9 ==="X")
                {
                    alert("X won the game");
                    $scope.result ="X won";
                }
                if($scope.name4 ==="X" && $scope.name5 ==="X" && $scope.name6 ==="X")
                {
                    alert("X won the game");
                    $scope.result ="X won";
                }


            }

            if($scope.ocount>2) {

                console.log($scope.ocount);

                if($scope.name1 ==="O" && $scope.name5 ==="O" && $scope.name9 ==="O")
                {
                    alert("O won")
                    $scope.result ="O won";
                }
                if($scope.name2 ==="O" && $scope.name5 ==="O" && $scope.name8 ==="O")
                {
                    alert("O won")
                    $scope.result ="O won";
                }

                if($scope.name1 ==="O" && $scope.name2 ==="O" && $scope.name3 ==="O")
                {
                    alert("O won")
                    $scope.result ="O won";
                }
                if($scope.name4 ==="O" && $scope.name5 ==="O" && $scope.name6 ==="O")
                {
                    alert("O won")
                    $scope.result ="X won";
                }
                if($scope.name1 ==="O" && $scope.name4 ==="O" && $scope.name7 ==="O")
                {
                    alert("O won")
                    $scope.result ="O won";
                }
                if($scope.name3 ==="O" && $scope.name6 ==="O" && $scope.name9 ==="O")
                {
                    alert("O won")
                    $scope.result ="O won";
                }
                if($scope.name3 ==="O" && $scope.name5 ==="O" && $scope.name7 ==="O")
                {
                    alert("O won")
                    $scope.result ="O won";
                }
                if($scope.name7 ==="O" && $scope.name8 ==="O" && $scope.name9 ==="O")
                {
                    alert("O won")
                    $scope.result ="O won";
                }

            }
        }

        console.log($scope.result);

    }]);