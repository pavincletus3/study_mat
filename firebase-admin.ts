import{
    initializeApp,
    getApps,
    getApp,
    cert,
    App,
}from "firebase-admin/app";

import {getFirestore} from "firebase-admin/firestore";
const servicekey = require("./service_key.json");

let app:App;

if(getApps().length === 0){
    app = initializeApp({
        credential: cert(servicekey),
    });
}else{
    app = getApp();
}
const admindb = getFirestore(app);

export { app as adminApp, admindb };