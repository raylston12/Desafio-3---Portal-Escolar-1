const users = [];

var id = 0;
function create(email, senha, admin) {
    if (email == null || senha == null || admin == null ){
        console.log("Todos os dados são obrigatórios [Email, Senha, Admin (true ou false)]");
    }else {
        id+=1;
        var e = email.toUpperCase();
        users.push({ id, email: e, senha, admin});
    }
}
function index(){
    console.table(users);
}
function findByPk(id){
    let findId = users.find(x => x.id == id);
    let findMail = users.find(x => x.email == id);
    if (findId){
        console.log(findId);
    }else if (findMail) {
        console.log(findMail);
    }
}
function login(email, senha){
    let findMail = users.find(x => x.email == email);
    let indice = users.indexOf(findMail);
    if (findMail){
        let findSenha = users[indice].senha == senha;
        if (findSenha){
            console.log("Usuário conectado");
        }else{
            console.log("Senha inválida");
        }
    }
    else 
        console.log("Usuário não encontrado");
}

function destroy(id){
    for(let i=0; i<users.length; i++){
        if(users[i].id === id){
            users.splice(i, 1);
        }
    }
}

//create("airton@gmail", "123", false);
//create("ray@gmail", "123", false);
//create("ale@gmail", "456", true);
//index();
//findByPk(10);
//destroy(15);
//index();
//login("airton@gmail", "123");