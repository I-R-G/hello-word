import { MongoClient } from "mongodb";

// /api/new-meetup

//setting only POST request to /api/new-meetup API

//request and response objects respectively
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //establish a connection with db
    const client = await MongoClient.connect(
      "mongodb+srv://testuser:nWW7KuXK2TFzSnfp@cluster0.lv82h.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result)
    //close the connection with db
    client.close()

    res.status(201).json({message: "Meetup inserted"})
  }
}

export default handler;
