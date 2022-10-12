import { Client } from "pg"
require("dotenv").config()
 
let credentials = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
}

let createUserTable = async () => {
    try {
        const client = new Client(credentials)
        await client.connect()
        const res = await client.query("CREATE TABLE accounts (user_id serial PRIMARY KEY, username VARCHAR ( 50 ) UNIQUE NOT NULL, password VARCHAR ( 50 ) NOT NULL, email VARCHAR ( 255 ) UNIQUE NOT NULL);")
        console.log(res)
        console.log("OKEY IT Works")
        await client.end()
    } catch (error) {
        console.log(error)
    }
}

let createNewUser = async (username, password, email) => {
    try {
        const client = new Client(credentials)
 
        await client.connect()
        const res = await client.query(`INSERT INTO accounts (username, password, email) 
                                        VALUES ('${username}', '${password}', '${email}');`)
        
        await client.end()
        console.log(res)
        return({
            errorCode : 0,
            message : "New User Created!"
        })
    } catch (error) {
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
}

let updateUser = async (username, password, email) => {
    try {
        const client = new Client(credentials)

        await client.connect()
        const res = await client.query(`UPDATE accounts 
                                        SET username = '${username}',
                                            password = '${password}'
                                        WHERE email = '${email}';`)

        await client.end()
        console.log(res)
        return({
            errorCode : 0,
            message : "User has been updated!"
        })
    } catch (error) {
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
}

let deleteUser = async (userId) => {
    try {
        const client = new Client(credentials)

        await client.connect()
        const res = await client.query(`DELETE FROM accounts 
                                        WHERE user_id = '${userId}';`)

        await client.end()
        console.log(res)
        return({
            errorCode : 0,
            message : "User has been deleted!"
        })
    } catch (error) {
        console.log("ERROR GOES HERE")
        console.log(error)
        return({
            errorCode : 1,
            message : error
        })
    }
}

 
module.exports = {
    createUserTable : createUserTable,
    createNewUser : createNewUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}