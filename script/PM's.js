

//descrição do meu Mes atual 
//concluido com sucesso hshshshh
let diaMesC = document.querySelector(".diaMes").children, diaAtual = new Date().getDate(),
mesAtual = new Date().getMonth() ;
const DecMes = ["janeiro ", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let VaiTag  = DecMes[mesAtual];
let mesData = document.querySelector(".mesData p").innerText = VaiTag;

//Background automatico
//Mes atual 
for(i = 0; i < (diaAtual-1) ; i++){
    let contar = (i + 0) 
    let comecar = diaMesC[contar]
    comecar.style.background = "#000"
    comecar.style.color = "#fff"
};



/*===================== INSERIR =====================*/

const insert__button = document.querySelector(".insert__button button"),insert__body = document.querySelector(".insert__body"), data__insert = document.querySelector(".data__insert button"), insert__buttonIcon = document.querySelector(".insert__buttonIcon");

insert__button.addEventListener('click', () =>{
    insert__body.classList.toggle("show-insert")
});
data__insert.addEventListener('click', () =>{
    insert__body.classList.remove("show-insert")
});



//Mes 1
document.querySelector(".at1_1").addEventListener("click", ()=> 
document.querySelector(".pm1").classList.toggle("show-at1_1")
);// class="a1x1"
document.querySelector(".at1_2").addEventListener("click", ()=> 
document.querySelector(".pm1").classList.toggle("show-at1_2")
);// class="a1x2"
document.querySelector(".at1_3").addEventListener("click", ()=> 
document.querySelector(".pm1").classList.toggle("show-at1_3")
);//class="a1x3"
document.querySelector(".at1_4").addEventListener("click", ()=> 
document.querySelector(".pm1").classList.toggle("show-at1_4")
);//class="a1x4"

//Mes 2
document.querySelector(".at2_1").addEventListener("click",()=> 
document.querySelector(".pm2").classList.toggle("show-at2_1")
);
document.querySelector(".at2_2").addEventListener("click",()=> 
document.querySelector(".pm2").classList.toggle("show-at2_2")
);
document.querySelector(".at2_3").addEventListener("click",()=> 
document.querySelector(".pm2").classList.toggle("show-at2_3")
);
document.querySelector(".at2_4").addEventListener("click",()=> 
document.querySelector(".pm2").classList.toggle("show-at2_4")
);


//Mes 3
document.querySelector(".at3_1").addEventListener("click",()=> 
document.querySelector(".pm3").classList.toggle("show-at3_1")
);
document.querySelector(".at3_2").addEventListener("click",()=> 
document.querySelector(".pm3").classList.toggle("show-at3_2")
);
document.querySelector(".at3_3").addEventListener("click",()=> 
document.querySelector(".pm3").classList.toggle("show-at3_3")
);
document.querySelector(".at3_4").addEventListener("click",()=> 
document.querySelector(".pm3").classList.toggle("show-at3_4")
);

//Mes 4
document.querySelector(".at4_1").addEventListener("click",()=> 
document.querySelector(".pm4").classList.toggle("show-at4_1")
);
document.querySelector(".at4_2").addEventListener("click",()=> 
document.querySelector(".pm4").classList.toggle("show-at4_2")
);
document.querySelector(".at4_3").addEventListener("click",()=> 
document.querySelector(".pm4").classList.toggle("show-at4_3")
);
document.querySelector(".at4_4").addEventListener("click",()=> 
document.querySelector(".pm4").classList.toggle("show-at4_4")
);

//Mes 5
document.querySelector(".at5_1").addEventListener("click",()=> 
document.querySelector(".pm5").classList.toggle("show-at5_1")
);
document.querySelector(".at5_2").addEventListener("click",()=> 
document.querySelector(".pm5").classList.toggle("show-at5_2")
);
document.querySelector(".at5_3").addEventListener("click",()=> 
document.querySelector(".pm5").classList.toggle("show-at5_3")
);
document.querySelector(".at5_4").addEventListener("click",()=> 
document.querySelector(".pm5").classList.toggle("show-at5_4")
);

//Mes 6
document.querySelector(".at6_1").addEventListener("click",()=> 
document.querySelector(".pm6").classList.toggle("show-at6_1")
);
document.querySelector(".at6_2").addEventListener("click",()=> 
document.querySelector(".pm6").classList.toggle("show-at6_2")
);
document.querySelector(".at6_3").addEventListener("click",()=> 
document.querySelector(".pm6").classList.toggle("show-at6_3")
);
document.querySelector(".at6_4").addEventListener("click",()=> 
document.querySelector(".pm6").classList.toggle("show-at6_4")
);

//Mes 7
document.querySelector(".at7_1").addEventListener("click",()=> 
document.querySelector(".pm7").classList.toggle("show-at7_1")
);
document.querySelector(".at7_2").addEventListener("click",()=> 
document.querySelector(".pm7").classList.toggle("show-at7_2")
);
document.querySelector(".at7_3").addEventListener("click",()=> 
document.querySelector(".pm7").classList.toggle("show-at7_3")
);
document.querySelector(".at7_4").addEventListener("click",()=> 
document.querySelector(".pm7").classList.toggle("show-at7_4")
);

//Mes 8
document.querySelector(".at8_1").addEventListener("click",()=> 
document.querySelector(".pm8").classList.toggle("show-at8_1")
);
document.querySelector(".at8_2").addEventListener("click",()=> 
document.querySelector(".pm8").classList.toggle("show-at8_2")
);
document.querySelector(".at8_3").addEventListener("click",()=> 
document.querySelector(".pm8").classList.toggle("show-at8_3")
);
document.querySelector(".at8_4").addEventListener("click",()=> 
document.querySelector(".pm8").classList.toggle("show-at8_4")
);

//Mes 9
document.querySelector(".at9_1").addEventListener("click",()=> 
document.querySelector(".pm9").classList.toggle("show-at9_1")
);
document.querySelector(".at9_2").addEventListener("click",()=> 
document.querySelector(".pm9").classList.toggle("show-at9_2")
);
document.querySelector(".at9_3").addEventListener("click",()=> 
document.querySelector(".pm9").classList.toggle("show-at9_3")
);
document.querySelector(".at9_4").addEventListener("click",()=> 
document.querySelector(".pm9").classList.toggle("show-at9_4")
);

//Mes 10
document.querySelector(".at10_1").addEventListener("click",()=> 
document.querySelector(".pm10").classList.toggle("show-at10_1")
);
document.querySelector(".at10_2").addEventListener("click",()=> 
document.querySelector(".pm10").classList.toggle("show-at10_2")
);
document.querySelector(".at10_3").addEventListener("click",()=> 
document.querySelector(".pm10").classList.toggle("show-at10_3")
);
document.querySelector(".at10_4").addEventListener("click",()=> 
document.querySelector(".pm10").classList.toggle("show-at10_4")
);

//Mes 11
document.querySelector(".at11_1").addEventListener("click",()=> 
document.querySelector(".pm11").classList.toggle("show-at11_1")
);
document.querySelector(".at11_2").addEventListener("click",()=> 
document.querySelector(".pm11").classList.toggle("show-at11_2")
);
document.querySelector(".at11_3").addEventListener("click",()=> 
document.querySelector(".pm11").classList.toggle("show-at11_3")
);
document.querySelector(".at11_4").addEventListener("click",()=> 
document.querySelector(".pm11").classList.toggle("show-at11_4")
);

//Mes 12
document.querySelector(".at12_1").addEventListener("click",()=> 
document.querySelector(".pm12").classList.toggle("show-at12_1")
);
document.querySelector(".at12_2").addEventListener("click",()=> 
document.querySelector(".pm12").classList.toggle("show-at12_2")
);
document.querySelector(".at12_3").addEventListener("click",()=> 
document.querySelector(".pm12").classList.toggle("show-at12_3")
);
document.querySelector(".at12_4").addEventListener("click",()=> 
document.querySelector(".pm12").classList.toggle("show-at12_4")
);

/* DFSDFDSF DS*/

let request = new XMLHttpRequest();
 
request.open('GET', url, true);
request.onload = function() {
 if (request.readyState == 4 && request.status == 200) {
 var resposta = JSON.parse(request.responseText);
 var valores = resposta.value[0];
 console.log(valores.cotacaoCompra);
 console.log(valores.cotacaoVenda);
 console.log(valores.dataHoraCotacao);
 } 
};
request.onerror = function() {
          console.log("Erro:"+request);
};
request.send();