import React, { useContext, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from './../../components/layout/SectionTitle';
import { AppContext } from './../../data/Store';

const UseContext = (props) => {

    const context = useContext(DataContext);

    function setNumber(n) {
        context.setState({
            ...context.state,
            number: context.state.number + n
        })
    }

    const {number, updateState} = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #1" />
            <div className="center">
                <div className="center">
                    <span className="text">{context.state.text}</span>
                    <span className="text">{context.state.number}</span>
                </div>

                <div>
                    <button className="btn" onClick={() => setNumber(1)}>
                        +1
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercício #2" />
            <div className="center">
                <span className="text"></span>
            </div>

        </div>
    )
}

export default UseContext
