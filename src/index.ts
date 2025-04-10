import app from "./app.ts";
const port=3000;
app.listen(port, () => {
    console.log(`Application is running on ${process.env.PORT ?? port}`);
  });