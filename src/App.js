
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Products from './Componets/Products/Products';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function App() {
 const [products, setProducts]=useState([]);
 const [cart, setCart]=useState([])

 const [modalIsOpen, setIsOpen] = useState(false);
   
  useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])

    const addToCart=product=>{
      setCart([...cart,product]);
    }

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div>
     <Header cartButton={openModal} cartCount={cart}></Header>
     <Products 
     products={products}
     cartProduct={addToCart}
     ></Products>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {
          cart.map(pd=> <h2 key={pd.id}>{pd.name}</h2> )
        
        }
        </Modal>
    </div>

    
  );
}

export default App;
