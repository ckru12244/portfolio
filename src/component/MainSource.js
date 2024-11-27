import data from "../data";

function MainSource () {
	const {title, sourceList}=data.mainSource;

	return (
		<div className="main-source">
			<div className="main-tit serif">{title}</div>
			<div className="con">
				<ul>
					{sourceList.map((d, i) =>
						<SourceList key={i} p={d}/>
					)}
				</ul>
			</div>
		</div>
	);
}

function SourceList({p}){
	const {thumb, desc, link}=p;

	return(
		<li>
			<div className="thumb">
				<a href=""><img src={`images/${thumb.img}`} alt={thumb.alt} /></a>
			</div>
			<div className="desc">
				<div className="name serif">{desc.name}</div>
				<p>{desc.p}</p>
				<div className="btn-wrap">
					<a href={`http://${link.git}`} className="btn">Git Hub</a>
					<a href={`http://${link.web}`} className="btn">Web Page</a>
				</div>
			</div>
		</li>
	);
}

export default MainSource;