import { Box, styled, Typography, Link, CardMedia } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

// const Text = styled()`
//   color: #878787;
// `;

const Heading = styled(Typography)`
  font-size: 30px;
`;

const url =
  "https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg";

const About = () => {
  return (
    <>
      <div
        style={{ marginLeft: "25px", marginRight: "25px", marginTop: "60px" }}
      >
        <h2>About Us</h2>
        <p style={{ fontSize: "20px" }}>
          Welcome to Blog App, where the love for dogs knows no bounds. Our
          community is built on shared values, a passion for dogs, and the joy
          they bring into our lives. Here's a deeper look into who we are and
          what sets us apart.
        </p>

        <h3>Our Values</h3>
        <p style={{ fontSize: "20px" }}>
          At the core of Blog App are our values. We believe in:
        </p>
        <ul style={{ fontSize: "20px" }}>
          <li>
            <strong>Compassion:</strong> Every dog deserves love, care, and a
            happy home.
          </li>
          <li>
            <strong>Educating:</strong> Providing accurate and helpful
            information to empower dog owners.
          </li>
          <li>
            <strong>Community:</strong> Fostering connections and building a
            supportive space for dog lovers.
          </li>
          <li>
            <strong>Celebration:</strong> Recognizing and celebrating the
            uniqueness of every dog and their story.
          </li>
        </ul>

        {/* <h3>Our Achievements</h3>
        <p>
          Over the years, our community has achieved some remarkable milestones:
        </p> */}
        {/* <ul>
          <li>
            [Year]: Launched [Special Initiative] to [Achievement Details].
          </li>
          <li>[Year]: Reached [Number] subscribers on our newsletter.</li>
          <li>
            [Year]: Hosted a successful [Event Name] with [Number] participants.
          </li>
        </ul> */}

        {/* <h3>Community Contributions</h3>
        <p>
          Our community is the heart of Blog App, and we're proud of the
          contributions made by our members:
        </p>
        <ul>
          <li>[Username]: Shared an inspiring story about their rescue dog.</li>
          <li>
            [Username]: Provided valuable training tips for new puppy owners.
          </li>
          <li>
            [Username]: Organized a local meetup for [Dog Breed] enthusiasts.
          </li>
        </ul> */}

        <p style={{ fontSize: "20px" }}>
          Blog App is not just a website; it's a family of dog lovers coming
          together to make a positive impact on the lives of dogs and their
          owners. Thank you for being a part of our journey!
        </p>
      </div>
    </>
  );
};

export default About;
