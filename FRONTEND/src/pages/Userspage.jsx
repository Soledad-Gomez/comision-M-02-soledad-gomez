import React from "react";

export const Userspage = () => {
  return (
    <div>
      <div>
        <div>
          {" "}
          <h3>Usuario:</h3>
          <h4> {auth?.user?.username} </h4>
        </div>
        <div>
          <h3>email:</h3>
          <h4> {auth?.user?.email} </h4>
        </div>
        <div>
          <h3>avatar:</h3>
          <h4> {auth?.user?.avatar} </h4>
        </div>
        <div>
          <h3>password:</h3>
          <h4> {auth?.user?.password} </h4>
        </div>
      </div>
    </div>
  );
};
