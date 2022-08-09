const userDB = require('../model/model');

const controller = {
    create: async (req,res) => {
        // validate request
        if(!req.body) {
            res.status(400).send({message: 'Content can not be empty'});
            return;
        }

        const user  = new userDB({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
            
        });

        
        user
            .save(user)
            .then(data => {
                //res.send(data);
                res.redirect('/');
            })
            .catch(err => {
                res.status(500).send({message: err.message});
            });
    },
    find: async (req,res) => {
        if(req.query.id){
            const id = req.query.id;
    
            await userDB.findById(id)
                .then(data =>{
                    if(!data){
                        res.status(404).send({ message : "Not found user with id "+ id})
                    }else{
                        res.send(data)
                    }
                })
                .catch(err =>{
                    res.status(500).send({ message: "Erro retrieving user with id " + id})
                })
    
        }else{
            await userDB.find()
                .then(user => {
                    res.send(user)
                })
                .catch(err => {
                    res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
                })
        }
    },    
    update: async (req,res) => {
        if(!req.body) {
            return res
            .status(400)
            .send({message: 'Data to update can not be emty'});
        }
        const id = req.params.id;
        userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
            .then(data => {
                if(!data){
                    res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message : "Error Update user information"})
            })
    },    
    delete: async (req,res) => {
        const id = req.params.id;

        userDB.findByIdAndDelete(id)
            .then(data => {
                if(!data){
                    res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
                }else{
                    res.send({
                        message : "User was deleted successfully!"
                    })
                }
            })
            .catch(err =>{
                res.status(500).send({
                    message: "Could not delete User with id=" + id
                });
            });
    },
};

// retrieve and return  all users / retrieve and return a single user
module.exports = controller;