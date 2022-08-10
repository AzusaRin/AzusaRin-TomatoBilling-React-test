let id = parseInt(window.localStorage.getItem('idMax')||'20')
const createId = ():number =>{
  id +=1
  window.localStorage.setItem('idMax',id.toString())
  return id
}

export {createId}