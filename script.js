function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var fmes = document.getElementById('txtmes'); // Adicione o campo para o mês
    var res = document.querySelector('div#res');
    
    if (fano.value.length == 0 || fmes.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
      var fsex = document.getElementsByName('radsex');
      var idade = ano - Number(fano.value);
      var genero = '';
      var img = document.createElement('img');
      img.setAttribute('id', 'foto');
      
      // Obtém o mês atual
      var mesAtual = data.getMonth() + 1;
      var mesNascimento = Number(fmes.value);
      
      if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
          //Criança
          img.setAttribute('src', '#');
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', '#');
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', '#');
        } else {
          //Idoso
          img.setAttribute('src', '#');
        }
      } else if (fsex[1].checked) {
        genero = 'mulher';
        if (idade >= 0 && idade < 10) {
          //Criança
          img.setAttribute('src', '#');
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', '#');
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', '#');
        } else {
          //Idoso
          img.setAttribute('src', '#');
        }
      }
      
      // Verifica se o mês atual é menor que o mês de nascimento
      if (mesAtual < mesNascimento) {
        idade--;
      }
      
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    }
  }
  