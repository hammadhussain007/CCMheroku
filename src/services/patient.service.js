const httpStatus = require('http-status');
const { pick } = require('lodash');
const AppError = require('../utils/AppError');
const { Patient, ConversationList, Conversation } = require('../models');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://hammad007:hussain007@cluster0-ui13p.mongodb.net/CCM?retryWrites=true&w=majority";

const { getQueryOptions } = require('../utils/service.util');
const patient = require('../models/patient.model');


const createPatient = async userBody => {

    const patient = await Patient.create(userBody);
    return patient;
};


const getPatient = async userbody => {

    const patient = await Patient.find();
    return patient;
};

const patientAddToConversation = async userBody => {

    const convoList = await ConversationList.create(userBody);
    return convoList;
};

const getConversationList = async userbody => {

    const patient = await ConversationList.find();
    return patient;
};

const beginConversation = async userBody => {


    //console.log("data", userBody.id)

    const patient = await Patient.findById({ _id: userBody.id });
    // console.log("data", patient)
    var resultofcareplan = [];


    let plans = await getCarePlans()
    // console.log("plans...........", plans)
    // MongoClient.connect(url, async function (err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("CCM");
    //     let collection = dbo.collection("careplans");
    //     result = await collection.find({}).toArray()
    //     console.log("begin   ///////////////// ", result)

    // });

    let selectedPlan = [];
    if (plans !== null) {
        // console.log("begin   ///////////////// ", plans)
        // const selectedDirector =
        plans.find((element, index) => {
            // console.log(patient.Conditions[index])
            // console.log(element.planName.toString())
            console.log(patient.Conditions[0])
            console.log(
                element.planName)




            patient.Conditions.map((data, index) => {
                if (element.planName.toString() === data) {
                    selectedPlan.push(element)

                }
            })




        });

        // selectedPlan = selectedDirector;
    }
    console.log(selectedPlan)
    return selectedPlan
};


async function getCarePlans() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("CCM");

        let collection = db.collection('careplans');

        let query = { name: 'Volkswagen' }

        let res = await collection.find().toArray()


        return res

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

const addToConversation = async userBody => {

    const convo = await Conversation.create(userBody);
    return convo;
};

const getConversation = async userBody => {

    const convo = await Conversation.find({ patientId: userBody.patientId, adminId: userBody.adminId });
    return convo;
};

module.exports = {
    createPatient,
    getPatient,
    patientAddToConversation,
    getConversationList,
    beginConversation,
    addToConversation,
    getConversation

};











//   MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("CCM");


//         var myobj = {
//             planName: "COPD",
//             planDesc: "chronic obstructive pulmonary disease",
//             planNormalRangeStart: 8.5,
//             plandNormalRangeEnd: 10.5,
//             planNormalValueUnit: "mg/dl",
//             Treatment: [
//                 {
//                     mild: [

//                         { q1: "your diease is mild lets wait and watch to see if it goes on its own" },
//                         { q2: "we will monitoring your bones and kidneys over time to be sure they remain healthy" }
//                     ]
//                 },
//                 {
//                     severe: [
//                         { q1: "we recommend visitng the hospital if your health gets worse and continue taking your medicine." }
//                     ]
//                 }
//             ],
//             Medication: [
//                 {
//                     medicineName: "Bronchodilators",
//                     sideEffect: "headaches,a dry mouth,muscle cramps,a cough,diarrhoea",
//                     purpose: "they relax the muscles around your airways. This can help relieve coughing and shortness of breath and make breathing easier",
//                     q1: "are you having headaches,dry mouth,muscle cramps, cough or diarrhoea?"
//                 },
//                 {
//                     medicineName: "Inhaled steroids",
//                     sideEffect: "bruising, oral infections and hoarseness",
//                     purpose: "Inhaled corticosteroid medications can reduce airway inflammation and help prevent exacerbations",
//                     q1: "are you having any bruising, oral infections and hoarseness? "
//                 },
//                 {
//                     medicineName: "Combination inhalers",
//                     
//                     purpose: "Some medications combine bronchodilators and inhaled steroids",
//                    

//                 },
//                 {
//                     medicineName: "Oral steroids ",
//                     sideEffect: "weight gain, diabetes, osteoporosis, cataracts and an increased risk of infection",
//                     purpose: "For people who experience periods when their COPD becomes more severe, called moderate or severe acute exacerbation, short courses (for example, five days) of oral corticosteroids may prevent further worsening of COPD",
//                     q1: "do you any of the following symptoms \n weight gain, diabetes, osteoporosis, cataracts or an  infection?",
//                   
//                 },
//                 {
//                     medicineName: "Phosphodiesterase-4 inhibitors",
//                     sideEffect: "diarrhea and weight loss",
//                     purpose: "This drug decreases airway inflammation and relaxes the airways",
//                     q1: "did you lost any weight? or had diarrhea?",
//                  
//                 },
//                 {
//                     medicineName: "Theophylline",
//                     sideEffect: "nausea, headache, fast heartbeat and tremor",
//                     purpose: "may help improve breathing and prevent episodes of worsening COPD",
//                     q1: "do you have any of the following symptoms \n nausea, headache, fast heartbeat or tremor?",

//                 },
//               
//             ],
//             followUp: [
//                  "do you have any of the following symptoms \n nausea, headache, fast heartbeat or tremor?",
//                  "did you lost any weight? or had diarrhea?",
//                 "do you any of the following symptoms \n weight gain, diabetes, osteoporosis, cataracts or an  infection?",
//                  "are you having any bruising, oral infections and hoarseness? ",
//                  "did you had any shortness of breath?",
//                  

//             ],
//             recommended: [
//                 "please do not smoke any tobbaco or cigarettes",
//                  "do regular physical exercise as advised by the doctor",
//                  "learning to optimize your breathing",
//                  "protect yourself by avoiding people who are sick and staying up to date on your recommended immunizations",
//                  "my attention to you nutritions \n aviod obesity, take proteins, avoid food that trigger an allergic reation",
//              "Make sure you discuss your emotional concerns with your doctor so you can obtain the necessary counseling and/or medication, which are effective ways to improve your emotional state"  
//             ]




//         };




//         dbo.collection("careplans").insertOne(myobj, function (err, res) {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//         });
//     });