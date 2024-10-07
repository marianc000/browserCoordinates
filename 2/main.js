const html = template.content.firstElementChild.outerHTML;

const extensionId = "lehljdbfihfcgagkechnpppedkjjfbnb";

let height, left, state, top, width;

const xOffset = 6, yOffset = 6;

function maximized(){
    return state==='maximized';
}

function myX() {
    if (maximized())
        return 0;
    return screenX + xOffset - screen.availLeft;
}

function myY() {
    if (maximized())
        return 0;
    return screenY - screen.availTop;
}

function myWidth() {
    if (maximized())
        return screen.availWidth;

    return outerWidth - xOffset * 2;
}

function myHeight() {
    if (maximized())
        return screen.availHeight;

    return outerHeight - yOffset;
}

function render() {
    outDiv.innerHTML = html.replaceAll(/>([^<]+)<\/td>/g, (m, g) => `>${block(g)}</td>`);
}


async function run() {
    ({ height, left, state, top, width } = await chrome.runtime.sendMessage(extensionId, {}));

    render();
     requestAnimationFrame(run);
}

function val(s) {
    return eval(s);
}
function block2(l1, l2) {
    return `<div class='property'><div>${l1}</div><div>${l2}</div></div>`;
}
function block(p) {
    return block2(p, val(p));
}

run()