// Funções do Sobre

function AbrirAlerta(){
    Swal.fire({
        title: "Não saia apertando botões.",
        text: "Tome cuidado e se isso fosse um botão de explodir o computador?",
        confirmButtonText: "Certo, tomarei cuidado!",
        showDenyButton: true,
        denyButtonColor: "#bf3232",
        denyButtonText: "Aproveitar para ver algo interresante?",
        icon: "warning"
      }).then((result) => {

    if (result.isDenied) {
        Swal.fire({
            title: "É sério isso?",
            text:"Eu já não disse para não sair clicando em qualquer botão? Pelo menos olha que bonito o fundo",
            width: 600,
            padding: "3em",
            color: "#bf3232",
            background: "#fff",
            backdrop: `
              rgba(0,0,123,0.4)
              url("../img/nyanCat.gif")
              no-repeat
            `
          });
    } 
      }
       
    ); 

    // <div class="tenor-gif-embed" data-postid="26050381" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/nyan-cat-poptart-cat-rainbow-pixel-flying-gif-26050381">Nyan Cat Poptart Cat Sticker</a>from <a href="https://tenor.com/search/nyan+cat-stickers">Nyan Cat Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
}

// Funções do index

function converter() {
    var inputValue = document.getElementById('ipt_valor').value
    var inputBase = document.getElementById('slt_basePC').value 
    
    if(inputValue == ""|| inputBase == "#") {
        Swal.fire({
            title: `Inserção <strong>incompleta</strong>`,
            text: "Por favor, insira os valores completo, caso tenha dúvidas sobre as bases e seus valores, vá na página 'Sobre as bases', gostaria de ser direcionada para ela?",
            icon: "error",
            confirmButtonText: `<a href="./html/Informações.html"><i class="fa fa-thumbs-up"></i> Me leve agora!</a>`,
            confirmButtonAriaLabel: "Thumbs up, great!",
            showCancelButton: true,
            cancelButtonText: `<p>Não nesse momento</p>`,
            cancelButtonColor: `#bf3232`,
            cancelButtonAriaLabel: "Thumbs down",
            showCloseButton: true,
          });
          return;
    }
    if (!validarEntrada(inputValue, inputBase)) {
        Swal.fire({
            title: `Inserção <strong>inválida</strong> na base ${inputBase}`,
            text: "Por favor, insira um número válido para a base selecionada, caso tenha dúvidas sobre os valores da base, vá na página 'Sobre as bases', gostaria de ser direcionada para ela?",
            icon: "error",
            confirmButtonText: `<a href="./html/Informações.html"><i class="fa fa-thumbs-up"></i> Me leve agora!</a>`,
            confirmButtonAriaLabel: "Thumbs up, great!",
            showCancelButton: true,
            cancelButtonAriaLabel: "Thumbs down",
            cancelButtonColor: `#bf3232`,
            cancelButtonText: `<p>Não nesse momento</p>`,
            showCloseButton: true,
          });
        return;
    }

    var decimalValue = parseInt(inputValue, inputBase === 'hexadecimal' ? 16 : inputBase === 'octal' ? 8 : inputBase === 'binario' ? 2 : 10);
    var outputHTML = '';

    if (document.getElementById('convertDecimal').checked) {
        output.style.display = 'block';
        outputHTML += `<p>Decimal: ${decimalValue}</p>`;
    }

    if (document.getElementById('convertHexadecimal').checked) {
        output.style.display = 'block'; 
        outputHTML += `<p>Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</p>`; 
    }

    if (document.getElementById('convertOctal').checked) {
        output.style.display = 'block'; 
        outputHTML += `<p>Octal: ${decimalValue.toString(8)}</p>`; 
    }

    if (document.getElementById('convertBinario').checked) {
        output.style.display = 'block'; 
        outputHTML += `<p>Binário: ${decimalValue.toString(2)}</p>`; 
    }

    if (document.getElementById('convertTodos').checked) {
        output.style.display = 'block'; 
        outputHTML += `<p>Binário: ${decimalValue.toString(2)} <br> Octal: ${decimalValue.toString(8)} <br> Decimal: ${decimalValue} <br> Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</p>`; 
    }

    if(!document.getElementById('convertDecimal').checked && !document.getElementById('convertHexadecimal').checked && !document.getElementById('convertOctal').checked && !document.getElementById('convertBinario').checked && !document.getElementById('convertTodos').checked) {
        Swal.fire({
            title: `Inserção <strong>incompleta</strong>`,
            text: `Por favor, insira a base que você deseja que a base ${inputBase} seja transformada, caso tenha dúvidas sobre as bases e seus valores, vá na página 'Sobre as bases', gostaria de ser direcionada para ela?`,
            icon: "error",
            confirmButtonText: `<a href="./html/Informações.html"><i class="fa fa-thumbs-up"></i> Me leve agora!</a>`,
            confirmButtonAriaLabel: "Thumbs up, great!",
            showCancelButton: true,
            cancelButtonText: `<p>Não nesse momento</p>`,
            cancelButtonColor: `#bf3232`,
            cancelButtonAriaLabel: "Thumbs down",
            showCloseButton: true,
          });
    }

    document.getElementById('output').innerHTML = outputHTML; 
}

// Funções da calculadora

function calcular() {
    var numero1 = document.getElementById('ipt_valor').value;
    var numero2 = document.getElementById('ipt_valor2').value;

    var base1 = document.getElementById('slt_primeiroValor').value;
    var base2 = document.getElementById('slt_segundoValor').value;

    if (!validarEntrada(numero1, base1) || !validarEntrada(numero2, base2)) {
        Swal.fire({
            title: `Inserção <strong>inválida</strong> em uma das bases`,
            text: "Por favor, insira um número válido para a base selecionada, caso tenha dúvidas sobre os valores da base, vá na página 'Sobre as bases', gostaria de ser direcionada para ela?",
            icon: "error",
            confirmButtonText: `<a href="./html/Informações.html"><i class="fa fa-thumbs-up"></i> Me leve agora!</a>`,
            confirmButtonAriaLabel: "Thumbs up, great!",
            showCancelButton: true,
            cancelButtonColor: `#bf3232`,
            cancelButtonText: `<p>Não nesse momento</p>`,
            showCloseButton: true,
          });
        return;
    }

    var valorDecimal1 = parseInt(numero1, base1 === 'hexadecimal' ? 16 : base1 === 'octal' ? 8 : base1 === 'binario' ? 2 : 10);
    var valorDecimal2 = parseInt(numero2, base2 === 'hexadecimal' ? 16 : base2 === 'octal' ? 8 : base2 === 'binario' ? 2 : 10);

    var operacao = document.getElementById('slt_operacao').value;
    var resultado;

    if (operacao === 'somar') {
        resultado = valorDecimal1 + valorDecimal2;
    } else if (operacao === 'subtrair') {
        resultado = valorDecimal1 - valorDecimal2;
    } else if (operacao === 'multiplicar') {
        resultado = valorDecimal1 * valorDecimal2;
    } else if (operacao === 'dividir') {
        resultado = valorDecimal1 / valorDecimal2;
    } else {
        Swal.fire({
            title: `Inserção <strong>inválida</strong> na operação`,
            text: "Por favor, insira uma operação válida",
            icon: "error",
            confirmButtonText: `<p>Irei corrigir agora!</p>`,
            showCloseButton: true,
          });
        return;
    }

    var baseResultado = document.getElementById('slt_baseSaida').value;
    var resultadoFormatado;

    if (baseResultado === 'decimal') {
        resultadoFormatado = resultado;
    } else if (baseResultado === 'hexadecimal') {
        resultadoFormatado = resultado.toString(16).toUpperCase();
    } else if (baseResultado === 'octal') {
        resultadoFormatado = resultado.toString(8).toUpperCase();
    } else if (baseResultado === 'binario') {
        resultadoFormatado = resultado.toString(2).toUpperCase();
    } else {
        resultadoFormatado = resultado;
    }
    document.getElementById('div_resultado').style.display = 'flex';
    document.getElementById('div_resultado').innerHTML = `<p> Resultado: ${resultadoFormatado} </p>`;
}

function validarEntrada(inputValue, inputBase) {

    if (typeof inputValue !== 'string' || inputValue.trim() === '') {
        return false;
    }

    var validChars = ''; 

    if (inputBase === 'decimal') {
        validChars = '0123456789'; // Para base decimal, são válidos os dígitos de 0 a 9
    } else if (inputBase === 'hexadecimal') {
        validChars = '0123456789ABCDEFabcdef'; // Para base hexadecimal, são válidos os dígitos de 0 a 9 e as letras de A a F
    } else if (inputBase === 'octal') {
        validChars = '01234567'; // Para base octal, são válidos os dígitos de 0 a 7
    } else if (inputBase === 'binario') {
        validChars = '01'; // Para base binária, são válidos os dígitos 0 e 1
    }

    for (var i = 0; i < inputValue.length; i++) {
        if (validChars.indexOf(inputValue[i]) === -1) { 
            return false;
        }
    }
    return true; // Retorna verdadeiro indicando que a entrada é válida
}

document.getElementById("btn_calcular").addEventListener("click", calcular)

