import data from "../data";

function MainIntro () {
	const {title, scrollText}=data.mainIntro;

	const renderTextAsSpans = (text) => {
		return text.split('').map((char, index) => (
		 	 <span key={index}>{char === ' ' ? '\u00A0' : char}</span> // 공백은 &nbsp;로 처리
		));
	};

	return (
		<div className="main-intro">
			<div className="title">
				<div className="top">
					<div className="header-text">
						{renderTextAsSpans(title.top)}
					</div>
				</div>
				<div className="middle">
					<div className="inline one">
						{renderTextAsSpans(title.middle.one)}
						<span className="br">&nbsp;</span>
					</div>
					<div className="inline two">
						{renderTextAsSpans(title.middle.two)}
					</div>
				</div>
				<div className="bottom">
					<ul>
					</ul>
				</div>
			</div>
			<div className="down">
				<p>{scrollText}</p>
				<div className="scroll-downs">
					<div className="mousey">
						<div className="scroller"></div>
					</div>
				</div>
			</div>
			<div className="main_video"><video id="main_video" src="" alt="background"></video></div>
		</div>
	);
}

export default MainIntro;