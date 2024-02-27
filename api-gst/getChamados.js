import axios from "axios"
import https from "https"
import { CronJob } from "cron"

const headersWkRadar = {}
const headersCorreios = {
  Key: "ea9fed07a4cfa14a47889ff7a855b12b81fe2523f94bbaf2445bca1f5d9186f1",
  "Content-Type": "application/json",
}
let os
let numSerie
let descricaoTotal
//const correiosApiUrl =
//"https://suporte.correios.com.br/gst/api/chamados_novo/lista_chamado/?erp_nu_os=18724442&contrato=000769_2023_001"
const wkRadarapiUrl =
  "http://radarwebservices.netscandigital.com.br:8080/radarwebwebservices/Areas/Gerenciador/Gerenciador.svc/json/GravarAssistenciaTecnica "
const correiosApiUrl =
  "https://suporte.correios.com.br/gst/api/chamados_novo/lista_chamados_direcionados/?contrato=000769_2023_001&dir_co_dr&status=T&equ_co_pib&equ_nu_serie&erp_nu_os&chc_co_tecnico&data_inicial&data_final&matricula_cliente"
const dbUrl = "http://localhost:6001/chamados"
const getCorreiosData = async () => {
  try {
    const response = await axios.get(correiosApiUrl, {
      headers: headersCorreios,
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })
    const chamados = response.data
    //console.log(response.data)

    Object.keys(chamados).forEach(function (item) {
      const chamado = chamados[item]
      // console.log(`Chamado ${item}:`)

      Object.keys(chamado).forEach(function (propriedade) {
        if (propriedade == "OS") {
          os = chamado[propriedade]
          // console.log(os)
        } else if (propriedade == "DESCRICAO_TOTAL") {
          descricaoTotal = chamado[propriedade]
          //console.log(descricaoTotal)
        } else if (propriedade == "N_SERIE") {
          numSerie = chamado[propriedade]
          //console.log(numSerie)
        }
      })
    })
  } catch (error) {
    console.error("Erro ao acessar a API dos Correios:", error.message)
  }
}

const postChamadosRadarWk = async () => {
  getCorreiosData()
  try {
    const dataRadarWk = await axios({
      method: "post",
      url: wkRadarapiUrl,
      data: {
        login: {
          Base: "NETSCAN",
          Usuario: "whatsapp",
          Senha: "whatsapp",
        },
        assistec: {
          Codigo: null,
          CodigoFilial: "6",
          NumeroAssistencia: null,
          CodigoCliente: null,
          CPF_CNPJ_Cliente: null,
          RazaoSocialCliente: null,
          DadosClienteAssistencia: null,
          DataAbertura: null,
          HoraAbertura: null,
          CodigoSituacao: null,
          NomeSituacao: null,
          TipoRegistro: null,
          Equipamentos: [
            {
              CodigoEquipamento: null,
              TipoEquipamento: 1,
              NrSerie: numSerie,
              EquipamentoProdutoAssistenciaDefeito: {
                DefeitoRelatado: descricaoTotal,
              },
            },
          ],
          Complemento: {
            Tecnicos: [
              {
                Codigo: null,
              },
            ],
          },
          LocalizacaoEquipamento: {
            CEP: "#cep",
            Endereco: "#endereco",
            NumeroEndereco: "#numEndereco",
            Complemento: "#complemento",
            Bairro: "#bairro",
            CodigoCidade: null,
            CodigoIBGECidade: null,
            Cidade: null,
            UF: null,
            Contato: "#nomeContato",
            Comentario: null,
            DDD: null,
            Telefone: "#telefoneContato",
            Email: "#emailContato",
          },
          Recados: [
            {
              CodigoRecado: null,
              Data: null,
              Hora: null,
              CodigoUsuario: null,
              NomeUsuario: null,
              Contato: "#nomeContato",
              Telefone: "#telefoneContato",
              RecadoAssistenciaTecnica: descricaoTotal,
              Email: null,
            },
          ],
          Atendimentos: null,
          InformacoesAdicionais: null,
        },
      },
    })
  } catch (error) {
    console.log(error)
  }
  // const formataChamado = () => {Object.keys(chamados).forEach()}
}
postChamadosRadarWk()
