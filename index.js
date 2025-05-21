import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // CORS ni import qilamiz
import usersRouter from './routes/users.js';

const app = express();

// CORS uchun ruxsat (frontend domeningizni shu yerga yozing)
app.use(cors({
  origin: 'https://solo-workout.netlify.app', // frontend manzilingiz
  credentials: true // agar cookie, token yuborilsa kerak bo‘lsa
}));

app.use(express.json());

// MongoDB ulanishi
mongoose.connect('mongodb+srv://Sardor:Dib7TNuFWp3w@cluster0.sh84pqh.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Route
app.use('/users', usersRouter);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
