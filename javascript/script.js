function calculateGrade(event){
    event.preventDefault();

    let english = Number(document.getElementById("english-input").value);
    let maths = Number(document.getElementById("Maths-input").value);
    let physics = Number(document.getElementById("physics-input").value);
    let chemistry = Number(document.getElementById("chemistry-input").value);
    let computer = Number(document.getElementById("computer-input").value);

    let totalmarks = english+maths+physics+chemistry+computer;

    let average = (totalmarks/5);

    let percentage = (totalmarks/500)*100;

    let grade="";

    if(english<0 || maths<0 || physics<0|| chemistry<0|| computer<0 || english>100 ||  maths>100 || physics>100|| chemistry>100|| computer>100){
        alert("Please Enter marks in range of 0-100");
        return 0;
    }



    if(english<=35 || maths<=35 || physics<=35|| chemistry<=35|| computer<=35){
        grade = "Failed";

        document.getElementById("total-display").innerHTML =`Total Marks : ${totalmarks}`;
        document.getElementById("average-display").innerHTML = `Your average marks are ${average}`;
        document.getElementById("grade-display").innerHTML = `You got ${grade} grade`;
    }else{

        if(percentage>=90){
            grade = "A";
        }else if(percentage>80 && percentage<89){
            grade = "B";
        }else if (percentage>70 && percentage<79){
            grade = "C";
        }else if(percentage>60 && percentage< 69){
            grade="D";
        }else if(percentage<60){
            grade="F";
        }


        document.getElementById("total-display").innerHTML =`Total Marks : ${totalmarks}`;
        document.getElementById("average-display").innerHTML = `Your average marks are ${average}`;
        document.getElementById("grade-display").innerHTML = `You got ${grade} grade`;



       


    }

   
}