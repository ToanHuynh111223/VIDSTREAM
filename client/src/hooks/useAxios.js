import { useState, useEffect } from "react";
import axios from "axios";
const useAxios = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                // handle success
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }, [])
    return data;
};

export default useAxios;