import React, { useState } from 'react';
import { BlogData } from './BlogData';
import BlogCard from './BlogCard';
import './Blog.css'
const Blog = () => {

    const [data, setData] = useState(BlogData);
    return (
        <>
            {/* <div className=''><img src={require('../../assets/blog-hero.jpg')} alt='' style={{ width: '100%',height:'2rem' }} /> </div> */}
            <div className='common-heading hero-image' style={{ fontWeight: '900', marginTop: '3rem', fontSize: '4rem', color: 'var(--primarygreen)' }}>Blog </div>
            <div className='max-width'>


                <div className='band'>{
                    data.map((curElem) => {
                        return <BlogCard key={curElem.id} {...curElem} />
                        //here the spread operator is use to pass the the properties of the questions api
                    })
                }
                </div>




            </div>
        </>
    )
}

export default Blog;