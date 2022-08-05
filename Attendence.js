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
let empDailyWageArray=new Array();                      //Array to store daily wages
let TotEmpHrs=0;
let MaxHrsIn_Month=100;                 
let TotalWrkDays=0;

function calcDailyWage( empHrs)
{
    return TotEmpHrs*WagePerHr;
}

while(TotEmpHrs<=MaxHrsIn_Month&&
      TotalWrkDays<NumOfWrkDays)
{
    TotalWrkDays++;
    let empCheck=Math.floor(Math.random()*3);
    let empHrs=WorkingHrs(empCheck);
    TotEmpHrs+=empHrs;
    if(TotEmpHrs>100)
    {
        TotEmpHrs=100;
        empDailyWageArray.push(calcDailyWage(empHrs));
        break;
    }
    empDailyWageArray.push(calcDailyWage(empHrs));
}
empWage=calcDailyWage(TotEmpHrs);
console.log("Total Days: "+TotalWrkDays+
                " Total hrs: "+TotEmpHrs+" Emp Wage: "+empWage);

