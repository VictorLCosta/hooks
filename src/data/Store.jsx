import React, { useState } from "react";

const initialState = {
    text: 'Context API + Hooks',
    number: 123
}

export const AppContext = React.createContext(initialState)

const Store = props => {

    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{state, setState, updateState}}>
            {props.children}
        </AppContext.Provider>
    )

}

export default Store