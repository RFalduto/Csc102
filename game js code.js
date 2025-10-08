        function playGame(){
            console.log("game function was called")

            let roll1 = random();

            let roll2 = random();

            let result = "";


            console.log("roll 1= " + roll1)
            console.log("roll 2= " + roll2)

            let sum = roll1 + roll2;

            document.getElementById("roll1").innerHTML = "roll 1 = " + roll1;
            document.getElementById("roll2").innerHTML = "roll 2 = " + roll2;
            document.getElementById("sum").innerHTML = "sum = " + sum;

            if (sum == 7 || sum == 11){
                console.log("you lose");
                result = "you lose";
            }
            else if(roll1 == roll2){
                console.log("you win");
                result = "you win";
            }
            else{
                console.log("draw, please play again");
                result = "draw, please play again";
                
            }
            document.getElementById("result").innerHTML = "result = " + result;
        } 

        function random(){
            let dice = Math.ceil(Math.random()* 6)
            return dice
        }

