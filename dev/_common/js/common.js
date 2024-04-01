import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});



const READ_T1 = {}
const READ_T2 = {}
const READ_T3 = {}

READ_T1["nba-finals"] = 2.2
READ_T2["nba-finals"] = 1.8
READ_T3["nba-finals"] = 2

READ_T1["nba-playin"] = 1.4
READ_T2["nba-playin"] = 1.8
READ_T3["nba-playin"] = 2

READ_T1["nba-playoffs"] = 2
READ_T2["nba-playoffs"] = 1.8
READ_T3["nba-playoffs"] = 2

READ_T1["nhl"] = 2
READ_T2["nhl"] = 2.5
READ_T3["nhl"] = 2


const {w, h} = bannerSize

function logoFader(){
	const tl = new TimelineMax()
	tl.to(".logo1", {duration:.2, opacity:0}, "+=.5")
	return tl
}

function bgFadeOut(read){
	const tl = new TimelineMax()
	tl.to([ ".bg", ".t1"], {duration:.2, opacity:0}, `+=${read}`)
	return tl
}

function fader(el, time){
	const tl = new TimelineMax()
	tl.from(el, {duration:.3, opacity:0}, "+=.2")
	tl.to(el, {duration:.3, opacity:0}, `+=${time}`)
	return tl
}

function ender(){
	const tl = new TimelineMax()
	// tl.from([".t3", ".logo3"], {duration:.3, opacity:0}, "+=.2")
	tl.from([".footer"], {duration:.3, opacity:0}, "+=.5")
	tl.add(olg())
	return tl	
}


function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	if(window.universalBanner.name==="nhl"){		
		document.getElementById("legalContent").innerHTML = "Individuals must be 19 years of age or older, a resident of Ontario, and located in the province to participate in online PROLINE+ sports betting. Terms and Conditions Apply.<br/>NHL, the NHL Shield and the word mark and image of the Stanley Cup are registered trademarks and the Stanley Cup Playoffs logo is a trademark of the National Hockey League. © NHL 2024. All Rights Reserved."
	}
	return tl
}




function slider(read=2){	
	const tl = new TimelineMax()
	tl.add(logoFader())

	tl.add("t1")
	tl.from(".t1a", {duration:.26, x:"-=130", y:"+=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.26, x:"+=130", y:"-=30", opacity:0}, "t1+=.4")
	
	tl.add(bgFadeOut(READ_T1[universalBanner.name]))

	return tl
}

console.log(READ_T2[universalBanner.name]);
console.log(READ_T2);

function standard(){	
	const tl = init()	
	tl.add(slider(), "+=.5")
	
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".t2", {duration:.2, opacity:0}, `+=${READ_T2[universalBanner.name]}`)

	tl.from(".t3", {duration:.3, opacity:0}, "+=.3")
	tl.to(".t3", {duration:.2, opacity:0}, `+=${READ_T3[universalBanner.name]}`)
	
	tl.from(".t4", {duration:.3, opacity:0}, "+=.3")
	tl.from(".cta", {duration:.3, opacity:0}, "+=.3")

	
	tl.from([".footer"], {duration:.3, opacity:0}, "+=.5")
	tl.add(olg(), "-=.3")

	return tl
}

function b_970x250(){
	b_728x90()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}

function b_1000x700(){	
	standard()
}

function b_970x70(){

}

function b_320x50(){
	

	const tl = init()	
	
	tl.add("t1")
	

	tl.to(".logo1", {duration:.2, opacity:0}, "+=.5")

	tl.add("t1")
	tl.from(".t1a", {duration:.2, y:"-=50", opacity:0}, "t1")
	tl.from(".t1b", {duration:.2, y:"+=50", opacity:0}, "t1+=.5")
	
	

	tl.to([ ".bg", ".t1"], {duration:.2, opacity:0}, `+=${READ_T1[universalBanner.name]}`)


	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".t2", {duration:.2, opacity:0}, `+=${READ_T2[universalBanner.name]}`)

	tl.from(".t3", {duration:.3, opacity:0}, "+=.3")
	tl.to(".t3", {duration:.2, opacity:0}, `+=${READ_T3[universalBanner.name]}`)
	
	tl.from(".t4", {duration:.3, opacity:0}, "+=.3")
	tl.from(".cta", {duration:.3, opacity:0}, "+=.3")

	
	tl.from([".footer"], {duration:.3, opacity:0}, "+=.5")
	tl.add(olg(), "-=.3")

	return tl
}

function b_728x90(text1){
	
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin, standard,  slider, ender, logoFader, bgFadeOut }