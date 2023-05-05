function addingEventListener() {
    const button = document.getElementById('button');
  
    function clickAlert() {
      alert("I'm not the Pillsbury dough boy!");
    }
  
    button.addEventListener('click', clickAlert);
  }
  
  addingEventListener();