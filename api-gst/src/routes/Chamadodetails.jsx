import React from "react"
import axios from "axios"

import { Link, useParams } from "react-router-dom"
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

  const handleAtribuirTecnico = () => {
    // Lógica para atribuir o chamado a um técnico
    console.log("Chamado atribuído a um técnico")
  }

  const handleFecharChamado = () => {
    // Lógica para fechar o chamado
    console.log("Chamado fechado")
  }

  const handleMudarStatus = () => {
    // Lógica para mudar o status do chamado
    console.log("Status do chamado alterado")
  }
  return (
    <div className="home">
      <h1>Detalhes do chamado</h1>
      {chamado.map((chamadoDetalhado) => (
        <div className="chamado" key={chamadoDetalhado.OS}>
          <h2>Ordem de chamado: {chamadoDetalhado.OS}</h2>
          <h2>Descrição total: {chamadoDetalhado.DESCRICAO_TOTAL}</h2>
          <Link onClick={handleAtribuirTecnico}>Atribuir a um Técnico</Link>
          <button onClick={handleMudarStatus}>Mudar Status do chamado</button>
          <button onClick={handleFecharChamado}>Fechar Chamado</button>
        </div>
      ))}
    </div>
  )
}

export default Chamadodetails
