const yourDate = new Date("2021-12-09"),
music = ['ido', 'noinaycoanh', 'nguoiamphu'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("date").textContent = `Ngày ${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()} Tháng ${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)} Năm ${yourDate.getFullYear()}`;
      
      document.querySelector("anni").textContent = `${Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)}`+" ngày ruii";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
      var audio = document.querySelector("audio");
      audio.volume = 0;
      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);