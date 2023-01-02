import { useState, useEffect } from "react";
import axios from "axios";
const useAxios = (url, method) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        switch (method) {
            case 'GET':

                axios.get(url)
                    .then(function (response) {
                        // handle success
                        setData(response.data)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    });


                break;
            default:
                console.error('Invalid url or method does not exist!')

        }
    }, [method, url])

    return data;
};

export default useAxios;