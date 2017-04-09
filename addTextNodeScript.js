window.addEventListener('load', initFuncs);


function initFuncs() {
  var theDiv = document.getElementById("appendage");
  var overwriter = false;
  var testNodes = document.getElementsByClassName("testMe");
  document.getElementById("subMe").onclick = beginProcs;

  function beginProcs() {
    var pIndex = document.getElementById("pCount").value;
    var addBox = document.getElementById("addRadio");
    var delBox = document.getElementById("delRadio");
    var repBox = document.getElementById("repRadio");
    var allPs;
    if (document.getElementsByClassName("p")) {
      var allPs = document.getElementsByClassName("p")
    } else {
      allPs = [];
    }
    if (addBox.checked) {
      addNode(pIndex, allPs);
    } else if (delBox.checked) {
      delNode(pIndex, allPs);
    } else if (repBox.checked) {
      overwriter = true;
      addNode(pIndex, allPs);
    } else {
      testNodes[0].innerHTML = "no action chosen";
    }
  }

  function addNode(thisP, allPs) {
    var textarea = document.getElementsByTagName("textarea")[0];
    if (thisP <= 0) {
      testNodes[0].innerHTML = "get real";
      return;
    } else {
      var submission = thisP + ". " + textarea.value;
      var newNode = document.createTextNode(submission);
      var newP = document.createElement("p");
      newP.className = "p";
      newP.id = thisP;
      newP.appendChild(newNode);
      if (overwriter) {
        if (allPs.length) {
          for (var i = 0; i < allPs.length; i++) {
            if (allPs[i].id == thisP) {
              var replacedP = allPs[i];
            }
          }
          if (!replacedP) {
            testNodes[0].innerHTML = "line " + thisP + " is out of range";
            overwriter = false;
            return;
          }
          theDiv.replaceChild(newP,replacedP);
          overwriter = false;
          testNodes[0].innerHTML = "";
        } else {
          testNodes[0].innerHTML = "nothing to overwrite; choose another action";
          overwriter = false;
        }
      } else {
        if (allPs.length) {
          var beforeMe;
          var range = 0;
          for (var i = 0; i < allPs.length; i++) {
            if (allPs[i].id == thisP) {
              testNodes[0].innerHTML = "line " + thisP + " already exists; use overwrite";
              return;
            }
            if (Number(allPs[i].id) < thisP) {
              range++;
            } else {
              range--;
            }
            if (Number(allPs[i].id) > thisP && Number(allPs[i-1].id) ) {
              beforeMe = allPs[i];
            }
          }
          if (range == allPs.length) {
            theDiv.appendChild(newP);
            testNodes[0].innerHTML = "";
          } else if (range + allPs.length == 0){
            theDiv.insertBefore(newP,allPs[0]);
            testNodes[0].innerHTML = "";
          } else {
            theDiv.insertBefore(newP,beforeMe);
            testNodes[0].innerHTML = "";
          }
        } else {
          theDiv.appendChild(newP);
          testNodes[0].innerHTML = "";
        }
      }
    }
  }

  function delNode(toastP, allPs) {
    if (toastP <=0 || allPs.length == 0) {
      testNodes[0].innerHTML = "get real"
    }
    for (var i = 0; i < allPs.length; i++) {
      if (allPs[i].id == toastP) {
        var toastedNode = allPs[i];
      }
    }
    if (!toastedNode) {
      testNodes[0].innerHTML = "line " + toastP + " is out of range";
      return;
    }
    theDiv.removeChild(toastedNode);
    testNodes[0].innerHTML = "";
  }
}
