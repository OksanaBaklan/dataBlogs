import React from "react";
import '../App.css'

export default function Card(props){
const {obj}=props
return (  <div className="card">
<h4>Title {obj.title}</h4>
<h4>Message {obj.message}</h4>
<h4>Author {obj.author}</h4>
</div>)
}