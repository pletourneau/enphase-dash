// services/enphaseApi.js

const API_BASE_URL = "https://api.enphaseenergy.com/api/v4";

export async function fetchEnergyLifetimeData(systemId, startDate, endDate) {
  const endpoint = `/systems/${systemId}/energy_lifetime`;

  // Build the query parameters based on the provided start and end dates
  const queryParams = new URLSearchParams({
    start_date: startDate,
    end_date: endDate,
    production: "all", // Include both meter and microinverter-measured time series
  });

  // Construct the full URL with query parameters
  const url = `${API_BASE_URL}${endpoint}?${queryParams}`;

  // Fetch the data from the Enphase API
  const response = await fetch(url);

  if (!response.ok) {
    // Handle error responses
    const errorData = await response.json();
    throw new Error(
      `Error fetching energy lifetime data: ${errorData.message}`
    );
  }

  // Parse and return the JSON data
  return response.json();
}
