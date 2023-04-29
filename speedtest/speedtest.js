window.addEventListener("load", function() {
    var download = document.getElementById("download");
    var upload = document.getElementById("upload");
    var ping = document.getElementById("ping");
    var result = document.getElementById("result");
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        var data = JSON.parse(this.responseText);
        var speedtest = data.speedtest;
        download.innerHTML = (speedtest.download / 1000 / 1000).toFixed(2) + " Mbps";
        upload.innerHTML = (speedtest.upload / 1000 / 1000).toFixed(2) + " Mbps";
        ping.innerHTML = speedtest.ping + " ms";
        result.style.display = "block";
      }
    });
    xhr.open("GET", "https://api.jsonbin.io/b/6085a5b8d64cd16802a05787");
    xhr.setRequestHeader("secret-key", "$2b$10$08f85RE/0nUa8f9G79Z3e.NZUllN6UWY6UkRyokhcLw1sTlTcBz9S");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();
  });
  