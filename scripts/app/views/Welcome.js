import React , {Component} from 'react'
import { Row , Col } from 'antd';


export default class Welcome extends Component {

  render() {
    return (
      <Row>
        <Col>
          <h1 className="header_title">{ this.props.title }</h1>
          <p className="header_description">I am a full-stack developer with extensive experience in software and web-application development, user interface design and complex problem solving. I love to work with  teams and manage design projects. I am also interested in data-driven design, user testing and messaging bots.</p>
        </Col>
      </Row>
    );
  }


}
