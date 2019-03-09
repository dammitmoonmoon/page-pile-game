import React, { Component } from 'react';
import {PaperPile} from "./PaperPile/PaperPile";
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <PaperPile/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #333;
  padding: 2em;
`;


export default App;
