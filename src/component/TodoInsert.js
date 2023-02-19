import React,{useState} from "react";
import { MdAddCircle } from "react-icons/md";

const TodoInsert = () => {
  const [value, setValue]  = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return(
    <div>
      <from>
        <input placeholder="plase type" value={value} onChange={onChange}></input>
        <button type="submit" >
          <MdAddCircle/>
        </button>
      </from>
    </div>
  );
};

export default TodoInsert;

