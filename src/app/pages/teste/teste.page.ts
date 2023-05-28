import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

ngOnInit(): void {
  
}

  photos = [
    {
      thumbnail: '../../../assets/assets/images-coopeere/galeria/IMG-20181204-WA0072.jpg',
      url: '../../../assets/assets/images-coopeere/galeria/IMG-20181204-WA0072.jpg',
      filename: 'Foto 1',
      caption: 'Legenda da Foto 1'
    },
    {
      thumbnail: '../../../assets/assets/images-coopeere/galeria/IMG-20181204-WA0070.jpg',
      url: '../../../assets/assets/images-coopeere/galeria/IMG-20181204-WA0070.jpg',
      filename: 'Foto 2',
      caption: 'Legenda da Foto 2'
    },
    // Adicione mais fotos conforme necessário
  ];

  showPopup = false;
  currentPhoto: any;


  currentIndex = 0;
  zoomLevel = 0;

  openPopup(photo: any) {
    this.currentPhoto = photo;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  toggleFullscreen() {
    // Implementar a lógica de alternar tela cheia
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullScreen = docEl.requestFullscreen || docEl.requestFullscreen || docEl.requestFullscreen || docEl.requestFullscreen;
    const exitFullScreen = doc.exitFullscreen ||  doc.exitFullscreen || doc.exitFullscreen;

    if (!doc.fullscreenElement && !doc.fullscreenElement && !doc.fullscreenElement && !doc.fullscreenElement) {
      requestFullScreen.call(docEl);
    } else {
      exitFullScreen.call(doc);
    }
  }

  zoomIn() {
    // Implementar a lógica de zoom in
    if (this.zoomLevel < 2) {
      this.zoomLevel++;
    }
  }

  zoomOut() {
    // Implementar a lógica de zoom out
    if (this.zoomLevel > -2) {
      this.zoomLevel--;
    }
  }

  prevPhoto() {
    // Implementar a lógica de foto anterior
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentPhoto = this.photos[this.currentIndex];
    }
  }

  nextPhoto() {
    // Implementar a lógica de próxima foto
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
      this.currentPhoto = this.photos[this.currentIndex];
    }
  }
  }
