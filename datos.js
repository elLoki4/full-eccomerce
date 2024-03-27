function getDataFromLocalStorage() {
    // Verifica si hay datos almacenados en el localStorage
    const storedData = localStorage.getItem('dataStorage');
  
    // Si hay datos almacenados, conviértelos a un array de JavaScript
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      // Si no hay datos almacenados, devuelve un array vacío
      return [];
    }
  }
  
  // Llama a esta función al inicio para obtener los datos almacenados en el localStorage
console.log(
getDataFromLocalStorage())  