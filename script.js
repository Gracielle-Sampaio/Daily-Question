const button = document.getElementById('gerar-pgt');
const span = document.getElementById("perguntas");

button.addEventListener('click', function(){
  
   let perguntas = Math.floor(Math.random() * perguntasDiarias.length);
   
   span.textContent = perguntasDiarias[perguntas];
  

});

var perguntasDiarias = [
  "Qual o seu nome?",
  "Quantos anos você têm?",
  "Onde você mora?",
  "Qual a sua nacionalidade?",
  "Qual o seu signo do Zodíaco?",
  "Qual o seu filme favorito?",
  "Qual a sua altura?",
  "Sua música favorita?",
  "Um artista que você gosta muito e por quê?",
  "Cite 3 coisas que você ama",
  "Cite 3 coisas que você não gosta",
  "Quais são os seus hobbies?",
  "Qual o dia do seu aniversário?",
  "Qual sua série ou filme favorito?",
  "Qual foi o melhor dia da sua vida?",
  "Qual seu status de relacionamento?",
  "Você têm alguma fobia? Qual?",
  "Qual seria a pior coisa que poderiam fazer com você?",
  "O que mais te irrita?",
  "Com quem você mora?",
  "Como é o lugar onde você mora?",
  "Como é a sua família?",
  "Qual o seu maior sonho?",
  "Como você pretende realizar os seus sonhos?",
  "Um livro que gosta muito?",
  "Como é o seu melhor amigo?",
  "Já brigou com alguém? por quê?",
  "Têm filhos? Se sim, como eles são?",
  "Sua comida favorita?",
  "Sabe cozinhar?",
  "Sabe dançar?",
  "Fala outros idiomas?",
  "O que gostaria de aprender?",
  "Uma habilidade inusitada?",
  "Uma habilidade útil?",
  "Uma habilidade inútil?",
  "Gostaria de conhecer um lugar diferente de onde mora?",
  "Um lugar que gostaria de conhecer na sua cidade?",
  "Uma pessoa que você gosta muito?",
  "Uma pessoa que você não gosta?"
];

