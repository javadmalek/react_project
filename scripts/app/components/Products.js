/**
 * Created by Javad Malek Shahkoohi on 3/18/2017.
 */

import React , {Component} from 'react'
import { Row , Col , Menu, Icon } from 'antd';
import { Link } from 'react-router';

import helper from './../src/helper';
import ProductItem from './ProductItem';


export default class Products extends Component
{
    constructor(props){
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.render1Product = this.render1Product.bind(this);

        this.chunkOf3Products = helper.array_chunk(Object.keys(this.props.products), 3);
    }


    render1Product(key)
    {
        return (
            <Col key={key} span={8}>
                <ProductItem index={key} details={this.props.products[key]}  add2Card={this.props.add2Card}  orders={this.props.orders} />
            </Col>
        );
    }

    renderRow(key)
    {
        return (
            <Row key={ key }>
                { this.chunkOf3Products[key].map(this.render1Product) }
            </Row>
        );
    }

    render()
    {
        console.log(this.chunkOf3Products);
        return (
           <Row>
               <Col span={24}>
                   <Row className="row-product">
                       { Object.keys(this.chunkOf3Products).map(this.renderRow) }
                   </Row>
               </Col>
           </Row>
        )
    }
}
