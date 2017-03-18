import React , {Component} from 'react'
import { Row , Col } from 'antd';


import Header from './views/Header';
import Welcome from './views/Welcome';

export default class App extends Component {

  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="home" />
              <Welcome title="Javad Malek Shahkoohi" />
              {/*             //
                          // <Products />
                          // <Footer /> */}
          </Col>
        </Row>
      );
  }

}
