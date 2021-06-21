//nomeDaVariavel:tipoDaVariavel
interface Usuario {
  nome:string, email: string, telefone?: string //a interrogação é pra decidir se a variavel é opcional ou não
}

function enviarEmail({email, nome, telefone}: Usuario){
  console.log(`Ola ${nome} seu email é ${email} e seu telefone é ${telefone}`);
}

enviarEmail({
  email:'arlenej011@gmail.com',
  nome:'Arlene',
});
// so se utiliza o typescript em ambiente de desenvolvimento.