function run() {
    let htmlcode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");

    let output = document.getElementById("output");

    let htmlHighlighted = Prism.highlight(htmlcode.value, Prism.languages.html, 'html');
    let cssHighlighted = Prism.highlight(cssCode.value, Prism.languages.css, 'css');
    let jsHighlighted = Prism.highlight(jsCode.value, Prism.languages.javascript, 'javascript');

    output.contentDocument.body.innerHTML = htmlHighlighted + "<style>" + cssHighlighted + "</style>";
    output.contentWindow.eval(jsCode.value);
}