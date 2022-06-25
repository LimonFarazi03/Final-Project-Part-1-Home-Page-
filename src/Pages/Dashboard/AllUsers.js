import React from "react";
import { useQuery } from "react-query";
import loadingSpinner from "../../assets/images/loadingSpinner.gif";

const AllUsers = () => {
  const {
    isLoading,
    error,
    data: users,
  } = useQuery("repoData", () =>
    fetch("http://localhost:5000/allusers").then((res) => res.json())
  );
  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        {" "}
        <img width={"110px"} src={loadingSpinner} alt="loading" />{" "}
      </div>
    );
  }
  return (
    <div>
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        All users: {users.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>sl no.</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr class="hover">
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td><button class='btn btn-xs text-white btn-accent-300'>mk Admin</button></td>
                <td><button class='btn btn-xs text-white btn-accent-300'>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
