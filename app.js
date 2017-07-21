
const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")

app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const stuffRoute = require("./router/stuffRouter")
app.use("/admin/stuff", stuffRoute)

// const clients = require('./router/clientRouter')
// app.use('/client', clients);
const listRoute = require("./router/listRouter")
app.use("/admin/listuser", listRoute)

const listDetailRoute = require("./router/listDetail")
app.use("/admin/listuser", listDetailRoute)

const detailOrders = require('./router/detailOrder')
app.use('/user/detailorder', detailOrders)

const users = require('./router/userRouter')
app.use('/user', users)

const index = require('./router/indexRouter')
app.use("/",index)

const admin = require("./router/adminRouter")
app.use("/admin", admin)

app.listen(process.env.PORT || 3000);
