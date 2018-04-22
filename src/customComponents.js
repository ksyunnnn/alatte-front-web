import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const Colors = {
  white: '#fff',
  gray: '#eee',
  blue: '#4C9CD0',
}

const Container = styled.div`
  margin-top: 0px;
  cursor: pointer;
  width: 56px;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  text-align: center;
  &:not(:first-child) {
    margin-top: 0px;
  }
  margin-right: 8px;
`;

const Card = styled.div`
  padding: 0px;
  width: 100%;
  border: 1px solid ${Colors.gray};
  border-radius: 4px;
  ${props => props.selected && `
    background: ${Colors.blue};
  `}
  height: 56px;
`;

const Text = styled.div`
  color: inherit;
  font-size: inherit;
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
`;

// const Image = styled.img`
//   display: block;
//   margin-top: ${Dimens.medium}px;
//   width: 100%;
//   ${media.phone`
//     display: inline-block;
//     vertical-align: middle;
//     width: 40%;
//     margin-top: 0;
//     margin-left: ${Dimens.medium}px;
//     height: 100%;
//   `}
// `;

// <Image src={props.image} alt={props.text} />

export const CountSelect = props => (
  <Container
    position={props.position}
    selected={props.selected}
    onClick={props.onClick}
  >
    <Card selected={props.selected}>
      <Text>{props.text}</Text>

    </Card>
  </Container>
);

export const CountSelectWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  margin-bottom: 16px;
`;

export const DefaultTitle = styled.div`
  font-size: 33px;
  margin-bottom: 48px;
`;

export const Reservation = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const ReservationInputWrap = (props) => {
  const Wrapp = styled.div`
    display: inline-block;
    width: 80%;
    vertical-align: bottom;
  `;
  return (
    <div className={props.className}>
      <Wrapp>{props.children}</Wrapp>
      {props.unit}
    </div>
  );
}

export const StyledReservationInputWrap = styled(ReservationInputWrap)`
    width: 80px;
    margin-right: 12px;
`;


export const GenderWrapper = styled.div`
  margin-bottom: 56px;
`;

export const RequestButton = styled.div`
  height: 48px;
  line-height: 48px;
  border-radius: 28.5px;
  background: ${Colors.blue};
  text-align: center;
  font-size: 18px;
  color: ${Colors.white};
  box-sizing: border-box;
  cursor: pointer;
`;


export const MessageContainer = (props) =>{
  const Root = styled.div`
    text-align: center;
    margin-bottom: 40px;
  `;
  const Sub = styled.div`
    font-size: 16px;
    letter-spacing: .2px;
    margin-bottom: 16px;
  `;
  const Main = styled.div`
    font-size: 27px;
    letter-spacing: .3px;
  `;
  return(
    <Root>
      <Sub>{props.message.sub}</Sub>
      <Main>{props.message.main}</Main>
    </Root>
  );
}

export const ImageContainer = (props) =>{
  const Root = styled.div`
    text-align: center;
    margin-bottom: 16px;
  `;
  const Image = styled.img`
    height: 200px;
    width: 200px;
  `;
  return(
    <Root>
      <Image src={props.src} />
    </Root>
  );
}


export const ScheduleTime = (props) => {
  const Root = styled.div`
    text-align: center;
    margin-bottom: 16px;
    font-size: 16px;
  `;
  const Time = styled.div`
    display: inline-box;
    font-size: 40px;
  `;
  return(
    <Root>
      <Time>{props.time}</Time>頃到着予定
    </Root>
  );
}
