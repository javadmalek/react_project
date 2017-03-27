import React , {Component} from 'react'
import { Row , Col, Button , Form, Input} from 'antd';
const FormItem = Form.Item;

import Header from '../components/Header';
import Contact from '../components/Contact';

export default class ContactMe extends Component {

    constructor (props)
    {
        super(props);

        this.state = {

            FormData :{
                txtbxname  : '',
                txtbxemail  : '',
                txtbxmsg  : '',
            }

        }

        this.HanndleSubmit = this.HanndleSubmit.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
    }

    HanndleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state.FormData);
    }

    HandleChange(event)
    {
        const target = event.target;
        const inputname = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.state.FormData[inputname] = value;
        console.log(this.state.FormData[inputname]);
        this.setState((prevState) => {
            FormData : prevState.FormData
        })

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
                      <Form onSubmit={this.HanndleSubmit} >

                          <FormItem label="Name">
                              <Input type="text" name="txtbxname" placeholder="Please enter your name" value={this.state.FormData.txtbxname} onChange={ this.HandleChange}  />
                          </FormItem>

                          <FormItem label="E-mail">
                              <Input type="email" name="txtbxemail" placeholder="Please enter your name"  value={this.state.FormData.txtbxemail} onChange={ this.HandleChange}   />
                          </FormItem>

                          <FormItem label="message">
                              <Input name="txtbxmsg" placeholder="Please enter your name"  value={this.state.FormData.txtbxmsg} onChange={ this.HandleChange}  />
                          </FormItem>

                          <FormItem >
                              <Button type="primary" htmlType="submit">Send</Button>
                          </FormItem>

                      </Form>
                  </Col>
              </Row>

          </Col>
        </Row>
      );
  }
}
