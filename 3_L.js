// class Person {
//   access() {
//     console.log("У тебя есть доступ");
//   }
// }

// class Member extends Person {
//   access() {
//     console.log("У тебя есть доступ");
//   }
// }

// class Guest extends Person {
//   isGuest = true;
// }

// class Frontend extends Member {
//   canCreateFrontend() {}
// }

// class Backend extends Member {
//   canCreateBackend() {}
// }

// class PersonFromDifferentCompany extends Guest {
//   access() {
//     throw new Error("У тебя нет доступа.");
//     //  console.error("У тебя нет доступа.");
//   }
// }

// function openSecretDoor(member) {
//   member.access();
// }

// openSecretDoor(new Frontend());
// openSecretDoor(new Backend());
// // openSecretDoor(new PersonFromDifferentCompany()); //There should be member!

class Component {
  isComponent = true;
  //   render() {
  //     return `<div>Component</div>`;
  //   }
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends Component {
  onInit() {}
}

class FooterComponent extends Component {
  afterInit() {}
}

function renderComponent(component) {
  console.log(component.render());
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error("Render is impossible here");
  }

  wrapComponent(component) {
    component.wrapped = true;

    return component;
  }
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
// renderComponent(new HOC());
