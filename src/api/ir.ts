import axios from 'axios'
import api from './apimap'

export const irAnalyse = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  const data = await axios.post(api.irAnalyse, formData)
  console.log(data.data)
}
