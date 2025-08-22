import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        let isMounted = true; // prevent state update if unmounted

        const fetchPreview = async () => {
            if (featuredImage) {
                try {
                    const preview = await appwriteService.getFileView(featuredImage);
                    const url = typeof preview === "string" ? preview : preview.href;
                    console.log(url)
                    if (isMounted) {
                        setImageUrl(url); // sometimes Appwrite returns an object or URL
                    }
                } catch (err) {
                    console.error('Error fetching image preview', err);
                }
            }
        };

        fetchPreview();

        return () => {
            isMounted = false;};
    }, [featuredImage]);

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                {imageUrl && (
                    <div className="w-full h-52 mb-4 overflow-hidden rounded-xl">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;

