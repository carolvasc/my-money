const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

/* Ao atualizar um elemento, a versão antiga será mostrada em tela.
Usamos o new para pegar a versão mais recente
e o runValidators para rodar as validações */
BillingCycle.updateOptions({ new: true, runValidators: true })

/* Chama o middleware de tratamento de erro após as requisições post e put */
BillingCycle.after('post', errorHandler).after('put', errorHandler)

/* Rota para recuperar o total de registros salvos */
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

/* Rota para recuperar a soma dos valores de débito e crédito para efetuar
os futuros cálculos, através no método aggregate ($project e $group) */
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([
        {
            $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
        },
        {
            $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
        },
        {
            $project: { _id: 0, credit: 1, debt: 1 } // Booleano
        }]).exec((error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                // Caso não hajam registros na tabela, o crédito/débito vão ser retornados como 0
                res.json(result[0] || { credit: 0, debt: 0 })
            }
        })
})

module.exports = BillingCycle