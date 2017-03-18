import React , {Component} from 'react'
import { Row , Col } from 'antd';


export default class Contact extends Component {

  render() {
    return (
      <Row>
        <Col>
          <h1 className="header_title">{ this.props.title }</h1>
          <p className="header_description">Tel: +39-388-472-7268 <br />Email: Mrjavad@gmail.com </p>
        </Col>
      </Row>
    );
  }


}
