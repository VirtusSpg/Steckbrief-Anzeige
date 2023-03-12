import { Component } from "solid-js";
import SteckbriefProps from "../model/SteckbriefProps";

const countryFlags = {
	'Czech Republic': '🇨🇿',
	'Finland': '🇫🇮',
	'Spain': '🇪🇸',
	'Estonia': '🇪🇪',
	'United States': '🇺🇸',
	'Sweden': '🇸🇪',
	'Poland': '🇵🇱',
	'Italy': '🇮🇹',
	'France': '🇫🇷',
	'Japan': '🇯🇵',
	'Austria': '🇦🇹',
	'Türkiye': '🇹🇷',
	'Australia': '🇦🇺',
}

const genderFlags = {
	'Male': '♂️',
	'Female': '♀️',
}

const formatBirthdate = (date: string) => {
	const dateObj = date.split('/');
	return `${dateObj[0]}.${dateObj[1]}.${dateObj[2]}`
}

export const Steckbrief: Component<{ data: SteckbriefProps }> = (props) => {
	return (
		<div class="steckbrief grid gap-y-10 w-[500px] bg-white animate-fade p-10 shadow-2xl rounded-2xl">
			<div class="flex flex-col">
				<h1>
					<span class="text-5xl">{countryFlags[props.data.Country]} </span>
					<span class="align-text-top">{props.data.FirstName ?? "..."} {props.data.LastName ?? "..."}</span>
				</h1>

				<hr class="my-3" />

				<h2 class="mb-2 flex gap-x-2">
					<span>{genderFlags[props.data.Gender] ?? "..."}</span>
					<span class="italic">{props.data.Role ?? "..."}</span>
					<span class="flex-1 text-right">{props.data.Discipline ?? "..."}</span>
				</h2>
				<h2 class="text-xl font-medium mb-2">🎂 {formatBirthdate(props.data.Birthdate ?? "") ?? "..."}</h2>
			</div>

			<div class="grid relative h-[500px] steckbrief-art">
				<div class="bg-lightblue opacity-50 rotate-6 scale-105" />
				<div class="bg-virtusred opacity-50 -rotate-12 scale-95" />
				<img src={props.data.Picture} alt="Teilnehmer" class="absolute steckbrief-bild w-full h-full object-cover" />
			</div>
		</div>
	)
}