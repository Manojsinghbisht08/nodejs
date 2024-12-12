const messages = [
    "Hello, World!",
    "Namaste, Universe!",
    "Bonjour, Cosmos!",
    "Hola, Mundo!",
  ];
  
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  
  console.log(randomMessage);