import React from "react";
import Link from "next/link";
import Styles from "../style/BlogCard.module.css";

const BlogCard = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.blogcard}>
        <div className={Styles.blog_post}>
          <h3 className={Styles.blog_date}>
            13.<span>05</span>
          </h3>
        </div>

        <div className={Styles.blogimg}>
          <img
            className={Styles.img_size}
            src="https://www.chargepoint.com/sites/default/files/eng-blog-photos/2021-11/Engineering--Accessibility-Blog-Banner.png"
            width={"450px"}
            height={"200px"}
            alt="blog image"
          />
          <div className={Styles.blog_auth}>By: RM Dev's</div>
        </div>
        <div className={Styles.blog_info}>
          <Link href="../blogpage" className={Styles.blog_link}>
            <h3 className={Styles.blog_heading}>
              Inportance of Accessibility in Web Development
            </h3>
          </Link>
          <p className={Styles.blog_text}>
            The world is increasingly interconnected, thanks to the internet,
            thus revolutionizing how we communicate and access information,
            enabling people to connect and share information anywhere.
          </p>
          <Link href="../blogpage" className={Styles.read_moer}>
            Read More
          </Link>
        </div>
      </div>
      <div className={Styles.blogcard}>
        <div className={Styles.blog_post}>
          <h3 className={Styles.blog_date}>13.05</h3>
        </div>
        <div className={Styles.blogimg}>
          <img
            className={Styles.img_size}
            src="https://picsum.photos/id/366/4000/3000"
            width={"450px"}
            height={"200px"}
            alt=""
          />
          <div className={Styles.blog_auth}>By: RM Dev's</div>
        </div>

        <div className={Styles.blog_info}>
          <Link href="../blogpage" className={Styles.blog_link}>
            <h3 className={Styles.blog_heading}>
              {" "}
              Inportance of Accessibility in Web Development
            </h3>
          </Link>
          <p className={Styles.blog_text}>
            The world is increasingly interconnected, thanks to the internet,
            thus revolutionizing how we communicate and access information,
            enabling people to connect and share information anywhere.
          </p>
          <Link href="../blogpage/" className={Styles.read_moer}>
            Read More{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
