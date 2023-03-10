import { onMount } from "solid-js"
import LogoImage from "../components/LogoImage"
import LogoLaufband from "./LogoLaufband"

export default function Steckbriefe() {

	let video: HTMLVideoElement

	onMount(() => {
		video.playbackRate = 0.8
	})

	return (
		<section class="w-screen h-screen relative">
			<video ref={video} /*autoplay*/ muted loop src="/videos/Background.mp4" class="absolute w-full h-full object-cover -z-10 opacity-60" />

			<img src="/svgs/TopBar.svg" alt="TopBar" class="absolute w-full h-full object-cover" />

			<div class="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl absolute right-12 top-12 p-5">
				<img src="/logos/Virtus-Seefeld.svg" alt="Virtus Seefeld" class="w-28 h-28" />
			</div>

			{/* <LogoLaufband/> */}
		</section>
	)
}