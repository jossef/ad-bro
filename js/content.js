(function () {
    function deleteElementById(elementId) {
        var element = document.getElementById(elementId);
        element.outerHTML = "";
        delete element;
    }

    deleteElementById('colorbox');
    deleteElementById('cboxOverlay');
})();