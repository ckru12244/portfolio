const data={
	mainIntro: {
		title: {
			top: "Hello !",
			middle: {
				one: "Frontent",
				two: "Portfolio",
			}
		},
		scrollText: "SCROLL DOWN",
	},
	mainAbout: {
		title: {
			top: "GET TO KNOW",
			bottom: "ABOUT ME"
		},
		conttext: [
			"프론트엔드 개발은 코드로 작업한 결과를 즉시 시각적으로 확인할 수 있다는 점에서 큰 만족과 매력을 느끼게 해주었습니다.",
			"단순히 기능 구현에 그치지 않고, 사용자의 경험을 고려하며 더 나은 프로젝트로 이끌어가며 또한, 장기적인 유지보수를 고려한 안정적이고 효율적인 코드를 작성하여, 프로젝트가 지속적으로 발전할 수 있도록 노력하겠습니다. 앞으로도 끊임없이 기술을 습득하고, 성장하는 개발자로 발전해 나가겠습니다."
		]
	},
	mainSkills: {
		swiper: [
			{
				num: "01",
				name: "HTML / CSS / SASS",
				icons: [
					{img: "program_icons/step1 html, css, sass/html.svg", alt: "html"}, 
					{img: "program_icons/step1 html, css, sass/css.svg", alt: "css"}, 
					{img: "program_icons/step1 html, css, sass/sass.svg", alt: "sass"}
				],
				desc: [
					"- 웹 표준을 준수하는 Tag 사용",
					"- Media query를 활용한 반응형 웹 페이지 스타일 작성",
					"- 중복 코드 방지 및 일관된 스타일링 가능",
					"- CSS 전처리 기능 프로그래밍(SASS)"
				]
			},
			{
				num: "02",
				name: "JavaScript",
				icons: [
					{img: "program_icons/step2 javascript/gsap.svg", alt: "gsap"}, 
					{img: "program_icons/step2 javascript/swiperjs.svg", alt: "swiperjs"}
				],
				desc: [
					"- EcmaScript 기반의 Native JavaScript 작성",
					"- JavaScript Library 활용 및 구현 ( GSAP, SwiperJS )",
					"- JavaScript API 구현 ( Video API, Google API )",
					"- 외부 API 구현(Google Map, Carousel)"
				]
			},
			{
				num: "03",
				name: "React",
				icons: [
					{img: "program_icons/step3 react/react.svg", alt: "react"}, 
					{img: "program_icons/step3 react/redux.svg", alt: "redux"}
				],
				desc: [
					"- React를 활용한 사용자 인터페이스 구현",
					"- 유지보수가 용이한 Folder Structure 구성",
					"- Redux를 활용한 React State의 활용",
					"- Axois Library를 활용하여 React AJAX 구현"
				]
			},
			{
				num: "04",
				name: "jQuery",
				icons: [
					{img: "program_icons/step2 javascript/jquery.svg", alt: "jquery"}
				],
				desc: [
					"- JavaScript를 쉽게 접할 수 있는 jQuery 사용가능"
				]
			},
			{
				num: "05",
				name: "PWA",
				icons: [
					{img: "program_icons/step7 pwa/pwa.svg", alt: "pwa"}
				],
				desc: [
					"- 네이티브 앱과 유사한 사용자 경험을 제공하는 PWA를 제작",
					"- HTML, CSS, JavaScript와 같은 웹 기술로 만드는 앱 구현"
				]
			},
			{
				num: "06",
				name: "SCM",
				icons: [
					{img: "program_icons/step6 scm/git.svg", alt: "git"},
					{img: "program_icons/step6 scm/github.svg", alt: "github"}
				],
				desc: [
					"- GitHub를 활용한 Git 시스템 협업 및 버전 관리"
				]
			},
			{
				num: "07",
				name: "Design",
				icons: [
					{img: "program_icons/step8 etc/figma.svg", alt: "figma"},
					{img: "program_icons/step8 etc/photoshop.svg", alt: "photoshop"},
					{img: "program_icons/step8 etc/illustrator.svg", alt: "illustrator"}
				],
				desc: [
					"- Figma 협업기능 사용 경험",
					"- Auto Layout, 컴포넌트 생성/관리 가능",
					"- 이미지 편집, 레이어, 마스크 작업 가능"
				]
			}
		]
	},
	mainProjects: {
		title: "Projects",
		projectList: [
			{
				num: "00",
				title: "Portfolio",
				skill: "React, Redux, GSAP, SwiperJS",
				p: "React를 사용하여 제작하였고 반응형 구현한 포트폴리오 사이트 입니다. Redux를 활용하여 상태를 효율적으로 관리할수 있도록 제작하였습니다.",
				link: {
					gitHref: "github.com/ckru12244/portfolio",
					webHref: "https://portfolio-wheat-nu-80.vercel.app"
				}
			},
			{
				num: "01",
				title: "Wylie",
				skill: "React, GSAP",
				p: "React를 활용한 첫 프로젝트입니다. Redux에 대한 학습을 하였으며 state 정보를 활용하여 데이터를 업데이트할 수 있도록 하였습니다. gsap timeline으로 페이지별 컨텐츠에 scrollTrigger를 주어 효과를 적용시켰습니다.",
				link: {
					gitHref: "github.com/ckru12244/project/tree/main/wylie_react",
					webHref: "wylie.vercel.app"
				}
			},
			{
				num: "02",
				title: "O'kitchen",
				skill: "React, SwiperJS",
				p: "React를 이용한 프로젝트입니다. 모바일 전용 사이트이며 SwiperJS를 적용하였고, 향후 데이터 베이스를 추가할 것을 대비하여 동적 화면 드로잉에 신경써서 코딩했습니다.",
				link: {
					gitHref: "github.com/ckru12244/project/tree/main/o'kitchen_react",
					webHref: "okitchen.vercel.app"
				}
			},
			{
				num: "03",
				title: "Class Box",
				skill: "JavaSctipt, SwiperJS, GSAP, PWA",
				p: "반응형으로 제작되었으며 URL로 쉽게 설치할 수 있는 PWA를 적용하였습니다. SwiperJS를 적용하였으며 destroy 명령어로 pc에서는 슬라이더가 해체되었다가 모바일에서만 스와이퍼를 적용시켰습니다..",
				link: {
					gitHref: "github.com/ckru12244/classbox",
					webHref: "ckru12244.github.io/classbox/"
				}
			},
			{
				num: "04",
				title: "Artcenter Nabi",
				skill: "jQuery, SwiperJS",
				p: "갤러리 사이트이며 GNB는 접근성을 고려하여 키보드로 이용할 수 있도록 했습니다. jQuery로 작성하였고 SwiperJS를 적용하였습니다.",
				link: {
					gitHref: "github.com/ckru12244/artcenter-nabi",
					webHref: "ckru12244.github.io/artcenter-nabi/"
				}
			},
			{
				num: "05",
				title: "Wconcept",
				skill: "jQuery, SwiperJS",
				p: "기존 사이트를 리뉴얼했으며 Tab키로 접근가능한 본문바로가기 버튼과 메뉴부분을 접근가능하게 제작하였습니다. CSS transition 및 Animation 효과를 활용하여 감각적으로 모션을 부여하고자 하였습니다.",
				link: {
					gitHref: "github.com/ckru12244/wconcept",
					webHref: "ckru12244.github.io/wconcept/"
				}
			}
		]
	},
	mainSource: {
		title: "Open Source",
		sourceList: [
			{
				thumb: {
					img: "opensource10.jpg",
					alt: "opensource10"
				},
				desc: {
					name: "React, Axios , map()",
					p: "외부 JSON 데이터를 로딩하는 기법으로 Axios Library를 활용하여 GNB의 HTML을 구현하였습니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source10",
					web: "open-source10.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource9.jpg",
					alt: "opensource9"
				},
				desc: {
					name: "React, Fetch API, map()",
					p: "데이터를 외부 JSON 파일에서 비동기적으로 받아오기 위해 fetch API를 사용하여 데이터를 로드하고, 받은 데이터를 상태로 관리할수있게 작성하였습니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source9",
					web: "open-source9.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource3.jpg",
					alt: "opensource3"
				},
				desc: {
					name: "React , Redux",
					p: "상품 목록 관리와 페이지네이션 기능을 제공하여 사용자가 더 편리하게 상품을 탐색할 수 있도록 하며, Redux와 React의 기능을 적절히 활용하여 상태 관리 및 UI 렌더링을 효율적으로 처리했습니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source3",
					web: "open-source3-taupe.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource12.jpg",
					alt: "opensource12"
				},
				desc: {
					name: "React, Hook",
					p: "이 예제를 통해 React와 Hook함수를 공부하고 활용할 수 있었습니다. 더보기 버튼을 이용하여 데이터의 개수를 조절할 수 있도록 초기에는 제한된 수의 항목을 보여줍니다."
				},
				link: {
					git: "github.com/ckru12244/open-source2/tree/main/open%20source12",
					web: "open-source12.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource11.jpg",
					alt: "opensource11"
				},
				desc: {
					name: "React, Swiper",
					p: "React를 사용하여 만든 메인 슬라이더 컴포넌트입니다. 이 슬라이더는 자동으로 이미지와 텍스트를 전환하며, 사용자가 현재 슬라이드의 번호와 총 슬라이드 수를 확인할 수 있는 기능을 제공합니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source11",
					web: "open-source11.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource7.jpg",
					alt: "opensource7"
				},
				desc: {
					name: "React, Video Tag",
					p: "여러 개의 비디오 선택 버튼을 구현한 컴포넌트입니다. 사용자가 버튼을 클릭하면 비디오가 변경되며, 클릭된 버튼에 해당하는 비디오가 video 태그에서 재생됩니다. 각 버튼은 data 배열에서 제공하는 비디오 목록을 기반으로 동적으로 생성됩니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source7",
					web: "open-source7.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource6.jpg",
					alt: "opensource6"
				},
				desc: {
					name: "React, Video Tag",
					p: "GSAP를 활용하여 비디오 재생과 버튼의 시각적 효과를 제어하는 방식으로 구성된 컴포넌트입니다. 비디오와 버튼 간의 상호작용을 애니메이션으로 표현하여, 사용자가 비디오를 더 직관적으로 제어할 수 있도록 제작하였습니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source6",
					web: "open-source6.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource1.jpg",
					alt: "opensource1"
				},
				desc: {
					name: "Table, React",
					p: "React를 사용하여 동적으로 데이터를 표시하는 테이블 컴포넌트를 구현한 예제입니다. 이 컴포넌트는 data 배열을 기반으로 테이블의 각 행을 렌더링하며, 검색 기능을 위한 기본 UI도 포함되어 있습니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source1",
					web: "open-source1-five.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource4.jpg",
					alt: "opensource4"
				},
				desc: {
					name: "React, map()",
					p: "모바일 네비게이션을 구현한 컴포넌트입니다. 이 컴포넌트는 주로 화면 크기에 따라 모바일 메뉴를 열고 닫는 기능을 제어하며, 화면 크기가 600px 이하일 때 모바일 메뉴를 보여주고, 그 이상에서는 기본 메뉴로 전환하는 반응형 구조입니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source4",
					web: "open-source4.vercel.app"
				}
			},
			{
				thumb: {
					img: "opensource5.jpg",
					alt: "opensource5"
				},
				desc: {
					name: "React, Swiper",
					p: "React와 Swiper 라이브러리를 사용하여 이미지 슬라이더를 구현하였습니다. 주요 기능은 사용자가 슬라이드 번호를 클릭하면 해당 슬라이드로 이동할 수 있는 버튼 그룹을 제작하였습니다."
				},
				link: {
					git: "github.com/ckru12244/open-source/tree/main/open%20source5",
					web: "open-source5.vercel.app"
				}
			}
		]
	},
	mainContact: {
		title: "Contact ME!",
		infoText: '"I hope to have the opportunity to work together."',
		link: [
			{href: "github.com/ckru12244", text: "GIT Hub"},
			{href: "difficult-notebook-be6.notion.site/Frontend-PortFolio-1194acc700af80e29dd4e381373b8c77?pvs=4", text: "Notion"}
		]
	}
}

export default data;
