function saveInput() {

    // Get the user input
    
    var characterName = document.getElementById("Character_Name").value;
    
    var characterPersona = document.getElementById("Character_Persona").value;
     
    var characterGreeting = document.getElementById("Character_Greeting").value;
  
    var worldScenario = document.getElementById("World_Scenario").value;
  
    // Create a JSON object with the input
    
    var json = {
  
      "char_name": characterName,
      
      "char_persona": characterPersona,
      
      "char_greeting": characterGreeting,
      
      "world_scenario": worldScenario
    
    };
  
    // Stringify the JSON
    
    var jsonString = JSON.stringify(json);
  
    // Download as a JSON file
    
    var a = document.createElement("a");
  
    a.href = URL.createObjectURL(new Blob([jsonString]));
  
    a.download = characterName + ".json";
  
    a.click();
  
  }