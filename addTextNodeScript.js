window.onload = initFuncs;

var theDiv;
var allPs;
var overwriter = false;
var testNode = document.getElementById("testMe");

function initFuncs(){
    document.getElementById("subMe").onclick = beginProcs;
    theDiv = document.getElementById("appendage");
    
}

function beginProcs() {
  var pIndex = document.getElementById("pCount").value;
  var addBox = document.getElementById("addRadio");
  var delBox = document.getElementById("delRadio");
  var repBox = document.getElementById("repRadio")

  allPs = theDiv.getElementsByTagName("p");

  if (addBox.checked) {
    addNode(pIndex);
  } else if (delBox.checked) {
    delNode(pIndex);
  } else if (repBox.checked) {
    overwriter = true;
    addNode(pIndex);
  } else {
    testNode.innerHTML = "no action chosen";
  }
}

function addNode(thisP) {

   if (thisP <= 0) {
     testNode.innerHTML = "get real";
   } else if (thisP > 0) {
   var submission = document.getElementsByTagName("textarea")[0].value;
   var newNode = document.createTextNode(submission);
   var newP = document.createElement("p");
     if (thisP > allPs.length){
       thisP = allPs.length;
     }
   newP.appendChild(newNode);
     if (overwriter == true) {
       var replacedP = allPs.item(thisP-1);
       theDiv.replaceChild(newP,replacedP);
       overwriter = false;
     } else {
        theDiv.appendChild(newP);
        if (allPs.length > 0) {
          var shiftMe = allPs.item(thisP-1);
          theDiv.insertBefore(newP,shiftMe);
        }/*ends if more than one p*/
     }/*ends inner else if statements*/
   }/*ends outer else if statements*/
 }/*ends function */


function delNode(toastP) {
  if (toastP <=0 || allPs.length == 0) {
    testNode.innerHTML = "get real"
  }
  if (toastP > allPs.length){
  toastP = allPs.length;
  }

  var toastedNode = allPs.item(toastP-1);
  theDiv.removeChild(toastedNode);
}
