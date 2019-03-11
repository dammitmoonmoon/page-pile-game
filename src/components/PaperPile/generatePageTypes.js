import {OneSignaturePageA} from "../PageTypes/OneSignaturePageA";
import {NoSignaturePage} from "../PageTypes/NoSignaturePage";
import {OneSignaturePageB} from "../PageTypes/OneSignaturePageB";
import React from "react";

function getSignaturePerPageArray(pileSize) {
    const probabilitySkew = 3;
    return Array.from({length: pileSize}, () => {
        const random = getRandomInteger(0, probabilitySkew);
        return random ? 1 : 0;
    })
}

function getRandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function getPages(signaturePerPageArray) {
    const marginOptions = ['margin: auto;', 'margin-left: auto;', 'margin-right: auto;'];

    return signaturePerPageArray.map((item, index) =>
        {
            const marginOption = marginOptions[Math.floor(Math.random()*marginOptions.length)];
            switch (item) {
                case 1: {
                    const random = getRandomInteger(0, 1);
                    return random === 0 ?
                        <OneSignaturePageA marginOption={marginOption} key={index}/>
                        : <OneSignaturePageB marginOption={marginOption} key={index}/>;
                }

                default:
                return <NoSignaturePage key={index}/>;
            }
        }
    )};

function getMaximumScore(signaturePerPageArray) {
    return signaturePerPageArray.reduce((total, current) => total + current, 0);
}

export {
    getSignaturePerPageArray,
    getPages,
    getMaximumScore,
}