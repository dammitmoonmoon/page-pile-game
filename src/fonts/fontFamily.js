

const FontFamily = {
    Akrobat: 'Akrobat, sans-serif',
    RobotoCondensed: 'RobotoCondensed, sans-serif',
    OpenSans: 'OpenSans, sans-serif',
};

function fontFamily(font: FontType) {
    return `font-family: ${FontFamily[font] || FontFamily.Akrobat};`;
}