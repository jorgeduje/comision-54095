const CreateUsers = () => {

  let newProduct = {
    id: 1,
    name: "Pepe",
    username: "pepe00",
    email: "pepe@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const createNewUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify( newProduct ),
        // headers: {
        //     "authorization": "Barer ASDsad12321dasd213"
        // }
    })
  }

  const deleteUser = ( id )=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method:"DELETE"
    })
  }
  const updateUser = ( id )=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method:"PUT",
        body: JSON.stringify( {name: "juan"} )
    })
  }

  return (
    <div>
      <button onClick={createNewUser}>Agregar nuevo</button>
      <button onClick={()=>deleteUser(2)}>Eliminar usuario</button>
      <button onClick={()=>updateUser(3)}>Modificar usuario</button>
    </div>
  );
};

export default CreateUsers;
