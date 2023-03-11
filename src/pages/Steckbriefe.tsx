import { createResource, createSignal, onMount } from "solid-js"
import { Steckbrief } from "../components/Steckbrief"
import SteckbriefProps from "../model/SteckbriefProps"
import LogoLaufband from "./LogoLaufband"

const loadSteckbriefe = async () =>
	(await fetch("/data/accreditation.json", {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})).json()

export const Steckbriefe = () => {

	let video: HTMLVideoElement
	onMount(() => {
		video.playbackRate = 0.8
		setInterval(() => {
			setIndex(wrap(3))
		}, 10000)
	})

	const wrap = (offset: number) => {
		return (index()+offset) % (steckbriefe().length);
	}

	const [steckbriefe] = createResource<SteckbriefProps[]>(loadSteckbriefe)
	const [index, setIndex] = createSignal(0)

	return (
		<section class="w-screen h-screen relative">
			<video ref={video} autoplay muted loop src="/videos/Background.mp4" class="absolute w-full h-full object-cover -z-10 opacity-60" />
			
			<div class="absolute w-full h-full grid grid-cols-[1fr,1fr,1fr] place-items-center">
				{/* <span>{steckbriefe.loading && "Loading..."}</span> */}
				{/* Hier werden jeweils drei Steckbriefe angezeigt */}
				<Steckbrief data={!steckbriefe.loading && steckbriefe()[wrap(0)]} />
				<Steckbrief data={!steckbriefe.loading && steckbriefe()[wrap(1)]} />
				<Steckbrief data={!steckbriefe.loading && steckbriefe()[wrap(2)]} />
			</div>

			<img src="/svgs/TopBar.svg" alt="TopBar" class="absolute w-full h-full object-cover" />

			<div class="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl absolute right-12 top-12 p-5">
				<img src="/logos/Virtus-Seefeld.svg" alt="Virtus Seefeld" class="w-28 h-28" />
			</div>

			{/* Not yet working */}
			<LogoLaufband />
		</section>
	)
}