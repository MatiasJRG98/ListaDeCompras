import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Summary from '../components/Summary';
import SavePurchase from '../components/SavePurchase';

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    const savedItems = localStorage.getItem('shoppingCart');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Link to="/" className="text-blue-600 hover:underline block mb-4">
        &larr; Volver a la lista
      </Link>
      <Summary 
        items={items} 
        customerName={customerName}
        setCustomerName={setCustomerName}
      />
      <SavePurchase items={items} customerName={customerName} />
    </div>
  );
}