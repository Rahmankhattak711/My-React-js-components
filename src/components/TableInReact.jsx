import React, { useEffect, useState } from "react";
const API = "https://jsonplaceholder.typicode.com/users";


function TableInReact() {
  const tableFields =["id", "name", "email","address","phone","website","company"];
  const [users, setUsers] = useState([]);
  const fetchUser = async (url) => {
    try {
      const response = await fetch(url);
      setUsers(await response.json());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser(API);
  });
  return (
    <div className="h-screen w-full flex justify-center align-middle flex-col p-10">
      <h1 className="text-3xl font-bold mb-5">Table in React JS</h1>

      <table>
        <thead className="bg-gray-400">
          <tr>
            {tableFields.map((table) => (
              <th
                key={table}
                className="p-5 uppercase text-black border border-x-0 border-y-0 text-left">{table}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((curUser) => {
            const { id, name, email, address, phone, website, company } =
              curUser;
            return (
              <tr key={id}>
                <td className="border h-8  border-x-0 pl-4">{id}</td>
                <td className="border h-8  border-x-0 pl-4">{name}</td>
                <td className="border h-8  border-x-0 pl-4">{email}</td>
                <td className="border h-8  border-x-0 pl-4">
                  {address.street} , {address.city}
                </td>
                <td className="border h-8  border-x-0 pl-4">{phone}</td>
                <td className="border h-8  border-x-0 pl-4">{website}</td>
                <td className="border h-8  border-x-0 pl-4">{company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableInReact;
