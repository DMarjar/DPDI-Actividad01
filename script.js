(() => {
  // DAVID SALOMON MARTINEZ JARAMILLO
  // ----------------------------------------------------------------------

  // Diferencia entre var y let
  const scopeVar = () => {
    if (true) {
      var mensaje = "tengo un scope amplio";
      console.log(`Soy var, aqui estoy dentro del if y ${mensaje}`);
    }
    console.log(`Soy var, aqui estoy fuera del if y ${mensaje}`);
  };
  scopeVar();

  const scopeLet = () => {
    if (true) {
      let mensaje = "tengo un scope reducido";
      console.log(`Soy let, aqui estoy dentro del if y ${mensaje}`);
    }
    try {
      console.log(`Soy let, aqui estoy fuera del if y ${mensaje}`);
    } catch (error) {
      console.log("Error al acceder a la variable mensaje de let");
      console.log(error.message);
    }
  };
  scopeLet();
  console.log(
    "----------------------------------------------------------------"
  );

  // ----------------------------------------------------------------------

  // Diferencia entre variable y constante
  const constanteYVariable = () => {
    try {
      let variable = 10;
      console.log(`Se intenta modificar la variable let: ${variable}`);
      variable = 20;
      console.log(`Se modifico la variable let: ${variable}`);

      const constante = 10;
      console.log(`Se intenta modificar la constante: ${constante}`);
      constante = 20;
    } catch (error) {
      console.log("Error al modificar la constante:");
      console.log(error.message);
    }
  };
  constanteYVariable();
  console.log(
    "----------------------------------------------------------------"
  );

  // ----------------------------------------------------------------------

  // Simulacion de promesa con setTimeout
  const promesa = new Promise((resolve, reject) => {
    console.log("PROMESA CREADA");
    const numero = Math.random() * 10;
    setTimeout(() => {
      resolve(`PROMESA RESUELTA ${numero.toFixed(0)} SEGUNDOS DESPUES`);
    }, numero * 1000);
  });
  console.log(
    "----------------------------------------------------------------"
  );

  promesa.then((mensaje) => {
    console.log(
      "----------------------------------------------------------------"
    );
    console.log(mensaje);
  });

  // ----------------------------------------------------------------------

  // Diferencias entre try catch y finally
  const tryCatchFinally = () => {
    try {
      console.log("TRY, INTENTO EJECUTAR UNA ACCION QUE PUEDE FALLAR");
      const numero = Math.random() * 10;
      if (numero > 5) {
        throw new Error("El numero es mayor a 5");
      }
    } catch (error) {
      console.log(`CATCH, SE EJECUTA SI HAY UN ERROR: ${error.message}`);
    } finally {
      console.log("FINALLY, SIEMPRE SE EJECUTA");
    }
  };
  tryCatchFinally();
  console.log(
    "----------------------------------------------------------------"
  );

  // ----------------------------------------------------------------------

  // Consumo de API's
  // https://jsonplaceholder.typicode.com/
  // ASYNC - AWAIT
  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      console.log(
        `Post obtenido con ASYNC AWAIT: ${data.id} con titulo: ${data.title} y cuerpo: ${data.body}`
      );
    } catch (error) {
      console.log(`Error al obtener post: ${error.message}`);
    }
  };
  getPosts();

  const postPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: "David",
            body: "Martinez",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(
        `Post creado con ASYNC AWAIT: ${data.id} con titulo: ${data.title} y cuerpo: ${data.body}`
      );
    } catch (error) {
      console.log(`Error al crear post: ${error.message}`);
    }
  };
  postPost();

  // FETCH
  const putPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "David",
        body: "Jaramillo",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        console.log(
          `Post actualizado con FETCH: ${data.id} con titulo: ${data.title} y cuerpo: ${data.body}`
        )
      )
      .catch((error) => {
        console.log(`Error al actualizar post: ${error.message}`);
      });
  };
  putPost();

  const deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) =>
        console.log(`Post eliminado con FETCH: ${response.status}`)
      )
      .catch((error) => {
        console.log(`Error al eliminar post: ${error.message}`);
      });
  };
  deletePost();
})();
