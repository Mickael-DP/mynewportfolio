import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formData = {
    name:'',
    email: '',
    objet:'',
    message: ''
  };
  
  statusMessage: string = '';
  isSuccess: boolean = true;

  sendEmail() {
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      objet: this.formData.objet,
      message: this.formData.message
    };

    emailjs.send('service_gmail', 'template_gmail', templateParams, 'YJD9mHDnNPeqA6sfz')
    .then((response: EmailJSResponseStatus) => {
      this.statusMessage = "Message envoyé avec succès !";
      this.isSuccess = true;
      this.resetForm();
    }, (error) => {
      this.statusMessage = "Erreur lors de l'envoi du message.";
      this.isSuccess = false;
      console.error('Erreur:', error);
    });
  }

  resetForm() {
    this.formData = {
      name:'',
      email: '',
      objet:'',
      message: ''
    };
  }

}
