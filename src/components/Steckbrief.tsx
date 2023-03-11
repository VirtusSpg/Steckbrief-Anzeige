import { Component, onMount } from "solid-js";
import SteckbriefProps from "../model/SteckbriefProps";

export const Steckbrief: Component<{ data: SteckbriefProps }> = (props) => {
	return (
		<div class="bg-white w-96 h-96">
			<h1>{props.data.FirstName} {props.data.LastName}</h1>
			<h2>{props.data.Country} {props.data.Discipline} {props.data.Gender}</h2>
			<h2>{props.data.Role}</h2>
			<h2>{props.data.SubmissionTime}</h2>
			<h2>{props.data.Birthdate}</h2>
			<h2>{props.data.Role}</h2>
			<img src={props.data.Picture} alt="" />
		</div>
	)
}