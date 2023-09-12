const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  const slackName = req.query.slack_name || "Afolabi Abigeal";
  const track = req.query.track || "backend";
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const utcTime = currentDate.toISOString();

  // Construct dynamic GitHub URLs based on the file and repository
  const githubUsername = "Arbythecoder"; // GitHub username
  const githubRepo = "backend-task"; // repository name
  const githubFilePath = "HNGX/backend-task.ext"; // Corrected path

  // Fixed variable names and template literals
  const githubFileUrl = `https://github.com/${githubUsername}/${githubRepo}/blob/main/${githubFilePath}`;
  const githubRepoUrl = `https://github.com/${githubUsername}/${githubRepo}`;
  const statusCode = 200; // Corrected variable name

  // Construct the JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: statusCode, // Corrected variable name
  };

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
