const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const uri = "mongodb+srv://SirBrandolf:8fCT2SReCdrQNaS9@cluster0.lftggle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function main() {

    if (!client.isConnected()) {
        await client.connect();
    }

    return client.db("breadBankData");
     
}

app.post('/createlisting', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("scholarshipData").insertOne(req.body);
        res.status(201).json({ id: result.insertedId });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.post('/findlistings', async (req, res) => {
    const { age, ethnicity, gender } = req.body;
    try {
        const db = await connectToDatabase();
        const cursor = db.collection("scholarshipData").find(
            {
                minAge: { $lte: age },
                maxAge: { $gte: age },
                $or: [{ targetGender: gender }, { targetGender: "Gender neutral" }],
                targetEthnicity: ethnicity
            }
        ).sort({ last_review: -1 }).limit(Number.MAX_SAFE_INTEGER);
        const results = await cursor.toArray();
        res.json(results);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


