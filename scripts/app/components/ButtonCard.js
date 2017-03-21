/**
 * Created by Javad Malek Shahkoohi on 3/20/2017.
 */

import React , {Component} from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd';

export default class ButtnCard extends Component
{

    constructor(props)
    {
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
    }

    // handleMenuClick(e)
    // {
    //     console.log('click', e);
    // }

    renderMenu(index)
    {
        console.log(this.props.orders[index]);
        return (
            <Menu.Item key={index}><Icon type="close" className="remove-card" />{ this.props.products[this.props.orders[index]].title }</Menu.Item>
        );
    }

    render()
    {
        // console.log(this.props.products);

        let menu = (
            <Menu onClick={ (key) => this.props.removeOfCard(key) }>
                {Object.keys(this.props.orders).map(this.renderMenu)}
            </Menu>
        );

        return (
            <div className="card-button">
                <Dropdown overlay={menu}>
                    <Button type="primary" style={{ marginLeft : 8 }}>
                        Your Card <Icon type="shopping-cart" />
                    </Button>
                </Dropdown>
            </div>
        );
    }
}