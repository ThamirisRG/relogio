function carregar () { 
    var msg = document.getElementById('msg');
    var img = document.getElementById('image');
    var data = new Date();
    var hours = data.getHours();
    msg.innerHTML = ` Agora são <strong>${
    hours} </strong> horas.`;
    if(hours >= 0 && hours < 12) {
        img.src = './image/manha.png';
        document.body.style.background = '#e2cd9f';
    } else  if(hours >= 12 && hours < 18 ) {
        img.src = './image/tarde.png';
        document.body.style.background = '#b9846f';
    } else {
        img.src = './image/noite.png';
        document.body.style.background = '#515154';
    }
}