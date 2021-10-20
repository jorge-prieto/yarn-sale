import React from 'react';
import ProductInfo from '../../components/product-info/ProductInfo';
import Close from '../../assets/img/icon_close.png'
import '../styles/ProductDetail.scss';

export const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={Close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}