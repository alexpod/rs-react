import { useEffect, useState } from "react";

export function useFatch(url = '') {

  const [posts, setPosts] = useState({
    data: [],
    refetch: (newParams) => {
      setPosts((prevPosts) => ({ ...prevPosts, params: newParams.params }))
    },
    error: null,
    isLoading: true,
    params: {}
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPosts((prevPosts) => ({ ...prevPosts, isLoading: true }));
        const params = new URLSearchParams(posts.params);
        const response = await fetch(`${url}?${params.toString()}` );
        const json = await response.json();
        setPosts((prevPosts) => ({ ...prevPosts, data: json, isLoading: false }));
      } catch (error) {
        setPosts((prevPosts) => ({ ...prevPosts, error: error.message, isLoading: false }));
      }
    };

    fetchData();
  }, [url, posts.params])
  
  return posts
}