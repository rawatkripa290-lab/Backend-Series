
require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const gitapi = [
  {
    current_user_url: "https://api.github.com/user",
    authorizations_html_url: "https://github.com/settings/connections/applications{/client_id}",
    authorizations_url: "https://api.github.com/authorizations",
    emojis_url: "https://api.github.com/emojis",
    events_url: "https://api.github.com/events",
    followers_url: "https://api.github.com/user/followers",
    following_url: "https://api.github.com/user/following{/target}",
    gists_url: "https://api.github.com/gists{/gist_id}",
    issues_url: "https://api.github.com/issues",
    notifications_url: "https://api.github.com/notifications",
    rate_limit_url: "https://api.github.com/rate_limit",
    user_url: "https://api.github.com/users/{user}",
    repository_search_url: "https://api.github.com/search/repositories?q={query}"
  }
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/twitter', (req, res) => {
  res.send('kripsotm');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai aur code</h1>');
});

app.get('/github', (req, res) => {
  res.json(gitapi);
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});