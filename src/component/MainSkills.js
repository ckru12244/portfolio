import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Scrollbar } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import data from '../data';

function MainSkills () {
	const {swiper}=data.mainSkills;
	return (
		<div className="main-skills">
			<div className="skills_title">				
				<div className="main-tit serif">Skills</div>
			</div>
			<div className="skills">
				<div className="wrapper">
					<Swiper
						className="skillsSwiper"
						slidesPerView={1.5}
						spaceBetween={30}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						speed={1000}
						scrollbar={{
							el: '.swiper-scrollbar',
							draggable: true,
							hide: false,
						}}
						breakpoints={{
							920: {
								slidesPerView: 2.5,
							},
							1240: {
								slidesPerView: 3,
							},
						}}
						modules={[Autoplay, Scrollbar]}
					>
						{swiper.map((d, i) =>						
							<SwiperSlide key={i}>								
								<SwiperList p={d}/>
							</SwiperSlide>
						)}
						<div className="swiper-scrollbar"></div>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

function SwiperList ({p}){
	const {num, name, icons, desc}=p;

	return(
		<>
			<div className="title">
				<p className="num">{num}</p>
				<p className="name">{name}</p>
			</div>
			<div className="icons">
				<ul>
					{icons.map((e, j) =>
						<li key={j}><img src={`images/${e.img}`} alt={e.alt} /></li>
					)}
				</ul>
			</div>						
			<div className="desc">
				<ul>
					{desc.map((e, j) =>
						<li key={j}>{e}</li>
					)}
				</ul>
			</div>
		</>	
	);
}

export default MainSkills;