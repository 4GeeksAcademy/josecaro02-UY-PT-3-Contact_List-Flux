import React, { useContext } from 'react'
import { Context } from '../store/appContext'
const Card = () => {
    //logica de JS
    const { store, actions } = useContext(Context)
    return (
        <div className='container m-3 border border-primary p-3'>
            <h1>Componente Card</h1>
            <p>{store.info}</p>
        </div>
    )
}

export default Card