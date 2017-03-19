/**
 * Created by Javad Malek Shahkoohi on 3/18/2017.
 */

import React , {Component} from 'react'
import { Card, Tag } from 'antd';



export default class ProductItem extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let detailes = this.props.detailes;

        return (
            <Card style={{ margin:'auto 15px 25px' }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={ detailes.image } />
                </div>
                <div className="shop-card">
                    <h3>{ detailes.title }</h3>
                    <p>{ detailes.description }</p>
                </div>
            </Card>
        );
    }
}
