
import { Rezept } from "../models/Rezeptmodel.js";

export const getRezept = async (req, res) => {
    try {
        const items = await Rezept.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRezept = async (req, res) => {
    const item = {
        title: req.body.title,
        zutaten: req.body.zutaten,
        zubereitung: req.body.zubereitung,
        kategorie: req.body.kategorie,
      
    };
    const newItem = new Rezept(item);
    try {
        const newRezept = await newItem.save();
        res.status(201).json(newRezept);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const getRezeptById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Rezept.findById(id);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteRezept = async (req, res) => {
    const { id } = req.params;
    try {
        await Rezept.findByIdAndDelete(id);
        res.json({ message: 'Item deleted successfully' });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateRezept = async (req, res) => {
    const { id } = req.params;
    const { title, zutaten, zubereitung } = req.body;
    try {
        const updatedRezept = await Rezept.findByIdAndUpdate(id, { title, zutaten, zubereitung }, { new: true });
        res.json(updatedRezept);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

