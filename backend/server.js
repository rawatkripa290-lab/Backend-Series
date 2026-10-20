import express from 'express'
const app = express();
app.use(express.static('dist'));
app.get('/',(req,res)=>{
  res.send('Server is ready');
})
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why do programmers prefer dark mode?",
      punchline: "Because light attracts bugs!"
    },
    {
      id: 2,
      setup: "Why did the developer go broke?",
      punchline: "Because he used up all his cache!"
    },
    {
      id: 3,
      setup: "Why do Java developers wear glasses?",
      punchline: "Because they don't C#!"
    },
    {
      id: 4,
      setup: "What is a programmer's favorite place to hang out?",
      punchline: "The Foo Bar!"
    },
    {
      id: 5,
      setup: "Why was the JavaScript developer sad?",
      punchline: "Because he didn't know how to null his feelings!"
    }
  ];
  res.send(jokes)
});
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`Serve at http://localhost:${port}`)
})