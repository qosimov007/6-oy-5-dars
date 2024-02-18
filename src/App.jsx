
import './App.css'
function App() {




  return (
    <>
     <div className="Blok">
          
           
     <header className="header">
      <div className="logo"><img src="img/Mask group.png" alt="" /></div>
       
       <div className="nav">
         <ul>
       <li>Vakansiyalar</li>
       <li>Kandidatlar</li>
       <li>Kompaniyalar</li>
       <li>Xizmatlar</li>
       <li>Talim</li>

         </ul>
 

         <button className="Uzb">O'zb <img src="img/arrow-right.png" alt=""></img ></button>
         <button className="btn">Boshlash</button>


       </div>
 

     </header>


<div className="container">

<div className="freme">

<div className="text">
<h1>Kompaniya malumotlari</h1>
<p>Kompaniya haqida malumot kiriting.</p> 
</div>


<div className="circle"></div>
<h2>Yuklash</h2>


<div className="input">
<h1>Kompaniya nomi *</h1>
<input className='in' type="text" placeholder='Kompaniya nomi'/>

</div>

<div className="input">
<h1>Email *</h1>
<input className='in' type="text" placeholder=' Email '/>

</div>


<div className="input">
<h1>Linklar *</h1>

<div className="h">

  <a href="#"><img src="img/Input.png" alt="" /></a>
<a href=""> <img src="img/Input (1).png" alt="" /></a>
<a href=""><img src="img/Input (2).png" alt="" /></a>
<a href=""><img src="img/Input (3).png" alt="" /></a>
<a href=""><img src="img/Input (4).png" alt="" /></a>


</div>


<div className="butIn">

<div className="input1">
<h1>Davlat *</h1>
<select className='im' name="pets" id="pet-select">
  <option value="Davlat">Davlat</option>
  <option value="Uzbekiston">Uzbekiston</option>
  <option value="Rassiya">Rassiya</option>
  <option value="America">America</option>
  <option value="Avstriya">Avstriya</option>
  <option value="Angola">	Angola</option>
  <option value="Argentina">Argentina</option>
</select>

</div>
<div className="input1">
<h1>Shahar *</h1><select className='im' name="pets" id="pet-select">
  <option value="Shahar">Shahar</option>
  <option value="Uzbekiston">Toshkent</option>
  <option value="Москва">Москва</option>
  <option value="Вашингтон">Вашингтон</option>
  <option value="Вена">Вена</option>
  <option value="Луанда">	Луанда</option>
  <option value="Буэнос-Айрес">Буэнос-Айрес</option>
</select>

</div>

</div>





<div className="input">
<h1> Yasash joyi *</h1>
<input className='in' type="text" placeholder=' Joy'/>

</div>

<div className="input">
<h1>Hodimlar soni *</h1>
<input className='in' type="number" placeholder=' Hodimlar soni '/>



</div>

<div className="input">
<h1> Yasash joyi *</h1>
<input className='in' type="decr" placeholder=' Joy'/>

</div>


</div>




</div>

</div>


     </div>
     
       




    </>
  )
}

export default App
