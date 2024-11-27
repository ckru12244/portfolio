function Header () {
	return (
		<header id="header">
			<div className="hd-wrap">
				<h1 className="hd-logo">
					<a href=""></a>
				</h1>
				<div className="hd-menu">
					<nav className="gnb-wrap">
						<ul className="gnb">
							<li><a href="">INTRO</a></li>
							<li><a href="">ABOUT</a></li>
							<li><a href="">SKILLS</a></li>
							<li><a href="">PROJECTS</a></li>
							<li><a href="">OPEN SOURCE</a></li>
							<li><a href="">CONTACT ME</a></li>
						</ul>
					</nav>
					<span className="hd-mak"></span>
				</div>
				<div className="hd-info">
					<div className="hd-allmenu-open">
						<div className="btn-allmenu">
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;