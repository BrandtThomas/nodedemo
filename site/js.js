fetch('http://localhost:3000/afci',{
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5500' // Remplacez par votre propre origine autorisée
    }
  })
.then(response => response.json())
.then(data => {
    console.log(data);
})