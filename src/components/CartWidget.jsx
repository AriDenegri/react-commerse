import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '/src/context/CartContext.js';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-dot': {
    backgroundColor: '#ffd500',
  },
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#ffd500',
    color: 'black',
    fontWeight: 'bold'
  },
}));

export default function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.length} className='pepe'>
        <ShoppingCartIcon sx={{ color: 'white' }} />
      </StyledBadge>
    </IconButton>
  );
}
