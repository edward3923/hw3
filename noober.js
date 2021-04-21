// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  //Store the value of the contact info including first/last name and phone number
  let passengerContactInfo = ride.passengerDetails.first + ` ` + ride.passengerDetails.last + ` - ` + ride.passengerDetails.phoneNumber

  //Store the value of the pickup location
  let pickupAddress = ride.pickupLocation.address + `, ` + ride.pickupLocation.city + `, ` + ride.pickupLocation.state + ` ` + ride.pickupLocation.zip

  //Store the value of the dropoff location
  let dropoffAddress = ride.dropoffLocation.address + `, ` + ride.dropoffLocation.city + `, ` + ride.dropoffLocation.state + ` ` + ride.dropoffLocation.zip

  //Store the level of service
  let serviceLevel
  
  //if the serviceLevel is specified as Purple, set the level to Purple
  if (ride.purpleRequested) {
    serviceLevel = `Noober Purple Passenger`
  } 
  //if the number of passengers is greater than 3, need to set to XL
  else if (ride.numberOfPassengers > 3) {
    serviceLevel = `Noober XL Passenger`
  }
  //all other cases will be set to X level
  else {
    serviceLevel = `Noober X Passenger`
  }

  //Write everything out to the console in a human-readable format
  console.log(`${serviceLevel}: ${passengerContactInfo}. Pickup at ${pickupAddress}. Drop-off at ${dropoffAddress}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
