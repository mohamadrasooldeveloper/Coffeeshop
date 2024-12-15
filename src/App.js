import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar/NavBar.jsx';
import NavMobile from './Components/Header/NavBar/NavMobile.jsx';
import MainHeader from './Components/Header/MainHeader/MainHeader.jsx';
import ProductsTitle from './Components/Main/Products/ProductsTitle/ProductsTitle.jsx';
import Product from './Components/Main/Products/Product/Product.jsx';
import Category from './Components/Main/Category/Category.jsx';
import ProductCategory from './Components/Main/ProductCategory/ProductCategory.jsx';
import ProductsSales from './Components/Main/ProductsSales/ProductsSales.jsx';
import Blog from './Components/Main/Blog/Blog.jsx';
import Club from './Components/Main/Club/Club.jsx';
import Contact from './Components/Main/Contact/Contact.jsx';
import Services from './Components/Main/Services/Services.jsx'
import FooterRight from './Components/Footer/FooterRight/FooterRight.jsx';
import FooterItem from './Components/Footer/FooterItem/FooterItem.jsx';
import FooterContact from './Components/Footer/FooterContact/FooterContact.jsx';
function App() {
  return (
    <>
      <header className="header bg-home-mobile md:bg-home-dekstop bg-cover bg-no-repeat h-[400px] xs:h-auto xs:aspect-[2/1] bg-[center_top]">
        <NavBar />
        <NavMobile/>
        <MainHeader />
      </header>
      <main className="main mx-4 md:mx-auto  md:max-w-[75%] mt-48 ">
        <ProductsTitle />
        <Product />
        <Category/>
        <ProductCategory/>
        <ProductsSales/>
        <Blog/>
        <Club/>
        <Contact/>
        <Services/>
      </main>
      <footer className='Footer bg-zinc-700 text-gray-300 w-full pt-8 px-4 md:pt-[62px] md:px-[96px] flex justify-between items-center flex-wrap'>
        <FooterRight/>
        <FooterItem/>
        <FooterContact/>
      </footer>
    </>
  );
}

export default App;
