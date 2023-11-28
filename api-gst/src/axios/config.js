import axios from "axios"

const fetchChamados = axios.create({
  baseURL: "http://localhost:6001",
  headers: {
    "Content-Type": "application/json",
  },
})
