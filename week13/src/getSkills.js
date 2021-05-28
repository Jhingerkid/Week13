import jwt from "jsonwebtoken";

export async function getSkills(jobTitle) {
  let url =
    "https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/skills?q=" +
    jobTitle +
    "&limit=50";
  const getToken = () =>
    jwt.sign(
      {
        exp: (() => Math.floor(Date.now() / 1000) + 60)(),
        iss: "learn-web-dev-camper-key",
      },
      "web-dev-camper-secret"
    );
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  });
  const skillList = await response.json();
  console.log(skillList);
  return skillList;
}
