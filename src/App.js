import Header from './component/Header';
import MainIntro from './component/MainIntro';
import MainAbout from './component/MainAbout';
import MainSkills from './component/MainSkills';
import MainProjects from './component/MainProjects';
import MainSource from './component/MainSource';
import MainContact from './component/MainContact';
import PageTopbtn from './component/PageTopbtn';
import UIScript from './component/UIScript';
import './css/style.css';
import './css/reset.css';

function App() {
  return (
	<div className="wrap">
		<Header />
		<div className="contents">
			<MainIntro />
			<MainAbout />
			<MainSkills />
			<MainProjects />
			<MainSource />
			<MainContact />
		</div>
		<PageTopbtn />
		<UIScript />
	</div>
  );
}

export default App;
