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
let NumOfWrkDays=20;

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
let TotEmpHrs=0;
// for(let day=0;day<NumOfWrkDays;day++)
// {
//     let employment=Math.floor(Math.random()*3);
//     TotEmpHrs+=WorkingHrs(employment);
// }
// let empWage=TotEmpHrs*WagePerHr;
// console.log("Total Hrs : "+TotEmpHrs+" Emp Wage: "+empWage);

let MaxHrsIn_Month=100;                 //UC5
let TotalWrkDays=0;
while(TotEmpHrs<=MaxHrsIn_Month&&
      TotalWrkDays<NumOfWrkDays)
{
    TotalWrkDays++;
    let empCheck=Math.floor(Math.random()*3);
    TotEmpHrs+=WorkingHrs(empCheck);
    if(TotEmpHrs>100)
    {
        TotEmpHrs=100;
        break;
    }
}
empWage=TotEmpHrs*WagePerHr;
console.log("Total Days: "+TotalWrkDays+
            " Total Hrs: "+TotEmpHrs+" Emp Wage: "+empWage);