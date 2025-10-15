import { Component, OnInit } from '@angular/core';
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
export class ContactComponent implements OnInit {

  formData = {
    name:'',
    email: '',
    objet:'',
    message: ''
  };
  
  statusMessage: string = '';
  isSuccess: boolean = true;
  isLoading: boolean = false;

  ngOnInit() {
  
    emailjs.init('YJD9mHDnNPeqA6sfz');
  }

  // ...existing code...
sendEmail() {
  if (!this.formData.name || !this.formData.email || !this.formData.message) {
    this.statusMessage = "Merci de remplir tous les champs obligatoires 😊";
    this.isSuccess = false;
    setTimeout(() => this.statusMessage = '', 5000);
    return;
  }

  this.isLoading = true;
  this.statusMessage = '';

  const templateParams = {
    name: this.formData.name,
    email: this.formData.email,
    objet: this.formData.objet,
    message: this.formData.message
  };

  emailjs.send('service_gmail', 'template_gmail', templateParams)
    .then((response) => {
      this.statusMessage = "Merci ! Votre message a bien été envoyé 🙌";
      this.isSuccess = true;
      this.resetForm();
      setTimeout(() => this.statusMessage = '', 5000);
    })
    .catch((error) => {
      this.statusMessage = "Oups, une erreur est survenue. Réessayez ou contactez-moi directement par email.";
      this.isSuccess = false;
      setTimeout(() => this.statusMessage = '', 5000);
    })
    .finally(() => {
      this.isLoading = false;
    });
}
// ...existing code...

  resetForm() {
    this.formData = {
      name:'',
      email: '',
      objet:'',
      message: ''
    };
  }
}