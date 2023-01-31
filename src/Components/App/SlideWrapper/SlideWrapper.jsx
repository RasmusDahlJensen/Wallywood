import React from "react";
import { SlideWrapperStyle } from "./SlideWrapperStyle";

export const SlideWrapper = () => {
	return (
		<SlideWrapperStyle>
			<img
				src={require("../../../Assets/images/curtain.jpg")}
				alt="Cinema curtain"
			/>
		</SlideWrapperStyle>
	);
};
