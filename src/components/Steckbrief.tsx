import { Component, onMount } from "solid-js";
import SteckbriefProps from "../model/SteckbriefProps";

export const Steckbrief: Component<{ data: SteckbriefProps }> = (props) => {
	return (
		<div class="ml-36 mb-60 bg-white w-96 h-96 m--230 rounded-lg p-4 shadow-2xl">
			<h1 class="text-3xl font-bold mb-2">{props.data.FirstName} {props.data.LastName}</h1>
			<h2 class="text-2xl font-medium mb-2">{props.data.Country}, {props.data.Discipline} {props.data.Gender}</h2>
			<h2 class="text-2xl font-medium mb-2">{props.data.Role}</h2>
			<h2 class="text-lg font-medium mb-2">{props.data.SubmissionTime}</h2>
			<h2 class="text-lg font-medium mb-2">🎂 {props.data.Birthdate}</h2>
			<img src={props.data.Picture} alt="Teilnehmer" class="rounded-lg h-160 shadow-lg" />
		</div>
	)
}