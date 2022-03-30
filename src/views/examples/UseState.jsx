import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text">{count}</span>
                <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
            </div>

        </div>
    )
}

export default UseState
