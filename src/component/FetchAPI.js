import React, { useEffect, useState } from "react";
import LoadingComponents from "./LoadingComponents";

const FetchAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFetchAPI = async () => {
      try {
        setLoading(false);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
        setLoading(false);
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    getFetchAPI();
  }, []);

  if(loading){
    return <LoadingComponents />
  }

  return (
    <>
      <h1>Fetch API</h1>
      {data.map((currentData) => (
        <div className="flex flex-wrap col-span-3" key={currentData.id}>
          <div className="flex flex-col items-center justify-center">
            <img
              src={`https://picsum.photos/id/${currentData.id}/200/200`}
              alt=""
              className="w-48 h-48"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">{currentData.title}</h1>
              <p className="text-gray-600">{currentData.body}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FetchAPI;