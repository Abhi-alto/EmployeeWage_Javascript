console.log("Welcome to the employee wage problem using javascript");
//UC1
const absent=0
let empCheck=Math.floor(Math.random()*2);
if(empCheck==absent)
{   console.log("Employee is ABSENT");
    return;
}
else
{
    console.log("Employee is Present");
}

const PartTime=1;
const FullTime=2;
const PartTimeHrs=4;
const FullTimeHrs=8;
const WagePerHr=20;

let empHrs=0;
empCheck=Math.floor(Math.random()*3);

function WorkingHrs(empCheck)
{
    switch(empCheck)
    {
        case PartTime:
            return PartTimeHrs;
        case FullTime:
            return FullTimeHrs;
        default:
            return 0;
    }
}
empCheck=Math.floor(Math.random()*3);
empHrs=WorkingHrs(empCheck);
let EmpWage=empHrs*WagePerHr;
console.log("Emp Wage = "+EmpWage);