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
  margin-top: -40px;
  height: 320px;
  width: 100vw;
  position: absolute;
  left: 0px;
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

export default class Host  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHostId: '1',
      task: [],
      hostStatus: "before task",
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

  }

  submitAction() {
    // postして、fetchPageStatus


    this.fetchPageStatus();
    console.log("Post data : ",this.state);
  }

  render(){
    return (
      <div>
        <Map
          containerElement={<MapContainer />}
          mapElement={<div style={{ height: '100%' }} />}
          loadingElement={<div style={{ height: '100%' }} />}
          lat={-34.397}
          lng={150.644}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
        />

      </div>
    );
  }
}
