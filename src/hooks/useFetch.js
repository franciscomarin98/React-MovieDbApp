import { useState, useEffect } from 'react'

const useFetch = (url, options) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getResultAPI = async () => {
            try {
                const resp = await fetch(url, options);
                const jsonData = await resp.json();
                setLoading(false);
                setData(jsonData);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getResultAPI();

    }, [url,options]);


    return {
        loading, data, error
    }
}

export default useFetch;
