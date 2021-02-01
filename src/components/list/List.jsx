import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { unidos } from '../../json/api'


//se decidio utilizar lo siguiente ya que cumplia en cierta medida con el reto enviado
//me hubiera gustado hacerlo de otra manera, pero dada mi experiencia no habia trabajado con varios modulos a la vez
//pero fue una buena experiencia
class List extends React.Component {

  //Aqui se maneja el ingreso a los input de busqueda para columna
  state = {
    searchText: '',
    searchedColumn: '',
  };

//Se capturar los datos dentro del input para generar los filtros, limpiar filtros
//Van tambien los componentes input para la busqueda, los botones de busqueda que busca todo lo que encuentra que contenga lo escrito
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    //esta varible captura desde el archivo api.js la informacion requerida para mostrar
    const columns = [
      {
        title: 'ID',
        dataIndex: '_id',
        key: '_id',
        width: '5%',
        ...this.getColumnSearchProps('_id'),
      },
      {
        title: 'index',
        dataIndex: 'index',
        key: 'index',
        width: '5%',
        ...this.getColumnSearchProps('index'),
      },
      {
        title: 'isActive',
        dataIndex: 'isActive',
        key: 'isActive',
        width: '5%',
        ...this.getColumnSearchProps('isActive'),
      },
      {
        title: 'conciliationName',
        dataIndex: 'conciliationName',
        key: 'conciliationName',
        width: '5%',
        ...this.getColumnSearchProps('conciliationName'),
      },
      {
        title: 'sourceA',
        dataIndex: 'sourceA',
        key: 'sourceA',
        width: '5%',
        ...this.getColumnSearchProps('sourceA'),
      },
      {
        title: 'sourceB',
        dataIndex: 'sourceB',
        key: 'sourceB',
        width: '5%',
        ...this.getColumnSearchProps('sourceB'),
      },
      {
        title: 'balance',
        dataIndex: 'balance',
        key: 'balance',
        width: '5%',
        ...this.getColumnSearchProps('balance'),
      },
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
        width: '5%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'company',
        dataIndex: 'company',
        key: 'company',
        width: '5%',
        ...this.getColumnSearchProps('company'),
      },
      {
        title: 'age',
        dataIndex: 'age',
        key: 'age',
        width: '5%',
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'gender',
        dataIndex: 'gender',
        key: 'gender',
        width: '5%',
        ...this.getColumnSearchProps('gender'),
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
        width: '5%',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'phone',
        dataIndex: 'phone',
        key: 'phone',
        width: '5%',
        ...this.getColumnSearchProps('phone'),
      },
      {
        title: 'address',
        dataIndex: 'address',
        key: 'address',
        width: '5%',
        ...this.getColumnSearchProps('address'),
      },
      {
        title: 'createdAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: '5%',
        ...this.getColumnSearchProps('createdAt'),
      },
    ];
    //esta es la tabla que muestra todo los campos posible para generar la informacion
    return <Table columns={columns} dataSource={unidos} />;
  }
}
export default List
