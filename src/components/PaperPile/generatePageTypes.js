import {OneSignatureListA} from "./OneSignatureListA";
import {NoSignatureList} from "./NoSignatureList";
import {OneSignatureListB} from "./OneSignatureListB";
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
    return signaturePerPageArray.map((item, index) =>
        {
            switch (item) {
                case 1: {
                    const random = getRandomInteger(0, 1);
                    return random === 0 ? <OneSignatureListA key={index}/> : <OneSignatureListB key={index}/>;
                }

                default:
                return <NoSignatureList key={index}/>;
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