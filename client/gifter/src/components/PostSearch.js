import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider"

export const PostSearch = ({ searchTerm }) => {
    const { posts, searchPosts } = useContext(PostContext);
    const [isLoading, setIsLoading] = useState(true);

    const handleSearchPost = () => {
        //POST - add
        setIsLoading(true)
        searchPosts()
    }
    return (
        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" value={searchTerm} />
            <button type="button" class="btn btn-outline-primary"
                onClick={e => {
                    e.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSearchPost()
                }}>search</button>
        </div >
    )
}

export default PostSearch;