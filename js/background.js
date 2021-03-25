walk(document.body);

function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E
    var child, next;
    var tagName = node.tagName ? node.tagName.toLowerCase() : "";

    if (tagName == 'input' || tagName == 'textarea') {
        return;
    }
    if (node.classList && node.classList.contains('ace_editor')) {
        return;
    }

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            replaceBlockchainText(node);
            break;
    }
}

function replaceBlockchainText(textNode) {
    var v = textNode.nodeValue;

    // Form 1
    v = v.replace(/\bThe Blockchain\b/g, "The Buttcrack");
    v = v.replace(/\bThe blockchain\b/g, "The buttcrack");
    v = v.replace(/\bthe Blockchain\b/g, "the Buttcrack");
    v = v.replace(/\bthe blockchain\b/g, "the buttcrack");

    // Form 2
    v = v.replace(/\bon a Blockchain\b/g, "on a Buttcrack");
    v = v.replace(/\bOn a Blockchain\b/g, "On a Buttcrack");
    v = v.replace(/\bon the Blockchain\b/g, "on the Buttcrack");
    v = v.replace(/\bOn the Blockchain\b/g, "On the Buttcrack");

    // Form 3
    v = v.replace(/\bBlockchain\b/g, "Buttcrack");
    v = v.replace(/\bblockchain\b/g, "buttcrack");

    // Form 4
    v = v.replace(/\bBlockchains\b/g, "Buttcracks");
    v = v.replace(/\bblockchains\b/g, "buttcracks");

    textNode.nodeValue = v;
}
