import axios from "axios"
import https from "https"

const apiUrl =
  "http://radarwebservices.netscandigital.com.br:8080/radarwebwebservices/Areas/gerenciador/Gerenciador.svc/json/BuscarContratosGerenciador"

const getNrserie = async () => {
  try {
    const response = await axios({
      method: "post",
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        login: {
          Base: "NETSCAN",
          Usuario: "whatsapp",
          Senha: "whatsapp",
        },
        filtro: {
          NumeroSerieEquipamentoProduto: "21JAC01294",
        },
      },
    })
    const equipamento = response.data
    console.log(equipamento)
  } catch (error) {
    console.log(error)
  }
}
getNrserie()
