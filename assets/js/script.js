function Calculadora() {
  const operacao = Number(window.prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));


  if (operacao >= 7) {
    alert('Operacao inválida!');
    Calculadora();
  } else {

    let n1 = Number(window.prompt('Digite o primeiro valor: '));
    let n2 = Number(window.prompt('Digite o segundo valor:' ));
    let resultado;

    if (!n1 && !n2) {
      alert('Parâmetros Incorretos!');
      Calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }
    
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
    
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
    
      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
    
      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }
    
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`O número ${n1} elevado a ${n2}ª é igual a ${resultado}`);
        novaOperacao();
      }
    
      function novaOperacao() {
        let opcao = window.prompt('Deseja fazer uma outra operação ? \n 1 - Sim\n 2 - Não\n');
        if (opcao == 1) {
          Calculadora();
        } else if (opcao == 2) {
          alert("Até mais!"); 
        } else {
          alert("Opção inválida!");
          novaOperacao();
        }
      }
    }
    /*
    if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtracao();
    } else if (operacao == 3) {
      multiplicacao();
    } else if (operacao == 4) {
      divisaoReal();
    } else if (operacao == 5) {
      divisaoInteira();
    } else if (operacao == 6) {
      potenciacao();
    }
    */

    switch(operacao) {
      case 1:
        soma();
        break;
      case 2:
        subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;
      case 6:
        potenciacao();
        break;
    }

  }  

}

Calculadora();