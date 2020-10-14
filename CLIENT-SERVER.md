
How a Request Get Served-
    1-You enter a URL into a web browser.

    2- The browser looks up the IP address for the domain name via DNS.

    3- The browser sends a HTTP request to the server.

    4- The server sends back a HTTP response.

    5- The browser begins rendering the HTML.

    6- The browser sends requests for additional objects embedded in HTML (images, css,        JavaScript) and repeats steps 3-5.
    
    7- Once the page is loaded, the browser sends further async requests as needed.

When you type “https://successivetechnologies.com” into your browser the first thing that happens is a Domain Name Server (DNS) matches “https://successivetechnologies.com” to an IP address. Then the browser sends an HTTP request to the server and the server sends back an HTTP response. The browser begins rendering the HTML on the page while also requesting any additional resources such as CSS, JavaScript, images, etc. Each subsequent request completes a request/response cycle and is rendered in turn by the browser. Then once the page is loaded some sites (though not mine) will make further asynchronous requests.
