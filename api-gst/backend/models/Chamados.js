const mongoose = require("mongoose")

const { Schema } = mongoose

const chamadosSchema = new Schema(
  {
    OS: { type: String, sparse: true, unique: true },
    ABERTURA_OS: String,
    ATRIBUICAO_OS: String,
    PIB: String,
    EQUIPAMENTO: String,
    N_SERIE: String,
    MCU: String,
    ORGAO: String,
    DR: String,
    DR_SIGLA: String,
    VALUE2: String,
    SX_CONTRATO: String,
    DESCRICAO_TOTAL: String,
    DESCRICAO_LONGA_TOTAL: String,
    DESCRICAO: String,
    SOLUCAO: String,
    TECNICO: String,
    NOME_TECNICO: String,
    SLA: Number,
    FECHAMENTO_OS: String,
    ATRASO: String,
    ESTADO: String,
    cae_qt_reabertura: Number,
    cae_tx_data_reabertura: String,
    CIDADE: String,
    AREA_CLASSIFICACAO: String,
    TP_ATENDIMENTO: String,
    LIMITE_SLA: String,
  },

  { timestamps: true }
)

const Chamado = mongoose.model("Chamado", chamadosSchema)
// Chamado.createIndexes()

module.exports = {
  Chamado,
}
