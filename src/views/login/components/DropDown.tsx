import React, { useState } from "react";
import {MultiSelect} from "react-multi-select-component";
import drop from '../styles/drop.css'

const DropDown: React.FC = () => {
  const options = [
    { label: "Plastico", value: "Plastico" },
    { label: "Vidros", value: "Vidros" },
    { label: "Organicos", value: "Organicos"},

  ];



  const [selected, setSelected] = useState([]);

 

  return (
    <div className="dropdown-content">
  
      <MultiSelect 
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Selecionado"
        className="dropc"
        search="Buscar"/>  
    </div>
  );
};

export default DropDown;