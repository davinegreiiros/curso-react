import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"/>
            <SectionTitle title="Exercicio 1"/>

            <SectionTitle title="Exercicio 2"/>
        </div>
    )
}

export default UseState
