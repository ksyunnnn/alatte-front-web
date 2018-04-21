import React, { Component } from 'react';
import styled from 'styled-components';

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

const Form = Card.extend`
    height: ${Heights.form}px;
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
    text-transform: uppercase;
    background: transparent;
    color: currentColor;
    :hover {
      color: #999;
    }
}
`;

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      born: "",
    };
    this.onKeyChange = this.onKeyChange.bind(this);
  }

  onKeyChange(e) {
    switch (e.target.name) {
      case "first":
        this.setState({
          first: e.target.value,
        });
        break
      case "last":
        this.setState({
          last: e.target.value,
        });
        break
      case "born":
        this.setState({
          born: e.target.value,
        });
        break
    }
  }

  render(){
    return (
      <Form>
        <Input name="first" placeholder="Type your first name." onChange={this.onKeyChange} value={this.state.first} />
        <br /><br />
        <Input name="last" placeholder="Type your last name." onChange={this.onKeyChange} value={this.state.last} />
        <br /><br />
        <Input name="born" placeholder="Type your born." onChange={this.onKeyChange} value={this.state.born} />

        <Button
          onClick={()=>{this.props.pushUserAction(this.state.first,this.state.last,this.state.born)}}
          >
          Submit
        </Button>
      </Form>
    );
  }
}

const DataCard = (props) => {
  const { user } = props;
  const Root = Card.extend`
      height: 80px;
      color: #555;
      margin: 0 10px 20px 10px;
      line-height: 30px;
  `;
  const Name = styled.div`
  `;
  const Born = styled.div`
  `;
  return (
    <Root>
      <Name>Name : {user.first} {user.last}</Name>
      <Born>Born : {user.born}</Born>
    </Root>
  );
}

const DisplayDataCards = (props) => {
  const { users } = props;
  const Root = styled.div`
      width: 780px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-content: flex-start;
  `;

  return (
    <Root>
      {users.map((v,i)=>{
        return (
          <DataCard
            key={i}
            user={v}
            />
        );
      })}
    </Root>
  );
}



export const Header = (props) => {
  const Root = DefaultContainer.extend`
      height: ${Heights.header}px;
      line-height: ${Heights.header}px;
      background: ${Colors.gray};
      position: fixed;
      width: 100%;
      box-sizing: border-box;
  `;
  return (
    <Root>
      <Anchor target="_blank" href="#"><i className="fas fa-code"></i> </Anchor>
      Try Firestore
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
  const ContentsWrapper = styled.div`
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
  `;
  return (
    <Root>
      This is User List addable.

      <ContentsWrapper>
        <InputForm
          pushUserAction={props.pushUserAction}
          />
        <DisplayDataCards
          users={props.users}
          input={props.input}
          />
      </ContentsWrapper>
    </Root>
  );
}
