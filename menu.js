let filteredBuild = [];
let visible = true;
let type = '';
let setCamera = false;

const listEspacios = [
  {
    template: `
      <p>Contemporáneos</p>
      <img id="contemporaneo" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'contemporaneo'
  },
  {
    template: `
      <p>Tradicionales</p>
      <img id="tradicionales" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'tradicionales'
  },
  {
    template: `
      <p>Memoria</p>
      <img id="memoria" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'memoria'
  },
  {
    template: `
      <p>Arquitecturas como proyecto</p>
      <img id="arquitecturas" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'arquitecturas'
  },
  {
    template: `
      <p>Centros culturales</p>
      <img id="culturales" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'culturales'
  },
  {
    template: `
      <p>Fundaciones y Galerías</p>
      <img id="galerias" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'galerias'
  },
  {
    template: `
      <p>Universitarios</p>
      <img id="universitarios" src="./assets/img/iconos/encendido-amarillo.svg" />
    `,
    visible: true,
    type: 'universitarios'
  }
]

const listObras = [
  {
    template: `
      <p>Flâneur</p>
      <img id="Flâneur" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Flâneur'
  },
  {
    template: `
      <p>Prácticas de archivo</p>
      <img id="Prácticas_de_archivo" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Prácticas_de_archivo'
  },
  {
    template: `
      <p>Libros de artista y múltiples</p>
      <img id="múltiples" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'múltiples'
  },
  {
    template: `
      <p>Poéticas tecnológicas</p>
      <img id="Poéticas_tecnológicas" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Poéticas_tecnológicas'
  },
  {
    template: `
      <p>Expografías creativas</p>
      <img id="Expografías" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Expografías'
  },
  {
    template: `
      <p>Instalaciones artísticas</p>
      <img id="Instalaciones" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Instalaciones'
  },
  {
    template: `
      <p>Autorretratos</p>
      <img id="Autorretratos" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Autorretratos'
  }
]

const listRecorridos = [
  {
    template: `
      <p>Constitución</p>
      <img id="Constitucion" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Constitucion'
  },
  {
    template: `
      <p>La Boca</p>
      <img id="LaBoca" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'LaBoca'
  },
  {
    template: `
      <p>Microcentro</p>
      <img id="Microcentro" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Microcentro'
  },
  {
    template: `
      <p>Puerto Madero</p>
      <img id="PuertoMadero" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'PuertoMadero'
  },
  {
    template: `
      <p>Retiro</p>
      <img id="Retiro" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'Retiro'
  },
  {
    template: `
      <p>San Telmo</p>
      <img id="SanTelmo" src="./assets/img/iconos/apagado.svg" />
    `,
    visible: false,
    type: 'SanTelmo'
  }
]

function createMenu() {
  console.log("Se Creó el Menu");
  const container = document.getElementById('menu-container');
  container.classList.add('close');
  container.innerHTML += `
    <div class="header-menu">
      <img src="./assets/img/iconos/cerrar.svg" onclick="closeMenu()"/>
    </div>
    <div class="body">
      <div class="accessLink">
        <img src="./assets/img/iconos/menu-final.svg"/>
        <a class="item-link" href="./acercade.html">Acerca de Derivas Virtuales</a>
        <a class="item-link" href="./navegacion.html">Mapa de Navegación</a>
        <a class="item-link" href="https://drive.google.com/file/d/1QnO-wGAJE5Ypdm3wzGbDxyMZue0J71Qx/view" >Publicación</a>
      </div>
    </div>
    <div class="footer">
        <img src="./assets/img/iconos/menu-final.svg"/>
        <p> Derivas Virtuales es parte del proyecto de investigación <br>
            UBATIC de Cátedra La Ferla, 2021-2022.</p>
        <div class="ig-link">
          <a class="ig-container"  href="#" >
            <img src="./assets/icons/ig-logo.png" alt="Instagram">
            <h3>@derivasvirtuales</h3>
          </a>
        </div>
    </div>
  `;
}

console.log("Se leyó el codigo menu.js");

function closeMenu() {
  const container = document.getElementById('menu-container');
  const button = document.getElementById('menu');
  button.classList.remove('close-button');
  if(container.classList.contains('open')) {
    container.classList.remove('open');
    container.classList.add('close');
  }
}

function centrarMapa() {
  setCamera = true;
}

function closePopUp() {
  document.getElementById('popUp').remove();
}

function openMenu() {
  const container = document.getElementById('menu-container');
  const button = document.getElementById('menu');
  button.classList.add('close-button');
  container.classList.add('open');
  container.classList.remove('close');
}

function handleSubMenu(menuNombre) {
  const menu = document.getElementById(menuNombre);
  const otherMenus = document.getElementsByTagName('ul');
  for (let item of otherMenus) {
    if(item.id !== menuNombre) {
      item.classList.add('close-menu');
    }
  }
  const hasClose = menu.classList.contains('close-menu');
  if(hasClose) {
    menu.classList.remove('close-menu');
  } else {
    menu.classList.add('close-menu');
  };
}

function onSwitch(type, color) {
  const element = document.getElementById(type);
  const targetEspacios = listEspacios.find(item => item.type === type);
  const targetObras = listObras.find(item => item.type === type);
  const targetRecorridos = listRecorridos.find(item => item.type === type);
  if(targetEspacios) targetEspacios.visible = !targetEspacios.visible;
  if(targetObras) targetObras.visible = !targetObras.visible;
  if(targetRecorridos) targetRecorridos.visible = !targetRecorridos.visible;
  if(color === 'amarillo') {
    filteredBuild = edificios.map(build => {
      if(build.tipo === type) {
        if(targetEspacios.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          build.isVisible = true;
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          build.isVisible = false;
        }
      }
      return build;
    });
  } else if(color === 'rosa') {
    filteredBuild = obras.map(obra => {
      if(obra.tipo === type) {
        if(targetObras.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          obra.isVisible = true; 
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          obra.isVisible = false;
        }
      }
      return obra;
    })
  } else {
    filteredBuild = recorridos.map(recorrido => {
      if(recorrido.tipo === type) {
        if(targetRecorridos.visible) {
          element.src = `./assets/img/iconos/encendido-${color}.svg`;
          recorrido.isVisible = true; 
        } else {
          element.src = `./assets/img/iconos/apagado.svg`;
          recorrido.isVisible = false;
        }
      }
      return recorrido;
    })
  }
}
