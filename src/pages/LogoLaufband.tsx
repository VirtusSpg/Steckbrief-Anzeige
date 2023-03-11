import { onMount } from "solid-js";
import LogoImage from "../components/LogoImage";

export default function LogoLaufband() {

	let logoContainer: HTMLDivElement

	onMount(() => {
		let cycle = setInterval(() => {
			// let first = logoContainer.children[0]
			// logoContainer.removeChild(first)
			// logoContainer.appendChild(first)
		}, 3000)

		return () => {
			clearInterval(cycle)
		}
	})

	return (
		<div class="bg-white bg-opacity-70 backdrop-blur-md absolute bottom-0 w-full h-32 flex gap-x-10">
			<LogoImage path="/logos/D01_Humanocare GmbH-logo.png" />
			<LogoImage path="/logos/G01_Wirtschaftskammer-Tirol-logo.png" />
			<LogoImage path="/logos/G03_Kaltschmid Christian Hotels GmbH-logo-vektorquelle.png" />
			<LogoImage path="/logos/G05_AKTIVITAL-Angelika-Kristen-Logo.png" />
			<LogoImage path="/logos/G06_Raiffeisenbank-logo.png" />
			<LogoImage path="/logos/MED_Logo_Querformat_Farbe_RGB.png" />
			<LogoImage path="/logos/ORF T.png" />
			<LogoImage path="/logos/P01_Triax-Ziviltechniker-GmbH-logo.png" />
			<LogoImage path="/logos/P02_SCHERL Versicherungsmakler-logo.png" />
			<LogoImage path="/logos/S01_Prinoth-GmbH-logo.png" />
			<LogoImage path="/logos/S02_Hotel-Schönegg-logo.png" />
			<LogoImage path="/logos/S2K_WOPROFISZUHAUSESIND.png" />
			<LogoImage path="/logos/S03_Repuls-Lichtmedizintechnik-GmbH-logo.png" />
			<LogoImage path="/logos/S04_Hotel-Residenz-Hochland-GmbH-logo.png" />
			<LogoImage path="/logos/S08_Waki Trans GmbH-logo.png" />
			<LogoImage path="/logos/S09_Tiroler Versicherung V-AG-logo-neu.png" />
			<LogoImage path="/logos/S10_Andreas-Hofer-Apotheke-logo.png" />
			<LogoImage path="/logos/Tiroler Tageszeitung Schriftzug.png" />
		</div>
	)
}