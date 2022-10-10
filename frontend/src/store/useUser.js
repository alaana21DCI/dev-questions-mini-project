import * as React from "react";

const Context = React.createContext({
  data: null,
  error: "",
  isFetching: false,
  signup: async () => 0,
  login: () => async () => 0,
});

export function UserProvider(props) {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState("");
  const [isFetching, setIsFetching] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  // wenn componente userProveider aufgerufen wird, wird diese effect hook gerendert um den user vom null state zu ändern (getCurrentUser) und mt setReady zu True wenn der status 200 und das erlaubt im Frontend alle children dieser provider zu zeigen und den user nicht null

  React.useEffect(() => {
    fetch("http://localhost:3001/user", {
      method: "GET",
      credentials: "include",
    })
      .then(async (response) => {
        if (response.status === 200) {
          const result = await response.json();
          setUser(result);
        }
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  // unsere Context, die wir im value key im provider mitgeben:
  const data = {
    data: user,
    error: error,
    isFetching: isFetching,

    //// REGISTER
    signup: async (body) => {
      setError("");
      setIsFetching(true);

      const formData = new FormData();
      formData.append("name", body.name);
      formData.append("email", body.email);
      formData.append("password", body.password);
      formData.append("file", body.profilePic);

      const response = await fetch("http://localhost:3001/user/signup", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const result = await response.json();

      if (response.status === 200) {
        setUser(result);
      } else if (result.errors) {
        setError(result.errors[0].msg);
      } else if (result.error) {
        setError(result.error);
      }

      setIsFetching(false);

      return response.status;
    },

    //// LOGIN
    login: async (body) => {
      setError("");
      setIsFetching(true);

      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (response.status === 200) {
        setUser(result);
      } else if (result.errors) {
        setError(result.errors[0].msg);
      } else if (result.error) {
        setError(result.error);
      }

      setIsFetching(false);

      return response.status;
    },
  };

  return (
    <Context.Provider value={data}>{ready && props.children}</Context.Provider>
  );
}

export default function useUser() {
  return React.useContext(Context);
}
