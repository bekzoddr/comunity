import { React, memo } from "react";
import avatar from "../../assets/images/avatar.svg";

function Careers__text() {
  return (
    <div className="CareersText">
      <div className="ava">
        <img className="avatar" src={avatar} alt="" />
        <h4>Andrew Jonson</h4>
        <h4>Posted on 27th January 2021</h4>
      </div>
      <br />
      <h1>Breaking the code How did we build our Figma plugin </h1>
      <br />
      <p>
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged and categorized with a voice and
        tone variation ranging from plain, casual to playful. The intention to
        build this Figma plugin originated from our Medium blog post, ‘Designing
        voice and tone for error messages. <br />
        <br />
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged. <br /> <br />
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged and categorized with a voice and
        tone variation ranging from plain, casual to playful. The intention to
        build this Figma plugin originated from our Medium blog post, ‘Designing
        voice.
      </p>
      <br />
      <br />
      <h1>
        Transform Your Idea Into Reality with Ether a Leading Digital Agency
      </h1>
      <br />
      <p>
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged. <br /> <br />
        Writing UX copies can be a little frustrating and confusing, and
        sometimes we are unsure about how to get the right word. To crack the
        code for the UX copies, we at Zeta Design wanted to build a Figma plugin
        for the larger design community. The plugin is called the Ghost UXWriter
        and has a set of UX copies cataloged and categorized with a voice and
        tone variation ranging from plain, casual to playful. The intention to
        build this Figma plugin originated from our Medium blog post, ‘Designing
        voice.
      </p>
    </div>
  );
}

export default memo(Careers__text);
