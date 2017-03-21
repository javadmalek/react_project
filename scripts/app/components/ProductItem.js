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
        let details = this.props.details;
        let StyleBuy = ( details.available && this.props.orders.indexOf(this.props.index) == -1 ) ? ''
                        : { cursor : 'not-allowed', backgroundColor:'#999' }

        let TextDispaly = 'Add to card';
        if( !details.available)
            TextDispaly = 'Not Available';
        else if( this.props.orders.indexOf(this.props.index) != -1 )
            TextDispaly = 'Already added';

        return (
            <Card style={{ margin:'auto 15px 25px' }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <img alt="example" width="100%" src={ details.image } />
                </div>
                <div className="shop-card">
                    <h3>{ details.title }</h3>
                    <p>{ details.description }</p>
                </div>
                <div style={{ padding: '0px 16px 10px' }}>
                    <Tag color="#87d068">{ details.price }$</Tag>
                    <Tag color="#108ee9" style={StyleBuy} onClick={ () => this.props.add2Card(this.props.index) }>{ TextDispaly }</Tag>
                </div>
            </Card>
        );
    }
}
