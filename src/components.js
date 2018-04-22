import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import {
  CountSelect,
  CountSelectWrapper,
  Label,
  DefaultTitle,
  Reservation,
  StyledReservationInputWrap,
  GenderWrapper,
  RequestButton,
  MessageContainer,
  ImageContainer,
  ScheduleTime,
} from './customComponents'

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
    padding: 0 16px;
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

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Form = styled.div`
`;

const Select = styled.select`
    border-radius: 0;
    border: 0;
    margin: 0;
    padding: 0 .2rem;
    border:1px solid ${Colors.gray};
    background: ${Colors.white};
    height: 30px;
    line-height: 30px;
    width: 100%;
    box-sizing: border-box;
    font-size: .8rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
    background: none transparent;
    vertical-align: middle;
    font-size: inherit;
    color: inherit;
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

const Wrapper = styled.div`
    width: 100%;
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
        login View!!!!!<br /><br />
        <Wrapper>
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
        </Wrapper>
      </div>
    );
  }
}

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.messages = {
      "find host": {
        main: "配達員を探しています",
        sub: "ご注文受け付けました！",
      },
      "macthing": {
        main: "ご自宅に向かっています",
        sub: "マッチングしました！",
      },
      "recieved": {
        main: "配送しています",
        sub: "受け取りました！",
      }
    }

    this.state = {
      currentUserId: '1',
      requestInfo: {
        type: "",
        count: "1",
        place: "home",
        month: "4",
        date: "22",
        time: "17",
        gender: "free",
      },
      baggageInfo: {
        status: "find host",
        map: "",
        scheduleTime: "15:00",
      },
      pageStatus: "before req",
    };
    this.onKeyChange = this.onKeyChange.bind(this);
  }
  componentDidMount() {
    this.fetchPageStatus();
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
      case "month":
        requestInfoCopy['month'] = e.target.value;
        this.setState({
          requestInfo: requestInfoCopy,
        });
        break
      case "date":
        requestInfoCopy['date'] = e.target.value;
        this.setState({
          requestInfo: requestInfoCopy,
        });
        break
      case "time":
        requestInfoCopy['time'] = e.target.value;
        this.setState({
          requestInfo: requestInfoCopy,
        });
        break
      case "gender":
        requestInfoCopy['gender'] = e.target.value;
        this.setState({
          requestInfo: requestInfoCopy,
        });
        break
    }
  }
  fetchPageStatus() {
    // 通信部分・これを定期で動かしたい？

    // pageStatusを通信してすべて更新{TODO}
    this.setState({
      pageStatus: 'requested',
    });
    // baggageInfoも


  }

  submitAction() {
    // postして、fetchPageStatus



    this.fetchPageStatus();
    console.log("Post data : ",this.state);
  }

  handleChangeCount = (count) => {
    let requestInfoCopy = this.state.requestInfo;
    requestInfoCopy['count'] = count;
    this.setState({
      requestInfo: requestInfoCopy,
    });
  }

  renderRequestForm() {
    return (
      <Form>
        <DefaultTitle>予約する</DefaultTitle>
        <Label>洗濯バック個数</Label>
        <CountSelectWrapper>
          <CountSelect
            selected={this.state.requestInfo.count === "1"}
            text="1"
            onClick={() => this.handleChangeCount(1)}
            />
          <CountSelect
            selected={this.state.requestInfo.count === "2"}
            text="2"
            onClick={() => this.handleChangeCount(2)}
            />
          <CountSelect
            selected={this.state.requestInfo.count === "3"}
            text="3"
            onClick={() => this.handleChangeCount(3)}
            />
        </CountSelectWrapper>

        <Label>予約時間</Label>
        <Reservation>
          <StyledReservationInputWrap unit="月">
            <Select
              name="month"
              value={this.state.requestInfo.month}
              onChange={this.onKeyChange}
            >
              {Array.from(new Array(12)).map((v,i)=>{
                return (
                  <option key={i} value={i+1}>{i+1}</option>
                );
            })}
            </Select>
          </StyledReservationInputWrap>

          <StyledReservationInputWrap unit="日">
            <Select
              name="date"
              value={this.state.requestInfo.date}
              onChange={this.onKeyChange}
            >
              {Array.from(new Array(30)).map((v,i)=>{
                return (
                  <option key={i} value={i+1}>{i+1}</option>
                );
            })}
            </Select>
          </StyledReservationInputWrap>

          <StyledReservationInputWrap unit="時">
            <Select
              name="time"
              value={this.state.requestInfo.time}
              onChange={this.onKeyChange}
            >
              {Array.from(new Array(24)).map((v,i)=>{
                return (
                  <option key={i} value={i+1}>{i+1}</option>
                );
            })}
            </Select>
          </StyledReservationInputWrap>

        </Reservation>

        <Label>配達員の性別</Label>
        <GenderWrapper>
          <Select
            name="time"
            value={this.state.requestInfo.time}
            onChange={this.onKeyChange}
          >
          {[
            {
            text: "おまかせ",
            value: "free",
          },
          {
            text: "女性のみ",
            value: "only-women",
          }
        ].map((v,i)=>{
          return (
            <option key={i}>{v.text}</option>
          );
        })}
          </Select>
        </GenderWrapper>



        <RequestButton
          onClick={()=>{this.submitAction()}}
          >
          決定
        </RequestButton>
      </Form>
    );
  }

  renderStatusView() {
    const { baggageInfo } = this.state;
    return (
      <div>
        <MessageContainer
          message={this.messages[baggageInfo.status]}
          />

        <ImageContainer
          src="http://placehold.jp/200x200.png"
          />

        {baggageInfo.scheduleTime?
          <ScheduleTime time={baggageInfo.scheduleTime} />
          :""
        }
      </div>
    );
  }

  render(){
    return (
      <div>
        <Wrapper>
          {this.state.pageStatus=='before req'?this.renderRequestForm():this.renderStatusView()}
        </Wrapper>
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
  `;

  return (
    <Root>
      {props.children}
    </Root>
  );
}
