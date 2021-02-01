import React from 'react'
import Input from '../inputsearch/Inputsearch'
import {conciliacion, fuentes, usuario, tablero} from '../../json/api'


function List() {
  const onSearch = value => console.log(value);
    return (
        <div>
             <h1>Conciliaciones</h1>
             <Input onSearch={onSearch} />
             <ul>
                {
                    conciliacion.map(item => (
                        <div>
                        <li> {item._id}</li>
                        <li> {item.index}</li>
                        <li> {item.isActive}</li>
                        <li> {item.conciliationName}</li>
                        <li> {item.sourceA}</li>
                        <li> {item.sourceB}</li>
                        <li> {item.balance}</li>
                        <li> {item.timestamp.createdAt} - {item.timestamp.updateAt}</li>
                        <li> {item.description}</li>
                        </div>
                         ))
                }
            </ul>
            <h1>Fuentes</h1>
             <ul>
                {
                    fuentes.map(item => (
                        <div>
                        <li> {item._id}</li>
                        <li> {item.index}</li>
                        <li> {item.isActive}</li>
                        <li> {item.name}</li>
                        <li> {item.company}</li>
                        <li> {item.timestamp.createdAt} - {item.timestamp.updateAt}</li>
                        <li> {item.description}</li>
                        </div>
                         ))
                }
            </ul>
            <h1>Tablero</h1>
             <ul>
                {
                    tablero.map(item => (
                        <div>
                        <li> {item._id}</li>
                        <li> {item.index}</li>
                        <li> {item.isActive}</li>
                        <li> {item.dashboardName}</li>
                        <li> {item.timestamp.createdAt} - {item.timestamp.updateAt}</li>
                        <li> {item.description}</li>
                        </div>
                         ))
                }
            </ul>
            <h1>Usuarios</h1>
             <ul>
                {
                    usuario.map(item => (
                        <div>
                        <li> {item._id}</li>
                        <li> {item.index}</li>
                        <img src={item.picture} alt='imagen'/>
                        <li> {item.name.firstName} - {item.name.lastName}</li>
                        <li> {item.gender}</li>
                        <li> {item.company}</li>
                        <li> {item.email}</li>
                        <li> {item.phone}</li>
                        <li> {item.createdAt}</li>
                        </div>
                         ))
                }
            </ul>
        </div>
    )
}

export default List
