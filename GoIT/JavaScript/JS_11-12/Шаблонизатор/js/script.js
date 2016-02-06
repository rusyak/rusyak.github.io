$(function(){
  
  var html = $('#about').html();
  var content = {
    profile_name: "Андрусяк Игорь Петрович",
    profile_image_url: "img/foto.png",
    profile_image_alt: "Фото Андрусяк Ігор",
    profile_image_title: "Фото Андрусяк Ігор",
    profile_job: "Юрисконсульт в телекоммуникационной компании",
    profile_dreams: "Хочу учить Front-end, потому что:",
    profile_dream_1: "хочу создавать интерфейс, делать его проще в использовании",
    profile_dream_2: "есть идеи своих проектов, но не хватает знаний и навыков",
    profile_dream_3: "в идеале хочется работать в Google:)",
    profile_contact_text: "Мой контактный телефон",
    profile_contact_number: "+380954520840",
    profile_vk_text: "Мой профиль вконтакте",
    profile_vk_link: "http://vk.com/egoist_egorka",
    profile_vk_link_text: "vk.com",
    profile_feedback: "Мой фидбек:",
    profile_feedback_text: "Готовый грызть гранит фронтенда:)"
  };
  
  var content = tmpl(html, content);
  $('body').append(content);
 
  
});