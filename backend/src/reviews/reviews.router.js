// const express = require('express');
// const Reviews = require('./reviews.model');
// const router = express.Router();
// const Products = require("../products/products.model");


// //post a new review
// router.post("/post-review", async (req,res)=>{
//     try {
//         const {comment, rating, productId, userId} = req.body;

//         if(!comment || !rating || !productId || !userId){
//             return res.status(400).send({message: "Failed to post review"});
//         }
//         const existingReview = await Reviews.findOne({productId, userId});
//         if(existingReview){
//             //update Reviews
//             existingReview.comment = comment;
//             existingReview.rating = rating;
//             await existingReview.save();
//         }
//         else{
//             //create new review 
//             const newReview = new Reviews({
//                 comment, rating, productId, userId
//             })
//             await newReview.save();
//         }

//         //calculate the avg rating
//         const reviews = await Reviews.find({productId});
//         if(reviews.length >0){
//             const totalRating = reviews.reduce((acc, review)=> acc+ review.rating, 0);
//             const averageRating = totalRating / reviews.length;
//             const product = await Products.findById(productId);
//             if(product){
//                 product.rating = averageRating;
//                 await product.save({validateBeforeSave: false});
//             } else {
//                 return res.status(404).send({message: 'Product not found'})
//             }
//         }
//      res.status(200).send({message: 'Review processed successfully',
//         review: reviews
//      })
//     } catch (error) {
//         console.error("Error posting review", error);
//         res.status(500).send({message: "Failed to post review"});
//     }
// });

// //total reviews count
// router.get("/total-reviews", async(req,res) =>{
//     try {
//         const totalReviews = await Reviews.countDocuments({});
//         res.status(200).send({totalReviews})
//         } catch (error) {
//         console.error("Error getting total  review", error);
//         res.status(500).send({message: "Failed to get review count"});
//     }
// });

// //get reviews by userId
// router.get("/:userId", async (req, res)=>{
//     const {userId}= req.params;
//     if(!userId){
//         return res.status(400).send({message: "User ID is required"});

//     }
//     try {
//         const reviews = await Reviews.find({userId: userId}).sort({createAt: -1})
//         if(reviews.length === 0){
//             return res.status(404).send({message: "No reviews found"});
//         }
//     } catch (error) {
//         console.error("Error fetching reviews by user", error);
//         res.status(500).send({message: "Failed to fetch reviews by user"});
//     }
//     res.status(200).send(reviews);
// })

// module.exports = router;

const express = require('express');
const Reviews = require('./reviews.model');
const router = express.Router();
const Products = require('../products/products.model');

// POST: Add or Update a Review
router.post("/post-review", async (req, res) => {
    try {
        const { comment, rating, productId, userId } = req.body;

        // Validate required fields
        if (!comment || !rating || !productId || !userId) {
            return res.status(400).send({ message: "All fields are required to post a review." });
        }

        // Check for an existing review by the same user for the same product
        const existingReview = await Reviews.findOne({ productId, userId });
        if (existingReview) {
            // Update the existing review
            existingReview.comment = comment;
            existingReview.rating = rating;
            await existingReview.save();
        } else {
            // Create a new review
            const newReview = new Reviews({ comment, rating, productId, userId });
            await newReview.save();
        }

        // Calculate the average rating for the product
        const reviews = await Reviews.find({ productId });
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = totalRating / reviews.length;

            const product = await Products.findById(productId);
            if (product) {
                product.rating = averageRating;
                await product.save({ validateBeforeSave: false });
            } else {
                return res.status(404).send({ message: "Product not found." });
            }
        }

        res.status(200).send({
            message: "Review processed successfully.",
            reviews,
        });
    } catch (error) {
        console.error("Error posting review:", error);
        res.status(500).send({ message: "Failed to post review." });
    }
});

// GET: Total Reviews Count
router.get("/total-reviews", async (req, res) => {
    try {
        const totalReviews = await Reviews.countDocuments({});
        res.status(200).send({ totalReviews });
    } catch (error) {
        console.error("Error getting total reviews:", error);
        res.status(500).send({ message: "Failed to get total review count." });
    }
});

// GET: Reviews by User ID
router.get("/:userId", async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).send({ message: "User ID is required." });
    }

    try {
        // Find reviews for the specified user, sorted by `createdAt`
        const reviews = await Reviews.find({ userId }).sort({ createdAt: -1 });

        if (reviews.length === 0) {
            return res.status(404).send({ message: "No reviews found for this user." });
        }

        res.status(200).send(reviews);
    } catch (error) {
        console.error("Error fetching reviews by user:", error);
        res.status(500).send({ message: "Failed to fetch reviews by user." });
    }
});

module.exports = router;
