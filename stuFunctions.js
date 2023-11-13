const ps=require('prompt-sync');
const prompt=ps();

const {Student}=require('./Student.js');// importing student class for Student.js

var studentDetails=new Array();// creating a global array to store student objects

function regStudents(){ // validate data and create student objects
    let sno="";
    let sname="";
    let bday="";
    let semail="";
    let sclass="";

    while(true){// while loop starts
        if(sno.length==5){
            if(sname.length>3){
                if(bday.length==8){
                    semail=prompt("Enter Student Email :");
                    sclass=prompt("Enter Student class :");
                    break;//exit from the loop
                }//end of bday if
                else{
                    bday=prompt("Enter Student Birthday (ddmmyyyy) :");
                }
            }//end of snam if
            else{
                sname=prompt("Enter Name [atleat 3 characters] :");
            }
        }//end of sno if
        else{
            sno=prompt("Enter Student No [should contain 5 characters] :");
        }
    }// end of while loop

    const stu=new Student();// creating student objects
    stu.studentNo=sno;
    stu.studentName=sname;
    stu.stduentBday=bday;
    stu.studentEmail=semail;
    stu.studentClass=sclass;
    stu.studentMarks=0;//initial mark
    studentRegistration(stu);

}// end of regStudents function

function studentRegistration(student){

    studentDetails.push(student);
    console.log(studentDetails);
}
function addStudentMarks(stuno,stumarks){// add marks to student object
    //let stuNo=prompt("Enter Student No :");
    //let stuMarks=prompt("Enter Student Marks :");

    for(var i=0;i<studentDetails.length;i++){
        if(studentDetails[i].studentNo==stuno){
            studentDetails[i].studentMarks=stumarks;
            break;
        }
    }
    console.log(studentDetails);
}

module.exports={regStudents,addStudentMarks};