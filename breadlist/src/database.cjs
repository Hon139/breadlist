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
                username: "Abdul Ahmed",
                gender: "Male",
                ethnicity: "Asian",
                age: 30,
                email: "abdul.ahmed123@yahoo.com",
                password: "123456789"
            }
        );
        */

        // Makes a Listing
        /*
        await createListing(client,
            {
                monetaryAmount: 3500,
                sponsorName: "Toronto Asian Association",
                minAge: 21,
                maxAge: 35,
                targetEthnicity: ["Asian"],
                targetGender: ["Gender neutral"],
                title: "Asian Incubator Fund",
                content: "The Toronto Asian Association is offering $3,500 to promising Asian entrepreneurs in "
                    + "university. This fund hopes to support fellow Asians in their efforts to build new  "
                    + "businesses by providing financial assistance for their goals. "
                    + "By investing in our own, the foundation encourages community growth, "
                    + "fostering a stronger presence in society as a minority group. Eligible applicants are invited to apply and take a "
                    + "step towards furthering their business ideas."
            }
        );
        */

        // Searches and Filters Listings
        /*
        await findListings(client,
            {
                age: 17,
                ethnicity: "North American",
                gender: "Male"
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
    ethnicity = "",
    gender = "",
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {
    const cursor = client.db("breadBankData").collection("scholarshipData").find(
                            {
                                minAge: { $lte: age },
                                maxAge: { $gte: age },
                                $or: [ { targetGender: gender }, { targetGender: "Gender neutral" } ],
                                targetEthnicity: ethnicity
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
            console.log(`   Applicable Ethnicities: ${result.targetEthnicity}`);
            console.log(`   Applicable Gender: ${result.targetGender}`);
            console.log(`   Content: ${result.content}`);
        });
    } else {
        console.log(`No scholarships were found with those specifications.`);
    }
}


