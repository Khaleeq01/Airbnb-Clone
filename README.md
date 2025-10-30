<h1>Airbnb Clone — MERN Stack</h1>

<p>A full-stack Airbnb Clone built using the MERN stack (MongoDB, Express, React, Node.js) where hosts can list their properties and travelers can book stays.
It features authentication, property management (CRUD), and booking functionality.</p>

<h2>Features</h2>

<h3>User Authentication</h3>
<li>Login & Signup (JWT-based)</li>
<li>Protected routes for logged-in users</li>

<h3>Host Features</h3>
<li>Add new property listings</li>
<li>Edit, update, or delete listings</li>
<li>View all owned properties</li>

<h3>Traveller Features</h3>
<li>Browse available listings</li>
<li>View property details</li>
<li>Book property directly</li>
<li>Cancel bookings</li>

<h3>General Features</h3>
<li>RESTful API built with Express.js</li>
<li>MongoDB for data storage</li>
<li>Cloudinary integration for images</li>
<li>Fully responsive React frontend</li>

<h2>Installation & Setup</h2>

<h3>Clone the repo</h3>

    git clone https://github.com/your-username/airbnb-clone.git
    cd airbnb-clone

<h3>Backend Setup</h3>

    cd backend
    npm install
<h3>Create a .env file in backend/ and add:</h3>

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_URL=your_cloudinary_url 

<h3>Run backend:</h3>

    npm start

<h3>npm start</h3>

    cd frontend
    npm install
    npm run dev

<h2>Deployment</h2>

<h3>Live Demo: https://airbnb-clone-ten-smoky.vercel.app/</h3>





