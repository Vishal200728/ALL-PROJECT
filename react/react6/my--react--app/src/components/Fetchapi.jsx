import React, { useEffect, useState } from "react";

const Fetchapi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_limit=10"
        );
        const data = await res.json();
        setApiData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {apiData.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#222",
            color: "#fff",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h4>{item.name}</h4>
          <p style={{ color: "lightgray" }}>{item.body}</p>
          <span style={{ fontSize: "12px", color: "#888" }}>{item.email}</span>
        </div>
      ))}
    </div>
  );
};

export default Fetchapi;