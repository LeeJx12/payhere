var cssMap = {};

function rec(el) {
    if (el.tagName == 'SCRIPT') return;

    var className = el.getAttribute("class") || el.id || el.tagName;
    className = camelCase(className);
    var style = window.getComputedStyle(el);
    var css = {};

    Array.from(style).forEach(st => {
        if (st.startsWith('-webkit') || st.startsWith('font')) return;

        var str = camelCase(st);

        css[str] = style.getPropertyValue(st).replace('px', '');
    });

    if (!cssMap[className]) {
        cssMap[className] = css;
    }

    if (el.children.length > 0) {
        Array.from(el.children).forEach(child => rec(child));
    }
}

function camelCase(st) {
    st = st.replace(/(\")/gi, '');
    var temp = [...st];
    var str = '';
    temp.forEach((tmp, idx) => {
        if (idx!=0 && (temp[idx-1] === '-' || temp[idx-1] === ' ')) {
            str += tmp.toUpperCase();
        } else if (tmp !== '-' && tmp !== ' ') {
            str += tmp;
        }
    })

    return str;
}

(function(){
    Array.from(document.body.children).forEach(el => rec(el));
})();