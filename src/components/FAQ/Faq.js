import React, { useState } from 'react';
import { FaqData } from './FaqData';
import FaqContent from './FaqContent';
import './Faq.css';


const Faq = () => {
    const [data, setData] = useState(FaqData);
    return (
        <>
            <section className="main-div">
                <h5 className='center-item'>FAQs</h5>
                <h1 className='common-heading'>Frequently Asked Questions </h1>
                <div className='flex-horizontal'>
                    <div style={{ width: '50%' }}><img src={require('../../assets/questions.png')} alt='' style={{ width: '100%' }} /></div>
                    <div style={{ width: '48%' }}>{
                        data.map((curElem) => {
                            return <FaqContent key={curElem.id} {...curElem} />
                            //here the spread operator is use to pass the the properties of the questions api
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq;