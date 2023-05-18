import React from "react";

import Styles from "../style/BlogSingle.module.css";
const BlogSingle = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.blog_head}>
        <h3 className={Styles.blog_heading}>
          Inportance of Accessibility in Web Development
        </h3>
        <div className={Styles.blog_post}>
          <div className={Styles.blog_auth}>
            <div className={Styles.blog_img}>
              <img
                className={Styles.img_auth}
                src="data:image/jpeg;base64,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"
                alt="Whizoid Team"
              />
            </div>
            <div className={Styles.blog_name}>
              RM Dev's - Frontend Developer{" "}
            </div>
          </div>
          <div className={Styles.post_date}>13 May 2023</div>
        </div>
        <div className={Styles.main_img}>
          <img
            src="https://www.chargepoint.com/sites/default/files/eng-blog-photos/2021-11/Engineering--Accessibility-Blog-Banner.png"
            height={"300px"}
            width={"100%"}
            alt="Whizoid image"
          />
        </div>
        <div className={Styles.blog_content}>
          <p className={Styles.blog_text}>
            The world is increasingly interconnected, thanks to the internet,
            thus revolutionizing how we communicate and access information,
            enabling people to connect and share information anywhere. However,
            only some have equal access to the internet. This is where the
            importance of accessibility in web development comes in.
          </p>
          <p className={Styles.blog_text}>
            Accessibility in web development refers to making websites and web
            applications usable and accessible to everyone, including people
            with disabilities, such as visual or hearing impairments, physical
            disabilities, and cognitive or learning disabilities. It is a
            crucial aspect of web development, and there are many reasons why it
            is essential.
          </p>
          <p className={Styles.blog_text}>
            Firstly, accessibility in web development is a legal requirement in
            many countries. Failure to comply with these laws can result in
            legal action, which can be costly and damaging to the reputation of
            the website and the organization behind it. Secondly, accessibility
            ensures inclusivity. By making websites accessible to people with
            disabilities, web developers can cater to a broader audience and
            create a more inclusive web. This can lead to increased revenue and
            business growth. Thirdly, accessibility helps to enhance user
            experience. Websites designed with accessibility in mind are
            typically easier to navigate, load faster, and are more intuitive to
            use. This helps improve user satisfaction and retention, increasing
            engagement and conversions.
          </p>
          <p className={Styles.blog_text}>
            To ensure accessibility on their websites, web developers need to
            understand different types of disabilities and how they affect web
            users. They can use accessibility tools and guidelines, such as the
            Web Content Accessibility Guidelines (WCAG), to ensure that websites
            are accessible to people with disabilities. For instance, people
            with visual impairments may use screen readers to access content on
            a website, while people with hearing impairments may require closed
            captions or transcripts for videos. By accommodating these needs,
            web developers can create a more inclusive and user-friendly web for
            all.
          </p>
          <p className={Styles.blog_text}>
            In conclusion, accessibility in web development is essential to
            ensure that everyone has equal access to information on the web. By
            making websites and web applications accessible to people with
            disabilities, web developers can increase the reach of their
            websites, enhance user experience, and comply with legal
            requirements. Web developers must understand the different types of
            disabilities and use accessibility tools and guidelines to create a
            more inclusive and user-friendly web for all. Let's work towards
            making the internet accessible for everyone!
          </p>
        </div>
        <div>
          <h3 className={Styles.blog_tags}>Tags:</h3>
          <span className={Styles.blog_container}>
            <span className={Styles.tag_name}>Web Development</span>
          </span>
          <span className={Styles.blog_container}>
            <span className={Styles.tag_name}>User Interface</span>
          </span>
          <span className={Styles.blog_container}>
            <span className={Styles.tag_name}>Accessibility</span>
          </span>
          <span className={Styles.blog_container}>
            <span className={Styles.tag_name}>User Experience</span>
          </span>
        </div>
        <div className={Styles.auth_name}>
          <div className={Styles.blog_auth}>
            <div className={Styles.blog_img}>
              <img
                className={Styles.img_auth}
                src="data:image/jpeg;base64,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"
                alt="Whizoid Team"
              />
            </div>
          </div>
          <div className={Styles.author_name}>
            RM Dev's
            <p className={Styles.name}>Author</p>
            <p className={Styles.name}>Frontend Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
