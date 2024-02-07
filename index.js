const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "let myVar = 10;",
        "Ambas estão corretas;",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'console.log()' faz em JavaScript?",
      respostas: [
        "Imprime uma mensagem de erro no console.",
        "Exibe um alerta na tela do navegador.",
        "Registra mensagens no console para depuração.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Compara valores sem levar em conta o tipo.",
        "Compara valores e tipos de dados, considerando igualdade estrita.",
        "Realiza uma atribuição de valor.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Um modelo de objetos para interação com bancos de dados.",
        "Um modelo de objetos que representa a estrutura de uma página web.",
        "Uma função para manipulação de datas.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'setTimeout()' em JavaScript?",
      respostas: [
        "Pausar a execução do script por um tempo determinado.",
        "Definir um temporizador para executar uma função após um intervalo de tempo especificado.",
        "Encerrar imediatamente a execução do script.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adicionar um novo elemento ao DOM.",
        "Adicionar um ouvinte de eventos a um elemento HTML.",
        "Remover um elemento do DOM.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica para melhorar o desempenho de loops.",
        "O comportamento de mover declarações para o topo de seu escopo durante a fase de compilação.",
        "Uma função que move elementos HTML na página.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São equivalentes e podem ser usados indistintamente.",
        "'Null' representa a ausência intencional de qualquer objeto ou valor, enquanto 'undefined' indica que a variável não foi inicializada.",
        "'Undefined' é uma string, enquanto 'null' é um valor especial.",
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "parseString()",
        "Number()",
        "toInt()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma expressão ternária em JavaScript?",
      respostas: [
        "Uma expressão matemática com três termos.",
        "Uma estrutura condicional que utiliza três operandos: 'condição ? expr1 : expr2'.",
        "Uma forma de escrever comentários de três linhas.",
      ],
      correta: 1
    },
  ];
  
  // variável para exibir o quiz no html
  const quiz = document.querySelector('#quiz')
  // variável para copiar o template do html
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  // loop para exibir as perguntas
  for(const item of perguntas) {
    //variável que replica o conteúdo do template
    const quizItem = template.content.cloneNode(true)
    // modifica e exibe a pergunta na tag 'h3'
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // loop para exibir as opções de resposta
    for(let resposta of item.respostas) {
      // variável que replica o conteúdo da tag 'dt'
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // adiciona as opções de resposta à tag 'span'
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value =  item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // adiciona as opções de resposta ao html
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // remove o conteúdo original da tag 'dt'
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }