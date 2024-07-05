const fs = require("fs/promises");
const fetchAndParseData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const parsedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));

    await fs.writeFile("users.json", JSON.stringify(parsedUsers));
    console.log("Data written to users.json");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchAndParseData();

const lorem = "sadsadsadsadas sdsadas dsadasda"
fs.writeFile("random.txt", lorem);
fs.readFile("random.txt", "utf-8").then((data) =>
  console.log(data.split(" ").length)
);

