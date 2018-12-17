import express from "express";
import { addData, fetchData, delData } from "./db/db";

const PORT = 3000;

const app = express();

app.get("/", (request, response) => {
    response.send("Hello World. See `/help.txt` for details.");
});

app.use(express.static('public'));

app.get("/all", (request, response) => {
    (async () => {
        let words = await fetchData();
        console.log("Fetched");
        response.send(words);
    })();
});

app.get("/add/:name/:id?", (request, response) => {
    const data = request.params;
    const name = data.name;
    const id = Number(data.id);

    addData({ word: name, id: isNaN(id) ? 0 : id });
    response.send({ msg: "Added successfully" });
});

app.get("/del/:name", (request, response) => {
    const data = request.params;
    const name = data.name;
    delData({ word: name });
    response.send({ msg: "Deleted successfully" });
});

app.get("/delid/:id", (request, response) => {
    const data = request.params;
    const id = data.id;
    delData({ id: id });
    response.send({ msg: "Deleted successfully" });
});

app.listen(PORT);
