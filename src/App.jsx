import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';

import css from './App.module.css';

function App() {
  return (
    <div className={css.appWrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
