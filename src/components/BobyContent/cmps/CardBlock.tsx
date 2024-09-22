import { title } from 'process';
import React, { useState } from 'react'
import Card from './Card';


const CardBlock = () => {

    return (
        <section className='card-block-wrapper'>
            <h3>Learn more about our abilities</h3>
            <div className='card-block'>
                <Card title={'Manager'} description={'Description'} />
                <Card title={'Manager'} description={'Description'} />
                <Card title={'Manager'} description={'Description'} />
                <Card title={'Manager'} description={'Description'} />
                <Card title={'Manager'} description={'Description'} />
            </div>
            
        </section>

    );
}

export default CardBlock