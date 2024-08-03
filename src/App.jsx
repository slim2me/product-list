import { useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
     {
            id: 1,
            name: 'Laptop',
            description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
            price: 999,
        },
        {
            id: 2,
            name: 'Smartphone',
            description: 'Latest model smartphone with a 6.5-inch display and 128GB storage.',
            price: 499,
        },
        
  ])
  const [isModalOpen, setModalOpen] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
  })
  const handleAddClick = () => {
    //Open the modal when the "Add" button is clicked.
    setModalOpen(prev => !prev)
  }

  const closeModal = () => {
    //Close the modal when the "Cancel" button or the overlay are clicked.
    setNewProduct({ name: '', price: '', description: '' });
    setModalOpen(prev => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    const productWithId = { ...newProduct, id: Date.now() };
    setProducts(prev => [productWithId, ...prev]);
    setNewProduct({ name: '', price: '', description: '' });
    closeModal();
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Product List</h1>
        <button className="add-button" onClick={handleAddClick}>+</button>
      </div>
      <ul className='product-list'>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-info">
              <span>{product.name}</span>
              <p>{product.description}</p>
            </div>
            <div className="price">${product.price}</div>
          </li>
        ))}
      </ul>
      {
        isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Add Product</h2>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Name'
                autoComplete='off'
                onChange={handleChange}
                value={newProduct.name}
              />
              <input
                type="number"
                name="price"
                id="price"
                placeholder='Price'
                autoComplete='off'
                onChange={handleChange}
                value={newProduct.price}
              />
              <textarea
                name="description"
                id="description"
                autoComplete='off'
                placeholder='Description'
                onChange={handleChange}
                value={newProduct.description}
              ></textarea>

              <div className="modal-buttons">
                <button className="cancel-button" onClick={closeModal}>Cancel</button>
                <button className="save-button" onClick={handleAddProduct}>Save</button>
              </div>
            </div>
          </div>
        )
      }

    </div>
  );
};

export default App;