import express from 'express'
import "dotenv/config";
import bcrypt from "bcrypt";
import cors from "cors"
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors())

app.post('/signin', async (req, res) =>{
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        return res.status(401).json({ message: "Invalid EMail" });
    }
    
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(401).json({ message: "Incorrect password" }); 
    }

    res.json({ message: "Login succesfull!" });
})

app.post('/signup', async (req, res) =>{
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
        return res.status(401).json({ message: "Email already registered, try signing in" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await prisma.user.create({

        data: {
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
            birthday: req.body.birthday
        }
    })

    res.status(200).json({ message: "Success" })
})


/*app.put('/users/:id', async (req, res) =>{
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            name: req.body.password,
            age: req.body.age
        }
    })

    res.status(200).json()
})*/

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

app.delete('/users', async (req, res) =>{
    await prisma.user.deleteMany()

    res.status(200).json({message: "DELETE"})
})

app.listen(3000)

export { prisma }