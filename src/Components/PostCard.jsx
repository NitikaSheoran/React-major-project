import React from "react";
import service from "../Appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featureImg }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                {featureImg ? (
                    <div className="w-full justify-center mb-4">
                        <img src={service.getFilePreview(featureImg)} alt={title} className="rounded-xl" />
                    </div>
                ) : (
                    <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-xl">
                        <span className="text-gray-600">No Image</span>
                    </div>
                )}
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard