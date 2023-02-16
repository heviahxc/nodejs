


const getAllUsers = (req,res)=>{
    try {
        const {limit, offset} = req.query;
        if (limit && offset) {
            req.json({
                limit,
                offset
            }) 
        }else{
            res.send('No hay ningun parametro')
        }
    } catch (error) {
        console.log(error)
    }
   
}

module.exports = {
    getAllUsers
}