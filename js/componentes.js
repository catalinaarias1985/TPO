const{createApp}= Vue;
let app=Vue.createApp({
data(){
    return{
        html:"<h1> introduciondonos a componentes con Vue </h1>",
        x:'navbar',
        pie:'pie'
    }
},components:{
    'navbar':{
        template:'<div><nav class="navbar navbar-expand-md navbar-dark bg-dark"><div class="container-fluid"><a class="navbar-brand" href="#"><img class="logo" src="./images/logo.png" alt="logo" /></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active bg-dark" aria-current="page" href="index.html">Home</a></li><li class="nav-item "><a class="nav-link active bg-dark" href="menu.html" >Menu</a></li><li class="nav-item"><a class="nav-link active bg-dark" href="quienes-somos.html">Quienes somos</a></li><li class="nav-item"><a class="nav-link active bg-dark" href="contacto.html">Contacto</a></li></ul></div></div></nav></div>'
    },
    'pie':{
        template:'<div class="grid-container bg-dark text-light"><div class="grid-item"><div class="horarios">Nuestros Horarios<br> Martes a Domingos y Festivos<br> de 5pm a 12am</div></div><div class="grid-item"><a href="https://instagram.com/lahuerta_bar?igshid=YmMyMTA2M2Y=" target="_blank"> <img class="igicon" src="images/instagram.png" alt="Instagram" /></a><a href="https://api.whatsapp.com/send?phone=573196111218" target="_blank"> <img class="igicon" src="images/whatsapp.png" alt="WhatsApp" /></a><p>Derechos Reservados @2022</p></div><div class="grid-item"><p>Telefono: </p><a href="tel:+573196111218">+57 319 6111218</a></div></div>'
    }

}
}).mount("#app")