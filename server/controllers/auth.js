import fs, { appendFile, existsSync, readFileSync, writeFile, writeFileSync } from 'fs'
import path from 'path';
import { v4 } from 'uuid'
const uuid = v4

export const singIn = async (req, resp) => {
   const { name, password } = req.body
   const usersjson = readFileSync('users.json')
   const users = await JSON.parse(usersjson)
   const user = await users.users.find(i => i.name === name && i.password === password)
   user ? resp.status(200).json(user)
      : resp.status(400).json('неправильный логин или пароль')

}
export const singUp = async (req, resp) => {
   const id = uuid()
   const body = req.body
   body.addList = []
   body.id = id
   let users = readFileSync('users.json')
   users = await JSON.parse(users)
   users.users.push(body)
   writeFileSync('users.json', JSON.stringify(users))
   resp.status(200).json(req.body)
}

export const addProduct = async (req, resp) => {
   try {
      const usersjson = readFileSync('users.json')
      const users = await JSON.parse(usersjson)
      const newUsers = users.users.filter(i => i.id !== req.body.id)
      const user = users.users.find(i => i.id == req.body.id)
      user.addList.push(req.body.element)
      newUsers.push(user)
      writeFileSync('users.json', JSON.stringify({ users: newUsers }))
      resp.status(200).json(user)

   }
   catch (e) {
      resp.status(400).json('При попытке применить изменения произошла ошибка')
   }
}

export const removeProduct = async (req, resp) => {
   try {
      const usersjson = readFileSync('users.json')
      const users = await JSON.parse(usersjson)
      const newUsers = users.users.filter(i => i.id !== req.body.id)
      const user = users.users.find(i => i.id === req.body.id)
      const newAddList = user.addList.filter(i => i.id !== req.body.element.id)
      user.addList = newAddList
      newUsers.push(user)
      writeFileSync('users.json', JSON.stringify({ users: newUsers }))
      resp.status(200).json(user)
   }
   catch (e) {
      resp.status(400).json('При попытке применить изменения произошла ошибка')
   }
}
//writeFileSync('users.json', JSON.stringify(newUsers))
//resp.status(200).json(user)

