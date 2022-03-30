import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import BtnUseCallback from './BtnUseCallback';

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <h1>{count}</h1>
                <BtnUseCallback delta={12} inc={inc} />
                <BtnUseCallback delta={3} inc={inc} />
                <BtnUseCallback delta={6} inc={inc} />
            </div>
        </div>
    )
}

export default UseCallback
