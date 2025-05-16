export default function Summary({ items, customerName, setCustomerName }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Resumen de compra</h2>
      <div>
        <label className="block mb-1">Nombre del cliente</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="border rounded p-4">
        <h3 className="font-semibold mb-2">Productos:</h3>
        <ul className="mb-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t pt-2 font-bold flex justify-between">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}