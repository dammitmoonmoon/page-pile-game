const gameTimeInSeconds = 20;
const threeSignaturePaperPercent = 10;
const tripleSignedPaperPercent = 10;
const doubleSignedPaperPercent = 30;

const unusualSignatureTypes = {
    triple: { numberOfSignatures: 3, percentOfPapers: 10 },
    double: { numberOfSignatures: 2, percentOfPapers: 30 },
    unsigned: { numberOfSignatures: 0, percentOfPapers: 20 },
};

const pileSize = 15;

function getSignatureArray(signatureTypeProps) {
    const signatureTypes = Object.keys(signatureTypeProps);
    const papers = signatureTypes.reduce((arr, type) => arr.concat(getNumberOfPapersPerSignatureType(type, pileSize)), []);

    return papers;
}

function getNumberOfPapersPerSignatureType (signatureTypeProps, pileSize) {
    const signatureTypes = Object.keys(signatureTypeProps);
    const signatureTypeParams = signatureTypeData[signatureType];
    const numberOfPapers = Math.floor(pileSize * signatureTypeParams.percentOfPapers / 100);
    const pileArrayPartial = Array(numberOfPapers).fill(signatureTypeParams.numberOfSignatures);
    return pileArrayPartial;
}

