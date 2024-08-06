import Link from "next/link";

// Save as page.jsx in app/about
const About = () => {
  // State/vars

  //function

  //return
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        This is the about page. Nothing to see, go <Link href="/">home</Link>.
      </p>
    </div>
  );
};

export default About;
// Check http://localhost:3000/about to see it in action
