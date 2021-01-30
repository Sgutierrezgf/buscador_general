import React from 'react'
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

const onSearch = value => console.log(value);

function ListsInfo() {
    return (
        <Space direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
    )
}

export default ListsInfo

