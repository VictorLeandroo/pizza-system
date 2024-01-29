const OrderService = require('../services/OrderService');

module.exports = {
    getAll: async (req, res) => {
        let json = { error: '', result: [] }

        let orders = await OrderService.getAll()

        for(let i in orders){
            json.result.push({
                clientName: orders[i].clientName,
                order: orders[i].orderCode,
                info: orders[i].info,
            })
        }

        res.json(json)
    }
}