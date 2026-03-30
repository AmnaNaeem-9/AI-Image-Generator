const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Replicate = require("replicate");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Replicate
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Generate Image Route (with fallback)
app.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt || prompt.trim() === "") {
            return res.status(400).json({ error: "Prompt is required" });
        }

        try {
            //  Try real AI (Replicate)
            const output = await replicate.run(
                "bytedance/seedream-4",
                {
                    input: {
                        prompt: prompt,
                        aspect_ratio: "4:3",
                    },
                }
            );

            console.log("Replicate Output:", output);

            const imageUrl = output[0];

            return res.json({ image: imageUrl });

        } catch (apiError) {
            console.log("⚠️ API failed, using fallback image");

            //  Fallback (always works)
            const fallbackImage = `https://via.placeholder.com/512?text=${encodeURIComponent(prompt)}`;

            return res.json({ image: fallbackImage });
        }

    } catch (error) {
        console.error("SERVER ERROR:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});