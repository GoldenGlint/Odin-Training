const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Beijing?key=NABSDAP8N2UTCVX4XJLZKNQRS";
const response=await fetch(url);
const data=await response.json();
console.log(data);