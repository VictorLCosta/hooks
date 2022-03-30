import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

const merge = (s1, s2) => {
    const result = [...s1].map(function (e, i) {
        return `${e}${s2[i] || ""}`
    }).join("")

    return result
}

const UseRef = (props) => {
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0)

    const myInput = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current++
        myInput2.current.focus()
    }, [value])

    useEffect(function () {
        count.current++
        myInput.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #1" />
            <div className="center">
                <div>
                    <span className="text">Valor: {merge(value, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input" ref={myInput} value={value} onChange={e => setValue(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #2" />
            <div className="center">
                <input type="text" className="input" ref={myInput2} value={value2} onChange={e => setValue2(e.target.value)} />
            </div>

        </div>
    )
}

export default UseRef
