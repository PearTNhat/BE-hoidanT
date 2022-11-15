import connectionDB from "../config/connectDB";
export const homeController = {
    getHomePage: async (req,res)=>{
        const connection =await connectionDB()
        const [rows, fields] = await connection.execute('SELECT * FROM `users`');
        return res.render('index.ejs',{dataUsers:rows})
    },
    getDetailPage:async (req,res)=>{
        const userId=req.params.id
        const connection =await connectionDB()
        const [rows, fields] = await connection.execute('SELECT * FROM `users` WHERE `id` = ?' , [userId]);
        res.send(JSON.stringify(rows))
    }
}

