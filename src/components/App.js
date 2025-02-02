import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [addData, setAddData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch("https://dummyjson.com/products");
        const data = await responce.json();

        setAddData(data.products);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching data:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading.....</p>;
  return(
    <div>
      <h2>Products</h2>
      <ul>
        {addData.map((item)=>(
          <li key={item.id}><h4>{item.title}</h4> -- <br/>
          {item.description}  <br/>
          {item.category} --
          <strong>{item.price}</strong> <br/>
          <h5>{item.discountPercentage}</h5> <br/>
          
          </li>
        ))}
      </ul>
    </div>
  )
};

export default App;
