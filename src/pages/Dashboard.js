import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data';
import Nav from "../components/Nav"

export default function DashBoard() {
    return (
        <>
            <Nav />
            <section>
                <h2>Portfolio</h2>
                {
                    Data.map((stock) => {
                        const { name, symbol } = stock;

                        return (
                            <Link key={symbol} to={`/stocks/${symbol}`}>
                                <h3>{name}</h3>
                            </Link>
                        );
                    })
                }
            </section>
        </>
    )
}