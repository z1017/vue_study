const express = require('express')
const app = express()
const history = require('connect-history-api-fallback');

app.use(history())

app.use(express.static('C:/Users/86157/OneDrive/桌面/vue_basic/07_nodejs/static'))

app.get('/person', (req, res) => {
    res.send({
        name: 'tom',
        age: 19
    })
})

app.listen(5005, (err) => {
    if (!err) {
        console.log('服务器启动成功了');
    }

})
