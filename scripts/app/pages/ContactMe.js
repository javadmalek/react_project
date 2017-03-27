import React , {Component} from 'react'
import { Row , Col, Button } from 'antd';


import Header from '../components/Header';
import Contact from '../components/Contact';

export default class ContactMe extends Component {

    hanndleSubmit(e)
    {
        e.preventDefault();

        let FormData= {
            txtbxname : this.refs.txtbxname.value,
            txtbxemail : this.refs.txtbxemail.value,
            txtbxmsg : this.refs.txtbxmsg.value
        }
        console.log(FormData);
    }


  render() {
      return (
        <Row type="flex" justify="center">
          <Col span={12}>
              <Header SelectedMenu="morepage:contactme" />
              <Contact title="You can connect and that would my pleasure." />


              <Row type="flex" justify="center">
                  <Col span={12}>
                      <h2>Contact Form</h2>
                      <form onSubmit={this.hanndleSubmit.bind(this)} >

                          <div className="ant-row ant-form-item">
                              <div className="ant-form-item-label">
                                  <label className="">Name</label>
                              </div>
                              <div className="">
                                  <div className="ant-form-item-control">
                                      <input type="text" name="txtbxname" placeholder="Please enter your name" ref="txtbxname" className="ant-input ant-input-lg" />
                                  </div>
                              </div>
                          </div>

                          <div className="ant-row ant-form-item">
                              <div className="ant-form-item-label">
                                  <label className="">Email</label>
                              </div>
                              <div className="">
                                  <div className="ant-form-item-control">
                                      <input type="text" name="txtbxemail" placeholder="Please enter your e-mail address" ref="txtbxemail" className="ant-input ant-input-lg" />
                                  </div>
                              </div>
                          </div>

                          <div className="ant-row ant-form-item">
                              <div className="ant-form-item-label">
                                  <label className="">Message</label>
                              </div>
                              <div className="">
                                  <div className="ant-form-item-control">
                                      <textarea  name="txtbxmsg" placeholder="Please enter your message" ref="txtbxmsg" className="ant-input ant-input-lg"></textarea>
                                  </div>
                              </div>
                          </div>

                          <div className="ant-row ant-form-item">
                              <div className="">
                                  <div className="ant-form-item-control">
                                      <Button type="primary" htmlType="submit">Send</Button>
                                  </div>
                              </div>
                          </div>

                      </form>
                  </Col>
              </Row>

          </Col>
        </Row>
      );
  }
}
