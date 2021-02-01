import React from 'react'
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import '../../json/conciliaciones.json'
const { Search } = Input;

//este es el input original del sitio al final se decidio cambiar a otro forma.
function Inputsearch() {
    return (
        <Space direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
        />
      </Space>
    )
}

export default Inputsearch

