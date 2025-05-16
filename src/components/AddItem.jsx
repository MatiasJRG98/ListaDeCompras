import { useState } from 'react';
import Button from './Button';

export default function AddItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    
    onAddItem({
      id: Date.now(),
      name,
      price: parseFloat(price)
    });
    
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <div>
        <label className="block mb-1">Nombre del producto</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Precio</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <Button type="submit">Agregar producto</Button>
    </form>
  );
}