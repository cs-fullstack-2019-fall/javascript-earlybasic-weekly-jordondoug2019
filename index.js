
var input = parseInt(prompt("welcome to Kenn's program. Press 1 to count. press 2 to use a calculator. press q to quit."))


if (input===1)
{
	// Did you change this to enter any number to count by ones and enter t to count by twos?
	var count1= parseInt(prompt("Enter a number to count by ones. Enter t to count by twos"));
	var t= "t";
	var valid=true
	// Why is c1 used instead of count1 in the code below?
	var c1=count1

	// You're comparing a variable against itself in the second condition.
	while(c1>=1 && c1>=c1)
	{ 

	// You should have two equal signs in here and also, a variable will always equal itself so this will always be true.
	if (c1=c1)
	// Because c1 will always equal c1, this will always run. If you wanted it to always run, you don't need an if statement.
		{console.log(c1);}
	c1++

	}
	if (count1===t)
	{
		var tanswr= parseInt(prompt("enter a number to count by two"));
		// Why is t2 used here instead of tanswr?
		var t2=tanswr
		// The second condition is always true so this is only checking the first one.
		while(tanswr>=1 && tanswr>=tanswr)
		{
			// This is always true so you're always going to run the console.log
			if (tanswr>=tanswr)
			{
				console.log(t2)
			}
			tanswr+2
		}
		
	}
	

}

// Everything in here looks like it works perfectly.
if(input===2)
{
	var count2= prompt(" If you would like to use addditon press a. If you would like subtraction press s")
	
	if (count2==="a")
	{
		var counta=parseInt(prompt("enter a number"))
		var countb=parseInt(prompt("enter number 2"))
		var sum= counta+countb
		alert("The answer is " + sum)
	}
	else if (count2=== "s")
	{
 	    var counts1=parseInt(prompt("enter a number"))
 		var counts2=parseInt(prompt("enter number"))
 		var total= counts1 - counts2
 		alert("Your answer is : " + total)
	}
	
}