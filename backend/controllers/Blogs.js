import upload from "../middleware/uploadFile.js"
import { validateMIMEType } from "validate-image-type";
import Blog from "../models/blogs.models.js"
import { validationResult } from "express-validator";
import { blogValidation } from "../helpers/blogvalidation.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//blog
export const blog = async (req, res) => {
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
                blogValidation.map((blogValidation) => blogValidation.run(req))
            );
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const { blogname, description } = req.body
            const savedata = await Blog.create({
                blogname, description, image: imageFileName
            })
            return res
                .status(201)
                .json({
                    message: "Blog is Created Successfully...",
                    data: savedata
                })
        })
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({
                message: "Internal Server Error...",
                data: error.message
            })
    }
}
export const updateBlog = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Error during file upload:', err);
                return res.status(500).json({ message: 'Error uploading file. Please try again later.' });
            }

            const { id } = req.params;
            const { blogname, description } = req.body;

            const blog = await Blog.findById(id);
            if (!blog) {
                return res.status(404).json({ message: 'Blog is not found' });
            }

            let imageFileName = blog.image; // Keep existing image if no new file uploaded

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
                const oldImagePath = path.join(__dirname, '../public/upload', blog.image);
                // Check if the file exists before trying to delete it
                if (fs.existsSync(oldImagePath)) {
                    fs.unlink(oldImagePath, (err) => {
                        if (err) {
                            console.error('Error deleting old image:', err);
                        } else {
                            console.log('Old image deleted successfully:', blog.image);
                        }
                    });
                } else {
                    console.log('Old image not found at path:', oldImagePath);
                }
            }

            // Run validation rules
            await Promise.all(
                blogValidation.map((blogValidation) => blogValidation.run(req))
            );

            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // Update the plant
            blog.blogname = blogname;
            blog.description = description;
            blog.image = imageFileName;
            await blog.save();

            return res.status(200).json({
                message: "Blog is updated successfully",
                data: blog
            });
        });
    } catch (error) {
        console.error('Error updating plant:', error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
export const viewBlog = async (req, res) => {
    try {
        const viewdata = await Blog.find().sort({blogname:1})
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
export const viewSingleBlog = async (req, res) => {
    const { id } = req.params
    try {
        const viewdata = await Blog.findById(id)
        return res
            .status(200)
            .json({
                message: "View Blogs Plant",
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