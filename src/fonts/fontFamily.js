const FontFamily = {
    RobotoLight: 'RobotoLight, sans-serif',
    RalewayBold: 'RalewayBold, sans-serif',
    RalewayMedium: 'RalewayMedium, sans-serif',
};

function fontFamily(font) {
    return `font-family: ${FontFamily[font]}`;
}

export {
    fontFamily
};
