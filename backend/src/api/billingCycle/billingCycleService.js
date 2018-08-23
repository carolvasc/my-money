const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

/* Ao atualizar um elemento, a versão antiga será mostrada em tela.
Usamos o new para pegar a versão mais recente
e o runValidators para rodar as validações */
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle