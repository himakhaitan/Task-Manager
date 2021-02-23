const app = require('./app')

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const multer = require('multer')

// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(file.originalname.endsWith('.docx') || file.originalname.endsWith('.doc')) {
//             return cb(undefined, true)
//         }
//         cb(new Error('Please upload a PDF'))
        
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//     }
// })

// const errorMiddleware = (req, res, next) => {
// throw new Error('From my middleware')
// }
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({
//         error: error.message
//     })
// })
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })




// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5fba862be232cd03ac8dde77')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()