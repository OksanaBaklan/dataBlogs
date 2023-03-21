import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import './Card.css'

export default function Card(props){
const {obj, deleteBtn, fillFormForUpdate} = props;


return (<div className="cards" key={obj._id}>
<h4>Title: {obj.title}</h4>
<h4>Message: {obj.message}</h4>
<h4>Author: {obj.author}</h4>

<hr />
<button className="deletebtn" onClick={() => deleteBtn(obj._id)}>
  <FontAwesomeIcon icon={faTrash} />
</button>

<button
  className="update-icon"
  onClick={() => fillFormForUpdate(obj._id)}
>
  <FontAwesomeIcon icon={faPen} />
</button>
</div>)
}