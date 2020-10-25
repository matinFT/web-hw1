function form1_golang() {
  function reqListener() {
    var data = JSON.parse(this.responseText);
    document.getElementById('form1-golang-label').innerHTML = data["result"];
  }

  function reqError(err) {
    console.log('Fetch Error :-S', err);
  }

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  oReq.open('post', 'http://localhost:3000/go/sha-256');
  oReq.setRequestHeader('Content-type', 'application/json');
  data = {
    "first_number": document.getElementById('form1-first-number').value,
    "second_number": document.getElementById('form1-second-number').value
  }
  oReq.send(JSON.stringify(data));
};

function form2_goldag() {
  function reqListener() {
    var data = JSON.parse(this.responseText);
    document.getElementById('form2-label').innerHTML = data["result"];
  }

  function reqError(err) {
    console.log('Fetch Error :-S', err);
  }

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  data = document.getElementById("form1-line-number").value;
  oReq.open('get', `http://localhost:3000/golang/write?linenumber=${data}`);
  oReq.setRequestHeader('Content-type', 'application/json');
  oReq.send();
}


function form1_nodejs() {
  function reqListener() {
    var data = JSON.parse(this.responseText);
    document.getElementById('form1-nodejs-label').innerHTML = data["result"];
  }

  function reqError(err) {
    console.log('Fetch Error :-S', err);
  }

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  oReq.open('post', 'http://localhost:3000/nodejs/sha-256');
  oReq.setRequestHeader('Content-type', 'application/json');
  data = {
    "first_number": document.getElementById('form1-first-number').value,
    "second_number": document.getElementById('form1-second-number').value
  }
  oReq.send(JSON.stringify(data));
};


function form2_nodejs() {
  function reqListener() {
    var data = JSON.parse(this.responseText);
    document.getElementById('form2-label').innerHTML = data["result"];
  }

  function reqError(err) {
    console.log('Fetch Error :-S', err);
  }

  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  data = document.getElementById("form1-line-number").value;
  oReq.open('get', `http://localhost:3000/nodejs/write?linenumber=${data}`);
  oReq.setRequestHeader('Content-type', 'application/json');
  oReq.send();
}

