import express from "express";
import { json } from "express";
import healthRouter from "./routes/health.js";
import loopyChatSampleRouter from "./routes/loopy-chat.sample.js";

const app = express();

app.disable("x-powered-by");
app.use(json({ limit: "1mb" }));

app.use("/health", healthRouter);
app.use("/api/loopy-chat-sample", loopyChatSampleRouter);

app.use((req, res) => {
  res.status(404).json({ ok: false, error: "Not found" });
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
