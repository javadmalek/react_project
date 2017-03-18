import React , {Component} from 'react'
import { Row , Col } from 'antd';


import Header from '../views/Header';
import Welcome from '../views/Welcome';

export default class About extends Component {

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="about" />
              <Welcome title="Welcome To Javad Malek Shahkoohi About page" />
          </Col>
        </Row>
      );
  }

}
