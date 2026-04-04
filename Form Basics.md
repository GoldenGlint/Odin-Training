Form Basics
- User's gateway into your backend

Form element: Container element like div, form wraps all the inputs a user will interact with on a form
- action attribute takes a URL value that tells the form where it should send its data to be processed.
- method attripute which HTTP request method it should use. Get and POST 

GET
- requests a representaiton of the specified resource. Only retrive data not contain request content.
- Can be bookmarked
- Used for reading.fetching, shoudln't change anything on server

POST
- Submits an entity to the specified resource, often causing a change in state or side ffects in the server. 
- Sends data to server, parameters in request body
- not stored in history
- used for creating/changing things, like submitting a form, logging in, uploading a file. 

Rule, GET = "Give me something", POST = "Here's something, do something with it"

<form action="exanple.com/path" method="post"> </form>

input element most versatile. Accepts a type attribute, which tells the browser what type of data it should expect, and hot it should render input element. 

<form action="example.com/path" method="post">
  <input type="text">
</form>

Input on it's own isn't very useful since the user will not know what kind of data they are supposed to provide.

create a label we use <label> element. Text we want displayed in the label go between its opening and closing tags.

<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
</form>

labels accept a for attribute, which associate with particular input. Input want to associate need ohave the same id attribute as label's for attribute. Label is associated with an input and lick, will focus cursor on that input. Makes forms more accessible. 

Can add placeholder attribute to an input. Value will be the placeholder text we want to display in the input.

All submitted data should have the name attribute, as a reference to data inputted into a form control after submitting. Variable name for input

Email inputs specialized for just email addresses. Different from text inputs, display different keyboard including @ on mobile
Need to have type attribute type="email"

Password inputs also specialized. They mask data with another character, usually asterick or bullet point. type = "password"

number input only accepts number values, ignore other characters type="number"

collect dates, use type="date". Renders a date picking calendar

Text area element provides inpt box that can accept multiple lines like user comments and reviews.

<textarea>Some initial content</textarea>

<rows> <cols>, cnotrol the initial height and width cols of text area:
<textarea rows="20" cols="60"></textarea>

Selection elements

Select dropdown renders a dropdown list where users select option. Use <select> element. any options within select element are using <option>, each should have a value attribute Can make on the default with selected attribute. Split list of options into groups using the <optgroup> element. Takes a label for each 

Can have radio buttons which allow user to create multiple options user choose one. 
<h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult">
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div>
type="radio" they have the same name attribute. select defaut with checked. 

Checkboxes use type "checkbox" allow multiple options
checked attribute to make them checked. 

Button creates clickable buttons that user can attract. 

type "submit", submit the form it's contained within.

reset button, type "reset" sets all inputs in the form as they were intially. 

Generic buttons for generic ui's. Within form, default type is submit value

Fieldset element.

Include whatever form inuts in the group together. 
<fieldset>
  <label for="first_name">First Name</label>
  <input type="text" id="first_name" name="first_name">

  <label for="last_name">Last Name</label>
  <input type="text" id="last_name" name="last_name">
</fieldset>

Legend element iwth text we want to display. 
<fieldset>
  <legend>Contact Details</legend>

  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="phone_number">Phone Number:</label>
  <input type="tel" id="phone_number" name="phone_number">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</fieldset>

<fieldset>
  <legend>Delivery Details</legend>

  <label for="street_address">Street Address:</label>
  <input type="text" id="street_address" name="street_address">

  <label for="city">City:</label>
  <input type="text" id="city" name="city">

  <label for="zip_code">Zip Code:</label>
  <input type="text" id="zip_code" name="zip_code">
</fieldset>

shouldn't always come right after an opening fieldset tag.

