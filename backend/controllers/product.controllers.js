import upload from "../middleware/uploadFile.js"
import { validateMIMEType } from "validate-image-type";
import categoriesData from "../models/categories.model.js"
import plantData from "../models/plant.model.js"
import { validationResult } from "express-validator";
import { categoriesValidation, plantValidation } from "../helpers/productValidation.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//catogories 
export const categories = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Error during file upload:', err)
                return res.status(500).json({ message: 'Error uploading file. Please try again later.' })
            }
            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded.' });
            }
            const result = await validateMIMEType(req.file.path, {
                allowMimeTypes: ['image/jpeg', 'image/jpg', 'image/avif', 'image/gif', 'image/png']
            });

            if (!result.ok) {
                return res.status(400).json({ error: 'Invalid file type.' });
            }

            const imageFileName = req.file.filename
            // Run validation rules
            await Promise.all(
                categoriesValidation.map((categoriesValidation) => categoriesValidation.run(req))
            );
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { categoryname } = req.body
            const savedata = await categoriesData.create({ categoryname, image: imageFileName })
            return res
                .status(201)
                .json({
                    message: "Create Categories Successfully...",
                    data: savedata
                })
        })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const viewCategories = async (req, res) => {
    try {
        const viewdata = await categoriesData.find().sort({ categoryname: 1 });

        return res
            .status(200)
            .json({
                message: "View Categories",
                data: viewdata
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const viewSingleCategories = async (req, res) => {
    const { id } = req.params
    try {
        const viewdata = await categoriesData.findById(id)
        return res
            .status(200)
            .json({
                message: "View Categories",
                data: viewdata
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const updateCategory = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Error during file upload:', err);
                return res
                    .status(500)
                    .json({
                        message: 'Error uploading file. Please try again later.'
                    });
            }

            const { id } = req.params;
            const { categoryname } = req.body;

            // Find the category by ID
            const category = await categoriesData.findById(id)
            if (!category) {
                return res
                    .status(404)
                    .json({
                        message: 'Category not found'
                    });
            }

            let imageFileName = category.image; // Keep existing image if no new file uploaded

            if (req.file) {
                const result = await validateMIMEType(req.file.path, {
                    allowMimeTypes: ['image/jpeg', 'image/jpg', 'image/avif', 'image/gif', 'image/png'],
                });

                if (!result.ok) {
                    return res.status(400).json({ error: 'Invalid file type.' });
                }

                // Save new image file name
                imageFileName = req.file.filename;

                // Delete old image file if a new image was uploaded
                const oldImagePath = path.join(__dirname, '../public/upload', category.image);
                // Check if the file exists before trying to delete it
                if (fs.existsSync(oldImagePath)) {
                    fs.unlink(oldImagePath, (err) => {
                        if (err) {
                            console.error('Error deleting old image:', err);
                        } else {
                            console.log('Old image deleted successfully:', category.image);
                        }
                    });
                } else {
                    console.log('Old image not found at path:', oldImagePath);
                }
            }

            // Run validation rules
            await Promise.all(
                categoriesValidation.map((validation) => validation.run(req))
            );

            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // Update the category
            category.categoryname = categoryname;
            category.image = imageFileName;
            await category.save();

            return res.status(200).json({
                message: "Category updated successfully",
                data: category
            });
        });
    } catch (error) {
        console.error('Error updating category:', error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
//plant
export const plant = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Error during file upload:', err)
                return res.status(500).json({ message: 'Error uploading file. Please try again later.' })
            }

            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded.' });
            }
            const result = await validateMIMEType(req.file.path, {
                allowMimeTypes: ['image/jpeg', 'image/jpg', 'image/avif', 'image/gif', 'image/png']
            });

            if (!result.ok) {
                return res.status(400).json({ error: 'Invalid file type.' });
            }
            const imageFileName = req.file.filename
            // Run validation rules
            await Promise.all(
                plantValidation.map((plantValidation) => plantValidation.run(req))
            );
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { plantname, desc, price, category, qty } = req.body
            const categoriesId = await categoriesData.findById(category)
            const savedata = await plantData.create({
                plantname, desc,
                image: imageFileName,
                price,
                category: categoriesId,
                qty
            })
            return res
                .status(201)
                .json({
                    message: "Plants items Create Successfully...",
                    data: savedata
                })
        })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const updatePlant = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Error during file upload:', err);
                return res.status(500).json({ message: 'Error uploading file. Please try again later.' });
            }

            const { id } = req.params;
            const { plantname, desc, price, category, qty } = req.body;

            // Find the plant by ID
            const plant = await plantData.findById(id);
            if (!plant) {
                return res.status(404).json({ message: 'Plant not found' });
            }

            let imageFileName = plant.image; // Keep existing image if no new file uploaded

            if (req.file) {
                const result = await validateMIMEType(req.file.path, {
                    allowMimeTypes: ['image/jpeg', 'image/jpg', 'image/avif', 'image/gif', 'image/png'],
                });

                if (!result.ok) {
                    return res.status(400).json({ error: 'Invalid file type.' });
                }

                // Save new image file name
                imageFileName = req.file.filename;

                // Delete old image file if a new image was uploaded
                const oldImagePath = path.join(__dirname, '../public/upload', plant.image);
                // Check if the file exists before trying to delete it
                if (fs.existsSync(oldImagePath)) {
                    fs.unlink(oldImagePath, (err) => {
                        if (err) {
                            console.error('Error deleting old image:', err);
                        } else {
                            console.log('Old image deleted successfully:', plant.image);
                        }
                    });
                } else {
                    console.log('Old image not found at path:', oldImagePath);
                }
            }

            // Run validation rules
            await Promise.all(
                plantValidation.map((validation) => validation.run(req))
            );

            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // Update the plant
            plant.plantname = plantname;
            plant.desc = desc;
            plant.image = imageFileName;
            plant.price = price;
            plant.category = await categoriesData.findById(category);
            plant.qty = qty;
            await plant.save();

            return res.status(200).json({
                message: "Plant updated successfully",
                data: plant
            });
        });
    } catch (error) {
        console.error('Error updating plant:', error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
export const viewPlant = async (req, res) => {
    try {
        const viewdata = await plantData.find().populate('category');
        return res
            .status(200)
            .json({
                message: "View Plant",
                data: viewdata
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const viewnewPlant = async (req, res) => {
    try {
        const viewdata = await plantData
            .find()
            .populate('category')
            .sort({ _id: -1 })
            .limit(6); // Limit the number of products to 4
        return res
            .status(200)
            .json({
                message: "View Plant",
                data: viewdata
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const viewSinglePlant = async (req, res) => {
    const { id } = req.params
    try {
        const viewdata = await plantData.findById(id).populate('category');
        return res
            .status(200)
            .json({
                message: "View Single Plant",
                data: viewdata
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const getPlantsByStockStatus = async (req, res) => {
    try {
        const plants = await plantData.find().populate('category');

        const filteredPlants = plants.map(plant => {
            let stockStatus = 'Available';
            if (plant.qty === 0) {
                stockStatus = 'Not Available';
            } else if (plant.qty > 0 && plant.qty <= 10) {
                stockStatus = 'Low Stock';
            }
            return { ...plant.toObject(), stockStatus };
        });

        return res
            .status(200)
            .json({
                message: "View Data",
                data: filteredPlants
            });
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
};