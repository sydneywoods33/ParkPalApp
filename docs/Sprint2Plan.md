### **Minimum Viable Product (MVP) Main Goals**

✅ Users must be able to **search for parking** by:

- Address
- Current Location
- Route

✅ Users must be able to **view parking details** in:

- List view
- Map view (with interactive markers)

✅ Users must be able to **filter parking results** by:

- Type (Lot/Street)
- Price
- Time Restrictions

✅ User authentication must be **fully implemented**:

- Sign up, login, password reset (JWT-based)

✅ The backend API must be **fully functional and tested**, including:

- Express.js routes
- Controllers
- Services querying MariaDB

✅ Frontend and Backend must be **connected via API requests**.

✅ **Mapping & Routing must be implemented**:

- Users should be able to view parking on **Google Maps**.
- Users should be able to get **parking spots along a route** using Google Directions API.

---

# **Frontend Tasks**

## **1. Implement Search for Parking**

### **Find Parking by Address**

- Users should be able to enter an address and search for parking nearby.
- The frontend will send a request to the backend, which will process the address and return nearby parking spots.

**Steps:**

1. Create the search input field in the UI place for it.
2. Capture the user’s input and send a request to the API.
3. Display the returned list of parking spots.
4. When a user selects a parking spot, navigate to a details screen.

**✅ Definition of Done**

- [ ] UI contains a working **search bar** for entering an address.
- [ ] Address input is **validated** before being sent to the API.
- [ ] API request successfully **retrieves parking data**.
- [ ] The list of parking spots is **displayed correctly**.
- [ ] Clicking a parking spot **navigates to a detailed view**.

---

### **Find Parking by Current Location**

- Users should be able to tap a button to find parking near their location.
- The frontend will request the user’s geolocation when opening the app and send the coordinates to the backend when they are needed.

**Steps:**

1. Implement location permissions using Expo’s `Location` API.
2. Once permission is granted, retrieve the latitude and longitude.
3. Send the coordinates to the backend and display the results.

**✅ Definition of Done**

- [ ] Users are **prompted** for location permissions.
- [ ] If permissions are denied, users **can manually enter a location**.
- [ ] API request successfully **retrieves parking spots near the user**.
- [ ] Results are **displayed on a map and list view**.

---

### **Find Parking Along a Route**

- Users should be able to enter a start and destination address and find parking along the way.
- The frontend will send both addresses to the backend, which will return parking spots near the route.

**Steps:**

1. Create an input form for start and destination addresses.
2. Send the addresses to the backend API.
3. Display the list of parking spots returned by the API.

**✅ Definition of Done**

- [ ] UI has input fields for **start and destination addresses**.
- [ ] The API correctly **retrieves parking along the route**.
- [ ] Parking results are **displayed in list and map view**.

---

## **2. Implement Map Display (Google Maps)**

- Parking spots should be displayed as a **list** and as **map markers** on Google Maps.

**Steps:**

1. Install `react-native-maps` and integrate **Google Maps**.
2. Display **user's current location**.
3. Retrieve parking spots from the backend and show them as **map markers**.
4. Clicking a marker should **display parking details**.

**✅ Definition of Done**

- [ ] Google Maps is **integrated and working**.
- [ ] Parking spots **appear dynamically** from API data.
- [ ] Clicking a marker **shows parking spot details**.

---

## **3. Implement Routing with Parking Along a Route**

- Users should be able to enter a **start and destination** and view **parking spots along their route**.

**Steps:**

1. Implement input fields for **start & destination addresses**.
2. Send route data to the backend API.
3. Display **retrieved parking spots on the map**.

**✅ Definition of Done**

- [ ] Users can **enter start & destination**.
- [ ] Route data **is sent to the backend**.
- [ ] Parking along the route is **displayed on the map**.

---

## **4. Implement User Authentication**

- Users should be able to **sign up, log in, and reset their password**.
- Authentication should be **JWT-based**, meaning users will receive a token upon login.

**✅ Definition of Done**

- [ ] Users can **create an account, log in, and reset their password**.
- [ ] JWT tokens are **successfully stored and used for authentication**.
- [ ] Protected routes require **valid authentication**.

---

# **Backend Tasks**

## **1. Set Up API Routes and Controllers**

The backend will handle requests from the frontend and query the database.

**✅ Definition of Done**

- [ ] API routes are **defined and working**.
- [ ] Controllers handle **incoming requests and business logic**.
- [ ] Services interact with the **MariaDB database**.

---

## **2. Implement Parking Search API**

### **Find Parking by Address**

- Converts an address into latitude/longitude using the **Google Geocoding API** and searches the database.

**✅ Definition of Done**

- [ ] The API correctly **converts addresses to coordinates**.
- [ ] The database query returns **relevant parking spots**.

---

### **Find Parking by Location**

- Takes latitude/longitude and returns parking spots nearby.

**✅ Definition of Done**

- [ ] The API correctly **retrieves nearby parking spots**.
- [ ] API responses **match expected output format**.

---

### **Find Parking by Route**

- Retrieves waypoints from Google Directions API and searches for parking nearby.

**✅ Definition of Done**

- [ ] The API correctly **fetches waypoints** from Google Directions API.
- [ ] Parking spots are **accurately found along the route**.

---

## **3. Implement Map & Routing in Backend**

### **Google Maps API for Routing**

- Calls **Google Directions API** to retrieve **waypoints along the route**.
- Queries **parking spots near those waypoints**.

**✅ Definition of Done**

- [ ] The API correctly **retrieves waypoints from Google Directions API**.
- [ ] Queries database for **parking spots along the route**.
- [ ] JSON response **returns accurate parking data**.

---

## **4. Implement User Authentication**

- Users sign up and log in with email/password.
- The backend generates **JWT tokens** for authentication.

**✅ Definition of Done**

- [ ] The API correctly **handles user authentication**.
- [ ] JWT tokens are **issued and verified correctly**.

---

## **5. Error Handling**

- Implement **try/catch blocks** in controllers.
- Ensure **API requests handle errors gracefully**.

**✅ Definition of Done**

- [ ] API returns **clear error messages**.
- [ ] API **logs errors** for debugging.

---

## **6. Docker Containerizing Backend API**

- Configure Dockerfile and how to containerize the backend API architecture.
- Test API while inside docker container.
- Liam will do that.

---

# **Deployment Plan**

- **Frontend (Expo)** → Hosted via **Expo Go** or built as a **standalone app**.
- **Backend API** → Hosted in a **Docker container**.
- **Database** → Hosted in **AWS RDS (MariaDB)**.

**✅ Definition of Done**

- [ ] The backend **runs in a Docker container**.
- [ ] The frontend **successfully connects to the backend API**.
- [ ] Database is **hosted and accessible**.

---

# **API Details and Explanation**

We have 2 APIs for this project:

1. **ETL Pipeline for Calgary Open Data Ingestion**

   - **Purpose:** Connects to the **Open Calgary SODA API**, fetches data, transforms it, and loads it into the database on a schedule.
   - **Scope:** Strictly responsible for **data ingestion** and storage.
   - Liam is worrying about/configuring this.

2. **Backend API (Sprint 2)**
   - **Purpose:** Handles **user requests**, such as searching for parking, authentication, and retrieving parking spot details.
   - **Scope:** Exposes **RESTful endpoints** for the **frontend** to interact with your **MariaDB** database.

### How the Backend API Works

- The frontend is hosted in Expo.
- The backend (API) will be hosted in a Docker container.
- The database is hosted in AWS.

**Flow:**

1. The frontend sends an API request to the backend API server.
2. The server processes the request and queries the database.
3. The database returns the information as a query result.
4. The backend API sends the query result back to the frontend as a JSON file.
5. The frontend uses the JSON file to display information to the user.

### Roadmap and Flow for Finding Parking by Location Using the Backend API

1. **Frontend (Expo React Native)**

   - Calls the **API** using `fetch()`.
   - Sends **latitude, longitude, and radius** to search for parking.
   - **Code example:**
     ```jsx
     // Frontend API call to fetch parking spots near user's location.
     async function fetchNearbyParking(lat, lon, radius) {
       try {
         const response = await fetch(
           `http://your-backend-ip:3000/api/parking/nearby?lat=${lat}&lon=${lon}&radius=${radius}`
         );
         const data = await response.json();
         console.log("Parking Data:", data);
         return data; // Pass the data to the UI for display
       } catch (error) {
         console.error("Error fetching parking data:", error);
       }
     }
     ```

2. **API Route (Express.js)**

   - The request is received by **Express.js** in `routes/parkingRoutes.js`.
   - The route calls the **controller** function.
   - **Code example:**

     ```jsx
     // parkingRoutes.js
     const express = require("express");
     const router = express.Router();
     const parkingController = require("../controllers/parkingController");

     // Route: Find parking near user's current location
     router.get("/parking/nearby", parkingController.getNearbyParking);

     // Route: Find parking by address (using Google Geocoding API)
     router.get("/parking/search", parkingController.getParkingByAddress);

     // Route: Find parking along a route (using Google Directions API)
     router.post("/parking/route", parkingController.getParkingByRoute);

     module.exports = router;
     ```

3. **Controller (Business Logic)**

   - Extracts parameters from the request (`lat`, `lon`, `radius`).
   - Calls the **service function** to interact with the database.
   - **Code example:**

     ```jsx
     // parkingController.js
     const parkingService = require("../services/parkingService");

     exports.getNearbyParking = async (req, res) => {
       const { lat, lon, radius } = req.query;

       if (!lat || !lon || !radius) {
         return res.status(400).json({ error: "Missing required parameters" });
       }

       try {
         const parkingSpots = await parkingService.findParkingByLocation(
           parseFloat(lat),
           parseFloat(lon),
           parseInt(radius)
         );
         res.json(parkingSpots);
       } catch (error) {
         console.error("Error fetching parking data:", error);
         res.status(500).json({ error: "Internal Server Error" });
       }
     };
     ```

4. **Service (Database Query)**

   - Executes a SQL query in **MariaDB** to find parking spots within the given radius.
   - Returns **parking data** to the controller.
   - **Code example:**

     ```jsx
     // parkingService.js
     const db = require("../config/db");

     async function findParkingByLocation(lat, lon, radius) {
       const query = `
             SELECT id, name, type, price, time_restriction, ST_AsGeoJSON(location) as location
             FROM parking
             WHERE ST_Distance_Sphere(location, POINT(?, ?)) <= ?
         `;

       const [results] = await db.execute(query, [lon, lat, radius]);
       return results;
     }

     module.exports = { findParkingByLocation };
     ```

5. **Database (MariaDB)**

   - Processes the SQL query and returns **parking spot results**.

6. **Response Sent Back**
   - The **controller formats the response** and sends it back to the frontend.
   - The frontend **receives JSON data** and displays it to the user.

**Example JSON Response:**

```json
[
  {
    "id": 1,
    "name": "Downtown Parking Lot",
    "latitude": 51.045,
    "longitude": -114.057,
    "type": "lot",
    "price": 3.5,
    "time_restriction": "2 hours"
  },
  {
    "id": 2,
    "name": "Street Parking - 5th Ave",
    "latitude": 51.046,
    "longitude": -114.058,
    "type": "street",
    "price": 2.0,
    "time_restriction": "1 hour"
  }
]
```
