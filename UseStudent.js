const ps=require('prompt-sync');
const prompt=ps();

const {Student}=require('./Student.js');// importing student class for Student.js
const stuFunctions=require('./stuFunctions.js');// import stuFunctions.js
var choice=0;

while(true){// start 

    if(choice==0){
        console.log('=======================================');
        console.log('Select your Choice : ');
        console.log('\t1.Resgister Students\n\t2.Record Student Marks\n\t3.Check Student Grades\n\t4.Write Student Details to Text File\n\t5.Show average marks for the class\n\t6.Exit');
        choice=prompt('Enter your choice [1,2,3,4,5,6] :');
    }
    else if(choice==1){
        stuFunctions.regStudents();
        choice=0;
    }
    else if(choice==2){
        let stuNo=prompt("Enter Student No :");
        let stuMarks=prompt("Enter Student Marks :");
        stuFunctions.addStudentMarks(stuNo,stuMarks);
        choice=0;
    }
    else if(choice==3){

        stuFunctions.calGreade();
        choice=0;

    }
    else if(choice==4){
        let stuNo=prompt("Enter a Studenet No to write details : ");
        stuFunctions.writeStudentDetails(stuNo);
        choice=0;
    }
    else if(choice==5){
        let cName=prompt("Enter Class Name : ");
        stuFunctions.classAverage(cName);
        choice=0;
    }
    else if(choice==6){
        break;// exiting from the loop
    }

}// end while
