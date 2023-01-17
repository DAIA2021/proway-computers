import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  notificar(mensagem:string) {
    this.snackbar.open(mensagem, "OK", {
      duration:2000,
      verticalPosition:"top",
      horizontalPosition:"center"
    });
  }
}
