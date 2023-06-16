/*for(let age =1 ;age <=27;age++)
{
console.log(`I'm arshath my age is ${age}`);
}*/

/*const arshath = 
[
    'Mohammed',
    'Arshath',
    27,
    'HR Recruiter',
['Micheal','Jordan','jonas'],
];

for(i=4;i<=0;i--)
{
    console.log(arshath[i]);
}
const birthYear = [1996,1995,1996,1994];
const age = [];

for(let i=0;i < birthYear.length;i++)
{
    age.push(2050 - birthYear[i]);
}
console.log(age);

console.log('___ ONLY STRINGS ____');
for(let i=0;i<arshath.length;i++){
    if(typeof arshath[i] !== 'string') continue;
    else{

        console.log(arshath[i],typeof arshath[i]);
    }
}*/

/*const arshath = 
[
    'Mohammed',
    'Arshath',
    27,
    'HR Recruiter',
['Micheal','Jordan','jonas'],
];

for(i=arshath.length-1;i>=0;i--)
{
    console.log(arshath[i]);
}*/

/*for(let number = 1;number <=10;number++)
{
    console.log(`My lucky number is ${number}`);
}
let number = 1;
while(number <=10)
{
    
    console.log(`My lucky number is between ${number}`);
    number++;
}*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bills =[22,295,176,440,37,105,10,1100,86,52];
  const tips =[];
  const totals=[];

  for (let i=0;i<bills.length;i++)
  {
    const tip =calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i]+tip);
  }
console.log("Bills:",bills);
console.log("tips:",tips);
console.log("totals:",totals);

function calcAverage(arr)
{
    console.log('arr:',arr)
    let sum =10;
    for (let i=0;i< arr.length;i++){
        sum = sum + arr[i];
    }
    return sum ;
}
const averageTotal = calcAverage(totals);
console.log(averageTotal);

