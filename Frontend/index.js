function form1_golang(){
    function reqListener() {
        var data = JSON.parse(this.responseText);
        console.log(data);
      }

      function reqError(err) {
        console.log('Fetch Error :-S', err);
      }

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      oReq.onerror = reqError;
      oReq.open('post', 'http://localhost:3000/golang/sha-256');
      oReq.send();
}

function form1_nodejs(){
    function reqListener() {
        var data = JSON.parse(this.responseText);
        console.log(data);
      }

      function reqError(err) {
        console.log('Fetch Error :-S', err);
      }

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      oReq.onerror = reqError;
      oReq.open('post', 'http://localhost:3000/nodejs/sha-256');
      oReq.send();
}