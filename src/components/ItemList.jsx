import Button from './Button';

export default function ItemList({ items, onRemoveItem }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Lista de productos</h3>
      {items.length === 0 ? (
        <p>No hay productos agregados</p>
      ) : (
        <ul className="border rounded p-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b py-2">
              <span>
                {item.name} - ${item.price.toFixed(2)}
              </span>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-sm p-1"
                onClick={() => onRemoveItem(item.id)}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}