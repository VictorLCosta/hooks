import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducers } from './../../store/config';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'number_add2'})}>
                        +2
                    </button>
                    <button className="btn" onClick={() => dispatch({type: 'multiplyBy_7'})}>
                        x7
                    </button>
                    <button className="btn" onClick={() => dispatch({type: 'divideBy_25'})}>
                        /25
                    </button>
                    <button className="btn" onClick={() => dispatch({type: 'round'})}>
                        Arredondar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer
