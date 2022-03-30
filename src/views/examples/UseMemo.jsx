import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const sum = (v1, v2) => {
    return v1 + v2
}

const UseMemo = (props) => {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    const [value3, setValue3] = useState(0)

    const result = useMemo(() => sum(value1, value2), [value1, value2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="input" value={value1} onChange={e => setValue1(parseInt(e.target.value))} />
                <input type="number" className="input" value={value2} onChange={e => setValue2(parseInt(e.target.value))} />
                <input type="number" className="input" value={value3} onChange={e => setValue3(parseInt(e.target.value))} />
            </div>

            {result}

        </div>
    )
}

export default UseMemo
