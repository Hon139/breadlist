const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://SirBrandolf:8fCT2SReCdrQNaS9@cluster0.lftggle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        // Makes a User
        /*
        await createUser(client,
            {
                username: "John Doe",
                gender: "Male",
                race: "Hispanic",
                heritage: "Christian",
                age: 18,
                email: "johndoe2005@aol.com",
                password: "123password"
            }
        );
        */

        // Makes a Listing
        
        await createListing(client,
            {
                monetaryAmount: 500,
                sponsorName: "Richmond Hill HOA",
                minAge: 0,
                maxAge: 25,
                targetRace: ["All"],
                targetGender: ["All"],
                targetHeritage: ["All"],
                title: "Richmond Hill Community Education Fund",
                content: "The Richmond Hill HOA proudly presents a community-sponsored "
                    + "education fund for residents aged 0 to 25. This $500 grant supports educational pursuits, "
                    + "from early childhood programs to college tuition. Designed to foster growth and development, the "
                    + "fund aims to make learning accessible and affordable. Eligible residents can apply to receive "
                    + "financial assistance, empowering our youth and young adults to achieve their academic "
                    + "goals and build a brighter future."
            }
        );
        

        // Searches and Filters Listings
        /*
        await findListings(client,
            {
                age: 19,
                race: "Hispanic",
                gender: "Male",
                heritage: "Christian"
            }
        );
        */
        

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// creates a new user
async function createUser(client, newUser){
    const result = await client.db("breadBankData").collection("userData").insertOne(newUser);
    console.log(`New user created with the following id: ${result.insertedId}`);
}

// creates a new listing
async function createListing(client, newListing){
    const result = await client.db("breadBankData").collection("scholarshipData").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

// filters listing

async function findListings(client, {
    age = 0,
    race = "",
    gender = "",
    heritage = "",
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {
    const cursor = client.db("breadBankData").collection("scholarshipData").find(
                            {
                                minAge: { $lte: age },
                                maxAge: { $gte: age },
                                $or: [ { targetRace: race }, { targetRace: "All" } ],
                                $or: [ { targetGender: gender }, { targetGender: "All" } ],
                                $or: [ { targetHeritage: heritage }, { targetHeritage: "All" } ]
                            }
                            ).sort({ last_review: -1 })
                            .limit(maximumNumberOfResults);

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log(`Found the following scholarship(s):`);
        results.forEach((result, i) => {
            console.log();
            console.log(`${i + 1}. Title: ${result.title}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   Age Range: ${result.minAge} - ${result.maxAge}`);
            console.log(`   Applicable Race(s): ${result.targetRace}`);
            console.log(`   Applicable Gender: ${result.targetGender}`);
            console.log(`   Applicable Heritage: ${result.targetHeritage}`);
            console.log(`   Content: ${result.content}`);
        });
    } else {
        console.log(`No scholarships were found with those specifications.`);
    }
}


