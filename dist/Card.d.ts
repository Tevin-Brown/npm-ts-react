import React from 'react';
import './styles/card.css';
export interface CardProps {
    title: string;
    body: string;
    footer?: string;
}
export default class Card extends React.Component<CardProps, {}> {
    render(): JSX.Element;
}
