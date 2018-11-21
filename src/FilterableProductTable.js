import React, { Component } from 'react';
import logo from './logo.svg';
import SearchFields from './components/SearchFields';
import ProductTable from './components/ProductTable';
import './App.css';

class FilterableProductTable extends Component {
  render() {
    return (
      <div className="container">
        <SearchFields />
        <ProductTable />
      </div>
    );
  }
}

export default FilterableProductTable;
