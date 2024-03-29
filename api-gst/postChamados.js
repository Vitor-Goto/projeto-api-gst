import axios from "axios"
import https from "https"
import get from "./getChamados.js"

const headersWkRadar = {}
const radarWkapiUrl = "a"
const postChamadosRadar = async () => {
  getChamados()
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
          CodigoCliente: "null",
          CPF_CNPJ_Cliente: "null",
          RazaoSocialCliente: "#razaoSocial",
          DadosClienteAssistencia: null,
          DataAbertura: null,
          HoraAbertura: null,
          CodigoSituacao: "1",
          NomeSituacao: null,
          TipoRegistro: null,
          Equipamentos: [
            {
              CodigoEquipamento: "#codigoEquip",
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
                Codigo: "156",
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
              RecadoAssistenciaTecnica: "#comentario",
              Email: "#emailContato",
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

postChamadosRadar()
