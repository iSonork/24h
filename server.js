var mineflayer = require('mineflayer');
var pass = "12345"; //Authme plugini şifresi (Plugin yoksa silmeyin)
var ayar = {
  host: "minebatata20.aternos.me", //Sunucunuzun ipsi
  port: 26883, //Değiştirme!!!
  username: "BotBotando", //Botun ismi Kafanıza Göre
  version: false //Değiştirme!!!
  
};

var bot = mineflayer.createBot(ayar);


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
  }
  setInterval(intervalFunc,7000);
  console.log('Sunucuya Giriş Yapıldı!');
  //bot.chat('/login '+ pass);
  bot.chat('Salve familia! BotBotando passando aqui :3');
});

bindEvents(bot);
function bindEvents(bot) {
  
  bot.on('error', function(err) {
    console.log("Bir Hata Oluştu!");
  });
  
  bot.on('end', function() {
    console.log("Bot sunucudan atıldı!");
    setTimeout(relog, 5000);
  });
  
  function relog() {
    console.log("Sunucuya tekrardan bağlanılıyor");
    bot = mineflayer.createBot(ayar);
    
    bot.on('chat', function(username, message) {
      if (username === bot.username) return;
      console.log("Bot tekrardan sunucuya giriş yaptı!");
      //bot.chat('/login '+ pass);
      bot.chat('Salve familia! BotBotando passando aqui :3');
});
    
    
    bindEvents(bot);
  }
}

  
  
