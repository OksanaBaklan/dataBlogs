import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Component/Header";
import Card from "./Component/Card";
import Form from "./Component/Form";

import axios from "axios";

function App() {
  const [posts, setPosts] = useState({
    title: "",
    message: "",
    author: "",
  });
  const [notification, setNotification] = useState();
  const [details, setDetails] = useState([]);
  const [update, setUpdate] = useState(false);

  async function getPosts() {
    try {
      const response = await axios.get("https://dilshod.onrender.com/posts");
      setDetails(response.data);
      setNotification(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!update) {
      await axios.post("https://dilshod.onrender.com/posts", posts);
    } else {
      await axios.patch(
        `https://dilshod.onrender.com/posts/${posts._id}`,
        posts
      );
      setUpdate(false);
    }

    // clear inputs
    setPosts({
      title: "",
      message: "",
      author: "",
    });

    // set notification
    setNotification("update");
  };

  const cancelBtn = () => {
    setPosts({
      title: "",
      message: "",
      author: "",
    });
    setUpdate(false);
  };

  const changeHandler = (e) =>
    setPosts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const deleteBtn = async (id) => {
    await axios.delete(`https://dilshod.onrender.com/posts/${id}`);
    getPosts();
  };

  const fillFormForUpdate = (id) => {
    const updatingPost = details.find((obj) => obj._id === id);
    setPosts(updatingPost);
    setUpdate(true);
  };

  return (
    <div className="App">
      <Header />
      <Form
        handleSubmit={handleSubmit}
        posts={posts}
        changeHandler={changeHandler}
        update={update}
        cancelBtn={cancelBtn}
      />

      <div>
        {details?.length !== 0 ? (
          details?.map((obj) => (
            <Card
              obj={obj}
              key={obj._id}
              deleteBtn={deleteBtn}
              fillFormForUpdate={fillFormForUpdate}
            />
          ))
        ) : (
          <h3>Loading ...</h3>
        )}
      </div>
    </div>
  );
}

export default App;
