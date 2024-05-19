
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
                ethnicity: "Latin, Central, South America",
                age: 18,
                email: "johndoe2005@aol.com",
                password: "123password"
            }
        );
        */

        // Makes a Listing
        /*
        await createListing(client,
            {
                monetaryAmount: 6000,
                sponsorName: "Ontario Civil Rights Foundation",
                minAge: 21,
                maxAge: 35,
                targetEthnicity: ["North American"],
                targetGender: ["Transgender"],
                title: "LGBTQ+ Empowerment Grant",
                content: "The Ontario Civil Rights Foundation proudly offers the LGBTQ+ Empowerment Grant, "
                    + "awarding $6,000 to LGBTQ+ individuals pursuing higher education. "
                    + "This grant aims to support and uplift the community by providing financial assistance for tuition "
                    + "and related expenses. By alleviating financial barriers, the foundation encourages academic and personal growth, "
                    + "fostering a more inclusive and empowered future. Eligible applicants are invited to apply and take a "
                    + "significant step toward achieving their educational aspirations."
            }
        );
        */

        // Searches and Filters Listings
        /*
        await findListings(client,
            {
                age: 19,
                ethnicity: "Latin, Central, South America",
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


