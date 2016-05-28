AdBro = {
    deleteElementById: function (elementId) {
        var element = document.getElementById(elementId);
        this.deleteElement(element);
    },

    deleteElementByClassName: function (className) {
        var elements = document.getElementsByClassName(className);
        elements.forEach(this.deleteElement);
    },

    addCustomCSS: function (css) {
        var styleElement = document.createElement('style');
        var cssElement = document.createTextNode(css);
        var headElement = document.getElementsByTagName('head')[0];

        styleElement.type = 'text/css';
        styleElement.appendChild(cssElement);
        headElement.appendChild(styleElement);
    },
    hideCssClasses: function (cssClasses) {
        this.addCustomCSS(cssClasses.join(', ') + ' {visibility: hidden !important;}')
    },

    deleteElement: function (element) {
        if (!element) {
            return;
        }

        element.outerHTML = "";
        delete element;
    }
};
