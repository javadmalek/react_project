import React , {Component} from 'react'
import { Row , Col } from 'antd';
import Cookie from 'react-cookie';

import DataFromFile from './src/data'

import Header from './components/Header';
import Welcome from './components/Welcome';
import Products from './components/Products';

export default class App extends Component {

    constructor(props)
    {
        super(props);
        this.state ={
            products : DataFromFile,
            orders : ( typeof(Cookie.load('orders')) == "undefined" ? [] : Cookie.load('orders') ),
        }

        this.add2Card = this.add2Card.bind(this);
    }

    add2Card(index)
    {
        console.log(index);
        if(this.state.products[index].available && this.state.orders.indexOf(index) == -1)
        {
            this.state.orders.push(index);
            Cookie.save('orders', this.state.orders,{ path : '/' });

            this.setState((prvState) => { orders : prvState.orders } );
        }
    }

  render()
  {
      return (
        <Row type="flex" justify="center">
          <Col span={15}>
              <Header SelectedMenu="home" />
              <Welcome title="Javad Malek Shahkoohi" />
              <Products products={this.state.products}  add2Card={this.add2Card} orders={this.state.orders} />
          </Col>
        </Row>
      );
  }

}
