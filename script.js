// Adding Automatic Shortcut-keys ---> ALT + SHIFT + <key>

function addAccessKeyHints() {
  var theform = document.getElementById("testform");

  var elems = Array("LABEL", "A", "BUTTON");
  elems.forEach((elemtype) => {
    var items = Array.from(theform.getElementsByTagName(elemtype));

    items.forEach((el) => {
      if (el.hasAttribute("accesskey")) {
        addKeyHint(el);
      }
    });
  });
}

function addKeyHint(element) {
  let textnode = Array.from(element.childNodes).find((node) => node.nodeName === "#text");

  if (textnode) {
    let ak = element.getAttribute("accesskey");
    let txt = textnode.nodeValue;

    let pos = txt.indexOf(ak);

    let newSpan = document.createElement("span");
    newSpan.appendChild(document.createTextNode(ak));
    newSpan.className = "accesskey";

    let newText1 = document.createTextNode(txt.substr(0, pos));
    let newText2 = document.createTextNode(txt.substr(pos + 1));

    if (newText1.length > 0) element.insertBefore(newText1, textnode);

    element.insertBefore(newSpan, textnode);

    if (newText2.length > 0) element.insertBefore(newText2, textnode);

    element.removeChild(textnode);
  }
}

window.addEventListener("load", addAccessKeyHints);

// ------------------------------------------------------------

window.addEventListener("load", (e) => {
  let theForm = document.getElementById("theform");
  let cb1 = document.getElementById("cb1");
  letcharcount = document.getElementById("charcount");
  let countfield = document.getElementById("count");

  theForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  cb1.addEventListener("change", (e) => {
    console.log(`checkbox change event: ${e.target.checked}`); //e.srcElement is depreciated and now used as event.target
  });


  charcount.addEventListener("input", (e) => { //input fires after the input is made, we can use "change" too for this
    let count = charcount.value.length;
    countfield.value = count;
  });

  let formListener = new FormEventListener(theForm)
  theForm.addEventListener("click", formListener)
});

class FormEventListener {
    constructor(fromElem) {
        this.fromElem = fromElem
    }

    handleEvent(e) {
        console.log(`event: ${e.type} on: ${e.target.tagName} for: ${this.fromElem.id}`)
    }
}