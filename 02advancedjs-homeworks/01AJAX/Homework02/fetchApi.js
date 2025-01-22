let fetchBtn = document.getElementById("fetchUser");

fetchBtn.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {
            console.log(response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (user) {
            let userTable = document.getElementById("userTable");
            let tBody = userTable.querySelector("tbody");
            tBody.innerHTML = "";

            for (let key in user) {
                if (typeof user[key] === "object") {
                    for (let subKey in user[key]) {
                        tBody.innerHTML += `
                      <tr>
                        <td>${key}.${subKey}</td>
                        <td>${user[key][subKey]}</td>
                      </tr>
                    `;
                    }
                } else {
                    tBody.innerHTML += `
                    <tr>
                      <td>${key}</td>
                      <td>${user[key]}</td>
                    </tr>
                  `;
                }
            }
        })

        .catch(function (errorMessage) {
            alert("Error occured:" + errorMessage);
        })

})