/* Implementa uma classe que representa uma calculadora simples, apenas para números inteiros de qualquer dimensão, com apenas quatro operações:

Somar
Subtrair
Dividir
Multiplicar
A calculadora deve guardar o histórico e o último resultado. Deve ser possível limpar o histórico da calculadora.

O nome da classe a implementar é Calculadora, e deve conter os seguintes métodos:

Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.

multiplicar(a, b)
O método recebe um ou dois argumentos. Se b não estiver definido, deve ser utilizado o último resultado como primeiro argumento da multiplicação.
O método deve retornar a instância da calculadora, e não o resultado da multiplicação.
Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.

dividir(a, b)
O método recebe um ou dois argumentos. Se b não estiver definido, deve ser utilizado o último resultado como primeiro argumento da divisão.

O método deve retornar a instância da calculadora, e não o resultado da divisão.

Deve ficar registada a operação no histórico e deve ser atualizado o último resultado.

limparHistorico()
Quando este método é invocado, a calculadora deve ficar num estado limpo, ou seja, com o histórico vazio e com o último resultado a 0.

Esta função deve retornar a instância da calculadora.

obterResultado()
Retorna o último resultado como um BigInt.

toJSON()
Retorna um objecto em formato JSON com duas propriedades: historico e ultimoResultado.

O historico deve ser um array que tem, em cada posição, uma operação no formato a op b = resultado, ou seja, 1 + 2 = 3. O historico deve estar ordenado da primeira operação para a última.

O ultimoResultado deve ser a representação textual do número.

toString()
Se não existir qualquer operação no historico, este método deve retornar "Calculadora Limpa". */


class Calculadora {
    constructor() {
        this.historico = []
        this.resultado = 0
 
    }

    somar(a, b) {
        let valor1 = a
        let valor2 = b

        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado
        }

        let res = BigInt(valor1) + BigInt(valor2)
        this.resultado = res

        this.historico.push(`${valor1} + ${valor2} = ${res}`)

        return this
    }

    subtrair(a, b) {
        let valor1 = a
        let valor2 = b
        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado
        }

        let res = BigInt(valor1) - BigInt(valor2)
        this.resultado = res

        this.historico.push(`${valor1} - ${valor2} = ${res}`)
        return this


    }

    multiplicar(a, b) {

        let valor1 = a
        let valor2 = b
        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado

        }

        let res = BigInt(valor1) * BigInt(valor2)
        this.resultado = res


        this.historico.push(`${valor1} * ${valor2} = ${res}`)

        return this

    }

    dividir(a, b) {
        let valor1 = a
        let valor2 = b
        if (valor2 === undefined) {
            valor2 = valor1
            valor1 = this.resultado

        }

        if (valor2 === 0) {
            return undefined
        }

        let res = BigInt(valor1) / BigInt(valor2)
        this.resultado = res

        this.historico.push(`${valor1} / ${valor2} = ${res}`)
        return this
    }

    limparHistorico() {
        this.historico = []
        this.resultado = 0

        return this
    }

    obterResultado() {
        return this.resultado



    }

    toJSON() {
        const obj = {
            historico: this.historico,
            ultimoResultado: this.resultado.toString()
        }

        const objJson = JSON.stringify(obj)
        const objJson2 = JSON.parse(objJson)

        return objJson2


    }

    toString() {


        if (this.historico.length === 0) {
            return "Calculadora Limpa"
        } else {

            return `=== Histórico da Calculadora ===
${this.historico.map((elemento, i) => i + 1 + '. ' + elemento).join("\n")}                
=== Fim do Histórico ===
Foram realizadas ${this.historico.length} operações
Último Resultado: ${this.obterResultado()}`


        }
    }
}


const calculadora1 = new Calculadora()


console.log(
    calculadora1.somar(2, 4)
)
console.log(
    calculadora1.somar(2)
)
console.log(
    calculadora1.subtrair(3)
)
console.log(
    calculadora1.multiplicar(10)
)
console.log(
    calculadora1.dividir(2)
)

console.log(
    calculadora1.toJSON()
) 
console.log(
    calculadora1.toString()
) 
 


