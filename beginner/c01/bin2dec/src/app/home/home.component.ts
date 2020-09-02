import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() data = { entrada: "", saida: "---" };
  hasError = false;

  constructor() { }

  ngOnInit(): void {
  }

  validaInput(): void {
    // apenas permitido 1 e 0
    if (!(this.data.entrada.includes("0") || this.data.entrada.includes("1"))) {
      this.hasError = true
      this.data.entrada = null
    } else {
      this.hasError = false
      this.data.saida = parseInt(this.data.entrada,2).toString()
  console.log(this.data)
    }
  }


}
