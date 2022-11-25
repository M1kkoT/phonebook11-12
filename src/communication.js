import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl).then((res)=> res.data)
}


const create = (person) => {
  return axios.post(baseUrl, person)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

const updatePerson = (person) => {
  return axios.put(`${baseUrl}/${person.id}`, person).then(res => res.data)
}


export default { 
  getAll: getAll,
  create: create, 
  deletePerson: deletePerson,
  updatePerson: updatePerson
}