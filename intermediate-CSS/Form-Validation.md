Form Validation:
Allows us to set specific constraints or rules that determine what data users can enter into an input. 
Send a message when something is wrong.
Crucual to ensure backend systems get correct data


Required
<input type="email" id="user_email" name="user_email" required>
required attribute ensures it needs to be submitted

Minimum Length
give the form control a minlength attribute with the integer value for the minimum number of characters
 <textarea placeholder="What's happening?" minlength="3"></textarea>

Maximum length
give the form a maxlength attribute with integer value representing maximum characters we want in form control
 <textarea placeholder="What's happening?" maxlength="20"></textarea>
  </div>

Can combine validations

Number range validations
  Min attribute, with integer to represent minimum number.
  use the min attribute 
   <input type="number" id="quantity" name="quantity" min="1" value="0">

  opposite for max 
   <input type="number" id="passengers" name="passengers" max="5" value="0">

  Pattern validation
  give form control a pattern attribute with a regular expression as the value. (regex)
    <input type="text" id="zip_code" name="zip_code" pattern="(\d{5}([\-]\d{4})?)" required>
    title is what happens when something fails

:user-valid and :user-invalid pseudo-classes allow targeting form controls that have passed or failed validation
sometimes you will need validations that aren't easy to add. Validating password input and confirmation.
