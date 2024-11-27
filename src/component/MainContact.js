import data from "../data";

function MainContact () {
	const {title, infoText, link}=data.mainContact;
	return (
		<div className="main-contact">
			<div className="main-tit serif">{title}</div>
			<div className="con">
				<div className="wrapper">
					<div className="info">{infoText}</div>
					<div className="link">
						<ul>
							{link.map((d, i) =>
								<LinkList key={i} p={d} />
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

function LinkList ({p}){
	const {href, text}=p;
	return(
		<li><a href={`https://${href}`}>{text}</a></li>
	);
}

export default MainContact;