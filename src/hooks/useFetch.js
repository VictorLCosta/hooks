import { useState, useEffect } from 'react';

const useFetch = (url, method = "GET") => {
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setState({
                data: json,
                loading: false
            }))

    }, [url, method])

    return state

}

export default useFetch