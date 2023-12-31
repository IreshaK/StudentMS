const ps=require('prompt-sync');
const prompt=ps();

const fs=require('fs');// calling file system npm package

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
}// end of sunction add marks

function writeStudentDetails(stuno){// display details in atext file

        for(var i=0;i<studentDetails.length;i++){

            if(studentDetails[i].studentNo==stuno){
                //writeFileSync(fileName.extention,content to write)
                const stuDetails=fs.writeFileSync(studentDetails[i].studentNo+'.txt','Student No : '+studentDetails[i].studentNo+'\nStudent Name : '+studentDetails[i].studentName+'\nStudent Marks : '+studentDetails[i].studentMarks);

                console.log('Data written to  a external File');
                console.log(studentDetails);
                break;
            }
        }
}// end of file write function

function classAverage(className){// to calculate the average marks for each class
    let classAvg=0;
    let total=0;
    let stuCount=0;
    for(var i=0;i<studentDetails.length;i++){
        if(studentDetails[i].studentClass==className){
            total=total+Number(studentDetails[i].studentMarks);
            
            stuCount++; //stuCount=stuCount+1 , counting num of marks added
        }
    }
    classAvg=total/stuCount;
    console.log("================");
    console.log(" Average marks : "+classAvg );
}// enf of function calAverage

function calGreade(){// to calculate the Grade 

    let stuNo=prompt('Enter Student No :');

    for(var i=0;i<studentDetails.length;i++){
        if(studentDetails[i].studentNo==stuNo)
        {
            let marks=studentDetails[i].studentMarks;

            if(marks>=80){
                console.log("A");
            }
            else if(marks>=60){
                console.log("B");
            }
            else if (marks>=45){
                console.log("C");
            }
            else{
                console.log("F");
            }
        }

    }
}// end of CalGrade function


module.exports={regStudents,addStudentMarks,writeStudentDetails,classAverage,calGreade};