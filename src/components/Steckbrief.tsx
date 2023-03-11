import { Component, onMount } from "solid-js";
import SteckbriefProps from "../model/SteckbriefProps";

export const Steckbrief: Component<{ data: SteckbriefProps }> = (props) => {
	return (
		<div class="bg-white w-96 h-96">
			<h1>{props.data.FirstName}</h1>
		</div>
	)
}