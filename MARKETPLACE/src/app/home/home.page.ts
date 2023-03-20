import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( 
private modalCtrl: ModalController
  ) {}

async showModal() {
  console.log('showModal()');
  const modal = await this.modalCtrl.create({
component: ModalPage,
cssClass: 'my-custom-modal-css'
  });

  await modal.present();
}

}
