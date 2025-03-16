import app from "./app.ts";

app.listen( () => {
    console.log(`Application is running on ${process.env.PORT ?? 3000}`);
  });