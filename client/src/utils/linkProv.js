function getURL(){
    if(process.env.NODE_ENV == "production") return "https://pseudo-hectars.herokuapp.com"
    else return "http://localhost:4000"
}

export default getURL