#Front-end onboarding form using react

An onboarding form to take business information such as contact info and general details.

###Different routes for different parts
Form has different paths using React Router in order to separate steps of the onboarding form

###Data stored in Local Storage
In order to be able to come back to the form later if it wasn't finished, data is stored in Local Storage on a user's device.  This will then deliver the user to the spot they were last at with details from previous screens already stored.  Originally this was done using a parent App's state, but this wouldn't let users come back to the form if they had to close their browser mid-form

###Data can be cleared and reset at the end
In order to be able to test it, the last 'Success' component includes an option to reset the data. This would normally happen automatically, but for the data hand off to the back end servers, it might be helpful to preserve the current localStorage state to see how to access all of the data necessary.
