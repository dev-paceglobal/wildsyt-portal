import React from "react";
import {
  UIDescriptionTypography,
  UIHeadingTypography,
  UIMainBannerHeading,
  UIMainDescriptionTypography,
  UISubDescriptionTypography,
  UISubHeadingTypography,
} from "./ui";

const UITypogrpahy = ({ type, title, isGreen, ...props }) => {
  return (
    <>
      {type === "mainHeading" ? (
        <UIMainBannerHeading isGreen={isGreen} {...props}>
          {title}
        </UIMainBannerHeading>
      ) : type === "heading" ? (
        <UIHeadingTypography
          isGreen={isGreen}
          fontSize={{ xs: "30px", md: "40px" }}
          {...props}
        >
          {title}
        </UIHeadingTypography>
      ) : type === "subheading" ? (
        <UISubHeadingTypography {...props}>{title}</UISubHeadingTypography>
      ) : type === "mainDescription" ? (
        <UIMainDescriptionTypography {...props}>
          {title}
        </UIMainDescriptionTypography>
      ) : type === "subpara" ? (
        <UISubDescriptionTypography {...props}>
          {title}
        </UISubDescriptionTypography>
      ) : (
        <UIDescriptionTypography {...props}>{title}</UIDescriptionTypography>
      )}
    </>
  );
};

export default UITypogrpahy;
