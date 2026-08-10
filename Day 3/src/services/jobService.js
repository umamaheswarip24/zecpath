import { JOB_LIMIT } from "../constants/constants";

async function getJobs() {
  const response = await fetch(
    import.meta.env.VITE_JOB_API_URL
  );

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const result = await response.json();

  return result.data.slice(0, JOB_LIMIT);
}

export default getJobs;