const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ecomdb")
        console.log("Database connected");

        //for product list
        const fetched_data = mongoose.connection.db.collection("products");
        const data = await fetched_data.find({}).toArray();

        global.product_list = data;

        //for product category
        const fetched_data2 = mongoose.connection.db.collection("product_category");
        const catdata = await fetched_data2.find({}).toArray();
        global.product_category = catdata;


    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDB;