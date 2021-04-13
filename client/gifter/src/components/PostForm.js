import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider"

export const PostForm = () => {
    const { addPost, getAllPosts } = useContext(PostContext)

    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({
        userProfileId: "",
        title: "",
        imageUrl: "",
        caption: ""
    })


    const handleControlledInputChange = (event) => {
        //When changing a state object or array,
        //always create a copy make changes, and then set state.
        const newPost = { ...post }
        //animal is an object with properties.
        //set the property to the new value
        newPost[event.target.id] = event.target.value
        //update state
        setPost(newPost)
    }


    const handleSavePost = () => {
        //POST - add
        setIsLoading(true)

        addPost({
            userProfileId: post.userProfileId,
            title: post.title,
            imageUrl: post.imageUrl,
            caption: post.caption
        })
            .then(getAllPosts)
    }

    return (

        <fieldset>
            <div class="form-group">
                <label for="userProfileId">User Profile Id</label>
                <input type="text" class="form-control" id="userProfileId" placeholder="Enter User Profile Id" onChange={handleControlledInputChange} value={post.userProfileId}></input>
            </div>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter Title" onChange={handleControlledInputChange} value={post.title}></input>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image Url</label>
                <input type="text" class="form-control" id="imageUrl" placeholder="Enter Gif Url" onChange={handleControlledInputChange} value={post.imageUrl}></input>
            </div>
            <div class="form-group">
                <label for="caption">Caption</label>
                <input type="text" class="form-control" id="caption" placeholder="Enter Caption" onChange={handleControlledInputChange} value={post.caption}></input>
            </div>
            <button type="submit" class="btn btn-primary"
                onClick={e => {
                    e.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSavePost()
                }}>Submit</button>
        </fieldset>
    );
};

export default PostForm;