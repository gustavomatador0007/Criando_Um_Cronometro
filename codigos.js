let horas = 0;
let minutos = 0;
let segundos = 0;

let cronometro;

function iniciar()
    {
        cronometro = setInterval(()=>{
           Tempo() ;
        },1000)
        
    }

function Pausar()
    {
        clearInterval(cronometro)
    }

function Reiniciar()
    {
        clearInterval(cronometro)
        horas = 0;
        minutos = 0;
        segundos = 0;
        
        document.getElementById('contador').innerHTML = "00:00:00"; 
    }

function Tempo()
    {
      segundos++
      if (segundos==60){
          segundos = 0
          minutos++;
      } 
      if(minutos==60){
        minutos = 0
        horas++
      } 
      let format = 
      (horas < 10 ? "0" + horas : horas)+
      ":" +

      (minutos < 10 ? "0" + minutos : minutos)+
      ":" +

      (segundos < 10 ? "0" + segundos : segundos);

      document.getElementById('contador').innerHTML = format
    }