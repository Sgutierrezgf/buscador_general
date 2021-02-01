import React from 'react'
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import '../../json/conciliaciones.json'
const { Search } = Input;

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

