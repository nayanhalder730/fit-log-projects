export const fetchALLData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
      throw new Error("Failed to fetch workout data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching workout data:", error);
    throw error;
  }
};