const html = template.content.firstElementChild.outerHTML;

const extensionId = "lehljdbfihfcgagkechnpppedkjjfbnb";

function render() {
    outDiv.innerHTML= html.replaceAll(/<td>([^<]+)<\/td>/g, (m, g) => `<td>${block(g)}</td>`);
 
}

let height, left, state, top, width;

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