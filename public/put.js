fetch('http://localhost:3000/users/4', {
    method: "PUT",
    headers: {
        "Content-type": "application/json",  
    },
    body: JSON.stringify({
      nombre: "Manuela Garcia",
      edad: 26,
      email: "Manuela@gmail.com",
      create_at: "2024-02-13T00:00:00.000Z"
    }),
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((e) => console.log(e));