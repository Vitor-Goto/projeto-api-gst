import axios from "axios"
import https from "https"
import { CronJob } from "cron"

const headers = {
  key: "ea9fed07a4cfa14a47889ff7a855b12b81fe2523f94bbaf2445bca1f5d9186f1",
  "Content-Type": "application/json",
}
// const correiosApiUrl = "https://jsonplaceholder.typicode.com/posts"
const correiosApiUrl =
  "https://suporte.correios.com.br/gst/api/chamados_novo/lista_chamados_direcionados/?contrato=000769_2023_001&dir_co_dr&status=T&equ_co_pib&equ_nu_serie&erp_nu_os&chc_co_tecnico&data_inicial&data_final&matricula_cliente"
const dbUrl = "http://localhost:6001/chamados"
const getCorreiosData = async () => {
  try {
    const response = await axios.get(correiosApiUrl, {
      headers: headers,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })
    console.log(typeof response)
    // console.log(typeof response, typeof response.data)
    // await axios.post(dbUrl, response.data)
    // console.log("Dados enviados para o JSON Server:", response.data)
  } catch (error) {
    console.error("Erro ao acessar a API dos Correios:", error.message)
  }
}

const job = new CronJob("* * * * * *", () => {
  getCorreiosData()
})
job.start()
