const joaoM = openDatabase(
    "joaoM",
    "2.0", 
    "Test DB",
    4048
);

joaoM.transaction(function(criar){
    criar.executeSql('CREATE TABLE IF NOT EXISTS  Calendario (id INTEGER PRIMARY KEY, nome VARCHAR(50), diaAtual VARCHAR(50), sala VARCHAR(50), horaInicio VARCHAR(50), horaTermino VARCHAR(50))');

});

let button = document.querySelector(".data__insert .button")


const dados = [nome, FdiaAtual, sala, horaInicio, horaTermino]; 

button.addEventListener("click", function(){
    

    let nome = document.getElementById("nome").value;
    let FdiaAtual = document.getElementById("FdiaAtual").value; let sala = document.getElementById("sala").value;
    let horaInicio = document.getElementById("horaInicio").value;
    let horaTermino = document.getElementById("horaTermino").value;

    joaoM.transaction(function(criar){
        criar.executeSql('INSERT INTO Calendario (nome, diaAtual, sala, horaInicio, horaTermino) VALUES(?, ?, ?, ?, ?)', [nome, FdiaAtual, sala, horaInicio, horaTermino])
    })

});
