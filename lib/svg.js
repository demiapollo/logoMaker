

class SVG {
    constructor () {
        this.text = '';
        this.shape = '';
}
    render () {
        return `<svg height="100" width="100">
        ${this.shape}
        ${this.text}
        </svg>`
    }
    setText (text, textColor) {
        this.text = `<text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>`
    }
    setShape (shape) {
        this.shape = shape.render();
}
};

module.exports = SVG;