const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      syncTokenSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Application just loaded, synching the sessionStorage token"
        );
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      Login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ email: email, password: password }),
        };
        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-pt2ard0z39i.ws-us47.gitpod.io/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Oh noo!. There was an error");
            return false;
          }

          const data = await resp.json();
          console.log("this came fron the backend", data);
          sessionStorage.setItem("token", data.acces_token);
          return true;
        } catch (error) {
          console.error("Oh noo.There has been an error login in ");
          setStore({ token: data.acces_token });
        }
      },

      getMessage: () => {
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
