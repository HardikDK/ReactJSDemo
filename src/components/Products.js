// import productsData from '../products.json';

// import * as React from 'react';
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

// const itemData = [
//   {
//     img: '/img/1.png',
//     title: 'T-Shirt',
//     price: '99$',
//   },
//   {
//     img: '/img/2.png',
//     title: 'Phone',
//     price: '199$',
//   },
//   {
//     img: '/img/3.png',
//     title: 'smartPhone',
//     price: '149$',
//   },
//   {
//     img: '/img/4.png',
//     title: 'Mobile',
//     price: '199$',
//   },
// ];

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Products() {
	const [cart, setCart] = useState(0);
	function updateCart() {
		console.log(cart);
		setCart(cart+1);
	}
	// console.log(cart);
	return (
		<div className="Products">
		    {/*<p className="cart">{cart}</p>*/}
		    <IconButton aria-label="cart">
		      <StyledBadge badgeContent={cart} color="secondary">
		        <ShoppingCartIcon />
		      </StyledBadge>
		    </IconButton>
		    <ImageList sx={{ width: 100+'%', height: 100+'%', display: 'grid' }} variant="woven" cols={4}>
		      {itemData.map((item) => (
		        <ImageListItem key={item.img} style={{ height: '70%' }}>
		          <img
		            srcSet={`${item.img}`}
		            src={`${item.img}`}
		            alt={item.title}
		            loading="lazy"
		          />
		          <ImageListItemBar
		            title={item.title}
		            subtitle={<span>{item.author}</span>}
		            position="below"
		          />
			      <Stack>
				      <Button variant="text" onClick={updateCart}>Add to Cart</Button>
				  </Stack>
		        </ImageListItem>
		      ))}
		    </ImageList>
	    </div>
	);
}

// function Products() {
// 	return(
// 		<div className="Products">
// 			<h1>Products</h1>
// 		</div>
// 	);
// }

// export default Products;