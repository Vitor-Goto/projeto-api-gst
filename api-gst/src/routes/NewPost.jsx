import React from "react"

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo post</h2>
      <div className="form-controll">
        <label htmlFor="title"></label>
        <input type="text" name="title" />
      </div>
    </div>
  )
}

export default NewPost
