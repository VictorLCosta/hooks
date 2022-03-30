import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';
import useCounter from './../../hooks/useCounter';
import useFetch from './../../hooks/useFetch';

const UseRef = (props) => {
    const [count, inc, dec] = useCounter()

    const url = "http://files.cod3r.com.br/curso-react/estados.json"
    var result = useFetch(url)

    function showStates (states) {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #1"></SectionTitle>
            <div className="center">
                <span className="text">
                    {count}
                </span>
                <button className="btn" onClick={() => inc()}>
                    +1
                </button>
                <button className="btn" onClick={() => dec()}>
                    -2
                </button>
            </div>

            <SectionTitle title="Exercício #2"></SectionTitle>
            <div className="center">
                <ul>
                    {!result.loading ? showStates(result.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
