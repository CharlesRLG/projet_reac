import '../components/productslist.css'

import cv1 from '../assets/img/cv_1.png'
import cv2 from '../assets/img/cv_2.png'
import cv3 from '../assets/img/cv_3.png'
import cv4 from '../assets/img/cv_4.png'
import cv5 from '../assets/img/cv_5.jpg'
import cv6 from '../assets/img/cv_6.jpg'
import cv7 from '../assets/img/cv_7.jpg'
import cv8 from '../assets/img/cv_8.jpg'
import cv9 from '../assets/img/cv_9.jpg'
import cv10 from '../assets/img/cv_10.jpg'

function productsList() {
  return (
    <div className="listProductstyle">
      <h2>Liste des produits</h2>
      <ul>
        <li>
          <h3>Thème CV 1</h3>
          <img src={cv1} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 2</h3>
          <img src={cv2} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 3</h3>
          <img src={cv3} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 4</h3>
          <img src={cv4} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 5</h3>
          <img src={cv5} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 6</h3>
          <img src={cv6} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 7</h3>
          <img src={cv7} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 8</h3>
          <img src={cv8} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 9</h3>
          <img src={cv9} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
        <li>
        <h3>Thème CV 10</h3>
          <img src={cv10} className="cv_icon" alt="logo" />
          <button>Ajouter au panier</button>
        </li>
      </ul>
    </div>
  )
}

export default productsList
