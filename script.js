function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12)
    {
        //Bom dia o caralho, eu to com sono pouhaaa
        img.src = 'manha.png.png'
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora <=18)
    {
        //boa tardeeee!!! eu quero cafeeeeeee
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }

    else
    {
       //eu quero dormir pouha 
      
       img.src = 'https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=1600'
       document.body.style.background = '#515154'
    }
}

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
      window.alert('Verifique os dados e tente novamente.');
    } else {
      var fsex = document.getElementsByName('radsex');
      var idade = ano - parseInt(fano.value);
      res.innerHTML = `Idade calculada: ${idade}`;
      var genero = '';
      var img = document.createElement('img');
      if (fsex[0].checked) {
        genero = 'macho';
        if (idade >= 0 && idade < 15) {
          // crianca
          img.setAttribute('src', 'mlk.png');
        } else if (idade < 30) {
          // jovem
          img.setAttribute('src', 'mlkjovem.png');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'macho.png');
        } else {
          // idoso
          img.setAttribute('src', 'veio.png');
        }
      } else if (fsex[1].checked) {
        genero = 'mulher';
        if (idade >= 0 && idade < 10) {
          // crianca
          img.setAttribute('src', 'meninac.png');
        } else if (idade < 21) {
          // jovem
          img.setAttribute('src', 'mjovem.png');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'mulher.png');
        } else {
          // idoso
          img.setAttribute('src', 'veia.png');
        }
      }
      img.style.maxWidth = '100%'; // Define a largura máxima da imagem como 100%
      img.style.display = 'block'; // Define a imagem como elemento de bloco para centralizá-la
      img.style.margin = '0 auto'; // Define margens automáticas para centralizar a imagem horizontalmente
      res.style.textAlign = 'center';
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      res.appendChild(img);
    }
  }
  