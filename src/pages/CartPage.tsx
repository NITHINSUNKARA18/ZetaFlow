import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Immediately redirect to contact page when cart page is accessed
    navigate('/contact');
  }, [navigate]);

  return null; // This component won't render since it redirects immediately
};

export default CartPage;