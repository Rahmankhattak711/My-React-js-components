import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
const FetchData = "https://jsonplaceholder.typicode.com/users";

function InputForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputData, setInputData] = useState([]);
  const [empty, setEmpty] = useState([]);

  const submitHandlar = (e) => {
    e.preventDefault();
    if (email && password && name) {
      const AllData = {
        // id: new Date().getTime().toString(),
        name: name,
        email: email,
        password: password,
        inputData: inputData,
      };

      setEmpty([...empty, AllData]);

      setEmail("");
      setName("");
      setPassword("");
      setInputData("");
    } else {
      alert("Please fill all the fields");
    }
  };

  const getinputdata = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setInputData(data);
  };

  useEffect(() => {
    getinputdata(FetchData);
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center font-bold mt-[10%]">Contact Form</h1>
      <form
        onSubmit={submitHandlar}
        className="flex justify-center align-middle flex-col"
      >
        <br />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          className="w-[50%]  m-auto h-10 outline-none text-slate-700 mb-2 rounded-sm"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Enter Your Email"
          id="email"
          className="w-[50%]  m-auto h-10 outline-none text-slate-700 mb-2 rounded-sm"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Put Your Password"
          id="password"
          className="w-[50%]  m-auto h-10 outline-none text-slate-700 mb-2 rounded-sm"
        />

        <AutoComplete
          className="w-[50%]  m-auto h-10 outline-none text-slate-700 mb-2"
          options={
            Array.isArray(inputData)
              ? inputData.map((currData) => ({
                  value: currData.address.city,
                  label: currData.address.city,
                }))
              : []
          }
          placeholder="Choose Your Location"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />

        <button
          type="submit"
          className="w-[50%] h-10 m-auto bg-slate-300 text-black rounded-sm"
        >
          Submit Data
        </button>
      </form>

      {empty.map((element) => {
        const { id, name, email, password } = element;
        return (
          <div key={id}>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Password: {password}</h1>
          </div>
        );
      })}
    </>
  );
}

export default InputForm;
