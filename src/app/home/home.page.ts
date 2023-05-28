import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {  IonicSlides, ModalController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';


import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class GaleriaPage implements OnInit {
  swiperModules = [IonicSlides];

  private swiper: Swiper;
  
	//@ViewChild(IonicSlides)
  //slides!: typeof IonicSlides;

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  //swiper?: Swiper;

  //@ViewChild(SwiperNavigation) swiperNavigation!: SwiperNavigation;
  //@ViewChild(SwiperButtonPrev) swiperButtonPrev!: SwiperButtonPrev;
  //@ViewChild(SwiperButtonNext) swiperButtonNext!: SwiperButtonNext;

  currentIndex: number = 0;

  slideOpts = {
    initialSlide: this.currentIndex,
    speed: 400,
   // showButtons: true
  };
  

  images = [

    
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20191109-WA0302.jpg",
       
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171009-WA0004.jpg",
 
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171009-WA0005.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171010-WA0022.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171010-WA0026.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171019-WA0008.jpg"
      },
      {
        "src": "https://www.coopeere.eco.br/wp-content/uploads/2020/10/FB_IMG_1522538580786-300x225.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171021-WA0002.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171021-WA0002.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171023-WA0024.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171113-WA0015.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171123-WA0001.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171127-WA0004.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171127-WA0054.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171128-WA0003.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171128-WA0005.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20171128-WA0006.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20180505-WA0001.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20180608-WA0006.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20181203-WA0046.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20181203-WA0093.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20181203-WA0128.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20181204-WA0070.jpg"
      },
      {
        "src": "../../../assets/assets/images-coopeere/galeria/IMG-20181204-WA0072.jpg"
      }
      
    
    /*
     {src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20191119-WA0175-300x225.jpg"},
    { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20181203-WA0128-300x225.jpg"},
  {  src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20200627-WA0783-300x225.jpg"},
 {  src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171123-WA0001-300x169.jpg"},
    { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171021-WA0002-300x225.jpg"},
     { src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171023-WA0024-300x169.jpg"},
   {  src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/FB_IMG_1522538580786-300x225.jpg"},
     {src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20181203-WA0093-300x225.jpg"},
    { src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20180505-WA0001-300x225.jpg"},
  {  src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171128-WA0003-300x225.jpg"},
{  src:   "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171009-WA0004-300x225.jpg"},
    { src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171009-WA0005-300x225.jpg"},
    { src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171010-WA0022-300x225.jpg"},
{   src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171128-WA0006-225x300.jpg"},
   { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20191109-WA0306-300x225.jpg"},
   {src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20190318-WA0065-300x225.jpg"},
{   src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171113-WA0015-300x225.jpg"},
   { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171010-WA0026-300x225.jpg"},
 {  src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20191109-WA0302-300x225.jpg"},
  { src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20190722-WA0061-300x225.jpg"},
   {src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/FB_IMG_1512173979285-300x225.jpg"},
    {src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/20190625_110413-300x169.jpg"},
   { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20180608-WA0006-300x225.jpg"},
   { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171127-WA0054-300x225.jpg"},
    {src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/FB_IMG_1512173991571-300x225.jpg"},
   { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20181204-WA0070-169x300.jpg"},
{   src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20181204-WA0072-300x169.jpg"},
  { src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20191125-WA0331-300x225.jpg"},
  { src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171019-WA0008-300x225.jpg"},
  { src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/20180613_212302-300x169.jpg"},
 {  src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/received_1624205220934072-300x225.jpg"},
{  src:   "https://www.coopeere.eco.br/wp-content/uploads/2020/10/20171127_104608-300x180.jpg"},
{   src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171127-WA0004-300x180.jpg"},
 { src:   "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20181203-WA0046-225x300.jpg"},
    { src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20190722-WA0073-300x225.jpg"},
{   src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/20181018_160939-169x300.jpg"},
{  src:   "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20190626-WA0043-225x300.jpg"},
  { src:  "https://www.coopeere.eco.br/wp-content/uploads/2020/10/20171019_145015-300x180.jpg"},
     {src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/20171122_155600-180x300.jpg"},
   { src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171128-WA0005-225x300.jpg"},
    {src: "https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20171111-WA0001-300x199.jpg"},
    { src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/20181018_170201-300x169.jpg"},
     {src:"https://www.coopeere.eco.br/wp-content/uploads/2020/10/IMG-20200716-WA1018-300x300.jpg"},
{  src:   "https://www.coopeere.eco.br/wp-content/uploads/2020/10/Screenshot_20180411-085402-169x300.jpg"},
*/
  ]
  selectedImage: any;
  image: any;
  mostrarCarousel: boolean = false;


  showCarousel() {
    this.selectedImage = this.currentIndex;
    this.mostrarCarousel = !this.mostrarCarousel;
  }

  openCarousel = () =>{
    this.mostrarCarousel = true;
  }
  

  closeCarousel() {
    this.mostrarCarousel = false;
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  
  prevSlide() {
    this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length;
  }
  
 handleImageClick(index: number) {
    this.currentIndex = index;
    this.mostrarCarousel = true;
  }
  
currentSlide = this.currentIndex;
  pesquisaPagina: any;

  filtros: any;

  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  
closeSearchInput(){
  this.router.navigateByUrl('/onboarding')
}

enviarFormulario() {

  this.filtros = { /* ... */ };
  this.router.navigate(['/resultados'], { queryParams: this.filtros });
}


  


  //git clone --branch Final_08 link.git
  
  slidesArray = [
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' },
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' },
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' },
    { src: 'https://ariehalpern.com.br/wp-content/uploads/2021/07/blog12dejulhode2021.jpg' }
  ];

  selectedOption: string = '';
 
  toggleFullScreen() {
    let elem = document.documentElement;
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

 //slide: any;
 
//  @ViewChild('slide', { static: true }) slide: IonSlides;

  constructor(private router: Router, private modalCtrl: ModalController, private titleCtrl: Title ) {
    this.titleCtrl.setTitle('Galeria de Fotos - Coopeere')
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // outras opções aqui
    });
  }

  zoomIn() {
    //this.slide.zoom(2);
  }

  goToPage(option: string) {
    switch (option) {
      case 'option1':
        this.router.navigateByUrl('/option1');
        break;
      case 'option2':
        this.router.navigateByUrl('/option2');
        break;
      case 'option3':
        this.router.navigateByUrl('/option3');
        break;
      default:
        break;
    }

  }

openExternalLinkFacebook(){
  window.open('https://www.facebook.com', '_blank')
}

openExternalLinkInstagram(){
  window.open('https://www.instagram.com', '_blank')
}

openExternalLinkYouTube(){
  window.open('https://www.youtube.com', '_blank')
}

ngOnInit(): void{

}










}