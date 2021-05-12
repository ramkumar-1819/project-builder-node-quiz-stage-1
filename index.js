const fs=require('fs');                                      //Getting inbuild fileSystem module 
const questions=require('./question');                       //Getting the module that we create
fs.writeFileSync('question.json',JSON.stringify(questions))  //writing the module datas into the JSON file