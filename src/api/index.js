import Axios from "axios"
import config from "../config"
const AxiosBase = Axios.create({
  baseURL: config.BASE_URL
})

const ConvertMultiple = async (srcSymbol, destSymbols, amount) => {
  if (destSymbols.length === 0) {
    return []
  }
  const route = `/v1/currency/convert?from=${srcSymbol}&to=${destSymbols.join(",")}&amount=${amount}`
  return AxiosBase.get(route)
          .then(response => response.data)
}
const ConvertSingle = async (srcSymbol, destSymbol, amount) => {
  const route = `/v1/currency/convert?from=${srcSymbol}&to=${destSymbol}&amount=${amount}`
  return AxiosBase.get(route)
          .then(response => response.data)
}

const GetRates = async () => {
  return AxiosBase.get("/v1/currency/")
            .then(response => response.data)
}

export {
  ConvertMultiple,
  ConvertSingle,
  GetRates
}