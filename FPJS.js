let element = document.getElementById('accountInfo');
let paragraphs = element.getElementsByTagName('p');

let accountinfoarray = Array.from(paragraphs).map(p => p.textContent);
console.log(accountinfoarray);

Array.from(paragraphs).forEach(function(p, index){
    if (p.id !== "editable") return;
    p.style.cursor = 'pointer';
    p.onclick = function() {
        let currentValue = p.textContent.split(":")[1].trim();
        let newValue = prompt("Edit: ");
        p.textContent = p.textContent.split(":")[0] + ": " + newValue;
        accountinfoarray = Array.from(paragraphs).map(p => p.textContent);
    console.log(accountinfoarray);
    };
});

            function toggleDropdown() {
                btn = document.getElementById('toggleDropdown');
                content = document.getElementById('dropdownContent');
                isHidden = content.style.display === 'none' || content.style.display === '';
                if (isHidden) {
                    content.style.display = 'block';
                    btn.setAttribute('aria-expanded', 'true');
                    btn.textContent = 'Hide▴';
                } else {
                    content.style.display = 'none';
                    btn.setAttribute('aria-expanded', 'false');
                    btn.textContent = 'Show ▾';
                }
            }

            


        let users = {
            "user1": {name: "Alice", age: 25, posts: 3},
            "user2": {name: "Bob", age: 30, posts: 5},
            "user3": {name: "Charlie", age: 22, posts: 2}
        }

        console.log(users);
        function SearchUser() {
            let input = document.querySelector("input").value.toLowerCase();
            let userInfoDiv = document.getElementById("userInfo");
            userInfoDiv.innerHTML = "";

            if(users[input]) {
                let user = users[input];
                userInfoDiv.innerHTML = `<p>Name: ${user.name}</p>
                                         <p>Age: ${user.age}</p>
                                         <p>Posts: ${user.posts}</p>`;
            } else {
                userInfoDiv.innerHTML = "<p>User not found.</p>";
            }
        }