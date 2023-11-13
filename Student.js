class Student{// creating student class
    constructor(){
        this.stu_no="";
        this.stu_name="";
        this.stu_bday="";
        this.stu_email="";
        this.stu_class="";
        this.stu_marks="";
    }
    // creating setters and getters
    set studentNo(stuno){
        if(stuno.length==5)// checking number of characters
        {
            this.stu_no=stuno;
        }
        else{
            console.log("Invalid Value for Stu No :");
        }
    }
    get studentNo(){
        return this.stu_no;
    }
    set studentName(sname){
        if(sname.length>3){// name should contain more than 3 letters
            this.stu_name=sname;
        }
        else{
            console.log("Invalid Value fior Name :");
        }
    }
    get studentName(){
        return this.stu_name;
    }
    set studentBday(bday){
        if(bday.length==8){ // only accepting if it contain 8 characters
            this.stu_bday=bday;
        }
        else{
            console.log("Invalid Value for B'day (ddmmyyyy) :");
        }
    }
    get stduentBday(){
        return this.stu_bday;
    }
    set studentEmail(semail){
        this.stu_email=semail;
    }
    get studentEmail(){
        return this.stu_email;
    }
    set studentClass(sclass){
        this.stu_class=sclass;
    }
    get studentClass(){
        return this.stu_class;
    }
    set studentMarks(marks){
        if(marks>=0 && marks<=100){
            this.stu_marks=marks;
        }
        else{
            console.log("Invalid input");
        }
    }
    get studentMarks(){
        return this.stu_marks;
    }
}// end of class Student

module.exports={Student};