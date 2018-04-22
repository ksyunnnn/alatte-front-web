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

import {
  Select,
} from './components'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import mapMarkerIcon from 'images/space_map_marker@2x.svg';

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

const MapContainer = styled.div`
  margin-top: -64px;
  height: 320px;
  width: 100vw;
  position: absolute;
  left: 0px;
`;

const ContentsWrapper = styled.div`
  padding-top: 320px;
`;

const Map = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.lat + 0.003, lng: props.lng }}
  >
    <Marker
      position={{ lat: props.lat - 0.003, lng: props.lng }}

    />
  </GoogleMap>
)));

const KEY = 'AIzaSyDhD3qzko8r43T_hCs9pjX-fkT7cf6TdOI';

const NextButton = styled.div`
  background-color: #549eed;
  border-radius: 30px;
  color: #ffffff;
  font-weight: bold;
  height: 48px;
  letter-spacing: 2px;
  line-height: 48px;
  margin: 0 auto;
  text-align: center;
  width: 320px;
  cursor: pointer;
`;

export default class Host  extends React.Component {
  constructor(props) {
    super(props);

    this.messages = {
      "select task": {
        main: "洗濯物を受け取る場所を確認",
        sub: "こちらの住所に向かいましょう",
        button: "確認",
      },
      "select laundry": {
        main: "ランドリーを選ぶ",
        sub: "洗濯物を運ぶ先を選びましょう",
        button: "決定",
      },
      "go recieve": {
        main: "洗濯物を受け取る",
        sub: "こちらの住所に向かいましょう",
        button: "受け取った",
      },
      "go laundry": {
        main: "洗濯物を洗う",
        sub: "コインランドリーに向かいましょう",
        button: "洗う",
      },
    }

    this.state = {
      currentHostId: '1',
      map: { lat: -34.397, lng: 150.644, text: "目黒区三田 2-13-16 OAK SQUARE EBISU" },
      hostStatus: "select task",
      laundrys: [],
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

    }
  }
  fetchPageStatus() {
    // 通信してstateをすべて更新{TODO}
    this.setState({
      hostStatus: "go laundry",
    });

    const laundrysData = [
      {
        name: "すごいランドリー",
        id: "0001",
      },
      {
        name: "キレイなランドリー",
        id: "0002",
      },
      {
        name: "ひろいランドリー",
        id: "0003",
      },
    ]
    this.setState({
      laundrys: laundrysData
    })
  }

  submitAction() {


    this.fetchPageStatus();
    console.log("Post data : ",this.state);
  }

  renderSelectLaundty(){
    return (
      <div style={{marginBottom: "48px"}}>
        <Select
          name="who"
          value={this.state.who}
          onChange={this.onKeyChange}
        >
          {this.state.laundrys.map((v,i)=>{
          return (
            <option key={i} value={v.id}>{v.name}</option>
          );
        })}
      </Select>

      </div>
    );
  }

  render(){
    const { map } = this.state;
    return (
      <div>
        <Map
          containerElement={<MapContainer />}
          mapElement={<div style={{ height: '100%' }} />}
          loadingElement={<div style={{ height: '100%' }} />}
          lat={map.lat}
          lng={map.lng}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
        />

      <ContentsWrapper>
        <MessageContainer
          message={this.messages[this.state.hostStatus]}
          />


      {
        this.state.hostStatus=="select laundry"?
            this.renderSelectLaundty()
            :""
      }
      {
        this.state.hostStatus=="go recieve"?
            <div style={{textAlign: "center",lineHeight: "16px",marginBottom:"56px"}}>{this.state.map.text}</div>
            :""
      }
      {
        this.state.hostStatus=="go laundry"?
            <div style={{textAlign: "center",lineHeight: "16px",marginBottom:"56px"}}>
              <img style={{height:"128px"}} src="/aratte.png" />
            </div>
            :""
      }

      <NextButton
        onClick={()=>{this.submitAction()}}
        >
        {this.messages[this.state.hostStatus].button}
      </NextButton>

        </ContentsWrapper>

      </div>
    );
  }
}
