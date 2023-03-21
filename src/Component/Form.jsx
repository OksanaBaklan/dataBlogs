import React from "react";
export default function Form (props){

    const {handleSubmit, posts, changeHandler, update, cancelBtn} = props

    return(<form onSubmit={handleSubmit}>
        <div className="block">
          <label htmlFor="t">Title: </label>
          <input
            type="text"
            id="t"
            name="title"
            required
            value={posts.title}
            onChange={changeHandler}
          />
        </div>

        <div className="block">
          <label htmlFor="m">Message: </label>
          <input
            type="text"
            id="m"
            name="message"
            required
            value={posts.message}
            onChange={changeHandler}
          />
        </div>

        <div className="block">
          <label htmlFor="a">Author: </label>
          <input
            type="text"
            id="a"
            name="author"
            required
            value={posts.author}
            onChange={changeHandler}
          />
        </div>

        <button className={!update ? "submitbtn" : "updatebtn"}>
          {!update ? "Submit" : "Update"}
        </button>
        <button className="cancelbtn" onClick={cancelBtn}>
          Cancel
        </button>
      </form>)
}