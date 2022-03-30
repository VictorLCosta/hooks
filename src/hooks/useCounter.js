import React, { useState } from "react";

const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    function inc () {
        setCount(current => current + 1)
    }

    function dec () {
        setCount(current => current - 1)
    }

    return [count, inc, dec]
}

export default useCounter