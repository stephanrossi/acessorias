import { api } from './helpers/api/index.js'

const getCompanies = async (cnpj) => {
    let company = await api.get(`/companies/${cnpj}/?obligations`,)
    return company.data
}

const getStatus = async (cnpj) => {
    let company = await getCompanies(cnpj)

    let entregues = company.Obrigacoes.filter(e => e.Entregues == 0).length
    console.log(entregues);
}

getStatus(20492641000118)