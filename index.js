// Add your code here
function submitData(userName, userEmail){

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name: userName,
            email: userEmail,
          }),
        };

return fetch("http://localhost:3000/users", configObj)
.then(function(resp){
    return resp.json();
})
.then(function(data){
    const id = data.id;
    return document.body.append(data.id);
})
.catch(function (error) {
    alert("UH OH! Something went wrong!")
    return document.body.append(error.message);
  });
}