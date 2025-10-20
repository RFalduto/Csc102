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



        function validateform() {
                // get values using the correct IDs
                let firstName = document.getElementById("txtFirstName").value.trim();
                console.log("First Name: " + firstName);
                let lastName = document.getElementById("txtLastName").value.trim();
                console.log("Last Name: " + lastName);
                let zipcode = document.getElementById("txtZipCode").value.trim();
                console.log("Zip Code: " + zipcode);

                let message = "";

                //check
                if (firstName == "" || lastName == "") {
                    message = "First Name and Last Name must be filled out";
                }
                else if (firstName.length > 20 || lastName.length > 20) {
                    message = "First Name and Last Name cannot exceed 20 characters";
                }
                else if (zipcode.length !=5) {
                    message = "Zip Code must be 5 digits";
                }
                else{
                    message = "All input valid, the secret message is zimbabwe";
                }

                // build fullname
                let fullname = firstName + " " + lastName;
                console.log("Full Name: " + fullname);
                document.getElementById("message").innerHTML = message;

                return false


            }


