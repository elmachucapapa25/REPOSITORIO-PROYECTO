import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup; // declare el loginForm
  validation_messages = {
    email: [
      { type: "required", message: "Email es requerido" },
      { type: "pattern", message: "Email no es valido" }
    ],
    password: [
      { type: "required", message: "Contraseña es requerido" },
      { type: "pattern", message: "Contraseña incorrecta" }
    ]
  }


  loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {

    this.loginForm = this.formBuilder.group({

      email: new FormControl(
        "", Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8) // Mínimo 8 caracteres
        ])
      )
    })

  }

  ngOnInit() {
  }

  login(login_data: any) {
    console.log(login_data);
    this.authService.loginUser(login_data).then(res => {
      this.loginMessage = (res);
      this.storage.set('userLoggedIn', true);
      console.log("Login correcto me voy al home");
      this.navCtrl.navigateForward('menu/home');
    }).catch(err => {
      this.loginMessage = err;
    });

  }

}
