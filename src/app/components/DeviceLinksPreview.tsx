// "use client";
import "./deviceLinksPreview.css";
import { LinkObject } from "../links/page";
import rightArrow from "./../images/icon-arrow-right.svg";
import github from "./../images/icon-github.svg";
import frontendMentor from "./../images/icon-frontend-mentor.svg";
import twitter from "./../images/icon-twitter.svg";
import linkedIn from "./../images/icon-linkedin.svg";
import youTube from "./../images/icon-youtube.svg";
import faceBook from "./../images/icon-facebook.svg";
import twitch from "./../images/icon-twitch.svg";
import devTo from "./../images/icon-devto.svg";
import codeWars from "./../images/icon-codewars.svg";
import codepen from "./../images/icon-codepen.svg";
import freeCodeCamp from "./../images/icon-freecodecamp.svg";
import gitLab from "./../images/icon-gitlab.svg";
import hashNode from "./../images/icon-hashnode.svg";
import stackOverFlow from "./../images/icon-stack-overflow.svg";
import personalSite from "./../images/icon-link copy.svg";
import Image from "next/image";

type DevicePreviewProps = {
  linkArray: LinkObject[];
  name: string;
  email: string;
  image: string;
};

const DeviceLinksPreview = (
  props: React.PropsWithChildren<DevicePreviewProps>
) => {
  const { linkArray, name, email, image } = props;

  const getImageSource = (platformOption: string) => {
    switch (platformOption) {
      case "GitHub":
        return github;
      case "Frontend Mentor":
        return frontendMentor;
      case "Twitter":
        return twitter;
      case "LinkedIn":
        return linkedIn;
      case "YouTube":
        return youTube;
      case "Facebook":
        return faceBook;
      case "Twitch":
        return twitch;
      case "Dev.to":
        return devTo;
      case "Codewars":
        return codeWars;
      case "Codepen":
        return codepen;
      case "freeCodeCamp":
        return freeCodeCamp;
      case "GitLab":
        return gitLab;
      case "Hashnode":
        return hashNode;
      case "Stack Overflow":
        return stackOverFlow;
      case "Personal Site":
        return personalSite;
      default:
        return ""; // Return an empty string or a default icon if needed
    }
  };

  const getBgColorClass = (platformOption: string) => {
    switch (platformOption) {
      case "GitHub":
        return "github";
      case "Frontend Mentor":
        return "frontendMentor";
      case "Twitter":
        return "twitter";
      case "LinkedIn":
        return "linkedIn";
      case "YouTube":
        return "youTube";
      case "Facebook":
        return "facebook";
      case "Twitch":
        return "twitch";
      case "Dev.to":
        return "devTo";
      case "Codewars":
        return "codeWars";
      case "Codepen":
        return "codepen";
      case "freeCodeCamp":
        return "freeCodeCamp";
      case "GitLab":
        return "gitLab";
      case "Hashnode":
        return "hashNode";
      case "Stack Overflow":
        return "stackOverFlow";
      case "Personal Site":
        return "personalSite";
      default:
        return ""; // Return a default class if needed
    }
  };

  return (
    <div className="previewContainer">
      <div className="deviceOutline">
        <div className="outerOutline">
          <div className="innerOutline">
            <div className="outlineContent">
              <div className="profileContent">
                {image === "" ? (
                  <div className="profilePhotoSkeleton skeleton"></div>
                ) : (
                  <div className="profilePhotoContainer">
                    <Image
                      src={image}
                      alt="userProfilePhoto"
                      width={97}
                      height={97}
                      className="profilePhoto"
                    />
                  </div>
                )}
                <div className="nameAndDescription">
                  {name === "" ? (
                    <div className="nameSkeleton skeleton"></div>
                  ) : (
                    <div className="nameContainer">{name}</div>
                  )}
                  {email === "" ? (
                    <div className="emailSkeleton skeleton"></div>
                  ) : (
                    <a href={`mailto:${email}`}>
                      <div className="emailContainer">{email}</div>
                    </a>
                  )}
                </div>
              </div>
              <div className="linksListBox">
                {props.linkArray?.length === 0 ? (
                  <>
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="linkSkeleton skeleton"></div>
                    ))}
                  </>
                ) : (
                  linkArray?.map((link, index) =>
                    link.platformOption && link.linkText ? (
                      <a
                        key={index}
                        href={link.linkText}
                        target="_blank"
                        className={`linkBox`}
                      >
                        <div
                          className={`linkBoxAlternative ${getBgColorClass(
                            link.platformOption
                          )} whiteText`}
                        >
                          <div className="imgTextBox">
                            <Image
                              src={getImageSource(link.platformOption)}
                              alt={`${link.platformOption} logo`}
                            />
                            <p className="linkText">{link.platformOption}</p>
                          </div>
                          <div className="rightArrowContainer">
                            <Image src={rightArrow} alt="rightArrow" />
                          </div>
                        </div>
                      </a>
                    ) : null
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceLinksPreview;
