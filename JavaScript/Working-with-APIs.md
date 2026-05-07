## Working with APIs

**Introduction**

Most powerful thing for webdev is fetching data showing creatively. Serve open service serves data. Methods using accessing the same.

**Lesson Overview**

- Explain what an API is
- Explain broadly how access to an API works
- Explain how to fetch extract data from API
- Explain why API blocked by browser how to fix

**APIs (Application Programming Interfaces)**

- APIs access through URLs, specifics of querying depends on sourcing
- specifics documented on service website
- EG for Visual crossing pasting the linke will get this error `No API key or session found. Please verify that your API key parameter is correct.`
- Most case, you will have to create an account request "API key" from API service
- API key will usually be included every data request
- API key random unique to you, service correlate API key to request of data, including how much often you are requesting it
- Most provide paid tiers
- Because API is **your** key, securing them is an important habit
- plenty of bots that crawl GitHub solely for hardcoded/unsecured API keys, allowing bad agents to access them. 

**Fetching Data**

How do we apply API into our code?
- couple years API data was using an `XMLHttpRequest`
```
// Just getting XHR is a mess!
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  }
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    catch (e) {}
  }
}

// Open, send.
request.open('GET', 'https://url.com/some/url', true);
request.send(null);
``` looks like that

- new way is like this

```
// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });
```

- `.then()` and `.catch()` functions are promises