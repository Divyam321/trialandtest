import express from 'express'

const app= express()



// app.get('/',(req,res)=>{
    
//     res.send("Server is ready");
// })

//get a list of 5 jokes

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"a joke",
            content:"this is a joke"
        },
        {
            id:2,
            title:"a second joke",
            content:"this is a another joke"
        },
        {
            id:3,
            title:"a third joke",
            content:"this is a third joke joke"
        }

        
    ]
    res.send(jokes)

})

const PORT=process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server at http://localhost:${PORT}`)
})