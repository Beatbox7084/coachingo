const mongoose = require('mongoose')

//connecting to MongoDB Database.
mongoose.connect("mongodb+srv://infinityx:7084954908@coching.kcnbp.mongodb.net/test?authSource=admin&replicaSet=atlas-jfn7c9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {});

mongoose.connection.once('open', function() {
    console.log('CONNECTION ESTABLISHED'); //statement return if DB Successfully connected.
}).on('error', function(error) { // generate the Error if Any Problem arises in connecting.
    console.log('ERROR IS: ', error)
});

const { MongoClient } = require("mongodb");
//connection to mongodb database
const url = 'mongodb+srv://infinityx:7084954908@coching.kcnbp.mongodb.net/test?authSource=admin&replicaSet=atlas-jfn7c9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const client = new MongoClient(url);
const coaching_data = 'coaching'
const products = 'products'

async function c_arts() { //C_ARTS function for "COACHING" database & in that "ARTS" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('arts');
}
module.exports = c_arts; //function exporting to "APII.JS" file.

async function c_banking() { //C_BANKING function for "COACHING" database & in that "BANKING" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('banking');
}
module.exports = c_banking; //function exporting to "APII.JS" file.

async function c_commerce() { //C_COMMERCE function for "COACHING" database & in that "COMMERCE" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('commerce');
}
module.exports = c_commerce; //function exporting to "APII.JS" file.

async function c_judiciary() { //C_JUDICIARY function for "COACHING" database & in that "JUDICIARY" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('judiciary');
}
module.exports = c_judiciary; //function exporting to "APII.JS" file.

async function c_police() { //C_POLICE function for "COACHING" database & in that "POLICE" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('police');
}
module.exports = c_police; //function exporting to "APII.JS" file.

async function c_railway() { //C_RAILWAY function for "COACHING" database & in that "RAILWAY" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('railway');
}
module.exports = c_railway; //function exporting to "APII.JS" file.

async function c_school() { //C_SCHOOL function for "COACHING" database & in that "SCHOOL" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('school');
}
module.exports = c_school; //function exporting to "APII.JS" file.

async function c_science() { //C_SCIENCE function for "COACHING" database & in that "SCIENCE" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('science');
}
module.exports = c_science; //function exporting to "APII.JS" file.

async function c_teaching() { //C_TEACHING function for "COACHING" database & in that "TEACHING" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('teaching');
}
module.exports = c_teaching; //function exporting to "APII.JS" file.

async function c_upsc() { //C_UPSC function for "COACHING" database & in that "UPSC" collection.
    let result = await client.connect();
    db = result.db(coaching_data);
    return db.collection('upsc');
}
module.exports = c_upsc; //function exporting to "APII.JS" file.

async function p_airforce() { //P_AIRFORCE function for "PRODUCTS" database & in that "AIRFORCE" collection.
    let result = await client.connect();
    db = result.db(products);
    return db.collection('airforce');
}
module.exports = p_airforce; //function exporting to "APII.JS" file.

async function p_bca() { //P_BCA function for "PRODUCTS" database & in that "BCA" collection.
    let result = await client.connect();
    db = result.db(products);
    return db.collection('bca');
}
module.exports = p_bca; //function exporting to "APII.JS" file.

async function p_iit_jee() { //P_IIT_JEE function for "PRODUCTS" database & in that "IIT_JEE" collection.
    let result = await client.connect();
    db = result.db(products);
    return db.collection('iit_jee');
}
module.exports = p_iit_jee; //function exporting to "APII.JS" file.

async function p_navy() { //P_NAVY function for "PRODUCTS" database & in that "NAVY" collection.
    let result = await client.connect();
    db = result.db(products);
    return db.collection('navy');
}
module.exports = p_navy; //function exporting to "APII.JS" file.

async function p_nda() { //P_NDA function for "PRODUCTS" database & in that "NDA" collection.
    let result = await client.connect();
    db = result.db(products);
    return db.collection('nda');
}
module.exports = p_nda; //function exporting to "APII.JS" file.

async function p_neet() { //P_NEET function for "PRODUCTS" database & in that "NEET" collection.
    let result = await client.connect();
    db = result.db(products);
    return db.collection('neet');
}
module.exports = p_neet; //function exporting to "APII.JS" file.

async function p_ssb() { //P_SSB function for "PRODUCTS" database & in that "SSB" collection.
    let result = await client.connect();
    db = result.db(products);
    return db.collection('ssb');
}
module.exports = p_ssb; //function exporting to "APII.JS" file.