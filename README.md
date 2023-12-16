## Ticket Cancellation Solution:-

1. We will provide a "Cancel Reservation" button corresponding to each active ticket on My tickets page.
2. When user tries to cancel we will check in our backend if the showtime has more than 1 hour left , if yes then only cancel reservation else reservation cannot be cancelled.
3. Assuming in future there is a payment method for reserving tickets , we will first process the refund for the reservation and then delete the ticket from the tickets table using the ticket id and user id.



## -> RUN THE APP
npm install --force
npm start

## ->Images References
movies - google images

logo and banners - self designed in canva

## icons :
profile icon - https://t3.ftcdn.net/jpg/02/76/20/36/240_F_276203644_16oA91FeeWEoGzDrwMU2bZhTl0hQPr2H.jpg
social media icons - https://cdn-icons-png.flaticon.com/128/2111/2111463.png 
info icon - https://cdn-icons-png.flaticon.com/128/471/471713.png
copyright icon - https://cdn-icons-png.flaticon.com/128/3524/3524375.png

## locations images :
melbourne image- https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVsYm91cm5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60

sydney image- https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60

brisbane image- https://images.unsplash.com/photo-1623027588467-24b2124f70b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpc2JhbmUlMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60

gold coast image- https://images.unsplash.com/photo-1687813629467-6b59c74236aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZGNvYXN0JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60

##  ->Code references
custom scrollbar - https://www.geeksforgeeks.org/how-to-change-style-of-scrollbar-using-tailwind-css/

navbar hide on scrolling - https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js

text on image hover - https://stackoverflow.com/questions/65917029/tailwind-css-display-text-on-image-hover

regex for password input validation - https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters

int date time format - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
