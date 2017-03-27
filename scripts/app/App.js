import React , {Component} from 'react'
import { Row , Col } from 'antd';
import Cookie from 'react-cookie';
import Mixin from 'react-mixin';

import DataFromFile from './src/data'
import Mixins from './src/mixins'

import Header from './components/Header';
import Welcome from './components/Welcome';
import Products from './components/Products';
import ButtonCard from './components/ButtonCard';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: DataFromFile,
            orders: ( typeof(Cookie.load('orders')) == "undefined" ? [] : Cookie.load('orders') ),
        }

        this.add2Card = this.add2Card.bind(this);
        this.removeOfCard= this.removeOfCard.bind(this);

        this.success('Mxins message');
    }

    add2Card(index) {
        console.log(index);
        if (this.state.products[index].available && this.state.orders.indexOf(index) == -1) {
            this.state.orders.push(index);
            Cookie.save('orders', this.state.orders, {path: '/'});

            this.setState((prvState) => {
                orders : prvState.orders
            });
        }
    }

    removeOfCard(index)
    {
        let productKey = this.state.orders[index.key];
        let i = this.state.orders.indexOf(productKey);

        if(i != -1) // if it exits
        {
            this.state.orders.splice(i , 1);
            Cookie.save('orders', this.state.orders, {path : '/' });
            this.setState((prvState) => {
                orders : prvState.orders
            });
        }
    }

    render() {
        return (
            <Row type="flex" justify="center">
                <Col span={15}>
                    <Header SelectedMenu="home"/>
                    <Welcome title="Javad Malek Shahkoohi"/>
                    <Products products={this.state.products} add2Card={this.add2Card} orders={this.state.orders}/>
                </Col>
                <ButtonCard products={this.state.products} removeOfCard={ this.removeOfCard} orders={this.state.orders}/>
            </Row>
        );
    }

}



Mixin.onClass(App, Mixins.Logs );
export default App;