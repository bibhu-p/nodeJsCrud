var UserDb = require('../model/model');

// create
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can't be empty! "});
        return;
    }

    const user = new UserDb({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        status : req.body.status
    })

    user.save(user).then(data =>{
        // res.send(data)
        res.redirect('index')
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Error During Creation ......"
        });
    });
}

// retrieve
exports.find = (req,res)=>{

    if(req.query.id){
    const id = req.params.id;
    UserDb.findById(id).then(data =>{
        if(!data){
            res.status(404).send({message:`User Not Found ${id}`})
        }else{
            res.send(data)
        }}).catch(err =>{
            res.status(500).send({message:"Error .."});
        });
    }else{
        UserDb.find().then(user =>{
            res.send(user)
        }).catch(err =>{
            res.status(500).send({
                message:err.message || "Error During Searching.."
            })
        });
    }
}

exports.findById = (req,res)=>{

    if(req.params.id){
    const id = req.params.id;
    UserDb.findById(id).then(data =>{
        if(!data){
           return res.status(404).send({message:`User Not Found ${id}`})
        }else{
        //    return res.send(data)
            return res.render('update_user',{userData:data});
        }}).catch(err =>{
           return res.status(500).send({message:"Error .."});
        });
    }else{
        UserDb.find().then(user =>{
            return res.send(user)
        }).catch(err =>{
            return res.status(500).send({
                message:err.message || "Error During Searching.."
            })
        });
    }
}

// update
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message: "Update data can't be empty..."});
    }

    const id = req.params.id;
    UserDb.findByIdAndUpdate(id,req.body,{userFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:`User Not Found ${id}`})
        }else{
            res.send(data)
        }
    }).catch(err =>{
        res.status(500).send({message:"Error During Update.."});
    });
}

// Delete
exports.delete = (req,res)=>{
    const id = req.params.id;
    UserDb.findByIdAndDelete(id).then(data =>{
        if(!data){
            res.status(404).send({message:`User Not Found ${id}`})
        }else{
            res.send({message:"User Deleted Successfully..."})
        }
        }).catch(err =>{
        res.status(500).send({message:"Error During Delete.."});
    });
}