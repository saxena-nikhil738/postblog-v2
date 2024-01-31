import { Box, styled, Typography, Link, CardMedia, Card } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const Heading = styled(Typography)`
  font-size: 30px;
`;

const url =
  "https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg";

const About = () => {
  return (
    <>
      {/* <Banner/> */}
      <div className="">
        {/* <CardMedia className="mt-3"
                component="img"
                image={url}
            /> */}
        <Wrapper>
          <Heading>Welcome to MyBlog</Heading>
          <Text variant="h5">
            I'm a Software Engineer based in India. I've built websites, desktop
            applications and corporate software.
            <br />
            If you are interested, you can view some of my favorite projects
            here
            <Box component="span" style={{ marginLeft: 5 }}>
              <Link
                href="https://github.com/saxena-nikhil738"
                color="inherit"
                target="_blank"
              >
                <GitHub />
              </Link>
            </Box>
          </Text>
          <Text variant="h5">
            Need something built or simply want to have chat? Reach out to me on
            <Box component="span" style={{ marginLeft: 5 }}>
              <Link
                href="hhttps://www.instagram.com/nikhil_saxena._/"
                color="inherit"
                target="_blank"
              >
                <Instagram />
              </Link>
            </Box>
            or send me an Email
            <Link
              href="mailto:nikhilsaxena738@gmail.com?Subject=This is a subject"
              target="_blank"
              color="inherit"
            >
              <Email />
            </Link>
            .
          </Text>
        </Wrapper>
      </div>
    </>
  );
};

export default About;
