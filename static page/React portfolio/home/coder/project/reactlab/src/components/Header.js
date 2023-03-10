import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  let previousPosition = useRef(0);
  let [direction, setDirection] = useState("")
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      const currentPosition = window.pageYOffset;
      setDirection(currentPosition > previousPosition.current ? "down" : "up");
      previousPosition.current = currentPosition > 0 ? currentPosition : 0;
    };
    window.addEventListener("scroll", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition)
    }
  }, []);

  return (
    <Box 
      position={direction === "down" ? "absolute" : "fixed"}
      top={0}
      left={0}
      right={0}
      translateY={direction === "down" ? -200 : 0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8}>
           {socials.map(socialLink => 
            <a href={socialLink.url} key={socialLink.url}>
            <FontAwesomeIcon icon={socialLink.icon} size="2x" />
            </a>
           )}
          </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
            <a href="/#projects" onClick={handleClick("projects")} key="projects">Projects</a>
            <a href="/#contact-me" onClick={handleClick("contactme")} key="contact">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
