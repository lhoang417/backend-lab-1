const express = require('express');// assigning our imported packages to variables to use. IF you do not import, you cannot use the packages for that particular file.
const cors = require('cors');//cors allows client and server to communicate without needing advanced config.
const app = express(); //easier to use if assigned to variable vs using the function itself.
app.use(cors())//verb use is for using the package installed.
app.use(express.json());//bring in any js object notation file. -- basic structure file

app.get('/api/users', (req, res) =>{//verb get is a request to get data from a server. First parameter is the URL and the second is the handler function.
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley']//best to create the variable array outside of the .get in case you want to use else if statements.
    res.status(200).send(friends)//this is the response object(information) that is sent back to the client. It can be chained in this example status and then send to send back the friends array.
});

app.get('/weather/:temperature', (req, res) => {
    const phrase = `<h3> It was ${req.params.temperature} today<h3>`;
    res.status(200).send(phrase)
});
const server_port = 4000
app.listen(server_port, () => console.log(`server is running on ${server_port}`))