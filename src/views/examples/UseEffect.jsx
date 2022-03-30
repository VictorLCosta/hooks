import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'

function isEvenNumber(n) {
    return (n & 1) ? false : true
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(0)
    const [even, setEven] = useState(true)

    useEffect(function () {
        setEven(isEvenNumber(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Desafio"></SectionTitle>
            <div className="center">
                <span className="text">{ even ? "É par" : "É ímpar" }</span>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
