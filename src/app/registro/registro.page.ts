import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  validation_messages = {
    email: [
      { type: "required", message: "Email es requerido." },
      { type: "pattern", message: "Email no es valido." }
    ],
    password: [
      { type: "required", message: "Password es requerido" },
      { type: "pattern", message: "Password no es valido" }
    ],
    confirmacionPassword: [
      { type: "required", message: "La confirmación de Password es requerida" },
      { type: "passwordsMatch", message: "Passwords no coinciden" }
    ],
    name: [
      { type: "required", message: "Nombre es requerido" },
      { type: "pattern", message: "Nombre no valido" }
    ],
    last_name: [
      { type: "required", message: "Apellido es requerido" },
      { type: "pattern", message: "Apellido no es valido" }
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registroForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8) // Mínimo 8 caracteres
      ])),
      confirmacionPassword: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          this.passwordsMatch.bind(this)
        ]),
      ),
      name: new FormControl("", Validators.required),
      last_name: new FormControl("", Validators.required)
    });
  }

  registro(registro_data: any) {
    console.log(registro_data);
  }

  ngOnInit() {
  }

  // Función para verificar si las contraseñas coinciden
  passwordsMatch(control: AbstractControl): { [key: string]: any } | null {
    const passwordControl = control.root.get('password');
    const confirmPasswordControl = control.root.get('confirmacionPassword');
  
    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      return { 'passwordsMatch': true }; // Cambio de clave a 'passwordsMatch'
    } else {
      return null;
    }
  }

  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }
  mostrarContrasena() {

  }
}