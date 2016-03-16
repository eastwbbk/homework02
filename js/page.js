"use strict";

function Page(options) {
    this._el = options.element;

    this._calculator = new Calculator({
        element: document.querySelector('[data-component="calculator"]')
    });
}
Page.prototype._render = function() {

};