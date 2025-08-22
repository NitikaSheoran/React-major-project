import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (userData) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        }
    }, [userData]);

    // if (!userData) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     );
    // }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-xl text-gray-600">No posts available</h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
