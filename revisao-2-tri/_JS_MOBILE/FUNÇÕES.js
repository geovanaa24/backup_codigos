/**
 * FUNÇÕES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
 * FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
 * FUNÇÕES PODEM RETORNAR VALORES OU NÃO
 * FUNÇÕES PODEM SER ANÔNIMAS
 */
// DECLARAÇÃO DE FUNÇÃO
function dizOLa() {
  alert('Olá');
}
function OlaPessoa(nome) {
  alert('Olá' + nome);
}
const nome = 'Julius';
const sobrenome = 'Silva';
const idade = '18';

function dadospessoa() {
  const dados = nome + sobrenome + idade
  console.log(dados)
}
// INVOCAÇÃO DE FUNÇÃO
dizOLa()
OlaPessoa('Lucas')
dadospessoa()