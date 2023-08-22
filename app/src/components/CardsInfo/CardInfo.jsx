import React from 'react';
import {  } from './CardInfoStyle.jsx';

export const CardInfo = ({icon, title, description}) => {
  return (
    <>
        <section>
            <article>
                <article>{icon}</article>
                <article>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
            </article>
        </section>
    </>
  )
}
