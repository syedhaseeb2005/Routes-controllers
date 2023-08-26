export const  register = (req,res)=>{
    console.log('user register');
    console.log(req.body)
    res.status(200).send({
        data:'success',
        message : 'User Register successfully'
    })
}

export const login = (req,res)=>{
    res.status(200).send({
        data:'success',
        message : 'User login successfully'
    })
}


