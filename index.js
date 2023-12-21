// Add your code here
function submitData(name, email) {
   return fetch("http://localhost:3000/users", {
        method:"POST",
        body: JSON.stringify({
            name:name,
            email: email
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            document.querySelector("body").append(object.id)
        })
        .catch(function (error) {
            alert("Bad things! Ragnarok!");
            console.log(error.message);
            document.querySelector("body").append(error.message)
        });
        
}

