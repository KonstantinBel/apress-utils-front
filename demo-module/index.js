// Если в модуль импортированы стили,
// нужно что-бы проектный/гемный пакедж был
// подключен на страницу следующим образом:
// = stylesheet_pack_tag 'blizko/assets/pack_with_demo_module'
import './style.scss';

import tmpl from './tmpl1.handlebars';
import i18n from '../locales';



// Что-бы создать "классический" модуль нужно
// подключить модуль в обычный пакедж
// import 'apress-utils-front/demo-module'
app.modules.demoModule = ((self = {}) => {

  function _init() {
    console.log('init demo-module');
  }

  self.load = _init;
  return self;
})(app.modules.demoModule);



// Что-бы нарисовать попап нужно импортировать модуль
// в проектный скрипт и вызвать функцию
// import { demoModule } from 'apress-utils-front/demo-module';
// demoModule();
export default () => {
  const container = document.createElement('div');
  const html = tmpl({ i18n: i18n['demo-module'] });
  
  container.innerHTML = html;
  document.body.appendChild(container.firstElementChild);
}
