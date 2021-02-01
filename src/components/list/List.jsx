import React from 'react'
import Input from '../inputsearch/Inputsearch'
import { conciliacion, fuentes, usuario, tablero } from '../../json/api'
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

function List() {
  return (
    <div>
      <Input />
      <h1>Conciliaciones</h1>
      <Table dataSource={ conciliacion }>
        <Column title="Id" dataIndex="_id" key="_id" />
        <Column title="index" dataIndex="index" key="index" />
        <Column title="isActive" dataIndex="isActive" key="isActive" />
        <Column title="conciliation Name" dataIndex="conciliationName" key="conciliationName" />
        <Column title="sourceA" dataIndex="sourceA" key="sourceA" />
        <Column title="sourceB" dataIndex="sourceB" key="sourceB" />
        <Column title="balance" dataIndex="balance" key="sourceB" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={ tags => (
            <>
              { tags.map(tag => (
                <Tag color="blue" key={ tag }>
                  {tag }
                </Tag>
              )) }
            </>
          ) }
        />
      </Table>
      <h1>Fuentes</h1>
      <Table dataSource={ fuentes }>
        <Column title="Id" dataIndex="_id" key="_id" />
        <Column title="index" dataIndex="index" key="index" />
        <Column title="isActive" dataIndex="isActive" key="isActive" />
        <Column title="name" dataIndex="name" key="name" />
        <Column title="company" dataIndex="company" key="company" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={ tags => (
            <>
              { tags.map(tag => (
                <Tag color="blue" key={ tag }>
                  {tag }
                </Tag>
              )) }
            </>
          ) }
        />
      </Table>
      <h1>Tablero</h1>
      <Table dataSource={ tablero }>
        <Column title="Id" dataIndex="_id" key="_id" />
        <Column title="index" dataIndex="index" key="index" />
        <Column title="isActive" dataIndex="isActive" key="isActive" />
        <Column title="dashboardName" dataIndex="dashboardName" key="dashboardName" />
        <Column title="company" dataIndex="company" key="company" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={ tags => (
            <>
              { tags.map(tag => (
                <Tag color="blue" key={ tag }>
                  {tag }
                </Tag>
              )) }
            </>
          ) }
        />
      </Table>
      <h1>Usuarios</h1>
      <Table dataSource={ usuario }>
        <Column title="Id" dataIndex="_id" key="_id" />
        <Column title="index" dataIndex="index" key="index" />
        <Column title="isActive" dataIndex="isActive" key="isActive" />
        <Column title="picture" dataIndex="picture" key="picture" />
        <Column title="age" dataIndex="age" key="age" />
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="gender" dataIndex="gender" key="gender" />
        <Column title="company" dataIndex="company" key="company" />
        <Column title="email" dataIndex="email" key="email" />
        <Column title="phone" dataIndex="phone" key="phone" />
        <Column title="address" dataIndex="address" key="address" />
        <Column title="createdAt" dataIndex="createdAt" key="createdAt" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={ tags => (
            <>
              { tags.map(tag => (
                <Tag color="blue" key={ tag }>
                  {tag }
                </Tag>
              )) }
            </>
          ) }
        />
      </Table>
    </div>
  )
}

export default List
