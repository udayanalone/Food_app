# Businesses Search App (React Native)

This project is a practice app built with React Native, implementing a Yelp-based search functionality. It allows users to search for restaurants or businesses by location and term.

## Features

- **Search Functionality**: Search for businesses using a search bar.
- **Yelp API Integration**: Fetches data from the Yelp API to display businesses.
- **Dynamic Search**: Updates results dynamically based on user input.
- **Error Handling**: Displays error messages if the API call fails.
- **Custom Hooks**: Modular and reusable `useResults` hook for fetching API data.

---

## Prerequisites

To run this project, ensure you have the following installed:

- **Node.js** (16 or later)
- **React Native CLI** or **Expo CLI**
- **Yelp API Key** (Sign up at [Yelp Developers](https://www.yelp.com/developers))

---

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/yelp-search-app.git
   cd yelp-search-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Yelp API**:
   - Create an `api` folder inside the `src` directory.
   - Add a file named `yelp.js` with the following content:
     ```javascript
     import axios from "axios";

     export default axios.create({
       baseURL: "https://api.yelp.com/v3/businesses",
       headers: {
         Authorization: "Bearer YOUR_YELP_API_KEY",
       },
     });
     ```
   - Replace `YOUR_YELP_API_KEY` with your actual Yelp API Key.

4. **Run the App**:
   ```bash
   npx react-native run-android # For Android
   npx react-native run-ios    # For iOS
   ```

---

## Project Structure

```
src/
├── api/
│   └── yelp.js          # Axios instance for Yelp API
├── components/
│   └── SearchBar.js     # Custom search bar component
├── hooks/
│   └── useResults.js    # Custom hook for fetching search results
├── screens/
│   └── SearchScreen.js  # Main screen with search functionality
```

---

## How to Use

1. **Start the App**:
   Launch the app on your device or emulator.

2. **Search for Businesses**:
   - Type a keyword (e.g., "pasta") in the search bar.
   - View the list of businesses matching your search term.

3. **Handle Errors**:
   If there’s an issue fetching data, an error message will be displayed.

---

## Technologies Used

- **React Native**: Framework for building native mobile apps.
- **Axios**: HTTP client for making API requests.
- **Yelp API**: Source for business data.

---

## Future Enhancements

- Add filters for price, rating, and category.
- Display business details on a separate screen.
- Implement pagination for results.
- Improve UI/UX with advanced styling and animations.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.

---

## Acknowledgments

- **Yelp API**: For providing the business data.
- **React Native Community**: For their extensive resources and support.

## Business Search App Demo

You can view the demo video for the Business Search App [here](https://drive.google.com/file/d/1PIL7GvIYhzvhHtzwGdmpzs3KwCfQbn6x/view).

---

Happy coding! 😊
