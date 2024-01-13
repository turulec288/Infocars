// fetch(`data.json`)
// .then(response => response.json())
// .then( data => {
//     console.log(data);} )
//     .catch(error => console.log("error al cargar ", error))

    // {
    //     "tipos de datos": {
    //       "numero": 25,
    //       "cadena": "hola",
    //       "booleanos": true,
    //       "undefined": null,
        
    //       "array": ["hola", "adios"],
    //       "objeto": { "nombre":"Pepe",
    //         "edad":25}
    //     }
    //   }
    async function fetchData() {
      const url = 'https://car-api2.p.rapidapi.com/api/vin/1GTG6CEN0L1139305';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'O6YiLSCL4642WsNMRhz2Sg==QlI9oE5Pj7KiQVgK',
          'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
      };
    
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    
    // Llama a la función asíncrona para iniciar la ejecución
    fetchData();
    document.addEventListener("DOMContentLoaded", function() {
        const value = document.querySelector("#value");
        const input = document.querySelector("#km_input");
        value.textContent = input.value;
        
        input.addEventListener("input", (event) => {
          value.textContent = event.target.value;
        });
      });
      
    const value = document.querySelector("#value");
    const input = document.querySelector("#km_input");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
      value.textContent = event.target.value;
    });

   