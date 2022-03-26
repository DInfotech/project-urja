import React from 'react';

const BlogCard = ({ blogheading, blogdata, blogimg, date, postby }) => {
    return (
        <>
            <div className='blog-card'>
                <img src={blogimg} alt='' className='blog-img'/>
                <div className='article'>
                <div className='flex-horizontal pd1'>
                    <div><p>Post By { postby}</p></div>
                    <div>{date}</div>
                </div>
                <div className='title'>{blogheading}</div>
                <div>{blogdata}</div>
                <button>Read More</button>
            </div>
            </div>
        </>
    )
}

export default BlogCard;