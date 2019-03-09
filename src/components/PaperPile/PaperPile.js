import * as React from 'react';
import styled from 'styled-components';
import {List} from "./List";

const pileSize = 10;


const lists = Array(10).fill(0).map((_, index) => <List needSignature={index % 3 !== 0}/>) ;


const PaperPile = (needSignature) => {
    console.log('lists', lists);
    return (
        <Wrapper>
            {lists}
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export {
    PaperPile
};
