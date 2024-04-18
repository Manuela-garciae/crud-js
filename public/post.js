
fetch("https://", {
    method: "POST",
    headers: {
        "Content-type": "application/json",  
    },
    body: JSON.stringify({
        name: "pregunta",
    
    }),
})
.then((response) => response.json())
.then((data) => console.log(data));