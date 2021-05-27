import jwt from "jsonwebtoken";

export async function getJobs() {
  const getToken = () =>
    jwt.sign(
      {
        exp: (() => Math.floor(Date.now() / 1000) + 60)(),
        iss: "learn-web-dev-camper-key",
      },
      "web-dev-camper-secret"
    );
  const response = await fetch(
    "https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/title?q=python&limit=50",
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
    }
  );
  const jobList = await response.json();
  return jobList;
}
