import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'; //Link that will redirect the user to a single post page

export const PostsList = () => {
    const posts = useSelector(state => state.posts);
    const renderedPosts = posts.map(post=>(
        <article className="post-excerpt">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <Link to={`/posts/${post.id}`} className="buton muted-button">
                View Post
            </Link>
        </article>
    ))
    return(
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}