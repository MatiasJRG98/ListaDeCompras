import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('shoppingCart');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Lista de Compras</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} onRemoveItem={handleRemoveItem} />
      {items.length > 0 && (
        <Link to="/checkout">
          <Button className="w-full mt-4">Ver resumen</Button>
        </Link>
      )}
    </div>
  );
}