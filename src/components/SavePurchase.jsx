import { useState } from 'react';
import Button from './Button';

export default function SavePurchase({ items, customerName }) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSavePurchase = async () => {
    if (!customerName || items.length === 0) {
      setMessage('Por favor completa todos los campos y agrega productos');
      return;
    }

    setIsLoading(true);
    setMessage('');
    
    try {
      const total = items.reduce((sum, item) => sum + item.price, 0);
      
      const response = await fetch('https://front2.nsideas.cl/api', {
        method: 'POST',
        body: JSON.stringify({
          customerName,
          total,
          items
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (response.ok) {
        setMessage('Compra guardada exitosamente!');
        localStorage.removeItem('shoppingCart');
      } else {
        throw new Error('Error al guardar');
      }
    } catch (error) {
      setMessage('Error al guardar la compra. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <Button 
        onClick={handleSavePurchase}
        disabled={isLoading}
        className={isLoading ? 'opacity-50' : ''}
      >
        {isLoading ? 'Guardando...' : 'Guardar compra'}
      </Button>
      {message && <p className={`mt-2 ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}
    </div>
  );
}