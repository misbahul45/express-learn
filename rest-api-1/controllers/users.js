const users=[]
export const getUsers=(req,res)=>{
    res.send(users)
}

export const createUser=(req,res)=>{
    const user=req.body
    users.push(user)
    res.send(user)
}

export const getUser=(req,res)=>{
    const id=req.params.id
    const user=users.find(user=>user.id===id)
    res.send(user)
}

export const deleteUser=(req,res)=>{
    const id=req.params.id
    users=users.filter(user=>user.id!==id)
    res.send({message:`User with id ${id} successfully deleted`})
}

export const updateUser=(req,res)=>{
    const id=req.params.id
    const {firstName,lastName,age}=req.body
    const user=users.find(user=>user.id===id)
    if(firstName){
        user.firstName=firstName
    }
    if(lastName){
        user.lastName=lastName
    }
    if(age){
        user.age=age
    }
    res.send({message:`User with id ${id} successfully updated`})
}