import { Component } from "solid-js"

const LogoImage : Component<{path: string}> = (props) => {
	return <img src={props.path} alt="Logo" class="h-full aspect-square object-contain" />
}

export default LogoImage