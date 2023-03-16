import { useEffect, useState } from "react"

const useBlogs = () =>{
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
    return [data, setData];
}

export default useBlogs;