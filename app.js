const yourDate = new Date("2021-12-09"),
music = ['ido', 'noinaycoanh', '1000year','atmyworst','brave','cuoidi','saunay','cuoithoi'];
let Footer_Text = ['Thiểu năng - Ngu không thể tả<br> Thieu nang - Ta khong the ngu','Cảm ơn Linh đã ở bên anh suốt thời gian quaa 💓', 'From Dunz with 💓','Xuân đợi hoa nở, Hạ đợi mưa<br>Thu đợi hoa sữa, Đông đợi người.','Bỏ ngoài tai trăm lời tán tỉnh, vì tôi<br>Chỉ thấy một mình em xinh..<br>Thề với chúa - Đấy không phải là thính<br>Đấy là em trong đôi mắt kẻ si tình','Là một người tỉnh táo<br>Tôi không mê tín - Tôi mê em']
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
      document.querySelector("audio").play();
      document.querySelector("audio").volume = 0.2;
      setInterval(function(){document.querySelector("footer").innerHTML = Footer_Text[Math.floor(Math.random()*Footer_Text.length)]}, 10000);
      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);







