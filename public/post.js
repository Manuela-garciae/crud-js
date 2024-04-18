
fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-type": "application/json",  
    },
    body: JSON.stringify({
      id: 4,
      nombre: "Manuela",
      edad: 26,
      email: "Manuela@gmail.com",
      create_at: "2024-02-12T00:00:00.000Z"
    }),
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((e) => console.log(e));