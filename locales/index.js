import ru from './ru';
import en from './en';

const localesContent = Object.assign(
  {},
  ru,
  en,
);

export default localesContent[window.locale || 'ru'];
