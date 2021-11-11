function askName() {
    let name = prompt("Lutfen adinizi girin: ");
  
    name != ""
      ? ((document.querySelector("#myName").innerHTML = name), window.onload()) //window.onload sayfanın hazır olduğunu ve artık işlem yapabileceğini gösterir.
      : alert("Lutfen adinizi giriniz: "),
      window.location.reload();
  }

function showTime() {
    var date = new Date();
    var saat = date.getHours();
    var dakika = date.getMinutes(); 
    var saniye = date.getSeconds(); 
    var gun = date.getDay(); // Haftanın gününü verir (0-6)
  
    if (gun == 1) {
      gun = "Pazartesi";
    } else if (gun == 2) {
      gun = "Sali";
    } else if (gun == 3) {
      gun = "Carsamba";
    } else if (gun == 4) {
      gun = "Persembe";
    } else if (gun == 5) {
      gun = "Cuma";
    } else if (gun == 6) {
      gun = "Cumartesi";
    } else if (gun == 7) {
      gun = "Pazar";
    }
  
    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;
  
    var time = saat + ":" + dakika + ":" + saniye + " " + gun;
    // document.getElementById("myClock").innerHTML = time;
    // document.getElementById("myClock").innerHTML = time;
   
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`

    setTimeout(showTime, 1000); 
  }
  showTime();
  askName();