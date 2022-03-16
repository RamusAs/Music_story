import { useParams } from "react-router-dom"
import { Chart } from "../Components/Chart"
import * as helpers from "../helpers/helpers.js"

export const Detail = () => {
  const { id } = useParams();
  return (
    <>
      <div className="chart">
        <Chart data={ helpers.getData(id) }/>
      </div>
    </>
  )
}
