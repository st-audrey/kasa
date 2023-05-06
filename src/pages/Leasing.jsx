import { useParams } from 'react-router-dom'
import '../styles/Leasing.css'

function Leasing() {
  const params = useParams()
  return <div>{params.id}</div>
}

export default Leasing
