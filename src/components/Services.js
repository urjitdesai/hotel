import React, { Component } from 'react';
import Title from './Title'
import {FaCocktail,FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
class Services extends Component {
    state = { 
        services:[
        {
            icon: <FaCocktail></FaCocktail>,
            title: "free cocktails",
            info: 'Free vodka, whisky, rum and gin from 12 pm to 7 pm'
        },
        {
            icon: <FaHiking></FaHiking>,
            title: "free cocktails",
            info: 'Free vodka, whisky, rum and gin from 12 pm to 7 pm'
        },
        {
            icon: <FaShuttleVan></FaShuttleVan>,
            title: "free cocktails",
            info: 'Free vodka, whisky, rum and gin from 12 pm to 7 pm'
        },
        {
            icon: <FaBeer></FaBeer>,
            title: "free cocktails",
            info: 'Free vodka, whisky, rum and gin from 12 pm to 7 pm'
        }
    ]
     }
    render() { 
        return ( 
            <section className='services'>
                <Title title='Services'></Title>
                <div className='services-center'>
                    {this.state.services.map( (item, index)=> {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                    <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
         );
    }
}
 
export default Services;