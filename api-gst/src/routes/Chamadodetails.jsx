import React from "react"
import axios from "axios"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Chamadodetails = () => {
  const { OS } = useParams()

  const [chamado, setChamado] = useState([])

  const getChamadosdetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6001/api/chamados/${OS}`
      )

      const data = response.data
      setChamado(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getChamadosdetails()
  }, [])
  return (
    <div className="home">
      <h1>Detalhes do chamado</h1>
      {chamado.map((chamadoDetalhado) => (
        <div className="chamado" key={chamadoDetalhado.OS}>
          <h2>Ordem de chamado: {chamadoDetalhado.OS}</h2>
          <h2>Descrição total: {chamadoDetalhado.DESCRICAO_TOTAL}</h2>
        </div>
      ))}
    </div>
  )
}

export default Chamadodetails
