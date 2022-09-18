import express from "express"
import {PrismaClient} from '@prisma/client'

const app = express();
const prisma = new  PrismaClient({
    log: ['query']
})

//HTTP methods/ API RESTful / HTTP Coders

app.get('/games', async (request, response) =>{
    const games = await prisma.game.findMany({
        include: {
            _count:{
                ads : {
                    
                }
            }
        }
    })

    return response.json(games);
});

app.post('/ads', (resquest, response) =>{
    return response.status(201).json([]);
});


app.get('/games/:id/ads', (request,response) => {
    //const gameId = request.params.id;

    //return response.send(gameId);

    return response .json([
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'},
        {id: 4, name: 'Anuncio 4'},
        {id: 5, name: 'Anuncio 5'},
    ])

})

app.get('ads/:id/discord', (request,response) => {

    return response .json([])

})


app.listen(3333)