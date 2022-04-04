import { useEffect, useState } from "react";


const useReviews = (link) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(link)
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews]
};

export default useReviews;