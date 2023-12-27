# JavaScript-by-YT
Estudando JavaScript pelo Youtubil



# Anotações

## Conversão de String para Num
Number.parseInt - Conversão de String para Num inteiro;
Number.parseFloat - Conversão de String para Num real;

var n1 = Number.parseFloat (window.prompt('Digite um numero!: '));

var n2 = Number.parseFloat(window.prompt('Digite oto numero!: '));

-- Apenas Number - Conversão de String para Num (o proprio Java vai identificar se é Float ou Int)

var x = Number(window.prompt('Digite um Numero: '));

## Conversão de Num para String

var y = String(variável);

ou

var y = n.toString(variável);


## Template String (muito pika por sinal);

Definir as variáveis - var nome = 'Gabriel';

`O aluno ${nome} é gente boa`

## Atributos
(s).length - Tamanho do (s);
document.write(`${nome.length}`);

toUpperCase() - Letras Maiúsculas;
toLowerCase() - Letras Minusculas;

document.write(`Seu nome em maiúsculo é ${nome.toUpperCase() // toLowerCase()}`)

n1 = 1545.5
n1.toFixed(2) = 1545.50 // Define quantas casa decimais depois da virgula
n1.replace('.' , ',') = 1545,50 // Troquei o "." por ",".
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) = 'R$ 1.545,50'
                                    dinheiros             moeda


## Operadores Aritméticos

+ = soma
- = Subtração
* = Multiplicação
/ = Divisão de Numeros reais
% = Resto da divisão
5 ** 2 = (5²) = 25

### Precedencias dos operadores

1  ()
2  **
3  * / %
4  + -

### Simplificado

n = 4
n = n+2 = 6 /// n +=2
n = n-2 = 2 /// n -=2
E por aí vai.

### Incremento

var n = 10
n++ = 11
n-- = 10


## Operadores // Boolean (True, False)
### Relacionais
>, <, >=, <=, ==, !=

### Identidade

=== - Identicos // Mesmo valor e mesmo tipo.

### Lógicos
! (Negação) - Só um operando // !true = false // !false = true <br>
&& (E) - true && true = true // true && false = false // false && true = false
|| (OU) - true || true = true // true || false = true // false || true = true // false || false = false


## Início // Término
12DEZ23  // A.S.D
