import {db} from './dbConnect.js'

export function addNewAnimal (req,res) {
    const newAnimal = req.body
    db.collection("animals)").add(newAnimal)
    .then(doc => res.status(201).send("New Animal Added: " + doc.id))
    .catch(err => res.status(500).send(err))
}

export async function getAllAnimals(req, res){
    const collection = await db.collection ("animals)").get ()
    .catch(err => res.status(500).send(err))
    // const animalList = collection.docs.map(animal => animal.data()) , this is without the ids
    const animalList = collection.docs.map(animal => ({...animal.data(), id: animal.id}))
    res.send(animalList)
}   
////WHAT?????? are these two the same thing or doing different things?
//when using await, if wanting to use async must put it in the function