const { Chamado: ChamadoModel } = require("../models/Chamados")

const chamadoController = {
  create: async (req, res) => {
    try {
      const chamado = {
        OS: req.body.OS,
        ABERTURA_OS: req.body.ABERTURA_OS,
        ATRIBUICAO_OS: req.body.ATRIBUICAO_OS,
        PIB: req.body.PIB,
        EQUIPAMENTO: req.body.EQUIPAMENTO,
        N_SERIE: req.body.N_SERIE,
        MCU: req.body.MCU,
        ORGAO: req.body.ORGAO,
        DR: req.body.DR,
        DR_SIGLA: req.body.DR_SIGLA,
        VALUE2: req.body.VALUE2,
        SX_CONTRATO: req.body.SX_CONTRATO,
        DESCRICAO_TOTAL: req.body.DESCRICAO_TOTAL,
        DESCRICAO_LONGA_TOTAL: req.body.DESCRICAO_LONGA_TOTAL,
        DESCRICAO: req.body.DESCRICAO,
        SOLUCAO: req.body.SOLUCAO,
        TECNICO: req.body.TECNICO,
        NOME_TECNICO: req.body.NOME_TECNICO,
        SLA: req.body.SLA,
        FECHAMENTO_OS: req.body.FECHAMENTO_OS,
        ATRASO: req.body.ATRASO,
        ESTADO: req.body.ESTADO,
        cae_qt_reabertura: req.body.cae_qt_reabertura,
        cae_tx_data_reabertura: req.body.cae_tx_data_reabertura,
        CIDADE: req.body.CIDADE,
        AREA_CLASSIFICACAO: req.body.AREA_CLASSIFICACAO,
        TP_ATENDIMENTO: req.body.TP_ATENDIMENTO,
        LIMITE_SLA: req.body.LIMITE_SLA,
      }

      const response = await ChamadoModel.create(chamado)

      res.status(201).json({
        response,
        msg: "Chamado agora esta na nossa base de dados",
      })
    } catch (error) {
      console.log(error)
    }
  },
  getAll: async (req, res) => {
    try {
      const chamados = await ChamadoModel.find()

      res.json(chamados)
    } catch (error) {
      console.log(error)
    }
  },
  get: async (req, res) => {
    try {
      const OS = req.params.OS
      const chamado = await ChamadoModel.find({ OS: `${OS}` })

      if (!chamado) {
        res.status(404).json({ msg: "chamado não encontrado" })
        return
      }
      res.json(chamado)
    } catch (error) {
      console.log(error)
    }
  },
  update: async (req, res) => {
    const id = req.params.id

    const chamado = {
      OS: req.body.OS,
    }

    const chamadoAtualizado = await ChamadoModel.findByIdAndUpdate(id, chamado)
    if (!chamadoAtualizado) {
      res.status(404).json({ msg: "chamado não encontrado" })
      return
    }

    res.status(200).json({ chamado, msg: "chamado atualizado com sucesso" })
  },
}

module.exports = chamadoController
