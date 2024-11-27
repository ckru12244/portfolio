import data from "../data";

function MainAbout () {
	const {title, conttext}=data.mainAbout;

	return (
		<div className="main-about">
			<div className="main-typo">
				<Title p={title}/>
			</div>
			<div className="flex-cont">
				<div className="txtEffect"></div>
				<Conttext p={conttext}/>
			</div>
		</div>
	);
}

function Title ({p}){
	return(
		<>
			<div><span className="serif">{p.top}</span></div>
			<div>{p.bottom}</div>
		</>
	);
}

function Conttext ({p}){
	return(
		<div className="txt">
			{p.map((d, i) =>
				<p key={i}>{d}</p>
			)}
		</div>
	);
}

export default MainAbout;