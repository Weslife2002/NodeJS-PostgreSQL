import CRUDService from '../services/CRUDService';

let createNewTable = async (req, res) =>{
    try{
        await CRUDService.createUserTable();
    }
    catch(e){
        console.log(e);
    }
    return(res.send("Accounts Table Created!"));
}

let createNewUser = async (req, res) =>{
    let message = await CRUDService.createNewUser(req.body.username, req.body.password, req.body.email);
    if(message.errorCode === 0){
        return(res.status(200).json(message));
    }
    else{
        return(res.status(400).json(message));  
    }
}

let updateUserInfo = async (req, res) =>{
    let message = await CRUDService.updateUser(req.body.username, req.body.password, req.body.email);
    if(message.errorCode === 0){
        return(res.status(200).json(message));
    }
    else{
        return(res.status(400).json(message));  
    }
}

let deleteUser = async (req, res) =>{
    console.log("User id: "+ req.params.id)
    let message = await CRUDService.deleteUser(req.params.id);
    if(message.errorCode === 0){
        return(res.status(200).json(message));
    }
    else{
        return(res.status(400).json(message));  
    }
}

module.exports = {
    createNewTable : createNewTable,
    createNewUser : createNewUser,
    updateUserInfo : updateUserInfo,
    deleteUser : deleteUser
}