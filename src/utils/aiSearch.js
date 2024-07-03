import { incrementAISearchCount } from "./dataFetching/userData";

export const aiSearch = async (searchWords, username) => {
  try {
    const incrementSuccess = await incrementAISearchCount(username);
    console.log("incrementSuccess", incrementSuccess);

    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchWords }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
