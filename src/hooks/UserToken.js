import React, { useState, useEffect } from "react";

const UserToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    // console.log(email)
    const currentUSer = { email: email };
    if (email) {
      fetch(`https://protected-ocean-34758.herokuapp.com/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUSer),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default UserToken;
