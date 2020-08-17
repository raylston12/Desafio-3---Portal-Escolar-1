const students = [];

var id = 0;

function create(nome, 
    genero, datanasc, turma, curso){
        if (nome == null || genero == null || datanasc == null || turma == null || curso == null){
            console.log("Todos os dados são obrigatórios");
        }else{
            id += 1;
            let n = nome.toUpperCase();
            let g = genero.toUpperCase();
            let d = datanasc.toUpperCase();
            let t = turma.toUpperCase();
            let c = curso.toUpperCase();
            students.push({id, nome: n,
            genero: g, datanasc: d, turma: t, curso: c});
        }
}
function index(){
    console.table(students);
}
function findByPk(id){
    let buscarid = students.find(y => y.id == id);
    if (buscarid){
        console.log(buscarid);
    }
}
function findOne(nome){
    let buscarn = students.find(y => y.nome == nome);
    if (buscarn){
        console.log(buscarn);
    }
}
function update(id, nome, genero, datanasc, turma, curso){
    let updatealuno = students.find(y => y.id == id);
    let indice = students.indexOf(updatealuno);
    students[indice] = {
        id, nome, genero, datanasc, 
        turma, curso
    }
}
function destroy(id){
    let busc = students.find(y => y.id == id);
    let indice = students.indexOf(busc);
    let remove = students.splice(indice, 1);
}

//create("Ray", "m", "29/12/2004", "1º ano", "JavaScript");
//create("Airton", "m", "21/12/1996", "1º ano", "JavaScript");
//create("João", "m", "21/12/2000", "3º ano", "JavaScript");
//create("Ale", "m", "29/12/2001", "1º ano", "JavaScript");
//create("Maria", "F", "21/12/2000", "1º ano", "JavaScript");
//index();
// findByPk(2);
//findOne("RAY");
//destroy(5);
//index();