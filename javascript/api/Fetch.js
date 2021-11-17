import axios from 'axios'
import 'regenerator-runtime'

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
}

const deleteSite = async (siteId) => {
  const url = './tripdashboard/Site/' + siteId
  return await axios.delete(url, {
    headers,
  })
}

const saveDirectory = async (dir) => {
  const url = './tripdashboard/Setting/saveDirectory'
  const params = {directory: dir}
  return await axios.get(url, {
    params,
    headers,
  })
}

const getList = async (url, options) => {
  const response = await axios.get(url, {
    params: options,
    headers,
  })
  return response
}

const getItem = async (command, params) => {
  const url = `tripdashboard/${command}`
  return await axios.get(url, {
    params,
    headers,
  })
}

const postItem = async (item, itemName, role = 'Admin') => {
  const url = `triptrack/${role}/${itemName}/${item.id > 0 ? item.id : ''}`

  return await axios({
    method: item.id > 0 ? 'put' : 'post',
    url,
    data: item,
    timeout: 3000,
    headers,
  })
}

export {getList, getItem, postItem, saveDirectory, deleteSite}
