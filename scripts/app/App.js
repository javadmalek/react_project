import React , {Component} from 'react'
import { Row , Col } from 'antd';

import DataFromFile from './src/data'

import Header from './components/Header';
import Welcome from './components/Welcome';
import Products from './components/Products';

export default class App extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            products : DataFromFile
        }
    }


  render()
  {
      return (
        <Row type="flex" justify="center">
          <Col span={15}>
              <Header SelectedMenu="home" />
              <Welcome title="Javad Malek Shahkoohi" />
              <Products products={this.state.products} />
          </Col>
        </Row>
      );
  }

}
