import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [menusData, setMenusData] = useState([]);

  useEffect(() => {
    const getMenus = async () => {
      await axios
        .get("https://desafioreact.s3.amazonaws.com/menu/menu.json")
        .then((response) => {
          console.log(response.data);
          setMenusData(response.data.results);
        });
    };

    getMenus();
  }, []);
  return (
    <div className="App">
      <ul>
        <h1>Tarefas</h1>

        <li>
          {menusData.map((menus) => {
            return <li>{menus.name}</li>;
          })}
        </li>
      </ul>
    </div>
  );
}

export default App;
