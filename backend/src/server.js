import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config";
import rezeptRoutes from './routes/rezeptRoutes.js';


const server = express();
server.use(cors());
server.use(express.json());
server.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
const mongoDB = process.env.MONGODB_URL;



(async () => {
    try {
        await mongoose.connect(mongoDB, {
          
        });
        console.log('Die Verbindung wurde hergestellt');
    } catch (error) {
        console.error('Die Verbindung konnte nicht hergestellt werden:', error);
    }
})();

server.use('/api/rezepte', rezeptRoutes);

server.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});

