import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Component/Card";

function App() {
  // const [title, setTitle] = useState("");
  // const [message, setMessage] = useState("");
  // const [author, setAuthor] = useState("");

  const [dataBlog, setDataBlog] = useState({
    title: "",
    message: "",
    author: "",
  });
  const [notification, setNotification] = useState("");
  const [details, setDetails] = useState([]);

  async function getPost() {
    const res = await axios.get("https://dilshod.onrender.com/posts");
    console.log(res.data);
    setDetails(res.data);
    setNotification(null);
    // console.log(details);
  }

  // getPost();
  useEffect(() => {
    getPost();
  }, [notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = { ...dataBlog };
    await axios.post("https://dilshod.onrender.com/posts", dataBlog);

    setDataBlog({
      title: "",
      message: "",
      author: "",
    });

    setNotification("GET");
  };

  const cancelBtn = () => {
    setDataBlog({
      title: "",
      message: "",
      author: "",
    });
  };

  const changeHandler = (e) => {
    setDataBlog((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <h2>Create a new post:</h2>
      <p>
        CRUD = Create (POST), Read (GET), Update (PATCH or PUT), Delete (DELETE){" "}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="block">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={dataBlog.title}
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className="block">
          <label htmlFor="message">Message: </label>
          <input
            type="text"
            id="message"
            name="message"
            value={dataBlog.message}
            onChange={changeHandler}
            required
          ></input>
        </div>
        <div className="block">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={dataBlog.author}
            onChange={changeHandler}
            required
          ></input>
        </div>
        <button type="submit" className="submitbtn">
          Submit
        </button>
        <button type="reset" className="cancelbtn" onClick={cancelBtn}>
          Cancel
        </button>
        <button className="submitbtn">Update</button>
      </form>
      <div>
        {details?.length !== 0 ? (
          details?.map((obj) => <Card obj={obj} key={obj._id} />)
        ) : (
          <h3>Loading ...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
