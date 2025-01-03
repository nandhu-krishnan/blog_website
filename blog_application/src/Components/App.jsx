import Content from './Content.jsx';
import Header from './Header.jsx'
import SideMenu from './SideMenu.jsx';

function App() {
  return(
    <>
      <Header />
      <SideMenu />
      <Content contentHeader="Day1" content="Watched youtube videos and explored udemy courses." />
      <Content contentHeader="Day2" content="Starting reading notes about react" />
      <Content contentHeader="Day3" content="Continue working on a blog application" />
      <Content contentHeader="Day4" content="Continue working on a blog application" />
      <Content contentHeader="Day5" content="Continue working on a blog application" />
      <Content contentHeader="Day6" content="Continue working on a blog application" />

    </>
  );
}

export default App