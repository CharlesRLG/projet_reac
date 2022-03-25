import '../assets/img/objectList.css'

import cv1 from '../assets/img/cv_1.png'
import cv2 from '../assets/img/cv_2.png'
import cv3 from '../assets/img/cv_3.png'

let objectsList = [
{name : "CV1",description : "Curriculum 1",price : "5€",image : cv1},
{name : "CV2",description : "Curriculum 2",price : "17€",image : cv2},
{name : "CV3",description : "Curriculum 3",price : "3827€",image : cv3},
]       


  function handleClick() {
    alert(objectsList.description);
  }




export default function objectListFunc() {
  return (
    <ul>
      {objectsList.map(({name, description, price, image})=>(
      <ul>
          <li>{name}</li> 
          <a href={description} onClick={handleClick}><img src={image} class="imageCv"/></a>
          {/* <li>{alert(description)}</li> */}
          <li>{price}</li>
      </ul>
    ))}
    </ul>
  )
}


