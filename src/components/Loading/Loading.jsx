import { SquareLoader } from 'react-spinners'
import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading">
        <SquareLoader color="#00F6FF" />
    </div>
  )
}

export default Loading