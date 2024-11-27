import data from "../data";

function MainProjects () {
	const {title, projectList}=data.mainProjects;

	return (
		<div className="main-projects">
			<div className="main-tit serif">{title}</div>
			<div className="con">
				<div className="wrapper">
					<ul>
						{projectList.map((d, i) =>
							<ProjectList key={i} a={d}/>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

function ProjectList ({a}){
	const {num, title, skill, p, link}=a;

	return(
		<li>
			<div className="num">{num}</div>
			<div className="project">
				<ul>
					<li className="title">{title}</li>
					<li className="skill">{skill}</li>
				</ul>
				<div className="toggle-button"></div>
			</div>
			<div className="desc">
				<p>{p}</p>
				<div className="btn">
					<a href={`https://${link.gitHref}`}>Git Link</a>
					<a href={`https://${link.webHref}`}>Web Site</a>
				</div>
			</div>
		</li>
	);
}

export default MainProjects;