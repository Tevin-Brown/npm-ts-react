import  React from 'react';
import './styles/card.css'

export interface CardProps {
	title:string;
	body:string;
	footer?:string;
}

export default class Card extends React.Component<CardProps,{}>{
	render(){
		return(
			<div className='card'>
				<div className='title'>{this.props.title}</div>
				<div className='body'>{this.props.body}</div>
				{this.props.footer && <div className='footer'>{this.props.footer}</div>}
			</div>
		)
	}
}