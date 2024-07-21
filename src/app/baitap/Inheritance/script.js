
const object1 = {
    a: 1,
    b: 2
  };
  
  const object2 = {
    c: 3,
    d: 4
  };
  
  const object3 = {
    e: 5,
    f: 6
  };
  
  class Object1 {
    constructor() {
      Object.assign(this, object1);
    }
  }
  
  class Object2 {
    constructor() {
      Object.assign(this, object2);
    }
  }
  
  class Object3 {
    constructor() {
      Object.assign(this, object3);
    }
  }
  
  class CombinedObject extends Object1 {
    constructor() {
      super();
      Object.assign(this, new Object2());
      Object.assign(this, new Object3());
    }
  }
  
  const combinedObject = new CombinedObject();
  
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = JSON.stringify(combinedObject, null, 2);
  