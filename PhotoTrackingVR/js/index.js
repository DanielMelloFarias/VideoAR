    
      var sceneEl = document.querySelector('a-scene');
      var entity = sceneEl.querySelector('a-entity');
    
      var firstVertical = true;
    
      if(screen.orientation.angle != 0){
        firstVertical = false;
      }
    
      start();
    
      function start() {
        // For first setup 
        entity.setAttribute('position', { x: 700 / 2, y: 0, z: -(screen.height / 2) });
      }
    
      screen.orientation.addEventListener("change", function(e) {
    
        //First Vertical
        if(screen.orientation.angle != 0 && firstVertical){
    
          entity.setAttribute('position', { x: 700, y: 0, z: -(screen.height / 2) });
        }
        //First Horizontal
        if(screen.orientation.angle == 0 && !firstVertical){
    
          entity.setAttribute('position', { x: 1.33 * screen.width, y: 0, z: -(screen.height / 2) });
        }
      }, false);
      
    