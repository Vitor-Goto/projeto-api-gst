import axios from "axios"
import https from "https"

const headers = {
  key: "ea9fed07a4cfa14a47889ff7a855b12b81fe2523f94bbaf2445bca1f5d9186f1",
  "Content-Type": "application/json",
}

const correiosApiUrl =
  "https://suporte.correios.com.br/gst/api/chamados_novo/lista_chamados_direcionados/?contrato=000769_2023_001&dir_co_dr&status=T&equ_co_pib&equ_nu_serie&erp_nu_os&chc_co_tecnico&data_inicial&data_final&matricula_cliente"

const getData = async () => {
  try {
    const response = await axios.get(correiosApiUrl, {
      headers: headers,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })

    // Acessar e manipular os dados
    const data = response.data

    // Verificar se a resposta é uma matriz
    if (Array.isArray(data) && data.length > 0) {
      console.log(`Nomes das variáveis do primeiro objeto:`)

      // Imprimir apenas os nomes das variáveis (chaves) do primeiro objeto
      const firstObject = data[0]
      for (const key in firstObject) {
        if (Object.prototype.hasOwnProperty.call(firstObject, key)) {
          console.log(key)
        }
      }
    } else {
      console.log("A resposta não é uma matriz ou está vazia.")
    }
  } catch (error) {
    console.error("Erro ao acessar a API dos Correios:", error.message)
  }
}

// Chamar a função para obter os dados
getData()
