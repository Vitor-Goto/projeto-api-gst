const mongoose = require("mongoose")

async function main() {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(
      "mongodb+srv://vitor-goto:ZW0GnLDL69wRmyQT@cluster0.qnmvysh.mongodb.net/?retryWrites=true&w=majority"
    )
    console.log("conectado ao banco de dados")
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main
