function dateDifference() {
    let date1 = new Date(prompt("Enter the first date (YYYY-MM-DD):"));
    let date2 = new Date(prompt("Enter the second date (YYYY-MM-DD):"));
    
    // Calculate the time difference in milliseconds
    let timeDifference = date2.getTime() - date1.getTime();
  
    // If timeDifference is negative, we need to reverse it
    if (timeDifference < 0) {
      timeDifference = date1.getTime() - date2.getTime();
    }
  
    // Convert milliseconds to days
    let diffDays = timeDifference / (1000 * 60 * 60 * 24);
    console.log(`The difference between the two dates is ${diffDays} days.`);
  }
  
  dateDifference();
  