import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState([]);
  const [errmsg, setErr] = useState("");

  const searchAPi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term: searchTerm,
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      setErr("Something went wrong");
    }
  };

  useEffect(() => {
    searchAPi("pasta");
  }, []);

  return [searchAPi, result, errmsg];
};
