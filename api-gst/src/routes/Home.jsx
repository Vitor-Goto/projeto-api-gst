import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import "./Home.css"

const dbUrl = "http://localhost:6001/api/chamados"

const Home = () => {
  const [chamados, setChamados] = useState([])

  const getChamados = async () => {
    try {
      const response = await axios.get(dbUrl)

      const data = response.data
      setChamados(data)
      console.log(typeof data, typeof chamados)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChamados()
  }, [])

  return (
    <div className="home">
      <h1>Ultimos Chamados</h1>
      {chamados.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        chamados.map((chamado) => (
          <div className="chamado" key={chamado.OS}>
            <h2>{chamado.OS}</h2>
            <h2>{chamado.DESCRICAO_TOTAL}</h2>
            <Link to={`api/chamados/${chamado.OS}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
