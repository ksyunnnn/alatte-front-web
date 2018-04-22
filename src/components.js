import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

/*
    [Must]機能としてのコンポーネントと、スタイルとしてのコンポーネントをしっかり区別する
*/

const Heights = {
  header: '40',
  contens: '100vh',
  form: '480',
}

const Colors = {
  white: '#fff',
  gray: '#eee',
  blue: '#4C9CD0',
}

const DefaultContainer = styled.div`
    padding: 0 120px;
`;

const Input = styled.input`
  margin: 0;
  padding: 1rem;
  border:1px solid ${Colors.gray};
  background: ${Colors.white};
  height: 30px;
  line-height: 30px;
  width: 100%;
  box-sizing: border-box;
  font-size: .8rem;
`;

const Card = styled.div`
  padding: 10px;
  width: 240px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Form = styled.div`
    margin: 0 auto;
    width: 240px;
`;

const Select = styled.select`
    border-radius: 0;
    border: 0;
    margin: 0;
    padding: 1rem;
    border:1px solid ${Colors.gray};
    background: ${Colors.white};
    height: 30px;
    line-height: 30px;
    width: 100%;
    box-sizing: border-box;
    font-size: .8rem;
`;
const Button = styled.button`
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
    display: block;
    cursor: pointer;
    min-height: 36px;
    min-width: 88px;
    line-height: 36px;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 0 6px;
    margin: 40px auto;
    background: transparent;
    color: currentColor;
    :hover {
      color: #999;
    }
}
`;

const CardWrapper = Card.extend`
    width: 480px;
    margin: 0 auto;
`;

export class Home  extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>this is home</div>
    );
  }
}

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pass: '',
      who: 'User',
    };
    this.onKeyChange = this.onKeyChange.bind(this);
  }

  onKeyChange(e) {
    switch (e.target.name) {
      case "id":
        this.setState({
          id: e.target.value,
        });
        break
      case "pass":
        this.setState({
          pass: e.target.value,
        });
        break
      case "who":
        this.setState({
          who: e.target.value,
        });
        break
    }
  }

  loginAction() {
    console.log("loginAction",this.state);
    if(this.state.who=="User") {
      this.props.history.push('/user/1');
    }else{
      this.props.history.push('/host/1');
    }

  }

  render(){
    return (
      <div>
        User View!!!!!<br /><br />
        <CardWrapper>
          <Form>
            <Input name="id" placeholder="your id" onChange={this.onKeyChange} value={this.state.id} />
            <br /><br />
            <Input name="pass" type="password" placeholder="your pass." onChange={this.onKeyChange} value={this.state.pass} />

            <br /><br />
            <Select
              name="who"
              value={this.state.who}
              onChange={this.onKeyChange}
            >
              {[
                {
                text: "User",
                value: "User",
              },
              {
                text: "Host",
                value: "Host",
              }
            ].map((v,i)=>{
              return (
                <option key={i}>{v.text}</option>
              );
            })}
          </Select>


            <Button
              onClick={()=>{this.loginAction()}}
              >
              Submit
            </Button>
          </Form>
        </CardWrapper>
      </div>
    );
  }
}

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: '',
      requestInfo: {
        type: "",
        count: "",
        place: "home",
      },
      baggageInfo: {
        status: "受け取り待ち",
        map: "",
      },
      pageStatus: "before req",
    };
    this.fetchPageStatus();
    this.onKeyChange = this.onKeyChange.bind(this);
  }

  onKeyChange(e) {
    let requestInfoCopy = this.state.requestInfo;
    switch (e.target.name) {
      case "type":
        requestInfoCopy['type'] = e.target.value;
        this.setState({
          requestInfo: requestInfoCopy,
        });
        break
      case "count":
        requestInfoCopy['count'] = e.target.value;
        this.setState({
          requestInfo: requestInfoCopy,
        });
        break
      case "place":
        requestInfoCopy['place'] = e.target.value;
        this.setState({
          requestInfo: requestInfoCopy,
        });
        break
    }
  }
  fetchPageStatus() {
    // pageStatusを通信して更新{TODO}
    this.setState({
      pageStatus: 'requested',
    });
  }

  submitAction(isFrom) {
    // postして、fetchPageStatus
    this.fetchPageStatus();
    console.log("isFrom:",isFrom);
  }

  renderRequestForm() {
    return (
      <Form>
        <Input name="type" placeholder="種別" onChange={this.onKeyChange} value={this.state.requestInfo.type} />
        <br /><br />
        <Input name="count" placeholder="個数" onChange={this.onKeyChange} value={this.state.requestInfo.count} />

        <br /><br />
        <Select
          name="place"
          value={this.state.requestInfo.place}
          onChange={this.onKeyChange}
        >
          {[
            {
            text: "自宅",
            value: "home",
          },
          {
            text: "コンビニ",
            value: "store",
          }
        ].map((v,i)=>{
          return (
            <option key={i} value={v.value}>{v.text}</option>
          );
        })}
        </Select>

        <Button
          onClick={()=>{this.submitAction('from req')}}
          >
          Submit
        </Button>
      </Form>
    );
  }

  renderStatusView() {
    const { baggageInfo } = this.state;
    return (
      <div>
        Staus
        <h2>{baggageInfo.status}</h2>
      </div>
    );
  }

  render(){
    return (
      <div>
        User<br /><br />
        <CardWrapper>
          {this.state.pageStatus=='before req'?this.renderRequestForm():this.renderStatusView()}
        </CardWrapper>
      </div>
    );
  }
}


export class Host  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pass: '',
    };
    this.onKeyChange = this.onKeyChange.bind(this);
  }

  onKeyChange(e) {
    switch (e.target.name) {
      case "id":
        this.setState({
          id: e.target.value,
        });
        break
      case "pass":
        this.setState({
          pass: e.target.value,
        });
        break
    }
  }

  loginAction(v) {
     console.log("loginAction",v);
  }

  render(){
    return (
      <div>
        <Form>
          <Input name="id" placeholder="your id" onChange={this.onKeyChange} value={this.state.id} />
          <br /><br />
          <Input name="pass" placeholder="your pass." onChange={this.onKeyChange} value={this.state.pass} />


          <Button
            onClick={()=>{this.loginAction(this.state)}}
            >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}


export const Header = (props) => {
  const Root = DefaultContainer.extend`
      height: ${Heights.header}px;
      line-height: ${Heights.header}px;
      background: ${Colors.blue};
      color: ${Colors.white};
      position: fixed;
      width: 100%;
      box-sizing: border-box;
  `;
  return (
    <Root>
      Alatte
    </Root>
  );
}


export const Contents = (props) => {
  const Root = DefaultContainer.extend`
      height: ${Heights.contens};
      background: ${Colors.white}
      padding-top: ${Heights.header*2}px;
      box-sizing: border-box;
      text-align: center;
  `;

  return (
    <Root>
      {props.children}
    </Root>
  );
}
