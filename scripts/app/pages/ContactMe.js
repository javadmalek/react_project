import React , {Component} from 'react'
import { Row , Col } from 'antd';


import Header from '../components/Header';
import Contact from '../components/Contact';

export default class ContactMe extends Component {

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="morepage:contactme" />
              <Contact title="You can connect and that would my pleasure." />
          </Col>
        </Row>
      );
  }
}
