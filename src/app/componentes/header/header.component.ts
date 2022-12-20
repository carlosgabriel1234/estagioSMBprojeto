import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ativo:Boolean = false;

    abrirMenu(){

      let menu = (document.getElementById("menuLateral") as HTMLInputElement);
      let conteudo = (document.getElementById("conteudo") as HTMLInputElement);

      if(!this.ativo){
          menu.style.width ='250px';
          conteudo.style.marginLeft = '250px';
          this.ativo = true;
        }else{
         this.fecharMenu();
        }
       menu.addEventListener('click',this.fecharMenu);
        }
        fecharMenu(){
          location.reload();
        }
    }

