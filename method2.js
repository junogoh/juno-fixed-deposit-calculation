var initial_amount = 120000;
var interest_rate = 0.02;
var accumulated_amount = initial_amount;

var monthDisplay = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];

console.log("Month" + " " + "\t" + "Interest" + " " + "\t" + "Amount");
console.log("=======================================================");
for(var i = 0; i < 12; i++)
{
    var monthly_interest = roundTo2Decimals((accumulated_amount * interest_rate) / 12);
 
    accumulated_amount = roundTo2Decimals((accumulated_amount + monthly_interest));

    console.log(monthDisplay[i] + "\t" + monthly_interest + "\t" +  accumulated_amount);
}

function roundTo2Decimals(numberToRound) {
  return Math.round(numberToRound * 100) / 100
}
