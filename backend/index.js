const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.donur6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffeCollection = client.db("coffeDB").collection("coffes");

    // find all coffes from database to server
    app.get("/coffes", async (req, res) => {
      const result = await coffeCollection.find().toArray();
      res.send(result);
    });

    // find single coffe from the database
    app.get("/coffes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.findOne(query);
      res.send(result);
    });

    // add cofee to database from the server
    app.post("/coffes", async (req, res) => {
      const newCoffe = req.body;
      const result = await coffeCollection.insertOne(newCoffe);
      res.send(result);
    });

    // update coffe
    app.put("/coffes/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffe = req.body;

      // const updatedDoc = {
      //     $set: {
      //         name: updatedCoffee.name,
      //         supplier: updatedCoffee.supplier
      //     }
      // }

      const updateDoc = {
        $set: updateCoffe,
      };

      const result = await coffeCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // delete coffe from the database
    app.delete("/coffes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Coffe Server is Running");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
