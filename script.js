// Questões autorais contextualizadas, adequadas ao 9º ano.
const quizData=[
{question:"Uma camada tem 0,000003 m de espessura. Como escrever em notação científica?",options:["3 × 10⁻⁶ m","3 × 10⁶ m","30 × 10⁶ m"],correct:0,explanation:"0,000003 m = 3 × 10⁻⁶ m (EF09MA04)."},
{question:"Uma amostra de 2 cm³ tem massa de 6 g. Qual a massa de 5 cm³ do mesmo material?",options:["10 g","15 g","30 g"],correct:1,explanation:"Densidade = 6/2 = 3 g/cm³. Massa = 3 × 5 = 15 g (EF09MA07)."},
{question:"Uma chapa mede 3 cm por 4 cm. Qual o comprimento da diagonal?",options:["7 cm","5 cm","12 cm"],correct:1,explanation:"Pitágoras: √(3² + 4²) = 5 cm (EF09MA13)."},
{question:"Uma fábrica reduz 100 kg de desperdício em 20% e depois em 10%. Quanto sobra?",options:["70 kg","72 kg","80 kg"],correct:1,explanation:"100 × 0,80 × 0,90 = 72 kg (EF09MA05)."},
{question:"Uma peça cilíndrica tem raio de 2 cm e altura de 3 cm. Seu volume é:",options:["6π cm³","12π cm³","24π cm³"],correct:1,explanation:"V = πr²h = π × 4 × 3 = 12π cm³ (EF09MA19)."},
{question:"Se 8 peças de 10 são aprovadas, a frequência relativa de aprovação é:",options:["8%","20%","80%"],correct:2,explanation:"8/10 = 0,8 = 80% (EF09MA22)."},
{question:"1 micrômetro (µm) equivale a quantos nanômetros (nm)?",options:["10","100","1.000"],correct:2,explanation:"10⁻⁶/10⁻⁹ = 10³ = 1.000 (EF09MA18)."},
{question:"Um gráfico de barras que começa o eixo vertical em 95 pode:",options:["Exagerar visualmente pequenas diferenças","Modificar os dados medidos","Eliminar a necessidade de legenda"],correct:0,explanation:"O corte do eixo não altera os valores, mas pode dar uma impressão exagerada da diferença (EF09MA21)."},
{question:"Se a massa é m(L) = 3L, qual é a massa para L = 4 cm?",options:["7 g","12 g","1,33 g"],correct:1,explanation:"Substituindo L = 4, m = 3 × 4 = 12 g (EF09MA06)."}
];
let current=0, score=0, answered=0;
function loadQuiz(){
 const q=quizData[current],question=document.getElementById("question"),options=document.getElementById("options"),result=document.getElementById("result");
 if(!question||!options||!result)return;
 question.textContent="Pergunta "+(answered+1)+" — "+q.question;
 result.textContent="";options.replaceChildren();
 q.options.forEach((option,i)=>{
  const b=document.createElement("button");b.type="button";b.textContent=option;
  b.addEventListener("click",()=>{
   const correct=i===q.correct; if(correct)score++;answered++;
   result.textContent=(correct?"✅ Correto! ":"💡 Vamos aprender: ")+q.explanation+" • Acertos: "+score+" de "+answered;
   result.style.color=correct?"#86efac":"#fbbf24";
   const next=document.createElement("button");next.type="button";
   next.textContent=answered>=quizData.length?"Recomeçar desafio ↻":"Próxima pergunta →";
   next.addEventListener("click",()=>{if(answered>=quizData.length){answered=0;score=0;current=0}else{current++}loadQuiz()});
   options.replaceChildren(next);
  });options.appendChild(b);
 });
}
document.addEventListener("DOMContentLoaded",loadQuiz);
