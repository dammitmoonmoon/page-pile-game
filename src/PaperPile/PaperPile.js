import React from 'react';
import styled from 'styled-components';

const PaperPile = () => (
    <Pile></Pile>
);

const Pile = styled.div`
    background: #fff;
    padding: 90px 30px;
    position: relative;
    &,
    &:before,
    &:after {
        box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
        border: 1px solid #bbb;
    }
    &:before,
    &:after {
        content: "";
        position: absolute;
        height: 95%;
        width: 99%;
        background-color: #eee;
    }
    &:before {
        right: 15px;
        top: 0;
        transform: rotate(-1deg);
        z-index: -1;
    }
    &:after {
        top: 5px;
        right: -5px;
        transform: rotate(1deg);
        z-index: -2;
    }
`;

export { PaperPile };

