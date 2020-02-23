export default  {
    api:{
        port: process.env.PORT || 5000,
    },
    database:{
        url: process.env.MONGODB_URI,
    }
}