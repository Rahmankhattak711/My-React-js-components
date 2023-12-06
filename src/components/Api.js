import React, { useState } from 'react';
import '../components/Buttons.css'

const Api = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [area, setArea] = useState([]);

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const responce =await fetch("https://api-dev.srmya.com/Property/create",{
        method: "POST" ,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({type,title,price,location,area}),
      });
      if (responce.ok) {
        console.log("Property Created Successfully");
      }else{
        console.error("Error creating property")
      }
    } catch (error) {
    console.error("Error fetching data:", error);
    }
  }

  const handlelocation =(e)=>{
    setLocation(e.target.value)
  }

  const handlearea=(e)=>{
    setArea(e.target.value)
  }

  const handleprice=(e)=>{
    setPrice(e.target.value)
  }

  const handletype = (e)=>{
    setType(e.target.value)
  }
  
  const handletitle = (e)=>{
    setTitle(e.target.value)
  }

  return (
    <div className="p-4 w-[60%] m-auto">

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="my-text">
            Tilte:
            <input
               id='title'
               name='title'
              type="text"
              className="my-element"
              value={title}
              onChange={handletitle}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="my-text">
            Price:
            <input
               id='price'
               name='price'
              type="text"
              className="my-element"
              value={price}
              onChange={handleprice}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="my-text">
            Area:
            <input
               id='area'
               name='area'
              type='text'
              className="my-element"
              value={area}
              onChange={handlearea}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="my-text">
            Type:
            <input
               id='type'
               name='type'
              type="text"
              className="my-element"
              value={type}
              onChange={handletype}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="my-text">
            Location:
            <input
            id='location'
            name='location'
              type="text"
              className="my-element"
              value={location}
              onChange={handlelocation}
            />
          </label>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="my-element"
          >
            Submit
          </button>
        </div>

      </form>

      
    </div>
  );
}
export default Api;
