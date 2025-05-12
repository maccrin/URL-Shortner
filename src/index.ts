import app from "./app";
const port=3001;
app.listen(port, () => {
    console.log(`Application is running on ${process.env.PORT ?? port}`);
  });